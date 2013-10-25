// CPB Boilerplate Generator

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

CpbGenerator.prototype.buildModules = function buildModules() {
  var cb = this.async(); // creates an instance for Async functions

  // setup Promps to Determine if the User wants something in the Boilerplate
  var modules = JSON.parse(this.read('modules.json')).modules,
      modeulesLength = modules.length;
  
  var prompts = [{
    type: 'checkbox',
    name: 'siteModules',
    message: 'Would you like to add any modules?',
    choices: modules
  }];

  this.prompt(prompts, function (props) {
    // loop through props
    this.siteModules = props.siteModules;
    cb();
  }.bind(this));
};

CpbGenerator.prototype.app = function app() {
  var done = this.async(),
      user,
      repoName;

  // create the directories needed for the app
  this.mkdir('build');
  this.mkdir('build/config');
  this.mkdir('source');
  this.mkdir('source/images');
  this.mkdir('source/js');
  this.mkdir('source/js/app');
  this.mkdir('source/js/helpers');
  this.mkdir('source/js/lib');
  this.mkdir('source/js/min');
  this.mkdir('source/js/app/master/collection');
  this.mkdir('source/js/app/master/model');
  this.mkdir('source/js/app/master/template');
  this.mkdir('source/js/app/master/view');
  this.mkdir('source/css');
  this.mkdir('source/css/fonts');
  this.mkdir('source/css/min');
  this.mkdir('source/css/generated');
  this.mkdir('tmp');

  // using markdown templates generate the html needed
  this.template('_index.md', 'source/index.html');

  // copy over styles and JS
  this.copy('Gruntfile.js', 'Gruntfile.js');
  this.copy('build/config/clean.js', 'build/config/clean.js');
  this.copy('build/config/compass.js', 'build/config/compass.js');
  this.copy('build/config/concat.js', 'build/config/concat.js');
  this.copy('build/config/cssmin.js', 'build/config/cssmin.js');
  this.copy('build/config/imagemin.js', 'build/config/imagemin.js');
  this.copy('build/config/jshint.js', 'build/config/jshint.js');
  this.copy('build/config/requirejs.js', 'build/config/requirejs.js');
  this.copy('build/config/watch.js', 'build/config/watch.js');
  this.copy('source/robots.txt', 'source/robots.txt');
  this.copy('source/js/app/main.js', 'source/js/app/main.js');
  this.copy('source/js/helpers/analytics.js', 'source/js/helpers/analytics.js');
  this.copy('source/js/helpers/console.js', 'source/js/helpers/console.js');
  this.copy('source/js/helpers/events.js', 'source/js/helpers/events.js');
  this.copy('source/js/helpers/utilities.js', 'source/js/helpers/utilities.js');
  this.copy('source/js/app/router.js', 'source/js/app/router.js');
  this.copy('source/js/app/master/app.js', 'source/js/app/master/app.js');
  this.copy('source/js/app/master/template/Example.html', 'source/js/app/master/template/Example.html');
  this.copy('source/js/app/master/view/example.js', 'source/js/app/master/view/example.js');
  this.copy('source/js/app/master/view/subExample.js', 'source/js/app/master/view/subExample.js');
  this.copy('source/js/lib/backbone-min.js', 'source/js/lib/backbone-min.js');
  this.copy('source/js/lib/lodash.min.js', 'source/js/lib/lodash.min.js');
  this.copy('source/js/lib/modernizr-2.6.2.min.js', 'source/js/lib/modernizr-2.6.2.min.js');
  this.copy('source/js/lib/swig.min.js', 'source/js/lib/swig.min.js');
  this.copy('source/js/lib/enquire.min.js', 'source/js/lib/enquire.min.js');
  this.copy('source/js/lib/jquery-1.9.1.min.js', 'source/js/lib/jquery-1.9.1.min.js');
  this.copy('source/js/lib/require.js', 'source/js/lib/require.js');
  this.copy('source/js/lib/text.js', 'source/js/lib/text.js');
  this.copy('source/css/app/00._global.scss', 'source/css/app/00._global.scss');
  this.copy('source/css/app/01._typography.scss', 'source/css/app/01._typography.scss');
  this.copy('source/css/app/02._widgets.scss', 'source/css/app/02._widgets.scss');
  this.copy('source/css/app/02.widgets.header.scss', 'source/css/app/02.widgets.header.scss');
  this.copy('source/css/app/03._pages.scss', 'source/css/app/03._pages.scss');
  this.copy('source/css/app/04._utilities.scss', 'source/css/app/04._utilities.scss');
  this.copy('source/css/app/05._shame.scss', 'source/css/app/05._shame.scss');
  this.copy('source/css/app/06._print.scss', 'source/css/app/06._print.scss');
  this.copy('source/css/app/_modules/_mixins.scss', 'source/css/app/_modules/_mixins.scss');
  this.copy('source/css/app/_modules/_variables.scss', 'source/css/app/_modules/_variables.scss');
  this.copy('source/css/app/_vendor/_grid.generator.scss', 'source/css/app/_vendor/_grid.generator.scss');
  this.copy('source/css/app/_vendor/_normalize.scss', 'source/css/app/_vendor/_normalize.scss');

  // files within the user's root directory
  this.template('_package.json', 'package.json');
  this.template('_config.json', 'config.json');
  this.template('_bower.json', 'bower.json');
  this.template('_gitignore', '.gitignore');

  var yo = this;

  // Potential Race Condition with removing the Tmp folder
  for( var i = 0; i < this.siteModules.length; i++ ) {
    user = this.siteModules[i].split('@')[0]; // grab the user the repo
    repoName = this.siteModules[i].split('@')[1]; // grab the name of the repo we want
    
    (function(k) {
      yo.remote(user, repoName, function(err, remote) { // pull in the data from the repo, stored in .cache
        if(err) { //error if it broke
          return done(err);
        }

        var moduleJSON = JSON.parse(yo.readFileAsString(remote.cachePath +'/package.json')); //grab module package json

        for( var j = 0; j < moduleJSON['cpb-module'].length; j++ ) {
          yo.copy(remote.cachePath + '/' + moduleJSON['cpb-module'][j].module, moduleJSON['cpb-module'][j].cpb); // move files based on data within the package json
        }

        done();
     })
    })(i);

  }
};

CpbGenerator.prototype.projectfiles = function projectfiles() {
  // move files within the user's root directory
  this.copy('bowerrc', '.bowerrc');
  this.copy('editorconfig', '.editorconfig');
};