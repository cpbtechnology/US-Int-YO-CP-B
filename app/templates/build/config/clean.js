/**
 * @module Build
 * @submodule Build.Config
 * @class Build.Config.Clean
 * @static
 */
module.exports = function(config) {

  return {

    build: {
      src: [config.cssmin, config.cssbin, config.jsmin]
    },

    concatcss: {
      src: [config.stylesheets +'/concat']
    }

  };

};
