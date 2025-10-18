const { parse } = require('csv');
const { readFileSync, writeFileSync, rmSync, mkdirSync } = require('node:fs');

const filter = ['OBSOLETE', 'PREVIOUS'];
const file = readFileSync('./language.csv', 'utf8');
parse(file, { columns: true, bom: true }, (err, data) => {
  data = data
    .sort((a, b) => a.key.localeCompare(b.key))
    .filter(({ state }) => !filter.includes(state))
    .map(({ state, key, english, translation }) => {
      return [key, translation].join(' | ');
    });
  writeFileSync('./refactor.csv', data.join('\n') + '\n', {
    encoding: 'utf8',
  });
});
