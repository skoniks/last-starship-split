const { parse } = require('csv/sync');
const { readFileSync, rmSync, mkdirSync, writeFileSync } = require('fs');

const filter = ['OBSOLETE', 'PREVIOUS'];
const groups = {
  story: [
    'wolf',
    'calltoarms',
    'rise',
    'bravenewsector',
    'thefinalstand',
    'blackhole',
    'dsi',
    'tiddlets',
    'tiddlets3',
    'opentextcrawl',
    'opentextcrawlindustry',
    'opentextcrawlstory',
    'industryend',
    'survivalend',
    'stargatesectorwarning',
    'episode',
  ],

  missions: [
    'mission',
    'missions',
    'objective',
    'evacuationobjective',
    'nomadobjective',
    'scienceobjective',
  ],

  tutorial: ['tutorial', 'newplayerhelp'],

  ui: [
    'hud',
    'hudmode',
    'scenario',
    'settings',
    'mainmenu',
    'newmainmenu',
    'keybinding',
    'filedialog',
    'dialog',
    'analyticsconsentdialog',
    'language',
    'save',
    'speed',
    'tooltip',
    'format',
    'ellipsis',
    'pressanykey',
    'buynow',
    'feedback',
    'legal',
    'steamstore',
    'wishlist',
    'tagline',
    'credits',
    'creditstitle',
  ],

  ship: [
    'action',
    'order',
    'orders',
    'engine',
    'engines',
    'entity',
    'welfare',
    'designation',
    'fighter',
    'battle',
    'tactical',
    'shipai',
    'alert',
    'warning',
    'brokenconstraint',
  ],

  construction: [
    'object',
    'equipment',
    'shipeditor',
    'shiplibrary',
    'origin',
    'factory',
    'loader',
    'storagecrate',
    'storagetank',
    'recipe',
    'smelt',
    'tiddlet',
  ],

  economy: [
    'trade',
    'factions',
    'logistics',
    'logisticswindow',
    'advancedlogisticswindow',
    'award',
    'rating',
    'ratings',
  ],

  research: ['techtree', 'boost', 'special', 'researchcredit'],

  navigation: [
    'galaxymap',
    'survey',
    'stargate',
    'ftl',
    'andromeda',
    'intergalactic',
    'interstellar',
    'sector',
    'stations',
    'communicator',
    'phase',
  ],

  power: ['power', 'powergrid'],

  developer: [
    'debugbuildpanel',
    'dialogcomponent',
    'dialogeditor',
    'dialogposition',
    'profiler',
    'samplebank',
    'samplebankeditor',
    'soundchannelviewer',
    'sounddspeditor',
    'soundeditor',
    'soundinstanceeditor',
    'soundparametereditor',
    'toolsmenu',
    'translationeditor',
    'steamworkshopmenu',
  ],
};

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
