const { parse, stringify } = require('csv');
const { readFileSync, writeFileSync } = require('node:fs');

const file = readFileSync('./language.csv', 'utf8');
parse(file, { columns: true, bom: true }, (err, custom) => {
  const file = readFileSync('./original/original.csv', 'utf8');
  parse(file, { columns: true, bom: true }, (err, original) => {
    const data = custom.filter((i) => {
      const j = original.find((j) => j.key === i.key);
      return j && j.translation !== i.translation;
    });
    const columns = Object.keys(data[0]);
    stringify(data, { columns, header: true, bom: true }, (err, output) => {
      writeFileSync('./original/language.csv', output, 'utf8');
    });
  });
});
