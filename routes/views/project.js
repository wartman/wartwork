var Rabbit = require('rabbit')

// Views for a single project.
module.exports = function (req, res) {
  req.documents.project(req.params.id).fetch().then(function (project) {
    // @todo use res.local?
    res.render('projects/single', {
      project: project.toJSON()
    })
  }).catch(Rabbit.errors.NotFoundError, function (err) {
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