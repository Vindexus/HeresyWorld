var path = require('path');
var appDir = path.dirname(require.main.filename);
var gameDir = path.dirname(appDir);

var rpgparser = require('rpgparser')({
  gameDataDir: gameDir + '/game_data',
  pagesDir: gameDir + '/pages',
  templatesDir: gameDir + '/templates',
  simples: ['tags', 'external_skills', 'items', 'misc'],
  folders: ['classes', 'moves', 'equipment'],
  classToXml: {
    'NoIndent': true,
    'no-indent': 'NoIndent',
    'MoveName': true,
    'move-name': 'MoveName',
    'move-options': 'MoveOptions',
    'MoveOptions': true,
    'requires': true,
    'move-description': 'MoveDescription',
    'move': true,
    'ListOptions': true
  },
  saveGameDataTo: gameDir + '/gamedata.json'
}, function () {
  rpgparser.parsePagesTo({
    type: 'web',
    extension: 'html',
    to: gameDir + '/parsed/web'
  });

  rpgparser.parsePagesTo({
    type: 'indesign',
    extension: 'xml',
    to: gameDir + '/parsed/indesign'
  });
});

module.exports = {};
