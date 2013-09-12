pkg = require('../package.json')

// -- Global settings
var settings = {
    'siteName' : pkg.name,
    'uri' : 'http://localhost', // Without trailing /
    'port' : process.env.PORT || pkg.port || 8080,
    'debug' : 0,
    'profile' : 0
};

/**
 * Default configuration manager
 * Inject app and express reference
 */

module.exports = function(app, express, env) {

    // -- DEVELOPMENT
    if ('development' == env) {
        require("./env-development.js")(app, express);
    }

    // -- PRODUCTION
    if ('production' == env) {
        require("./env-production.js")(app, express);
    }

};

module.exports.settings = settings;
