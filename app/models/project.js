var Cargo = require('Cargo')

var Project = Cargo.Manifest.Document.extend({
  
  init: function () {
    this.path = 'projects'
    this.$map = {id:0, slug:1}
  }

})

var Projects = Cargo.Manifest.Collection.extend({

  init: function () {
    this.document = Project
  }

})

exports.Project = Project
exports.Projects = Projects
