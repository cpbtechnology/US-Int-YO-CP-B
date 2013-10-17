/**
 * @module view/SubView
 */

define([
	'lodash',
	'backbone',
	'swig',
	'plugins/text!template/ExampleTemplate.html'
], function(_, Backbone, swig, ExampleTemplate) {

	'use strict';

	return Backbone.View.extend({

		"events": {},

		"initialize": function( options ) {
			var view = this;

			_.bindAll( this );

			view.render();

			console.log('Backbone : Global : SubView : Initialized');
		},

		"render": function () {
			var view = this;

			view.exampleTemplate = swig.compile(ExampleTemplate);
			view.$el.append(view.exampleTemplate({
				"url": "https://github.com/cpbtechnology/US-boilerplate-backbonejs"
			}));
		}

	});

});