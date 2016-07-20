module.exports = function (Handlebars, gameData) {
  Handlebars.registerHelper('tags', function(tags) {
    if(!tags) {
      return ''
    }
    var ems = []
    tags = tags.map(function (val) {
      var tag = gameData.tags.hasOwnProperty(val) ? gameData.tags[val] : {name: val, description: ''};
      ems.push('<em class="tags" title="' + tag.description + '">' + tag.name + '</em>');
    });
    return ems.join(", ");
  });

  Handlebars.registerHelper('ptags', function(tags) {
    if(!tags) {
      return ''
    }
    return '(' + Handlebars.helpers.tags(tags) + ')';
  });

  Handlebars.registerHelper('item', function(item) {
    if(!item) {
      return ''
    }
    if(typeof item == 'string') {
      if(!gameData.equipment.hasOwnProperty(item)) {
        console.error('No item: ' + item)
        return ''
      }

      item = gameData.equipment[item]
    }
    var tags = Handlebars.helpers.ptags(item.tags);
    return new Handlebars.SafeString('<span class="item" title="' + item.description + '">'+item.name + (tags.length > 0 ? ' ' : '') + tags+'</span');
  });

  Handlebars.registerHelper('anchor_link', function (id) {
    return '<a only-for="web" href="#' + id + '" class="anchor-link"><span class="glyphicon glyphicon-link"></span></a>'
  })

  Handlebars.registerHelper('tag', function(tag) {
    if(!tag) {
      return ''
    }
    return Handlebars.helpers.tags([tag])
  });

  Handlebars.registerHelper('render', function(text) {
    var t = Handlebars.compile(text)
    return t(gameData)
  });

  Handlebars.registerHelper("edit_game_link", function (file, label) {
    return '<a only-for="web" target="_blank" href="https://github.com/Vindexus/heresyworld/edit/master/' + file + '"" class="edit-game-link"><span class="glyphicon glyphicon-pencil"></span> ' + label + '</a>';    
  })
};
