module.exports = function (Handlebars, gameData) {
  Handlebars.registerHelper('tags', function(tags) {
    if(!tags) {
      return ''
    }
    tags = tags.map(function (val) {
      return gameData.tags.hasOwnProperty(val) ? gameData.tags[val].name : val;
    });
    return '<em class="tags">' + tags.join(", ") + '</em>';
  });

  Handlebars.registerHelper('ptags', function(tags) {
    if(!tags) {
      return ''
    }
    return '<em class="tags">(' + tags.join(", ") + ')</em>';
  });

  Handlebars.registerHelper('item', function(item) {
    if(!item) {
      return ''
    }
    item = typeof item == 'string' ? gameData.equipment[item] : item;
    var tags = Handlebars.helpers.ptags(item.tags);
    return new Handlebars.SafeString(item.name + (tags.length > 0 ? ' ' : '') + tags);
  });

  Handlebars.registerHelper('tag', function(tag) {
    if(!tag) {
      return ''
    }
    return Handlebars.helpers.tags([tag])
  });
};
