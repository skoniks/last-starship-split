const { parse, stringify } = require('csv/sync');
const { readFileSync, readdirSync, writeFileSync } = require('node:fs');

async function bootstrap() {
  const filter = ['OBSOLETE', 'PREVIOUS'];
  const file = readFileSync('./language.csv', 'utf8');
  const data = parse(file, { columns: true, bom: true });
  //
  for (const subfile of readdirSync('./language')) {
    const content = readFileSync('./language/' + subfile, 'utf8');
    content.split('\n').forEach((line) => {
      if (!line.trim()) return;
      const [newKey, , newTranslation] = line.split(' | ');
      const index = data.findIndex(({ key, state }) => {
        if (filter.includes(state)) return false;
        return key === newKey;
      });
      if (index === -1) throw new Error('Key not found: ' + newKey);
      data[index].translation = newTranslation;
      console.log(newKey, newTranslation, index);
    });
  }
  //
  const columns = Object.keys(data[0]);
  const output = stringify(data, { columns, header: true, bom: true });
  writeFileSync('./language.csv', output, 'utf8');
}

bootstrap().catch(console.error);
