var browserify = require('browserify-middleware')
var babelify = require('babelify')
var stylus = require('stylus')

exports.css = function () {
  return stylus.middleware({
    src: __dirname + '/../../src',
    dest: __dirname + '/../../public',

    // Development-only settings.
    debug: process.env.NODE_ENV === 'development',
    force: process.env.NODE_ENV === 'development',
    serve: process.env.NODE_ENV == 'development'
  })
}

exports.scripts = function () {
  return browserify(__dirname + '../../../src/scripts/main.js', {
    transform: [babelify]
  })
}

exports.siteVars = function (req, res, next) {
  res.locals.site = {
    currentSection: req.url
  }
  // Always need all projects
  req.collections.projects().fetch().then(function (projects) {
    res.locals.projects = projects.toJSON()
    next()
  }).catch(next)
}
