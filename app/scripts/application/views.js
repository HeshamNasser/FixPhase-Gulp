/* global define */
define([
  'backbone',
  'application/scope',
  'helpers/responsive',
  'application/views/_sample',
], function(Backbone, scope, responsive, Sample) {
  'use strict';
  scope.sample = new Sample();
  return scope;
});
