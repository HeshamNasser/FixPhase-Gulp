/* global define */
define([
    'application/views',
    'application/scope',
    'application/models',
    'jquery',
], function(views, scope, models, $) {
  'use strict';
  console.log(
    'APP NAME:', scope.id, '\n' + 'APP VERSION:',
    scope.version, '\n' + 'jQuery VERSION:', $.fn.jquery
    );
  return scope;
});
