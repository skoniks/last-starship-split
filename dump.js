const { parse, stringify } = require('csv');
const { readFileSync, writeFileSync } = require('node:fs');

const file = readFileSync('./language.csv', 'utf8');
parse(file, { columns: true, bom: true }, (err, custom) => {
  const file = readFileSync('./original/original.csv', 'utf8');
  parse(file, { columns: true, bom: true }, (err, original) => {
    const data = custom.filter((i) => {
      const j = original.find((j) => j.key === i.key);
      if (!j) throw new Error(`Missing key: ${i.key}`);
      if (j.translation !== i.translation) return true;
      return false;
    });
    const columns = Object.keys(data[0]);
    stringify(data, { columns, header: true, bom: true }, (err, output) => {
      writeFileSync('./original/language.csv', output, 'utf8');
    });
  });
});
