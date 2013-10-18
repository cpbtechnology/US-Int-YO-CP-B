/**
 * @module Build
 * @submodule Build.Config
 * @class Build.Config.JSHint
 * @static
 */
module.exports = function(config) {

  return {

    files: [config.javascripts +'/app/**/*.js'],

    exclude: [config.javascripts +'/lib/*.js'],

    options: {
      node: true,
      jquery: true,
      browser: true,
      es5: true,
      boss: true,
      curly: true,
      expr: true,
      globalstrict: true,
      immed: false,
      indent: 2,
      strict: false,
      supernew: true,
      white: false
    }

  };

};
