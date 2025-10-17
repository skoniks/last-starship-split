const { parse } = require('csv');
const { readFileSync, writeFileSync, rmSync, mkdirSync } = require('node:fs');

const SHORT = true;
const TRANSLATE = true;

const file = readFileSync('./language.csv', 'utf8');
parse(file, { columns: true, bom: true }, (err, data) => {
  const blocks = {};
  data.sort((a, b) => a.key.localeCompare(b.key));
  data.forEach(({ state, key, english, translation }) => {
    if (state === 'OBSOLETE') return;
    const [name] = key.split('_');
    if (TRANSLATE) translation = '';
    // if (english.endsWith('.') && !translation.endsWith('.')) translation += '.';
    const value = [key, english, translation].join(' | ');
    if (!blocks[name]) blocks[name] = [];
    blocks[name].push(value);
  });

  const dir = './' + (TRANSLATE ? 'translate' : 'language');
  rmSync(dir, { recursive: true, force: true });
  mkdirSync(dir, { recursive: true });
  for (let [name, lines] of Object.entries(blocks)) {
    if (lines.length < 20) name = '_short';
    const path = dir + '/' + name + '.csv';
    writeFileSync(path, lines.join('\n') + '\n', {
      flag: 'a',
      encoding: 'utf8',
    });
  }
});
