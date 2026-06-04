const fs = require('fs');
const cheerio = require('cheerio');
const path = require('path');
const yaml = require('js-yaml'); // Decap CMS uses js-yaml underneath usually, we'll try to just format manually or require 'js-yaml' if installed

const filesToFix = [
  'medical-service.md',
  'psychologist.md',
  'social-pedagogue.md',
  'library.md',
  'management.md',
  'staff.md',
  'documents.md',
  'evaluation-criteria.md',
  'evaluation-criteria-primary.md',
  'psychology-support.md',
  '404.md'
];

function extractBlocks(html, filename) {
  const $ = cheerio.load(html);
  let blocks = [];
  
  if (filename === 'medical-service.md') {
    // 1. Staff Profile Block
    blocks.push({
      type: 'staff_profile_block',
      title: $('.page-title').text().trim(),
      photo: $('.med-photo').attr('src') || '',
      name: $('.med-info h2').text().trim(),
      role: $('.med-role').text().trim(),
      content: $('.med-info > p').text().trim() + '\n\n**' + $('.task-box strong').text().trim() + '**\n' + $('.task-box').text().replace($('.task-box strong').text().trim(), '').trim()
    });

    // 2. Info Cards (med-grid)
    const cards = [];
    $('.med-card').each((i, el) => {
      const card = $(el);
      const bullets = [];
      card.find('.check-list li').each((j, li) => {
        bullets.push($(li).text().trim());
      });
      cards.push({
        title: card.find('.med-card-title').text().replace(card.find('.icon-circle').text(), '').trim(),
        title_icon: card.find('.icon-circle').text().trim(),
        card_color_class: card.hasClass('med-card-blue') ? 'card-blue' : 'card-green',
        bullets: bullets
      });
    });
    blocks.push({
      type: 'card_list',
      card_style: 'info',
      cards: cards
    });
  } 
  else if (filename === 'psychologist.md') {
    // 1. Staff Profile
    blocks.push({
      type: 'staff_profile_block',
      title: $('.page-title').text().trim(),
      photo: $('.psy-photo').attr('src') || '',
      name: $('.psy-info h2').text().trim(),
      role: $('.psy-role').text().trim(),
      content: '**' + $('.psy-theme strong').text().trim() + '**\n' + $('.psy-theme').text().replace($('.psy-theme strong').text().trim(), '').trim(),
      contact_box_title: "Основною метою діяльності психологічної служби є:",
      contact_box_bullets: $('.psy-info .custom-list li').map((i, el) => $(el).text().trim()).get()
    });

    // 2. Info Cards (work-directions)
    const cards = [];
    $('.direction-card').each((i, el) => {
      const card = $(el);
      let desc = '';
      const bullets = [];
      
      // Some cards have strong tags as subheaders, we should convert them to desc or list items
      if (card.find('div > div').length > 0) {
        // The split card (Робота з учнями та педагогами)
        let md = '';
        card.find('div > div').each((j, divEl) => {
          const div = $(divEl);
          md += '**' + div.find('strong').text().trim() + '**\n\n';
          div.find('li').each((k, li) => {
            md += '- ' + $(li).text().trim() + '\n';
          });
          md += '\n';
        });
        desc = md;
      } else {
        card.find('ul li').each((j, li) => {
          bullets.push($(li).text().trim());
        });
      }

      cards.push({
        title: card.find('.direction-title').text().trim(),
        card_color_class: 'card-blue',
        desc: desc,
        bullets: bullets
      });
    });
    blocks.push({
      type: 'card_list',
      card_style: 'info',
      cards: cards
    });
  }
  else if (filename === 'social-pedagogue.md') {
    // 1. Staff Profile
    blocks.push({
      type: 'staff_profile_block',
      title: $('.page-title').text().trim(),
      photo: $('.sp-photo').attr('src') || '',
      name: $('.sp-info h2').text().trim(),
      role: $('.sp-role').text().trim(),
      content: '**' + $('.credo-box strong').text().trim() + '**\n' + $('.credo-box').text().replace($('.credo-box strong').text().trim(), '').trim() + '\n\n**' + $('.theme-box strong').text().trim() + '**\n' + $('.theme-box').text().replace($('.theme-box strong').text().trim(), '').trim(),
      contact_box_title: "Основні напрямки діяльності:",
      contact_box_bullets: $('.sp-tag-container .sp-tag').map((i, el) => $(el).text().trim()).get()
    });

    // 2. Info Cards (activity-grid)
    const cards = [];
    $('.activity-card').each((i, el) => {
      const card = $(el);
      let desc = '';
      if (card.find('strong').length > 0) {
        let md = '';
        const htmlParts = card.html().split('<strong>');
        htmlParts.forEach(part => {
          if (!part.includes('</strong>')) return;
          const label = part.split('</strong>')[0].trim();
          const listHtml = '<strong>' + part;
          const temp$ = cheerio.load(listHtml);
          md += '**' + label + '**\n\n';
          temp$('li').each((k, li) => {
             md += '- ' + temp$(li).text().trim() + '\n';
          });
          md += '\n';
        });
        desc = md;
      }
      
      const bullets = [];
      if (!desc) {
         card.find('ul li').each((j, li) => {
           let liText = $(li).text().trim();
           bullets.push(liText);
         });
      }

      cards.push({
        title: card.find('h3').text().trim(),
        card_color_class: 'card-red',
        desc: desc,
        bullets: bullets
      });
    });
    blocks.push({
      type: 'card_list',
      card_style: 'info',
      cards: cards
    });

    // 3. Memo Section -> mapped to rules_list_block
    const rules = [];
    $('.memo-item').each((i, el) => {
       rules.push({ text: $(el).text().replace('👉', '').trim() });
    });
    if ($('.memo-quote').length > 0) {
       rules.push({ text: $('.memo-quote').text().trim() });
    }
    if ($('.memo-badge').length > 0) {
       rules.push({ highlight_title: "Головне:", text: $('.memo-badge').text().trim() });
    }

    blocks.push({
      type: 'rules_list_block',
      title: $('.memo-title').text().trim(),
      style: "Правила (заголовок зліва)",
      list_type: "маркований",
      rules: rules
    });
  }
  else if (filename === 'management.md' || filename === 'staff.md') {
    // Both are card_list with style teacher
    const cards = [];
    $('.card-grid .card').each((i, el) => {
      const card = $(el);
      const name = card.find('.card-title').html().split('<br>').map(s => s.trim()).join('\n');
      const badges = [];
      card.find('.card-badge').each((j, b) => {
        badges.push($(b).text().trim());
      });
      let experience = '';
      const match = card.find('.card-desc').text().match(/Стаж роботи:\s*(.+)/i);
      if (match) experience = match[1].trim();
      
      cards.push({
        name: name,
        subject: card.find('.card-subtitle').text().trim(),
        photo: card.find('.card-photo').attr('src'),
        category: badges[0] || '',
        title_badge: badges[1] || '',
        experience: experience
      });
    });
    
    blocks.push({
      type: 'card_list',
      card_style: 'teacher',
      title: $('.page-title').text().trim(),
      cards: cards
    });
  }
  else if (filename === '404.md') {
    blocks.push({
      type: 'text_block',
      content: "## Помилка 404\n\nСторінку не знайдено. [Повернутись на головну](/)"
    });
  }
  else {
    // Generic fallback for others for now: clean up the section wrapper so it's not nested
    let content = $('.container').html() || html;
    blocks.push({
      type: 'text_block',
      content: content.trim()
    });
  }
  
  return blocks;
}

// Convert JSON blocks to YAML (custom simple stringifier to avoid external dep)
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
    if (val.includes('\n') || val.includes(': ') || val.includes('"')) {
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

async function run() {
  for (const file of filesToFix) {
    const fullPath = path.join('src/pages', file);
    if (!fs.existsSync(fullPath)) continue;
    
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Check if it has raw HTML in blocks
    if (content.includes('type: "text_block"') && content.includes('<section class="section">')) {
      console.log(`Fixing ${file}...`);
      
      // Extract the raw HTML
      const htmlMatch = content.match(/content: \|\s*<section class="section">([\s\S]*?)editable:/);
      let rawHtml = '';
      if (htmlMatch) {
         rawHtml = '<section class="section">' + htmlMatch[1];
      } else {
         const htmlMatch2 = content.match(/content: \|\s*([\s\S]*?)editable:/);
         if (htmlMatch2) rawHtml = htmlMatch2[1];
      }
      
      if (rawHtml) {
        const newBlocks = extractBlocks(rawHtml, file);
        const yamlBlocks = jsonToYaml(newBlocks, 2);
        
        // Rewrite the file
        const frontmatterMatch = content.match(/---[\s\S]*?blocks:/);
        if (frontmatterMatch) {
          const newContent = frontmatterMatch[0] + '\n' + yamlBlocks + 'editable: true\n---\n';
          fs.writeFileSync(fullPath, newContent);
          console.log(`Successfully fixed ${file}`);
        }
      }
    } else {
      console.log(`Skipping ${file} (already fixed or no matching pattern)`);
    }
  }
}

run();
