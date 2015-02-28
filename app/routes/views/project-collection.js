var Cargo = require('Cargo')

module.exports = function (req, res) {
  req.collections.projects().fetch().then(function (projects) {
    res.render('projects/collection', {
      projects: projects.toJSON()
    })
  }).catch(Cargo.errors.NotFoundError, function (err) {
    // @todo make a global error handler
    res.render('pages/error', {
      title: 'Project Does Not Exist',
      message: err.message
    })
  }).catch(function (err) {
    res.render('pages/error', {
      title: 'Something Happened',
      message: err.message
    })
  })
}
