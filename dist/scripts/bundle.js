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
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var sum = function sum(a, b) {
  return a + b;
};

exports.default = sum;

/***/ },
/* 1 */
/***/ function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _sum = __webpack_require__(0);

var _sum2 = _interopRequireDefault(_sum);

var _prismic = __webpack_require__(1);

var _prismic2 = _interopRequireDefault(_prismic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var total = (0, _sum2.default)(1, 3);
console.log(total, _prismic2.default);

/***/ }
/******/ ]);