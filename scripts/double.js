const { parse } = require('csv/sync');
const { readFileSync } = require('node:fs');

async function bootstrap() {
  const filter = ['OBSOLETE', 'PREVIOUS'];
  const file = readFileSync('./language.csv', 'utf8');
  const data = parse(file, { columns: true, bom: true });
  data
    .filter(({ state }) => !filter.includes(state))
    .forEach(({ key, english, translation }) => {
      const ens = english.match(/  /g) || [];
      const rus = translation.match(/  /g) || [];
      if (ens.length != rus.length) {
        console.log(key, ens.length, rus.length);
      }
    });
}

bootstrap().catch(console.error);
