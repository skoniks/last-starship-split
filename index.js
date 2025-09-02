const { parse } = require('csv');
const { readFileSync, writeFileSync, rmSync, mkdirSync } = require('node:fs');

rmSync('./language', { recursive: true, force: true });
mkdirSync('./language', { recursive: true });
const file = readFileSync('./language.csv', 'utf8');
parse(file, { columns: true, bom: true }, (err, data) => {
  data.sort((a, b) => a.key.localeCompare(b.key));
  data.forEach(({ state, key, english, translation }) => {
    if (state === 'OBSOLETE') return;
    const [name] = key.split('_');
    const path = './language/' + name + '.csv';
    const value = [key, english, translation].join(' | ') + '\n';
    writeFileSync(path, value, { flag: 'a' });
    console.log(state, path, key);
  });
});
