var Cargo = require('Cargo')
var imports = Cargo.util.createImporter(__dirname)

var routes = {
  views: imports('./views'),
  // api: imports('./api')
}

module.exports = function (app) {
  
  app.get('/', routes.views.home)
  app.get('/page/:page', routes.views.page)
  app.get('/projects', routes.views.projectCollection)
  app.get('/projects/:slug', routes.views.project)

}
