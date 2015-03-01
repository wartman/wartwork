var Cargo = require('cargo')

module.exports = function (req, res) {
  // Projects should already be populated.
  res.render('projects/collection')
}
