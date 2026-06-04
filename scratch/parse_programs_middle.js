const fs = require('fs');
const cheerio = require('cheerio');

const htmlContent = fs.readFileSync('C:/Users/Brain/Downloads/school8-main – копія/programs-middle.html', 'utf8');
const $ = cheerio.load(htmlContent);

const title = "Навчальні програми (5-9 класи)";
const permalink = "/programs-middle/";
const layout = "layout.njk";

const tabs = [
  { id: 'grade56', name: '5-6 класи\n                        (НУШ)' },
  { id: 'grade78', name: '7-8 класи (НУШ)' },
  { id: 'grade9', name: '9 клас' }
];

const blockTabs = [];

tabs.forEach(tab => {
  const programs = [];
  $(`#${tab.id} .program-card`).each((i, el) => {
    const card = $(el);
    const subject = card.find('.program-header span').text().trim();
    const icon = card.find('.program-header i').attr('class') || 'fas fa-book';
    const titleText = card.find('.program-title').text().trim();
    const authors = card.find('.program-meta').text().replace('Автори:', '').replace(/\s+/g, ' ').trim();
    const order = card.find('.program-order').text().trim();
    
    programs.push({
      subject,
      icon,
      title: titleText,
      authors,
      order: order || ''
    });
  });
  
  blockTabs.push({
    tab_name: tab.name.replace(/\s+/g, ' ').trim(),
    programs
  });
});

const blocks = [
  {
    type: "programs_block",
    title: "ПЕРЕЛІК НАВЧАЛЬНИХ ПРОГРАМ (ІІ СТУПІНЬ)",
    tabs: blockTabs
  }
];

function formatYamlValue(val, indent) {
  if (val === null || val === undefined) return '""';
  if (typeof val === 'boolean') return val ? 'true' : 'false';
  if (typeof val === 'number') return val.toString();
  if (typeof val === 'string') {
    if (val.includes('\n')) {
      const lines = val.split('\n');
      return `|\n${' '.repeat(indent)}${lines.join('\n' + ' '.repeat(indent))}`;
    }
    return `"${val.replace(/"/g, '\\"')}"`;
  }
  if (Array.isArray(val) || typeof val === 'object') {
    return `\n${jsonToYaml(val, indent)}`;
  }
  return `"${val}"`;
}

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

const yamlContent = jsonToYaml(blocks, 2);

const mdContent = `---
title: "${title}"
layout: "${layout}"
permalink: "${permalink}"
blocks:
${yamlContent}---
`;

fs.writeFileSync('src/pages/programs-middle.md', mdContent);
console.log('Successfully wrote programs-middle.md!');
