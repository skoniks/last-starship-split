const { parse } = require('csv');
const { readFileSync } = require('node:fs');

const filter = ['OBSOLETE', 'PREVIOUS'];
const file = readFileSync('./language.csv', 'utf8');
parse(file, { columns: true, bom: true }, (err, data) => {
  data
    .filter(({ state }) => !filter.includes(state))
    .forEach(({ key, english, translation }) => {
      const ens = english.match(/  /g) || [];
      const rus = translation.match(/  /g) || [];
      if (ens.length != rus.length) {
        console.log(key, ens.length, rus.length);
      }
    });
});
