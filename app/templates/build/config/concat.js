/**
 * @module Build
 * @submodule Build.Config
 * @class Build.Config.Concat
 * @static
 */
module.exports = function(config) {

  return {

    css: {
      src: [config.cssbin +'/**/*.css'],
      dest: config.stylesheets +'/concat/app.css'
    }

  };

};
