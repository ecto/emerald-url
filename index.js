var fs = require('url');

module.exports = function (req, res) {
  var info = req.parse(req.url);
  for (var i in info) {
    req[i] = info[i];
  }
}
