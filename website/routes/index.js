var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');

function renderParsedPage(pageFile, res, params) {
  var html = fs.readFileSync(pageFile)
  params.html = html;
  res.render('index', params);
}

/* GET home page. */
router.get('/:page', function(req, res, next) {
  var pageFile = path.join(__dirname + '/../../parsed/web/' + req.params.page + '.html.html');
  renderParsedPage(pageFile, res, {title: req.params.page});
});

module.exports = router;
