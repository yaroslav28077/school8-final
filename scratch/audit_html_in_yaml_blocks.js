const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, '../src/pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.md'));

console.log('Auditing markdown files for raw HTML tags inside frontmatter blocks...');

files.forEach(file => {
  if (file === '404.md' || file === 'appeal-success.md') {
    // Hidden system pages, skip
    return;
  }
  const filePath = path.join(pagesDir, file);
  const content = fs.readFileSync(filePath, 'utf8');

  // Split frontmatter
  const parts = content.split('---');
  if (parts.length < 3) {
    return;
  }

  const frontmatter = parts[1];

  const htmlTagRegex = /<\/?(div|section|table|tr|td|th|span|img|iframe|style|script|p|ul|ol|li|a)\b[^>]*>/gi;
  const matches = frontmatter.match(htmlTagRegex);

  if (matches && matches.length > 0) {
    // Check if it's just minor inline formatting (like <br> or <u> or <strong>)
    // Filter matches to see if they contain structural HTML tags like div, section, span, style, table, etc.
    const structuralTags = matches.filter(tag => {
      const tagName = tag.match(/<\/?([a-z0-9]+)/i);
      if (!tagName) return false;
      const name = tagName[1].toLowerCase();
      // Allow minor tags if needed, but flag structural ones
      return ['div', 'section', 'table', 'tr', 'td', 'th', 'span', 'img', 'iframe', 'style', 'script', 'ul', 'ol', 'li', 'p', 'a'].includes(name);
    });

    if (structuralTags.length > 0) {
      console.log(`- ${file}: Found ${structuralTags.length} structural HTML tags (e.g. ${structuralTags.slice(0, 3).join(', ')})`);
    }
  }
});
