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
  this.mkdir('www/javascripts');
  this.mkdir('www/javascripts/app');
  this.mkdir('www/javascripts/app/collection');
  this.mkdir('www/javascripts/app/helpers');
  this.mkdir('www/javascripts/app/model');
  this.mkdir('www/javascripts/app/router');
  this.mkdir('www/javascripts/app/template');
  this.mkdir('www/javascripts/app/view');
  this.mkdir('www/javascripts/lib');
  this.mkdir('www/javascripts/plugins');
  this.mkdir('www/stylesheets');
  this.mkdir('www/stylesheets/stylus');
  this.mkdir('www/stylesheets/stylus/app');
  this.mkdir('www/stylesheets/stylus/grid');
  this.mkdir('www/stylesheets/stylus/print');

  // using markdown templates generate the html needed
  this.template('_index.md', 'www/index.html');

  // copy over styles and JS
  this.copy('Gruntfile.js', 'Gruntfile.js');
  this.copy('build/config/jshint.js', 'build/config/jshint.js');
  this.copy('build/config/qunit.js', 'build/config/qunit.js');
  this.copy('build/config/requirejs.js', 'build/config/requirejs.js');
  this.copy('build/config/stylus.js', 'build/config/stylus.js');
  this.copy('build/config/watch.js', 'build/config/watch.js');
  this.copy('build/config/yuidoc.js', 'build/config/yuidoc.js');
  this.copy('www/robots.txt', 'www/robots.txt');
  this.copy('www/images/forkme-hover.png', 'www/images/forkme-hover.png');
  this.copy('www/images/forkme.png', 'www/images/forkme.png');
  this.copy('www/javascripts/app/app.js', 'www/javascripts/app/app.js');
  this.copy('www/javascripts/app/main.js', 'www/javascripts/app/main.js');
  this.copy('www/javascripts/app/helpers/analytics.js', 'www/javascripts/app/helpers/analytics.js');
  this.copy('www/javascripts/app/helpers/console.js', 'www/javascripts/app/helpers/console.js');
  this.copy('www/javascripts/app/helpers/events.js', 'www/javascripts/app/helpers/events.js');
  this.copy('www/javascripts/app/helpers/utilities.js', 'www/javascripts/app/helpers/utilities.js');
  this.copy('www/javascripts/app/model/AppConfig.js', 'www/javascripts/app/model/AppConfig.js');
  this.copy('www/javascripts/app/model/ExampleModel.js', 'www/javascripts/app/model/ExampleModel.js');
  this.copy('www/javascripts/app/router/AppRouter.js', 'www/javascripts/app/router/AppRouter.js');
  this.copy('www/javascripts/app/template/ExampleTemplate.html', 'www/javascripts/app/template/ExampleTemplate.html');
  this.copy('www/javascripts/app/view/ExampleView.js', 'www/javascripts/app/view/ExampleView.js');
  this.copy('www/javascripts/app/view/SubView.js', 'www/javascripts/app/view/SubView.js');
  this.copy('www/javascripts/lib/backbone-min.js', 'www/javascripts/lib/backbone-min.js');
  this.copy('www/javascripts/lib/enquire.js', 'www/javascripts/lib/enquire.js');
  this.copy('www/javascripts/lib/jquery-1.9.1.js', 'www/javascripts/lib/jquery-1.9.1.js');
  this.copy('www/javascripts/lib/lodash.min.js', 'www/javascripts/lib/lodash.min.js');
  this.copy('www/javascripts/lib/modernizr-2.6.2.min.js', 'www/javascripts/lib/modernizr-2.6.2.min.js');
  this.copy('www/javascripts/lib/swig.min.js', 'www/javascripts/lib/swig.min.js');
  this.copy('www/javascripts/lib/underscore.js', 'www/javascripts/lib/underscore.js');
  this.copy('www/javascripts/lib/backbone.js', 'www/javascripts/lib/backbone.js');
  this.copy('www/javascripts/lib/enquire.min.js', 'www/javascripts/lib/enquire.min.js');
  this.copy('www/javascripts/lib/jquery-1.9.1.min.js', 'www/javascripts/lib/jquery-1.9.1.min.js');
  this.copy('www/javascripts/lib/modernizr-2.6.2.js', 'www/javascripts/lib/modernizr-2.6.2.js');
  this.copy('www/javascripts/lib/require.js', 'www/javascripts/lib/require.js');
  this.copy('www/javascripts/lib/underscore-min.js', 'www/javascripts/lib/underscore-min.js');
  this.copy('www/javascripts/plugins/text.js', 'www/javascripts/plugins/text.js');
  this.copy('www/stylesheets/stylus/app/main.styl', 'www/stylesheets/stylus/app/main.styl');
  this.copy('www/stylesheets/stylus/app/mobile.styl', 'www/stylesheets/stylus/app/mobile.styl');
  this.copy('www/stylesheets/stylus/grid/example.styl', 'www/stylesheets/stylus/grid/example.styl');
  this.copy('www/stylesheets/stylus/grid.styl', 'www/stylesheets/stylus/grid.styl');
  this.copy('www/stylesheets/stylus/print/print.styl', 'www/stylesheets/stylus/print/print.styl');

  // files within the user's root directory
  this.template('_package.json', 'package.json');
  this.template('_config.json', 'config.json');
  this.template('_bower.json', 'bower.json');
};

CpbGenerator.prototype.projectfiles = function projectfiles() {
  // move files within the user's root directory
  this.copy('bowerrc', '.bowerrc');
  this.copy('editorconfig', '.editorconfig');
  this.copy('jshintrc', '.jshintrc');
};
