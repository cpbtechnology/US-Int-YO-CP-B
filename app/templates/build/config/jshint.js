/**
 * @module Build
 * @submodule Build.Config
 * @class Build.Config.JSHint
 * @static
 */
module.exports = function(config) {

  return {

    files: [config.javascripts + '/app/**/*.js'],

    options: {
      ignores: [
        config.javascripts + '/lib/*.js',
        config.javascripts + '/min/*.js'
      ],
      node: true,
      jquery: true,
      browser: true,
      es5: false,
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
