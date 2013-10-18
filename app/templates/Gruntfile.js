/**
 * @module Build
 * @class Build.Config
 * @static
 */
module.exports = function(grunt) {

  var config = {};

  config.root = 'www';
  config.stylesheets = config.root + '/css';
  config.javascripts = config.root + '/js';
  config.jsmin  = config.javascripts + '/min';
  config.cssbin = config.stylesheets + '/generated';
  config.cssmin = config.stylesheets + '/min';
  config.images = config.root + '/images';
  config.docsbin = 'docs';

  // Project configuration.
  grunt.initConfig({

    clean:     require('./build/config/clean.js')(config),
    watch:     require('./build/config/watch.js')(config),
    imagemin:  require('./build/config/imagemin.js')(config),
    compass:   require('./build/config/compass.js')(config),
    //cssmin:    require('./build/config/cssmin.js')(config),
    jshint:    require('./build/config/jshint.js')(config),
    requirejs: require('./build/config/requirejs.js')(config)

  });

  // Load grunt plugins
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-requirejs');


  /**
   * Default task
   *
   * Process Sass, lint js, require js build
   */
  grunt.registerTask('default', ['compass', 'cssmin', 'jshint', 'requirejs']);


  /**
   * Minify task
   *
   * Run the default task then losslessly minify images
   */
  grunt.registerTask('minify', ['default', 'imagemin']);


  /**
   * Cleanup task
   *
   * Remove the processed Sass CSS files and require minified js then run the default task
   */
  grunt.registerTask('cleanup', ['clean','default']);

};
