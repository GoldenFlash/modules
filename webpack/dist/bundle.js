(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "./dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tab_tab_js__ = __webpack_require__(1);

new __WEBPACK_IMPORTED_MODULE_0__tab_tab_js__["a" /* Tab */]();

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tab; });

// var opts = {
// 	element:'.tab',
// 	cartSelector:'.header',
// 	contentSelector:'.content',
// 	activeClassName:'active',
// 	currentClassName:'current'
// }

var Tab = function (options) {
    var defaultOpts = {
        element: '.tab',
        cartSelector: '.header',
        contentSelector: '.content',
        activeClassName: 'active',
        currentClassName: 'current'
    };
    var opts = Object.assign({}, defaultOpts, options);
    var that = this;
    that.index = 1;
    this.events = {};
    this.init(opts);

    this.tab = document.querySelector(this.element);

    this.tabCart = this.tab.querySelectorAll(this.cartSelector + ' li');

    this.contentCart = this.tab.querySelectorAll(this.contentSelector + ' li');

    this.header = this.tab.children[0];

    this.header.addEventListener('click', function (e) {
        that.clickfn(e);
    });
};
Tab.prototype.init = function (options) {
    for (var key in options) {
        this[key] = options[key];
    }
};

Tab.prototype.clickfn = function (e) {

    var that = this;

    that.index = [].indexOf.apply(that.tabCart, [e.target]);

    that.tabCart[that.index].classList.add(that.activeClassName);

    for (var i = 0; i < that.tabCart.length; i++) {
        if (that.tabCart[i] != that.tabCart[that.index]) {
            that.tabCart[i].classList.remove(that.activeClassName);
        }
    }

    that.contentCart[that.index].classList.add(that.currentClassName);

    for (var i = 0; i < that.contentCart.length; i++) {
        if (that.contentCart[i] != that.contentCart[that.index]) {
            that.contentCart[i].classList.remove(that.currentClassName);
        }
    }
};



/***/ })
/******/ ]);
});
//# sourceMappingURL=bundle.js.map