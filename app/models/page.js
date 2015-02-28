var Cargo = require('Cargo')

var Page = Cargo.Manifest.Document.extend({

  init: function () {
    this.path = 'pages'
    this.$map = {id:0, page:1}
  }

})

var Pages = Cargo.Manifest.Collection.extend({

  init: function () {
    this.document = Page
  }

})

exports.Page = Page
exports.Pages = Pages