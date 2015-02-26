var Rabbit = require('rabbit')

// Views for a single page.
module.exports = function (req, res) {
  req.documents.page(req.params.page).fetch().then(function (page) {
    // @todo use res.local?
    res.render('pages/generic', {
      page: page.toJSON()
    })
  }).catch(Rabbit.errors.NotFoundError, function (err) {
    // @todo make a global error handler
    res.render('pages/error', {
      title: 'Page Does Not Exist',
      message: err.message
    })
  }).catch(function (err) {
    res.render('pages/error', {
      title: 'Something Happened',
      message: err.message
    })
  })
}