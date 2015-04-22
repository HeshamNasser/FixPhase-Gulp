/* global define */
define([], function() {
  'use strict';
  var scope = window.APP = (window.APP || {});
  scope.id = 'Appname';
  scope.version = '1';
  scope.libs = (scope.libs || {});
  scope.views = (scope.views || {});
  scope.models = (scope.models || {});
  scope.preload = (scope.preload || []);
  scope.afterRender = (scope.afterRender || []);
  scope.initializers = [];
  return scope;
});
