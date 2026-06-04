const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, '../src/pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.md'));

console.log('Auditing markdown files for raw HTML tags in their body...');

files.forEach(file => {
  if (file === '404.md' || file === 'appeal-success.md') {
    // Hidden system pages, skip
    return;
  }
  const filePath = path.join(pagesDir, file);
  const content = fs.readFileSync(filePath, 'utf8');

  // Split frontmatter and body
  const parts = content.split('---');
  if (parts.length < 3) {
    console.log(`[WARNING] ${file} has invalid frontmatter structure`);
    return;
  }

  // The body is everything after the second '---'
  const body = parts.slice(2).join('---').trim();

  // Look for HTML tags like <div, <table, <p, <span, <section, <img, <a with attributes, etc.
  // We can use a regex to match common HTML tags.
  // Let's match any tag except maybe self-contained simple ones like <br> or <u> or <strong> if they don't have classes.
  // But wait, even <div, <section, <style, <script, <img, <iframe, <table, <tr, <td, <th, etc.
  const htmlTagRegex = /<\/?(div|section|table|tr|td|th|span|img|iframe|style|script|p|ul|ol|li|a)\b[^>]*>/gi;
  const matches = body.match(htmlTagRegex);

  if (matches && matches.length > 0) {
    console.log(`- ${file}: Found ${matches.length} HTML tags (e.g. ${matches.slice(0, 3).join(', ')})`);
  }
});
