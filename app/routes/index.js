var Cargo = require('cargo')
var middleware = require('./middleware')
var imports = Cargo.util.createImporter(__dirname)

var routes = {
  views: imports('./views'),
  api: imports('./api')
}

module.exports = function (app) {

  app.use(middleware.css())
  app.get('/scripts/main.js', middleware.scripts())
  
  app.use(middleware.siteVars)

  app.get('/', routes.views.home)
  app.get('/page/:slug', routes.views.page)
  app.get('/projects', routes.views.projectCollection)
  app.get('/projects/:slug', routes.views.project)

  app.get('/api/projects/:id', routes.api.projects.single)
  app.get('/api/projects/', routes.api.projects.collection)

}
