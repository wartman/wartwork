var Cargo = require('cargo')

var Page = Cargo.Manifest.Document.extend({

  init: function () {
    this.path = 'pages'
    this.$map = {id:0, slug:1, tag:2}
  }

})

var Pages = Cargo.Manifest.Collection.extend({

  init: function () {
    this.document = Page
  }

})

exports.Page = Page
exports.Pages = Pages