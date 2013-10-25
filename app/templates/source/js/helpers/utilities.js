define('helpers/utilities', [
  'jquery',
  'helpers/events'
], function($, Events) {

  'use strict';

  var Utilities = {

    /**
     * Test to see if device is an iPad.
     * @method Utilities.isIpad
     */
    isIpad: function() {
      return (navigator.userAgent.match(/iPad/i) === null) ? false : true;
    },


    /**
     * Strip characters from string that may be used in an XSS attack.
     * @method Utilities.preventXSS
     * @param value {String} Property to clean.
     */
    preventXSS: function(value) {
      return value.toString().replace(/<|>/g, '');
    }

  };

  return Utilities;

});
