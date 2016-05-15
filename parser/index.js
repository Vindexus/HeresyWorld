var path = require('path');
var appDir = path.dirname(require.main.filename);
var gameDir = path.dirname(appDir);

var rpgparser = require('rpgparser')({
  gameDataDir: gameDir + '/game_data',
  pagesDir: gameDir + '/pages',
  //templatesDir: gameDir + '/templates',
  outputInDesignDir: gameDir + '/parsed/indesign',
  outputWebDir: gameDir + '/parsed/web', 
  simples: ['tags', 'external_skills'],
  folders: ['classes', 'moves', 'items'],
  classesToPstyle: {
    'noindent': 'NoIndent'
  }
});

module.exports = {};
