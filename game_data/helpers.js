module.exports = function (Handlebars, gameData) {
  Handlebars.registerHelper('tags', function(tags) {
  if(!tags) {
    return ''
  }
  return new Handlebars.SafeString('<em class="tags">' + tags.join(", ") + '</em>');
});};