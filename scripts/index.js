const { parse } = require('csv/sync');
const { readFileSync, rmSync, mkdirSync, writeFileSync } = require('fs');

const filter = ['OBSOLETE', 'PREVIOUS'];
const groups = {
  objects: ['object', 'equipment', 'recipe'],
  story: [
    'wolf',
    'calltoarms',
    'rise',
    'bravenewsector',
    'thefinalstand',
    'opentextcrawl',
    'opentextcrawlindustry',
    'opentextcrawlstory',
  ],
  ui: [
    'hud',
    'settings',
    'mainmenu',
    'newmainmenu',
    'keybinding',
    'toolsmenu',
    'filedialog',
  ],
};

// story/ — ,
// ui/ — , , , , , ,
// objects/ — , , , boost
// systems/ — logistics, order*, trade, tactical, powergrid, engines, factory, techtree
// missions/ — mission, missions, objective, scenario

async function bootstrap() {
  const blocks = {};
  const file = readFileSync('./language.csv', 'utf8');
  const data = parse(file, { columns: true, bom: true });
  data.sort((a, b) => a.key.localeCompare(b.key));
  data.filter(({ state }) => filter.includes(state));
  data.forEach(({ key, english, translation }) => {
    const [name] = key.split('_');
    if (!blocks[name]) blocks[name] = [];
    const value = { key, english, translation };
    blocks[name].push(JSON.stringify(value));
  });

  const dir = './language';
  rmSync(dir, { recursive: true, force: true });
  for (let [name, lines] of Object.entries(blocks)) {
    const group = Object.entries(groups) //
      .find(([, values]) => values.includes(name));
    const path = dir + (group ? '/' + group[0] : '');
    const file = path + '/' + name + '.jsonl';
    const data = lines.join('\n') + '\n';
    mkdirSync(path, { recursive: true });
    writeFileSync(file, data, 'utf8');
  }
}

bootstrap().catch(console.error);
