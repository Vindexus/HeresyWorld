var path = require('path');
var appDir = path.dirname(require.main.filename);
var gameDir = path.dirname(appDir);

var rpgparser = require('rpgparser')({
  gameDataDir: gameDir + '/game_data',
  pagesDir: appDir + '/pages',
  templatesDir: appDir + '/templates',
  outputInDesignDir: gameDir + '/parsed/indesign',
  outputWebDir: gameDir + '/parsed/web', 
  simples: ['tags', 'external_skills', 'items'],
  folders: ['classes', 'moves', 'items'],
  classesToPstyle: {
    'noindent': 'NoIndent',
    'no-indent': 'NoIndent'
  }
});

console.log(rpgparser.gameData);

module.exports = {};
