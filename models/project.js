var Rabbit = require('rabbit')

var Project = Rabbit.Record.Document.extend({
  
  init: function () {
    this.path = 'projects'
  }

})

var Projects = Rabbit.Record.Collection.extend({

  init: function () {
    this.document = Project
  }

})

exports.Project = Project
exports.Projects = Projects
