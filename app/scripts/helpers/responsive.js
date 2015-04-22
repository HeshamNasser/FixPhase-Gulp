/* global define */
define([], function() {
  'use strict';

  function responsive(input, input2, input3, input4) {
    var DATA = isNaN(input) ? null : input;
    var MIN_VALUE = _MIN_VALUES[_RESLUTION_KEYS.shift()];
    var MAX_VALUE = _MAX_VALUES[_RESLUTION_KEYS.pop()];
    var WINDOW_WIDTH = window.innerWidth;
    var OUTPUT = [];
    var DATA_TYPE;

    // SCOPE
    if (isNaN(DATA)) {
      if (Object.prototype.toString.call(DATA) === '[object Array]') {
        DATA_TYPE = 'array';
        MIN_VALUE = responsiveValueCheck(DATA[0], _MIN_VALUES, MIN_VALUE);
        MAX_VALUE = responsiveValueCheck(DATA[1], _MAX_VALUES, MAX_VALUE);
      } else if ('object' === typeof DATA) {
        DATA_TYPE = 'object';
        if (DATA.hasOwnProperty('min') && isNaN(DATA.min)) {
          MIN_VALUE = responsiveValueCheck(DATA.min, _MIN_VALUES, MAX_VALUE);
        }
        if (DATA.hasOwnProperty('max') && isNaN(DATA.max)) {
          MAX_VALUE = responsiveValueCheck(DATA.max, _MAX_VALUES, MAX_VALUE);
        }
      } else if ('string' === typeof DATA) {
        DATA_TYPE = 'string';
        MIN_VALUE = isNaN(_MIN_VALUES[DATA]) ? _MIN_VALUES[DATA] : MIN_VALUE;
        MAX_VALUE = responsiveValueCheck(input2, _MAX_VALUES, MAX_VALUE);
      } else if ('number' === typeof DATA) {
        DATA_TYPE = 'number';
        MIN_VALUE = DATA;
        MAX_VALUE = responsiveValueCheck(input2, _MAX_VALUES, MAX_VALUE);
      }

      // FUNCTION(s)
      if (DATA_TYPE !== 'array' && DATA_TYPE !== 'object') {
        // FALLBACK
        if (WINDOW_WIDTH > MIN_VALUE && MAX_VALUE > WINDOW_WIDTH) {
          if ('function' === typeof DATA.callback) {
            DATA.callback();
          } else if ('function' === typeof input3) {
            input3();
          }
        }

        // REVERT
        if (WINDOW_WIDTH < MIN_VALUE && MAX_VALUE < WINDOW_WIDTH) {
          if ('function' === typeof DATA.revert) {
            DATA.callback();
          } else if ('function' === typeof input4) {
            input4();
          }
        }
      }
    }

    // RETURN VALUES
    for (var KEY in _RESLUTION_KEYS) {
      if ('min' === DATA) {
        if (WINDOW_WIDTH > _MIN_VALUES[_RESLUTION_KEYS[KEY]]) {
          OUTPUT.push(_RESLUTION_KEYS[KEY]);
        }
      } else if ('max' === DATA) {
        if (WINDOW_WIDTH < _MAX_VALUES[_RESLUTION_KEYS[KEY]]) {
          OUTPUT.push(_RESLUTION_KEYS[KEY]);
        }
      } else {
        if (WINDOW_WIDTH > _MIN_VALUES[_RESLUTION_KEYS[KEY]] &&
            WINDOW_WIDTH < _MAX_VALUES[_RESLUTION_KEYS[KEY]]) {
          OUTPUT = _RESLUTION_KEYS[KEY];
        }
      }
    }

    // RESPONSIVE CHECK
    if (DATA_TYPE !== undefined && DATA_TYPE !== 'array' &&
        DATA_TYPE !== 'object') {
      OUTPUT = WINDOW_WIDTH > MIN_VALUE && MAX_VALUE > WINDOW_WIDTH;
    }
    return OUTPUT;
  }

  var _RESLUTION_KEYS = ['xs', 'sm', 'md', 'lg'];
  var _MIN_VALUES = {
    xs: 0,
    sm: 768,
    md: 992,
    lg: 1200
  };
  var _MAX_VALUES = {
    xs: 767,
    sm: 991,
    md: 1199,
    lg: Number.POSITIVE_INFINITY
  };
  var responsiveValueCheck = function(input, resource, defaultValue) {
    if ('number' === typeof input) {
      return input;
    } else if ('string' === typeof input) {
      return resource[input] ? resource[input] : defaultValue;
    }
  };

  return Function.prototype.responsiveWatch = function() {
    var CURRENT_WIDTH = window.innerWidth;
    return window.addEventListener('resize', function() {
      if (CURRENT_WIDTH !== window.innerWidth) {
        console.info(
          'WINDOW CHANGE:', window.innerWidth + 'x' +
          window.innerHeight, responsive()
        );
        CURRENT_WIDTH = window.innerWidth;
      }
    }), this;
  }, responsive;
});
