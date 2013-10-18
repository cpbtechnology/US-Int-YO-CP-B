/**
 * @module Build
 * @class Build.Config
 * @static
 */
module.exports = function(grunt) {

  var config = {};

  config.root = 'www';
  config.stylesheets = config.root + '/stylesheets';
  config.javascripts = config.root + '/javascripts';
  config.jsbin = config.javascripts + '/generated';
  config.cssbin = config.stylesheets + '/generated';
  config.images = config.root + '/images';
  config.docsbin = 'docs';

  // Project configuration.
  grunt.initConfig({

    beautifier: {
      options: {
        indentSize: 1,
        indentChar: '\t',
        spaceAfterAnonFunction: true
      }
    },

    beautify: {
      files: [ config.javascripts + '/app/**/*.js' ]
    },

    compass:   require('./build/config/compass.js')(config),
    requirejs: require('./build/config/requirejs.js')(config),
    jshint:    require('./build/config/jshint.js')(config),
    watch:     require('./build/config/watch.js')(config)

  });

  // Default task.
  grunt.registerTask('default', ['compass', 'requirejs', 'jshint']);
  grunt.registerTask('pretty-js', 'beautify');

  // load local tasks.
  grunt.loadTasks('./build/tasks');

  // load grunt plugins
  grunt.loadNpmTasks('grunt-beautify');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');

};
