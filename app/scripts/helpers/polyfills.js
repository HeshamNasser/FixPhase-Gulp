/* global define */
define([
  'scope'
  ], function(scope) {
  'use strict';
  // console.log fix
  if (!window.console) {
    console = {log: function() {}};
  }
  return scope;
});
