// -- Module dependencies.
var express     = require('express'),
    http        = require('http'),
    less        = require('less'),
    mongoose    = require('mongoose'),
    reload      = require('reload'),
    colors      = require('colors'),
    logo        = require('./config/logo.js');

    colors.setTheme({
      info: 'green',
      data: 'white',
      warn: 'yellow',
      highlight: 'inverse',
      debug: 'cyan',
      error: 'red'
    });


// -- Create Express instance and export
var app         = express(),
    env         = app.settings.env,

// -- Import configuration
  conf        = require('./config/config.js'),
  settings    = conf.settings;
  conf        (app, express, env);


// -- Bootstrap Config
require('./bootstrap.js').boot(app);

// -- Routes
require('./config/routes.js')(app);

// -- Models
require('./app/models/restaurants.js')(app);
// require('./app/models/index.js')(app);

// -- Mongo DB connection
mongoose.connect(process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/funso');


var server = http.createServer(app);

if(env == 'development') reload(server,app,1500);

server.listen(settings.port, function(){
  logo.long();
  console.log(" Express server is listening on "+" port %d ".highlight.info + " in " + " %s mode ".highlight.data, settings.port, env);
  if (env == 'development') {
    notifier.notify({
        title: pkg.name,
        subtitle: 'v' + pkg.version,
        message: 'Successfully started on port ' + settings.port
    },function(){
      console.log(' -Terminal notifier notified');
    });
  }
});
