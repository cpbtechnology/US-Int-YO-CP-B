/**
 * @module Build
 * @submodule Build.Config
 * @class Build.Config.Compass
 * @static
 */
module.exports = function(config) {

  return {
    dist: {
      options: {
        relativeAssets: true,
        sassDir: config.stylesheets +'/app',
        cssDir: config.cssbin
      }
    }
  };

};
