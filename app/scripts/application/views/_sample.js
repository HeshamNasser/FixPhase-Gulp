/* global define */
define([
  'jquery',
  'backbone'
], function($, Backbone) {
  'use strict';
  var Sample = Backbone.View.extend({
    initialize: function() {
      this.render();
    },
    render: function() {
      // Do your magic here
    },
    events: {
    },
  });
  return Sample;
});
