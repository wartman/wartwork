var Rabbit = require('rabbit')

var Page = Rabbit.Record.Document.extend({

  init: function () {
    this.path = 'pages'
  }

})

var Pages = Rabbit.Record.Collection.extend({

  init: function () {
    this.document = Page
  }

})

exports.Page = Page
exports.Pages = Pages