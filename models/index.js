var project = require('./project')
var page = require('./page')

module.exports = function (record) {
  record.use('project', project.Project)
  record.use('projects', project.Projects)

  record.use('page', page.Page)
  record.use('pages', page.Pages)
}