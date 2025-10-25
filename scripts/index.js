const { parse } = require('csv/sync');
const { readFileSync, writeFileSync, rmSync, mkdirSync } = require('node:fs');
const { ask, isYes } = require('./utils');

async function bootstrap() {
  const filter = ['OBSOLETE', 'PREVIOUS'];
  const shorten = await ask('Short mode? (y/N) ').then(isYes);
  const translate = await ask('Translate mode? (y/N) ').then(isYes);
  const file = readFileSync('./language.csv', 'utf8');
  const data = parse(file, { columns: true, bom: true });
  //
  const blocks = {};
  data.sort((a, b) => a.key.localeCompare(b.key));
  data.forEach(({ state, key, english, translation }) => {
    if (filter.includes(state)) return;
    const [name] = key.split('_');
    if (translate) translation = '';
    const value = [key, english, translation].join(' | ');
    if (!blocks[name]) blocks[name] = [];
    blocks[name].push(value);
  });
  //
  const dir = './' + (translate ? 'translate' : 'language');
  rmSync(dir, { recursive: true, force: true });
  mkdirSync(dir, { recursive: true });
  for (let [name, lines] of Object.entries(blocks)) {
    if (shorten && lines.length < 20) name = '_short';
    const path = dir + '/' + name + '.csv';
    writeFileSync(path, lines.join('\n') + '\n', {
      encoding: 'utf8',
      flag: 'a',
    });
  }
}

bootstrap().catch(console.error);
