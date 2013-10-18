/**
 * @module Build
 * @submodule Build.Config
 * @class Build.Config.Imagemin
 * @static
 */
module.exports = function(config) {

  return {

      build: {
        files: {
          cwd: 'images/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'images/'
        }
      }
    }

  };

};
