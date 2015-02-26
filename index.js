var dotenv = require('dotenv')
var Rabbit = require('rabbit')

// Setup env
dotenv.load()

// Run the rabbit app
Rabbit({

  // MODULE ROOT IS BROKEN INVESTIGATE
  'module root': __dirname,

  'record path': 'data',
  'static path': 'public',

  'views': 'routes/templates',
  'models': require('./models'), // @todo: autoloader
  'routes': require('./routes') // @todo: autoloader

}).run()
