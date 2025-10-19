const { parse } = require('csv');
const { readFileSync, writeFileSync, rmSync, mkdirSync } = require('node:fs');

const CHUNK = 200;
const filter = ['OBSOLETE', 'PREVIOUS'];
const file = readFileSync('./language.csv', 'utf8');
parse(file, { columns: true, bom: true }, (err, data) => {
  data = data
    .sort((a, b) => a.key.localeCompare(b.key))
    .filter(({ state }) => !filter.includes(state))
    .map(({ key, translation }) => {
      return [key, translation].join(' | ');
    });

  const dir = './refactor';
  rmSync(dir, { recursive: true, force: true });
  mkdirSync(dir, { recursive: true });
  let index = 1;
  while (data.length) {
    const path = dir + '/' + index++ + '.csv';
    const chunk = data.splice(0, CHUNK).join('\n') + '\n';
    writeFileSync(path, chunk, { encoding: 'utf8' });
  }
});
