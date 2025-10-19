const { parse, stringify } = require('csv');
const { readFileSync, readdirSync, writeFileSync } = require('node:fs');

const filter = ['OBSOLETE', 'PREVIOUS'];
const file = readFileSync('./language.csv', 'utf8');
parse(file, { columns: true, bom: true }, (err, data) => {
  for (const subfile of readdirSync('./refactor')) {
    const content = readFileSync('./refactor/' + subfile, 'utf8');
    content.split('\n').forEach((line) => {
      if (!line.trim()) return;
      const [newKey, newTranslation] = line.split(' | ');
      const index = data.findIndex(({ key, state }) => {
        if (filter.includes(state)) return false;
        return key === newKey;
      });
      if (index === -1) throw new Error('Key not found: ' + newKey);
      data[index].translation = newTranslation;
      console.log(newKey, newTranslation, index);
    });
  }
  const columns = Object.keys(data[0]);
  stringify(data, { columns, header: true, bom: true }, (err, output) =>
    writeFileSync('./language.csv', output, 'utf8'),
  );
});
