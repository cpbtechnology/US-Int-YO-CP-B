/**
 * @module Build
 * @submodule Build.Config
 * @class Build.Config.Watch
 * @static
 */
module.exports = function(config) {

  return {

    files: [
      config.stylesheets +'/app/**/*.scss',
      config.javascripts +'/app/**/*.js',
      config.javascripts +'/lib/**/*.js',
      config.javascripts +'/helpers/**/*.js'
    ],
    tasks: ['default']

  };

};
