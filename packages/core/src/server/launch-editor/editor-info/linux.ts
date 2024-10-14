import { EDITOR_PROCESS_MAP } from "../type";

// 有顺序优先级
export const COMMON_EDITORS_LINUX = {
  cursor: 'cursor',
  code: 'code',
  vscodium: 'vscodium',
  codium: 'codium',
  webstorm: 'webstorm',
  'webstorm.sh': 'webstorm',
  hbuilderx: 'hbuilderx',
  'hbuilderx.sh': 'hbuilderx',
  atom: 'atom',
  Brackets: 'brackets',
  'code-insiders': 'code-insiders',
  emacs: 'emacs',
  gvim: 'gvim',
  idea: 'idea',
  'idea.sh': 'idea',
  phpstorm: 'phpstorm',
  'phpstorm.sh': 'phpstorm',
  pycharm: 'pycharm',
  'pycharm.sh': 'pycharm',
  rubymine: 'rubymine',
  'rubymine.sh': 'rubymine',
  sublime_text: 'subl',
  vim: 'vim',
  goland: 'goland',
  'goland.sh': 'goland',
  rider: 'rider',
  'rider.sh': 'rider',
};

export const EDITOR_PROCESS_MAP_LINUX: EDITOR_PROCESS_MAP = {
  code: ['code'],
  'code-insiders': ['code-insiders'],
  webstorm: ['webstorm.sh'],
  cursor: ['cursor'],
  atom: ['atom'],
  hbuilder: ['hbuilderx'],
  phpstorm: ['phpstorm.sh'],
  pycharm: ['pycharm.sh'],
  idea: ['idea.sh'],
  codium: ['vscodium'],
  goland: ['goland'],
  brackets: ['Brackets'],
  rider: ['rider'],
  rubymine: ['rubymine.sh'],
}