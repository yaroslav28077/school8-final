const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, '../src/pages');
const allFiles = fs.readdirSync(pagesDir).filter(f => f.endsWith('.md'));

allFiles.forEach(file => {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Normalize line endings to LF for easier parsing
  content = content.replace(/\r\n/g, '\n');
  const lines = content.split('\n');
  
  if (lines[0].trim() !== '---') {
    console.log(`Skipping ${file}: no frontmatter start`);
    return;
  }
  
  // Find frontmatter end
  let endIdx = -1;
  for (let i = 1; i < lines.length; i++) {
    if (lines[i].trim() === '---') {
      endIdx = i;
      break;
    }
  }
  
  if (endIdx === -1) {
    console.log(`Skipping ${file}: no frontmatter end`);
    return;
  }
  
  // Extract frontmatter lines
  const frontmatterLines = lines.slice(1, endIdx);
  const hasEditable = frontmatterLines.some(l => l.trim().startsWith('editable:'));
  
  if (!hasEditable) {
    const isSystem = (file === '404.md' || file === 'appeal-success.md');
    const editableValue = isSystem ? 'false' : 'true';
    
    // Insert editable: true/false
    lines.splice(endIdx, 0, `editable: ${editableValue}`);
    
    // Write back as CRLF or LF (LF is fine)
    fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
    console.log(`Added editable: ${editableValue} to ${file}`);
  } else {
    // If it has it, ensure system pages are false
    if (file === '404.md' || file === 'appeal-success.md') {
      const updatedLines = lines.map(line => {
        if (line.trim().startsWith('editable:')) {
          return 'editable: false';
        }
        return line;
      });
      fs.writeFileSync(filePath, updatedLines.join('\n'), 'utf8');
      console.log(`Ensured system page ${file} has editable: false`);
    } else {
      console.log(`Page ${file} already has editable flag: ${frontmatterLines.find(l => l.trim().startsWith('editable:'))}`);
    }
  }
});

console.log('Editable flag processing complete!');
