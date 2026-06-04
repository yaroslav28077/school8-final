const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const originalDir = 'C:/Users/Brain/Downloads/school8-main – копія';
const migratedDir = './src/pages';

if (!fs.existsSync(originalDir)) {
  console.error(`Original directory not found: ${originalDir}`);
  process.exit(1);
}

const files = fs.readdirSync(originalDir)
  .filter(f => f.endsWith('.html') && f !== 'appeal-success.html');

console.log(`Comparing ${files.length} pages...`);

const report = [];

files.forEach(file => {
  const slug = file.replace('.html', '');
  const mdFile = path.join(migratedDir, `${slug}.md`);
  const htmlFile = path.join(originalDir, file);
  
  if (!fs.existsSync(mdFile)) {
    report.push({ file: slug, status: 'MISSING', details: 'Markdown file does not exist' });
    return;
  }

  const htmlContent = fs.readFileSync(htmlFile, 'utf8');
  const mdContent = fs.readFileSync(mdFile, 'utf8');

  const $html = cheerio.load(htmlContent);
  const mainHtmlText = $html('main').text().replace(/\s+/g, ' ').trim();

  // Basic check: see if major text or elements are missing
  const missingWords = [];
  const importantKeywords = ['Положення', 'Статут', 'Державний', 'розклад', 'вакансії', 'наказ'];
  
  importantKeywords.forEach(word => {
    if (htmlContent.includes(word) && !mdContent.includes(word)) {
      missingWords.push(word);
    }
  });

  // Count elements to check structure
  const htmlImgCount = $html('main img').length;
  const mdImgCount = (mdContent.match(/image:|photo:|cover:/g) || []).length;
  const htmlTableCount = $html('main table').length;

  let structureIssues = [];
  
  if (htmlImgCount > 0 && mdImgCount === 0 && !mdContent.includes('<img')) {
    structureIssues.push(`Images missing (HTML has ${htmlImgCount}, MD has 0)`);
  }

  if (htmlTableCount > 0 && !mdContent.includes('table_block') && !mdContent.includes('styled-table') && !mdContent.includes('<table')) {
    structureIssues.push(`Tables missing (HTML has ${htmlTableCount})`);
  }

  // Check specific pages
  if (slug === 'programs-primary') {
    const ths = $html('main th').length;
    if (ths > 0 && !mdContent.includes('Типова освітня програма')) {
      structureIssues.push('Primary programs content missing');
    }
  }

  if (slug === 'programs-middle') {
    const htmlCards = $html('.program-card').length;
    const yamlCards = (mdContent.match(/- subject:/g) || []).length;
    if (htmlCards !== yamlCards) {
      structureIssues.push(`Middle school program cards mismatch (HTML: ${htmlCards}, YAML: ${yamlCards})`);
    }
  }

  if (slug === 'parents-info') {
    const htmlCards = $html('.doc-link-card').length;
    const yamlCards = (mdContent.match(/- name:/g) || []).length;
    if (htmlCards !== yamlCards) {
      structureIssues.push(`Parents info document cards mismatch (HTML: ${htmlCards}, YAML: ${yamlCards})`);
    }
  }

  if (slug === 'samoanaliz') {
    const htmlTabs = $html('.year-tab').length;
    const yamlTabs = (mdContent.match(/data-year=/g) || []).length;
    if (htmlTabs !== yamlTabs) {
      structureIssues.push(`Samoanaliz tabs mismatch (HTML: ${htmlTabs}, YAML: ${yamlTabs})`);
    }
  }

  if (structureIssues.length > 0 || missingWords.length > 0) {
    report.push({
      file: slug,
      status: 'DISCREPANCY',
      details: structureIssues.join('; '),
      missingKeywords: missingWords.join(', ')
    });
  } else {
    report.push({ file: slug, status: 'OK' });
  }
});

console.log('\n=== COMPARISON REPORT ===');
console.table(report);
