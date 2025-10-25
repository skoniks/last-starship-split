const { parse, stringify } = require('csv/sync');
const { readFileSync, writeFileSync } = require('node:fs');

async function bootstrap() {
  const filter = ['OBSOLETE', 'PREVIOUS'];
  const file1 = readFileSync('./language.csv', 'utf8');
  const file2 = readFileSync('./original/original.csv', 'utf8');
  const custom = parse(file1, { columns: true, bom: true });
  const original = parse(file2, { columns: true, bom: true });
  //
  const data = custom.filter((i) => {
    if (filter.includes(i.state)) return false;
    const j = original.find((j) => j.key === i.key);
    return j && j.translation !== i.translation;
  });
  //
  const columns = Object.keys(data[0]);
  const output = stringify(data, { columns, header: true, bom: true });
  writeFileSync('./original/language.csv', output, 'utf8');
}

bootstrap().catch(console.error);
