var url = require('url');

module.exports = function (req, res) {
  var info = url.parse(req.url);
  for (var i in info) {
    req[i] = info[i];
  }

  // req.params
  // req.query
}
