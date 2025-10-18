const { parse, stringify } = require('csv');
const { readFileSync, readdirSync, writeFileSync } = require('node:fs');

const file = readFileSync('./language.csv', 'utf8');
parse(file, { columns: true, bom: true }, (err, data) => {
  for (const subfile of readdirSync('./language')) {
    const content = readFileSync('./language/' + subfile, 'utf8');
    content.split('\n').forEach((line) => {
      if (!line.trim()) return;
      const [newkey, , newTranslation] = line.split(' | ');
      const index = data.findIndex(({ key, state }) => {
        if (state == 'OBSOLETE') return false;
        if (state === 'PREVIOUS') return false;
        return key === newkey;
      });
      if (index === -1) throw new Error('Key not found: ' + newkey);
      data[index].translation = newTranslation;
      console.log(newkey, newTranslation, index);
    });
  }
  const columns = Object.keys(data[0]);
  stringify(data, { columns, header: true, bom: true }, (err, output) => {
    writeFileSync('./language.csv', output, 'utf8');
  });
});
