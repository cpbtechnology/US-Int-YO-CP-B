define('router', [
  'backbone'
], function(Backbone) {

  'use strict';

  return Backbone.Router.extend({

    initialize: function() {

      console.log('Backbone : Global : AppRouter : Initialized');
    },


    routes: {
      '': 'index'
    },


    index: function() {}

  });

});
