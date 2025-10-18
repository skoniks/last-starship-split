const { readFileSync, readdirSync } = require('node:fs');

for (const subfile of readdirSync('./language')) {
  const content = readFileSync('./language/' + subfile, 'utf8');
  content.split('\n').forEach((line) => {
    if (!line.trim()) return;
    const [key, en, ru] = line.split(' | ');
    const ens = en.match(/  /g) || [];
    const rus = ru.match(/  /g) || [];
    if (ens.length != rus.length) {
      console.log(key);
    }
  });
}
