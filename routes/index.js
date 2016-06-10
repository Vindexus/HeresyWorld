var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var gameData = JSON.parse(fs.readFileSync(path.join(__dirname + '/../gamedata.json')));

var menuItems = {
  introduction: {
    name: 'Introduction',
    href: '/'
  },
  'character-creation': {
    name: 'Character Creation'
  },
  classes: {
    href: '/classes',
    subMenu: {
      class_assassin: {
        name: 'Assassin',
        href: '/classes/assassin'
      },
      class_investigator: {
        name: 'Investigator',
        href: '/classes/investigator'
      },
      class_warrior: {
        name: 'Warrior',
        href: '/classes/warrior'
      }
    }
  },
  equipment: {},
  'the-gm': {
    name: 'The GM'
  }
}

function getMenuMapList (menuMap, activeItems) {
  var list = [];
  for(var i in menuMap) {
    menuMap[i].href = menuMap[i].href || '/' + i;
    menuMap[i].name = menuMap[i].name || i.toUpperCase().split("")[0] + i.substr(1).toLowerCase();
    menuMap[i].active = activeItems.indexOf(i) >= 0

    if(typeof menuMap[i].subMenu == 'object') {
      menuMap[i].subMenuList = getMenuMapList(menuMap[i].subMenu, activeItems);
    }

    list.push(menuMap[i]);
  }

  return list;
}

function renderParsedPage(res, params) {
  var html = fs.readFileSync(path.join(__dirname + '/../parsed/web/' + params.file + '.html'))
  if(!params.hasOwnProperty('activeMenuItem')) {
    params.activeMenuItem = []
  }
  else {
    params.activeMenuItem = typeof params.activeMenuItem == 'object' ? params.activeMenuItem : [params.activeMenuItem]
  }
  params.html = html;
  params.gameData = gameData;
  params.menuItems = menuItems;
  params.menuItemsList = getMenuMapList(menuItems, params.activeMenuItem);
  res.render('index', params);
}

router.get('/classes/:class', function(req, res, next) {
  var cl = gameData.classes[req.params.class];
  var title = cl.name;

  var subMenu = [];
  var moveLists = ['starting_moves', 'advanced_moves'];

  for(var i = 0; i < moveLists.length; i++) {
    for(var k in cl[moveLists[i]]) {
      var moveKey = cl[moveLists[i]][k]
      subMenu.push({
        href: '/classes/' + cl.key + '#' + moveKey,
        name: gameData.moves[moveKey].name
      })
    }
  }

  menuItems.classes.subMenu['class_' + cl.key].subMenu = subMenu;
  
  renderParsedPage(res, {title: title, activeMenuItem: ['class_' + req.params.class], subMenu: subMenu, file: cl.key});
});

router.get('/moves/:type', function(req, res, next) {
  var list = gameData.misc[req.params.type + '_moves'];
  var title = req.params.type.charAt(0).toUpperCase() + req.params.type.slice(1) + ' Moves';

  var subMenu = [];
  var moveLists = ['starting_moves', 'advanced_moves'];

  for(var i = 0; i < list.length; i++) {
    var move = gameData.moves[list[i]];
    subMenu.push({
      url: '/moves/' + req.params.type + '#' + move.key,
      label: move.name
    }) 
  }

  renderParsedPage(res, {title: title, activeMenuItem: req.params.type + '_moves', file: req.params.type + '_moves', subMenu: subMenu});  
});

router.get('/character-creation', function(req, res, next) {
  renderParsedPage(res, {title: 'Character Creation', activeMenuItem: 'character-creation', file: 'character_creation'});
});

router.get('/equipment', function(req, res, next) {
  renderParsedPage(res, {title: 'Equipment', file: 'equipment', activeMenuItem: 'equipment'});
});

router.get('/classes', function(req, res, next) {
  renderParsedPage(res, {title: 'Classes', file: 'classes', activeMenuItem: 'classes'});
});

router.get('/', function(req, res, next) {
  renderParsedPage(res, {title: 'Introduction', file: 'introduction', activeMenuItem: 'introduction'});
});

module.exports = router;
