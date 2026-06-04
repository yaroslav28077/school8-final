const fs = require('fs');
const cheerio = require('cheerio');
const path = require('path');

const filesToFix = [
  'documents.md',
  'evaluation-criteria.md',
  'evaluation-criteria-primary.md',
  'psychology-support.md',
  'library.md'
];

function jsonToYaml(obj, indent = 0) {
  let result = '';
  const spaces = ' '.repeat(indent);

  if (Array.isArray(obj)) {
    obj.forEach(item => {
      if (typeof item === 'object' && item !== null) {
        const itemKeys = Object.keys(item);
        if (itemKeys.length > 0) {
          result += `${spaces}- ${itemKeys[0]}: ${formatYamlValue(item[itemKeys[0]], indent + 4)}\n`;
          for (let i = 1; i < itemKeys.length; i++) {
            const key = itemKeys[i];
            result += `${spaces}  ${key}: ${formatYamlValue(item[key], indent + 4)}\n`;
          }
        }
      } else {
        result += `${spaces}- ${formatYamlValue(item, indent + 2)}\n`;
      }
    });
  } else if (typeof obj === 'object' && obj !== null) {
    Object.keys(obj).forEach(key => {
      result += `${spaces}${key}: ${formatYamlValue(obj[key], indent + 2)}\n`;
    });
  }
  return result;
}

function formatYamlValue(val, indent) {
  if (val === null || val === undefined) return '""';
  if (typeof val === 'boolean') return val ? 'true' : 'false';
  if (typeof val === 'number') return val.toString();
  if (typeof val === 'string') {
    if (val.includes('\n') || val.includes(': ') || val.includes('"') || val.includes("'")) {
      const lines = val.split('\n');
      return `|\n${' '.repeat(indent)}${lines.join('\n' + ' '.repeat(indent))}`;
    }
    return `"${val}"`;
  }
  if (Array.isArray(val) || typeof val === 'object') {
    return `\n${jsonToYaml(val, indent)}`;
  }
  return `"${val}"`;
}

function fixFile(file) {
  const fullPath = path.join('src/pages', file);
  if (!fs.existsSync(fullPath)) return;
  
  let content = fs.readFileSync(fullPath, 'utf8');
  const htmlMatch = content.match(/content: \|\s*([\s\S]*?)editable:/);
  if (!htmlMatch) return;
  const html = htmlMatch[1];
  const $ = cheerio.load(html);
  
  let blocks = [];
  
  if (file === 'documents.md') {
    const docs = [];
    $('.doc-link').each((i, el) => {
      docs.push({
        name: $(el).text().replace($(el).find('.doc-icon').text(), '').trim(),
        url: $(el).attr('href'),
        icon: $(el).find('.doc-icon').text().trim()
      });
    });
    blocks.push({
      type: 'docs_block',
      docs_style: 'simple',
      title: $('.page-title').text().trim(),
      documents: docs
    });
  } 
  else if (file.includes('evaluation-criteria')) {
    const docs = [];
    $('.doc-link').each((i, el) => {
      docs.push({
        name: $(el).text().replace($(el).find('.doc-icon').text(), '').trim(),
        url: $(el).attr('href'),
        icon: $(el).find('.doc-icon').text().trim()
      });
    });
    
    // There might be a promo card at the top
    const promoCard = $('.info-block-styled');
    if (promoCard.length) {
       blocks.push({
         type: 'promo_card_block',
         title: $('.page-title').text().trim(),
         style: 'Синій (критерії)',
         icon: promoCard.find('.info-icon').text().trim(),
         subtitle: promoCard.find('h3').text().trim(),
         text: promoCard.find('p').text().trim(),
         btn_text: promoCard.find('.btn-modern').text().trim(),
         btn_url: promoCard.find('.btn-modern').attr('href')
       });
    }

    if (docs.length > 0) {
      blocks.push({
        type: 'docs_block',
        docs_style: 'simple',
        title: "Критерії оцінювання за класами/предметами",
        documents: docs
      });
    }
  }
  else if (file === 'library.md') {
    blocks.push({
      type: 'staff_profile_block',
      title: $('.page-title').text().trim(),
      photo: $('.lib-photo').attr('src') || '',
      name: $('.lib-info h2').text().trim(),
      role: $('.lib-role').text().trim(),
      content: $('.lib-info p').first().text().trim(),
      contact_box_title: "Контакти",
      contact_box_bullets: ["Бібліотекар гімназії завжди радий допомогти знайти цікаву книгу!"]
    });
    
    const docs = [];
    $('.lib-doc-link').each((i, el) => {
      docs.push({
        name: $(el).text().trim(),
        url: $(el).attr('href'),
        icon: 'fas fa-book'
      });
    });
    
    if (docs.length) {
      blocks.push({
        type: 'docs_block',
        docs_style: 'simple',
        title: "Матеріали та списки літератури",
        documents: docs
      });
    }
  }
  else if (file === 'psychology-support.md') {
     const docs = [];
     $('.psy-support-grid a').each((i, el) => {
        docs.push({
           name: $(el).find('.doc-link-col span').text().trim() || $(el).text().trim(),
           url: $(el).attr('href'),
           icon: '📄'
        });
     });
     
     if (docs.length > 0) {
        blocks.push({
          type: 'docs_block',
          docs_style: 'simple',
          title: $('.page-title').text().trim() || "Психологічна підтримка",
          documents: docs
        });
     }
  }
  else {
    return; // Do nothing
  }
  
  if (blocks.length > 0) {
    const yamlBlocks = jsonToYaml(blocks, 2);
    const frontmatterMatch = content.match(/---[\s\S]*?blocks:/);
    if (frontmatterMatch) {
      const newContent = frontmatterMatch[0] + '\n' + yamlBlocks + 'editable: true\n---\n';
      fs.writeFileSync(fullPath, newContent);
      console.log(`Successfully fixed ${file}`);
    }
  }
}

for (const file of filesToFix) {
  fixFile(file);
}
