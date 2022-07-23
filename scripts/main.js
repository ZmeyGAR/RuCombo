/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "../#RuCombo/#DevSource/scripts/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../#RuCombo/#DevSource/scripts/main.js":
/*!**********************************************!*\
  !*** ../#RuCombo/#DevSource/scripts/main.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("document.addEventListener('DOMContentLoaded', function () {\n  VanillaTilt.init(document.querySelectorAll(\"*[data-tilt]\"), {\n    // reverse: true, // reverse the tilt direction\n    max: 10,\n    // max tilt rotation (degrees)\n    perspective: 1000,\n    // Transform perspective, the lower the more extreme the tilt gets.\n    scale: 1,\n    // 2 = 200%, 1.5 = 150%, etc..\n    speed: 300,\n    // Speed of the enter/exit transition\n    transition: true,\n    // Set a transition on enter/exit.\n    axis: null,\n    // What axis should be disabled. Can be X or Y.\n    easing: \"cubic-bezier(.03,.98,.52,.99)\",\n    // Easing on enter/exit.\n    gyroscope: true,\n    // Boolean to enable/disable device orientation detection,\n    gyroscopeMinAngleX: -45,\n    // This is the bottom limit of the device angle on X axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the left border of the element;\n    gyroscopeMaxAngleX: 45,\n    // This is the top limit of the device angle on X axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the right border of the element;\n    gyroscopeMinAngleY: -45,\n    // This is the bottom limit of the device angle on Y axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the top border of the element;\n    gyroscopeMaxAngleY: 45\n  });\n  AOS.init();\n  ['.counter-success-task', '.counter-executors'].forEach(function (selector) {\n    if (document.querySelector(selector)) {\n      new PureCounter({\n        selector: selector,\n        start: 0,\n        end: document.querySelector(selector).dataset.countEnd,\n        duration: 2,\n        delay: 10,\n        once: true,\n        pulse: false,\n        decimals: 0,\n        legacy: true,\n        filesizing: false,\n        currency: false,\n        formater: \"ru-RU\",\n        separator: false\n      });\n    }\n  });\n});\n\n//# sourceURL=webpack:///../#RuCombo/#DevSource/scripts/main.js?");

/***/ })

/******/ });