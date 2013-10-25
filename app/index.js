// CPB Boilerplate Generator

'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');

// begin the adventure of a lifetime
var CpbGenerator = module.exports = function CpbGenerator(args, options, config) {
  var yo = this;

  yeoman.generators.Base.apply(yo, arguments); // wire up the base

  yo.on('end', function () { // listen to the end event
    this.installDependencies({ skipInstall: options['skip-install'] }); // install all dependancies
  });

  yo.pkg = JSON.parse(yo.readFileAsString(path.join(__dirname, '../package.json'))); // get access to package.json file
};

util.inherits(CpbGenerator, yeoman.generators.Base);


// the ask, every one of these methods will be called in order from top to bottom of this file, get to know it
// the only time these wont run is if they are private methods
// in order to determine a private method, please name the methods starting with an underscore:
// Example: CpbGenerator.prototype._dontRunMe

CpbGenerator.prototype.askFor = function askFor() {
  var yo = this,
      cb = this.async(); // creates an instance for Async functions

  // have Yeoman greet the user.
  console.log(yo.yeoman);

  // setup Promps to Determine if the User wants something in the Boilerplate
  var prompts = [{
    name: 'siteName',
    message: 'What do you want to call this project?',
    default: 'CP+B Boilderplate'
  }];

  yo.prompt(prompts, function (props) {
     this.siteName = props.siteName;
    cb();
  }.bind(this));
};

CpbGenerator.prototype.buildModules = function buildModules() {
  var yo = this,
      cb = this.async(); // creates an instance for Async functions

  /**
  * Example Module in Modules.json 
  * {
  *  "name": "cpb-modules",
  *  "description": "A List of Approved CP+B Modules",
  *  "modules": [
  *    {
  *      "name": "Ski Free",
  *      "value": "tsvensen@equalize.js"
  *    }
  *  ]
  * }
  */

  // setup Promps to Determine if the User wants something in the Boilerplate
  var modules = JSON.parse(yo.read('modules.json')).modules,
      modeulesLength = modules.length;
  
  if( modeulesLength > 0 ){
    var prompts = [{
      type: 'checkbox',
      name: 'siteModules',
      message: 'Would you like to add any modules?',
      choices: modules
    }];

    yo.prompt(prompts, function (props) {
      // loop through props
      this.siteModules = props.siteModules;
      cb();
    }.bind(this));
  } else {
    this.siteModules = undefined;
    cb();
  }
};

CpbGenerator.prototype.app = function app() {
  var yo = this,
      done = this.async(),
      user,
      repoName;

  // create the directories needed for the app
  yo.mkdir('build');
  yo.mkdir('build/config');
  yo.mkdir('source');
  yo.mkdir('source/images');
  yo.mkdir('source/js');
  yo.mkdir('source/js/app');
  yo.mkdir('source/js/helpers');
  yo.mkdir('source/js/lib');
  yo.mkdir('source/js/min');
  yo.mkdir('source/js/app/master/collection');
  yo.mkdir('source/js/app/master/model');
  yo.mkdir('source/js/app/master/template');
  yo.mkdir('source/js/app/master/view');
  yo.mkdir('source/css');
  yo.mkdir('source/css/fonts');
  yo.mkdir('source/css/min');
  yo.mkdir('source/css/generated');

  // using markdown templates generate the html needed
  yo.template('_index.md', 'source/index.html');

  // copy over styles and JS
  yo.copy('Gruntfile.js', 'Gruntfile.js');
  yo.copy('build/config/clean.js', 'build/config/clean.js');
  yo.copy('build/config/compass.js', 'build/config/compass.js');
  yo.copy('build/config/concat.js', 'build/config/concat.js');
  yo.copy('build/config/cssmin.js', 'build/config/cssmin.js');
  yo.copy('build/config/imagemin.js', 'build/config/imagemin.js');
  yo.copy('build/config/jshint.js', 'build/config/jshint.js');
  yo.copy('build/config/requirejs.js', 'build/config/requirejs.js');
  yo.copy('build/config/watch.js', 'build/config/watch.js');
  yo.copy('source/robots.txt', 'source/robots.txt');
  yo.copy('source/js/app/main.js', 'source/js/app/main.js');
  yo.copy('source/js/helpers/analytics.js', 'source/js/helpers/analytics.js');
  yo.copy('source/js/helpers/console.js', 'source/js/helpers/console.js');
  yo.copy('source/js/helpers/events.js', 'source/js/helpers/events.js');
  yo.copy('source/js/helpers/utilities.js', 'source/js/helpers/utilities.js');
  yo.copy('source/js/app/router.js', 'source/js/app/router.js');
  yo.copy('source/js/app/master/app.js', 'source/js/app/master/app.js');
  yo.copy('source/js/app/master/template/Example.html', 'source/js/app/master/template/Example.html');
  yo.copy('source/js/app/master/view/example.js', 'source/js/app/master/view/example.js');
  yo.copy('source/js/app/master/view/subExample.js', 'source/js/app/master/view/subExample.js');
  yo.copy('source/js/lib/backbone-min.js', 'source/js/lib/backbone-min.js');
  yo.copy('source/js/lib/lodash.min.js', 'source/js/lib/lodash.min.js');
  yo.copy('source/js/lib/modernizr-2.6.2.min.js', 'source/js/lib/modernizr-2.6.2.min.js');
  yo.copy('source/js/lib/swig.min.js', 'source/js/lib/swig.min.js');
  yo.copy('source/js/lib/enquire.min.js', 'source/js/lib/enquire.min.js');
  yo.copy('source/js/lib/jquery-1.9.1.min.js', 'source/js/lib/jquery-1.9.1.min.js');
  yo.copy('source/js/lib/require.js', 'source/js/lib/require.js');
  yo.copy('source/js/lib/text.js', 'source/js/lib/text.js');
  yo.copy('source/css/app/00._global.scss', 'source/css/app/00._global.scss');
  yo.copy('source/css/app/01._typography.scss', 'source/css/app/01._typography.scss');
  yo.copy('source/css/app/02._widgets.scss', 'source/css/app/02._widgets.scss');
  yo.copy('source/css/app/02.widgets.header.scss', 'source/css/app/02.widgets.header.scss');
  yo.copy('source/css/app/03._pages.scss', 'source/css/app/03._pages.scss');
  yo.copy('source/css/app/04._utilities.scss', 'source/css/app/04._utilities.scss');
  yo.copy('source/css/app/05._shame.scss', 'source/css/app/05._shame.scss');
  yo.copy('source/css/app/06._print.scss', 'source/css/app/06._print.scss');
  yo.copy('source/css/app/_modules/_mixins.scss', 'source/css/app/_modules/_mixins.scss');
  yo.copy('source/css/app/_modules/_variables.scss', 'source/css/app/_modules/_variables.scss');
  yo.copy('source/css/app/_vendor/_grid.generator.scss', 'source/css/app/_vendor/_grid.generator.scss');
  yo.copy('source/css/app/_vendor/_normalize.scss', 'source/css/app/_vendor/_normalize.scss');

  // files within the user's root directory
  yo.template('_package.json', 'package.json');
  yo.template('_config.json', 'config.json');
  yo.template('_bower.json', 'bower.json');
  yo.template('_gitignore', '.gitignore');
  
  if( typeof yo.siteModules !== 'undefined' ) {
    for( var i = 0; i < yo.siteModules.length; i++ ) {
      user = yo.siteModules[i].split('@')[0]; // grab the user the repo
      repoName = yo.siteModules[i].split('@')[1]; // grab the name of the repo we want
      
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

  } else {
    done();
  }

};

CpbGenerator.prototype.projectfiles = function projectfiles() {
  var yo = this;

  // move files within the user's root directory
  yo.copy('bowerrc', '.bowerrc');
  yo.copy('editorconfig', '.editorconfig');
};