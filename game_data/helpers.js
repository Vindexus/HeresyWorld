module.exports = function (Handlebars, gameData) {
  Handlebars.registerHelper('tags', function(tags) {
  if(!tags) {
    return ''
  }
  return tags.join(", ");
});};