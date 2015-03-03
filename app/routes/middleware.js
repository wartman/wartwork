var browserify = require('browserify-middleware')
var babelify = require('babelify')
var stylus = require('stylus')
var Promise = require('bluebird')

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
  Promise.all([
    req.collections.projects().fetch(),
    req.collections.pages().query({
      tag: 'sidebar',
      $limit: 2
    }).fetch()
  ]).then(function (results) {
    res.projects = results[0] // so we don't need to load again.
    res.locals.projects = results[0].toJSON()
    res.locals.sidebarPages = results[1].toJSON()
    next()
  }).catch(next)
}
