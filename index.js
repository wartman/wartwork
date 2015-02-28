var dotenv = require('dotenv')
var Cargo = require('Cargo')

// Setup env
dotenv.load()

// Run the Cargo app
Cargo({

  'manifest path': 'data',
  'static path': 'public',

  'views': 'app/routes/templates',
  'models': 'app/models',
  'routes': 'app/routes'

}).run()
