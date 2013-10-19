/**
 * @module Build
 * @submodule Build.Config
 * @class Build.Config.Imagemin
 * @static
 */
module.exports = function(config) {

  return {

    minify: {
      expand: true,
      cwd: config.cssbin,
      src: ['**/*.css'],
      dest: config.cssmin,
      ext: '.min.css'
    }

  };

};
