const { parse, stringify } = require('csv/sync');
const { readFileSync, writeFileSync } = require('node:fs');
const { readFile, writeFile } = require('node:fs/promises');

async function bootstrap() {
  const data = await readFile('./original/original.csv', 'utf8');
  await writeFile('./language.csv', data, 'utf8');
}

bootstrap().catch(console.error);
