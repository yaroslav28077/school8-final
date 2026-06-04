const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const originalDir = 'C:/Users/Brain/Downloads/school8-main – копія';
const compiledDir = './_site';

if (!fs.existsSync(originalDir)) {
  console.error(`Original directory not found: ${originalDir}`);
  process.exit(1);
}

const files = fs.readdirSync(originalDir)
  .filter(f => f.endsWith('.html') && f !== 'appeal-success.html');

console.log(`Verifying compiled HTML for ${files.length} pages...`);

const report = [];

files.forEach(file => {
  const slug = file.replace('.html', '');
  // Compiled file might be at /slug/index.html or /slug.html
  let compiledFile = path.join(compiledDir, slug, 'index.html');
  if (!fs.existsSync(compiledFile)) {
    compiledFile = path.join(compiledDir, `${slug}.html`);
  }
  
  const originalFile = path.join(originalDir, file);
  
  if (!fs.existsSync(compiledFile)) {
    report.push({ file: slug, status: 'MISSING', details: 'Compiled file does not exist' });
    return;
  }

  const originalHtml = fs.readFileSync(originalFile, 'utf8');
  const compiledHtml = fs.readFileSync(compiledFile, 'utf8');

  const $orig = cheerio.load(originalHtml);
  const $comp = cheerio.load(compiledHtml);

  // Extract <main> contents
  const origText = $orig('main').text().replace(/\s+/g, ' ').trim();
  const compText = $comp('main').text().replace(/\s+/g, ' ').trim();

  // Basic word presence check
  const missingWords = [];
  const importantKeywords = ['Положення', 'Статут', 'Державний', 'розклад', 'вакансії', 'наказ', 'оцінювання', 'Савченко'];
  
  importantKeywords.forEach(word => {
    if (originalHtml.includes(word) && !compiledHtml.includes(word)) {
      missingWords.push(word);
    }
  });

  const origImgCount = $orig('main img').length;
  const compImgCount = $comp('main img').length;
  const origTableCount = $orig('main table').length;
  const compTableCount = $comp('main table').length;
  const origLinkCount = $orig('main a').length;
  const compLinkCount = $comp('main a').length;

  let structureIssues = [];
  
  if (origImgCount !== compImgCount) {
    structureIssues.push(`Images count mismatch (Original: ${origImgCount}, Compiled: ${compImgCount})`);
  }

  // programs-primary has tables in original but cards in compiled, which is expected
  if (slug !== 'programs-primary' && origTableCount !== compTableCount) {
    structureIssues.push(`Tables count mismatch (Original: ${origTableCount}, Compiled: ${compTableCount})`);
  }

  if (origLinkCount !== compLinkCount) {
    structureIssues.push(`Links count mismatch (Original: ${origLinkCount}, Compiled: ${compLinkCount})`);
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

console.log('\n=== COMPILED HTML PARITY REPORT ===');
console.table(report);
