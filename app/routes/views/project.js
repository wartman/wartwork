var Cargo = require('Cargo')

// Views for a single project.
module.exports = function (req, res) {
  req.documents.project(req.params).fetch().then(function (project) {
    // @todo use res.local?
    res.render('projects/single', {
      project: project.toJSON()
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