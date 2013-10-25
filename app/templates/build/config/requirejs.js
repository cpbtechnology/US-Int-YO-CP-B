/**
 * @module Build
 * @submodule Build.Config
 * @class Build.Config.RequireJS
 * @static
 */
module.exports = function(config) {

  return {

    'global': {
      'options': {
        'name': 'main',
        'baseUrl': config.javascripts +'/app/',
        'mainConfigFile': config.javascripts +'/app/main.js',

        // Exclusions from minconcat use empty:
        'paths': {
          'facebook': 'empty:',
          'google-analytics': 'empty:',
          'settings': 'empty:'
        },

        'has': {
          'debugMode': false
        },

        'out': config.jsmin +'/app.min.js'
      }
    }

  };

};
