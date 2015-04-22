/* global require */
//|**
//|
//| Appname
//|
//| This file is the main application file
//|
//| .--------------------------------------------------------------.
//| | NAMING CONVENTIONS:                                          |
//| |--------------------------------------------------------------|
//| | Singleton-literals and prototype objects | PascalCase        |
//| |--------------------------------------------------------------|
//| | Functions and public variables           | camelCase         |
//| |--------------------------------------------------------------|
//| | Global variables and constants           | UPPERCASE         |
//| |--------------------------------------------------------------|
//| | Private variables                        | _underscorePrefix |
//| '--------------------------------------------------------------'
//|
//| Comment syntax for the entire project follows JSDoc:
//| - http://code.google.com/p/jsdoc-toolkit/wiki/TagReference
//|
//'*/
require.config({
  deps: ['application'],
  waitSeconds: 45,
  paths: {
    ajaxForm: 'vendor/jquery-contact/jquery.contact',
    greensock: 'vendor/layerslider/js/greensock',
    layerslider: 'vendor/layerslider/js/layerslider.jquery',
    layersliderTransitions: 'vendor/layerslider/js/layerslider.transitions',
    nicescroll: 'vendor/nicescroll/jquery.nicescroll',
    imagesloaded: 'vendor/imagesloaded/imagesloaded.pkgd',
    ilightbox: 'vendor/ilightbox/js/ilightbox.packed',
    easing: 'vendor/fullpage.js/vendors/jquery.easings.min',
    underscore: 'vendor/underscore/underscore',
    modernizr: 'vendor/modernizr/modernizr',
    backbone: 'vendor/backbone/backbone',
    requirejs: 'vendor/requirejs/require',
    mousewheel: 'vendor/jquery-mousewheel/jquery.mousewheel',
    jqueryui: 'vendor/jquery-ui/jquery-ui',
    jquery: 'vendor/jquery/dist/jquery',
  },
  shim: {
    ajaxForm: {
      deps: ['jquery']
    },
    greensock: {
      deps: ['jquery']
    },
    nicescroll: {
      deps: ['jquery']
    },
    ilightbox: {
      deps: ['jquery']
    },
    layersliderTransitions: {
      deps: ['greensock']
    },
    layerslider: {
      deps: ['layersliderTransitions']
    },
    easing: {
      deps: ['jquery']
    },
    mousewheel: {
      deps: ['jquery']
    },
    jqueryui: {
      deps: ['jquery']
    },
    backbone: {
      deps: ['underscore']
    }
  }
});
