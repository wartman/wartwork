var Rabbit = require('rabbit')
var imports = Rabbit.util.createImporter(__dirname)

var routes = {
  views: imports('./views'),
  // api: imports('./api')
}

module.exports = function (app) {
  
  app.get('/', routes.views.home)
  app.get('/project', routes.views.projectCollection)
  app.get('/project/:id', routes.views.project)
  app.get('/:page', routes.views.page)

}
