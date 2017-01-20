module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.supportedFonts = exports.detectFont = exports.removeQuotes = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _isElement = __webpack_require__(2);

	var _isElement2 = _interopRequireDefault(_isElement);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @constant DEFAULT_OPTIONS
	 * @type {Object}
	 */
	var DEFAULT_OPTIONS = {
	    text: 'abcdefghijklmnopqrstuvwxyz0123456789',
	    fontSize: 72,
	    baseFont: 'monospace'
	};

	/**
	 * @constant BASE_FONTS
	 * @type {String[]}
	 */
	var BASE_FONTS = ['sans-serif', 'serif', 'monospace'];

	/**
	 * @method removeQuotes
	 * @param {String} name
	 * @return {String}
	 */
	var removeQuotes = exports.removeQuotes = function removeQuotes(name) {
	    var matches = String(name).match(/^["']?(.+?)["']?$/i);
	    return Array.isArray(matches) ? matches[1] : '';
	};

	/**
	 * @method throwException
	 * @param {String} message
	 * @return {void}
	 * @throw {Error}
	 */
	var throwException = function throwException(message) {
	    throw new Error('DetectFont: ' + message + '.');
	};

	/**
	 * @method assertText
	 * @param {String} text
	 * @return {void}
	 * @throw {Error}
	 */
	var assertText = function assertText(text) {
	    text === '' && throwException('Setting text to an empty string will always yield false positives');
	};

	/**
	 * @method assertFontSize
	 * @param {Number} fontSize
	 * @return {void}
	 * @throw {Error}
	 */
	var assertFontSize = function assertFontSize(fontSize) {
	    fontSize === 0 && throwException('Setting font size to zero will always yield false positives');
	};

	/**
	 * @method detectFont
	 * @param {HTMLElement} element
	 * @param {Object} [options = DEFAULT_OPTIONS]
	 * @return {String|Boolean}
	 * @throw {Error}
	 */
	var detectFont = exports.detectFont = function detectFont(element) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_OPTIONS;


	    if (!(0, _isElement2.default)(element)) {
	        return void throwException('Cannot detect font on a non-element');
	    }

	    return supportedFonts(element, options)[0] || false;
	};

	/**
	 * @method supportedFonts
	 * @param {HTMLElement} element
	 * @param {Object} [options = DEFAULT_OPTIONS]
	 * @return {Array}
	 */
	var supportedFonts = exports.supportedFonts = function supportedFonts(element) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_OPTIONS;


	    if (!(0, _isElement2.default)(element)) {
	        return [];
	    }

	    var opts = _extends({}, DEFAULT_OPTIONS, options);

	    assertText(options.text);
	    assertFontSize(options.fontSize);

	    var properties = window.getComputedStyle(element);
	    var fontFamily = properties.getPropertyValue('font-family') || element.style.fontFamily || 'serif';
	    var fonts = fontFamily.split(',');
	    var canvas = window.document.createElement('canvas');
	    var context = canvas.getContext('2d');

	    return fonts.map(function (font) {
	        return font.trim();
	    }).map(removeQuotes).map(function (fontName) {

	        if (!!~BASE_FONTS.indexOf(fontName.toLowerCase())) {
	            return fontName;
	        }

	        context.font = opts.fontSize + 'px ' + options.baseFont;
	        var baselineSize = context.measureText(opts.text).width;

	        context.font = opts.fontSize + 'px ' + fontName + ', ' + options.baseFont;
	        return baselineSize !== context.measureText(opts.text).width ? fontName : false;
	    }).filter(function (value) {
	        return value !== false;
	    });
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	(function (root) {
	  function isElement(value) {
	    return value && value.nodeType === 1 && value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object' && Object.prototype.toString.call(value).indexOf('Element') > -1;
	  }

	  if (true) {
	    if (typeof module !== 'undefined' && module.exports) {
	      exports = module.exports = isElement;
	    }
	    exports.isElement = isElement;
	  } else if (typeof define === 'function' && define.amd) {
	    define([], function () {
	      return isElement;
	    });
	  } else {
	    root.isElement = isElement;
	  }
	})(undefined);

/***/ }
/******/ ]);