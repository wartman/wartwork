var Cargo = require('cargo')

var Project = Cargo.Manifest.Document.extend({
  
  init: function () {
    this.path = 'projects'
    this.$map = {id:0, slug:1}
  },

  // Handle attachments
  parse: function (file) {
    this.super(file)
    // Generate attachment info.
    var attachment = this.get('attachment') || {}
    var filename = attachment.filename || this.get('slug')
    var extension = attachment.extension || 'jpg'
    this.set('attachment', filename + '.' + extension)
    this.set('thumbnail', filename + '-thumb.' + extension)
  }

})

var Projects = Cargo.Manifest.Collection.extend({

  init: function () {
    this.document = Project
  }

})

exports.Project = Project
exports.Projects = Projects
