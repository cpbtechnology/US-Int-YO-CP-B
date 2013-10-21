/**
 * @module Build
 * @submodule Build.Config
 * @class Build.Config.Imagemin
 * @static
 */
module.exports = function(config) {

  return {

    options: {
      report: 'min',
    },

    minify: {
      expand: true,
      cwd: config.stylesheets +'/concat/',
      src: ['**/*.css'],
      dest: config.cssmin +'/',
      ext: '.min.css'
    }

  };

};
