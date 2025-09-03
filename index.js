const { parse } = require('csv');
const { readFileSync, writeFileSync, rmSync, mkdirSync } = require('node:fs');

const SHORT = true;

rmSync('./language', { recursive: true, force: true });
mkdirSync('./language', { recursive: true });
const file = readFileSync('./language.csv', 'utf8');
parse(file, { columns: true, bom: true }, (err, data) => {
  const blocks = {};
  data.sort((a, b) => a.key.localeCompare(b.key));
  data.forEach(({ state, key, english, translation }) => {
    if (state === 'OBSOLETE') return;
    const [name] = key.split('_');
    if (english.endsWith('.') && !translation.endsWith('.')) translation += '.';
    const value = [key, english, translation].join(' | ');
    if (!blocks[name]) blocks[name] = [];
    blocks[name].push(value);
  });

  for (const [name, lines] of Object.entries(blocks)) {
    const path =
      lines.length >= 20 && SHORT
        ? './language/' + name + '.csv'
        : './language/_short.csv';
    writeFileSync(path, lines.join('\n') + '\n', {
      flag: 'a',
      encoding: 'utf8',
    });
  }
});
