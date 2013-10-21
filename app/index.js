// CPB Boilerplate Generator
//  JavaScript 
//    1. Modules - which can be added or removed via Bower
//    2. Pattern Guide
//    3. Frameworks
//        i.   Angular
//        ii.  Backbone (default)
//        iii. Ember
//  CSS
//    1. SASS
//    2. Pattern Guide
//    3. Function Documentation
//    4. Sprites

'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');

// begin the adventure of a lifetime
var CpbGenerator = module.exports = function CpbGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments); // wire up the base

  this.on('end', function () { // listen to the end event
    this.installDependencies({ skipInstall: options['skip-install'] }); // install all dependancies
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json'))); // get access to package.json file
};

util.inherits(CpbGenerator, yeoman.generators.Base);


// the ask, every one of these methods will be called in order from top to bottom of this file, get to know it
// the only time these wont run is if they are private methods
// in order to determine a private method, please name the methods starting with an underscore:
// Example: CpbGenerator.prototype._dontRunMe

CpbGenerator.prototype.askFor = function askFor() {
  var cb = this.async(); // creates an instance for Async functions

  // have Yeoman greet the user.
  console.log(this.yeoman);

  // setup Promps to Determine if the User wants something in the Boilerplate
  var prompts = [{
    name: 'siteName',
    message: 'What do you want to call this project?',
    default: 'CP+B Boilderplate'
  }];

  this.prompt(prompts, function (props) {
     this.siteName = props.siteName;
    cb();
  }.bind(this));
};

CpbGenerator.prototype.app = function app() {
  // create the directories needed for the app
  this.mkdir('build');
  this.mkdir('build/config');
  this.mkdir('www');
  this.mkdir('www/images');
  this.mkdir('www/js');
  this.mkdir('www/js/app');
  this.mkdir('www/js/helpers');
  this.mkdir('www/js/lib');
  this.mkdir('www/js/min');
  this.mkdir('www/js/app/master/collection');
  this.mkdir('www/js/app/master/model');
  this.mkdir('www/js/app/master/template');
  this.mkdir('www/js/app/master/view');
  this.mkdir('www/css');
  this.mkdir('www/css/fonts');
  this.mkdir('www/css/min');
  this.mkdir('www/css/generated');

  // using markdown templates generate the html needed
  this.template('_index.md', 'www/index.html');

  // copy over styles and JS
  this.copy('Gruntfile.js', 'Gruntfile.js');
  this.copy('build/config/clean.js', 'build/config/clean.js');
  this.copy('build/config/compass.js', 'build/config/compass.js');
  this.copy('build/config/imagemin.js', 'build/config/imagemin.js');
  this.copy('build/config/cssmin.js', 'build/config/cssmin.js');
  this.copy('build/config/jshint.js', 'build/config/jshint.js');
  this.copy('build/config/requirejs.js', 'build/config/requirejs.js');
  this.copy('build/config/watch.js', 'build/config/watch.js');
  this.copy('www/robots.txt', 'www/robots.txt');
  this.copy('www/js/app/main.js', 'www/js/app/main.js');
  this.copy('www/js/helpers/analytics.js', 'www/js/helpers/analytics.js');
  this.copy('www/js/helpers/console.js', 'www/js/helpers/console.js');
  this.copy('www/js/helpers/events.js', 'www/js/helpers/events.js');
  this.copy('www/js/helpers/utilities.js', 'www/js/helpers/utilities.js');
  this.copy('www/js/app/router.js', 'www/js/app/router.js');
  this.copy('www/js/app/master/app.js', 'www/js/app/master/app.js');
  this.copy('www/js/app/master/template/Example.html', 'www/js/app/master/template/Example.html');
  this.copy('www/js/app/master/view/example.js', 'www/js/app/master/view/example.js');
  this.copy('www/js/app/master/view/subExample.js', 'www/js/app/master/view/subExample.js');
  this.copy('www/js/lib/backbone-min.js', 'www/js/lib/backbone-min.js');
  this.copy('www/js/lib/lodash.min.js', 'www/js/lib/lodash.min.js');
  this.copy('www/js/lib/modernizr-2.6.2.min.js', 'www/js/lib/modernizr-2.6.2.min.js');
  this.copy('www/js/lib/swig.min.js', 'www/js/lib/swig.min.js');
  this.copy('www/js/lib/enquire.min.js', 'www/js/lib/enquire.min.js');
  this.copy('www/js/lib/jquery-1.9.1.min.js', 'www/js/lib/jquery-1.9.1.min.js');
  this.copy('www/js/lib/require.js', 'www/js/lib/require.js');
  this.copy('www/js/lib/text.js', 'www/js/lib/text.js');
  this.copy('www/css/app/00._global.scss', 'www/css/app/00._global.scss');
  this.copy('www/css/app/01._typography.scss', 'www/css/app/01._typography.scss');
  this.copy('www/css/app/02._widgets.scss', 'www/css/app/02._widgets.scss');
  this.copy('www/css/app/02.widgets.header.scss', 'www/css/app/02.widgets.header.scss');
  this.copy('www/css/app/03._pages.scss', 'www/css/app/03._pages.scss');
  this.copy('www/css/app/04._utilities.scss', 'www/css/app/04._utilities.scss');
  this.copy('www/css/app/05._shame.scss', 'www/css/app/05._shame.scss');
  this.copy('www/css/app/06._print.scss', 'www/css/app/06._print.scss');
  this.copy('www/css/app/_modules/_mixins.scss', 'www/css/app/_modules/_mixins.scss');
  this.copy('www/css/app/_modules/_variables.scss', 'www/css/app/_modules/_variables.scss');
  this.copy('www/css/app/_vendor/_grid.generator.scss', 'www/css/app/_vendor/_grid.generator.scss');
  this.copy('www/css/app/_vendor/_normalize.scss', 'www/css/app/_vendor/_normalize.scss');

  // files within the user's root directory
  this.template('_package.json', 'package.json');
  this.template('_config.json', 'config.json');
  this.template('_bower.json', 'bower.json');
};

CpbGenerator.prototype.projectfiles = function projectfiles() {
  // move files within the user's root directory
  this.copy('bowerrc', '.bowerrc');
  this.copy('editorconfig', '.editorconfig');
};
