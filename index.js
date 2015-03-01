var dotenv = require('dotenv')
var Cargo = require('cargo')

// Setup env
dotenv.load()

// Run the Cargo app
Cargo({

  'manifest path': 'data',
  'static path': 'public',
  'port': process.env.PORT,

  'views': 'app/routes/templates',
  'models': 'app/models',
  'routes': 'app/routes'

}).run()
