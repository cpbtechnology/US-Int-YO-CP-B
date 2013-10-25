/**
 * @module main
 */
(function() {

  'use strict';

  require.config({

    // Disable timeout for scripts.
    waitSeconds: 0,

    baseUrl: 'javascripts',

    paths: {

      // Core Libraries
      modernizr: '../lib/modernizr-2.6.2.min', //http://modernizr.com/docs
      jquery:    '../lib/jquery-1.9.1.min',    //http://api.jquery.com/
      lodash:    '../lib/lodash.min',          //http://lodash.com/
      backbone:  '../lib/backbone-min',        //http://backbonejs.org/
      swig:      '../lib/swig.min',            //http://paularmstrong.github.com/swig/docs/
      text:      '../lib/text',

      // Backbone Submodule Directories
      router:     'router',
      model:      'model',
      collection: 'collection',
      view:       'view',
      template:   'template',

      // Helper Modules
      helpers: '../helpers',

      // 3rd party
      'google-analytics': '//google-analytics.com/ga'
    },

    // Sets the configuration for your third party scripts that are not AMD compatible
    shim: {

      modernizr: {
        exports: 'Modernizr'
      },

      lodash: {
        exports: '_'
      },

      backbone: {
        deps: ['lodash', 'jquery'],
        exports: 'Backbone'
      },

      swig: {
        deps: ['lodash'],
        exports: 'swig'
      }

    }
  }); // end require.config

  require(['master/app'], function(App) {

    App.initialize();

    require(['google-analytics','helpers/analytics'], function(ga, Analytics) {
    });
  });
  // end require['app']
}());
