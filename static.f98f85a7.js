(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
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
/******/ 	__webpack_require__.p = "//";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createElement = exports.findExport = exports.resolveExport = exports.requireById = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};
var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod.default : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return _react2.default.createElement(
    'div',
    null,
    'Loading...'
  );
};
var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return _react2.default.createElement(
    'div',
    null,
    'Error: ',
    error && error.message
  );
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return requireById(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {
      console.warn('chunk not available for synchronous require yet: ' + id + ': ' + err.message, err.stack);
    }
  }

  return null;
};

var requireById = exports.requireById = function requireById(id) {
  if (!isWebpack() && typeof id === 'string') {
    return module.require(id);
  }

  return __webpack_require__(id);
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;

  var exp = findExport(mod, key);
  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';
    var info = { isServer: _isServer, isSync: isSync };
    onLoad(mod, info, props, context);
  }
  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return _react2.default.isValidElement(Component) ? _react2.default.cloneElement(Component, props) : _react2.default.createElement(Component, props);
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Profile = __webpack_require__(25);

var _Profile2 = _interopRequireDefault(_Profile);

var _SkillList = __webpack_require__(26);

var _SkillList2 = _interopRequireDefault(_SkillList);

var _ShareLinks = __webpack_require__(8);

var _ShareLinks2 = _interopRequireDefault(_ShareLinks);

var _Footer = __webpack_require__(27);

var _Footer2 = _interopRequireDefault(_Footer);

var _ForkMe = __webpack_require__(28);

var _ForkMe2 = _interopRequireDefault(_ForkMe);

var _jgatjens = __webpack_require__(7);

var _jgatjens2 = _interopRequireDefault(_jgatjens);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// components
var Desc = _styledComponents2.default.p.withConfig({
  displayName: 'Home__Desc',
  componentId: 'isjbmx-0'
})(['margin:0;padding:15px 0 25px 0;line-height:22px;font-weight:200;color:#777777;font-size:13px;text-align:center;']);

var HomePage = _styledComponents2.default.div.withConfig({
  displayName: 'Home__HomePage',
  componentId: 'isjbmx-1'
})(['display:flex;align-items:center;align-items:center;height:100%;flex-direction:column;justify-content:center;']);

exports.default = function () {
  return _react2.default.createElement(
    HomePage,
    null,
    _react2.default.createElement(
      _reactStatic.Head,
      null,
      _react2.default.createElement(
        'title',
        null,
        'Jairo G\xE4tjens - Website'
      ),
      _react2.default.createElement('meta', { name: 'description', content: 'I\'m an experienced Software Developer based in Costa Rica.' }),
      _react2.default.createElement('meta', { name: 'keywords', content: 'Website, Resume, Profile, Github, HTML, CSS, JavaScript' }),
      _react2.default.createElement('meta', { name: 'author', content: 'Jairo G\xE4tjens' }),
      _react2.default.createElement('meta', { property: 'og:type', content: 'website' }),
      _react2.default.createElement('meta', { property: 'og:title', content: 'Jairo G\xE4tjens' }),
      _react2.default.createElement('meta', { property: 'og:description', content: 'I\'m an experienced Software Developer based in Costa Rica.' }),
      _react2.default.createElement('meta', { property: 'og:image', content: _jgatjens2.default }),
      _react2.default.createElement('meta', { name: 'twitter:card', content: 'summary_large_image' }),
      _react2.default.createElement('meta', { name: 'twitter:site', content: '@jgatjens' }),
      _react2.default.createElement('meta', { name: 'twitter:creator', content: '@jgatjens' }),
      _react2.default.createElement('meta', { name: 'twitter:title', content: 'Website Jairo Gatjens' }),
      _react2.default.createElement('meta', { name: 'twitter:description', content: 'Jairo Gatjens has been web developer for 8 years, and is currently a Front End Lead in Costa Rica. He received his degree in Computer Science in 2009. Some of his current responsibilities are: developing quality software, participating in the architecture phase and serving as the platform lead on projects, advising and mentoring fellow developers, assisting in the definition of technology standards and best practices.' }),
      _react2.default.createElement('meta', { name: 'twitter:image', content: _jgatjens2.default })
    ),
    _react2.default.createElement(_ForkMe2.default, null),
    _react2.default.createElement(_Profile2.default, null),
    _react2.default.createElement(_SkillList2.default, null),
    _react2.default.createElement(
      Desc,
      null,
      'Experienced Software  ',
      _react2.default.createElement('br', null),
      'Developer based in Costa Rica.'
    ),
    _react2.default.createElement(_ShareLinks2.default, null),
    _react2.default.createElement(_Footer2.default, null)
  );
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/jgatjens.a21b6ebb.jpg";

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Links = _styledComponents2.default.a.withConfig({
  displayName: 'ShareLinks__Links',
  componentId: 'hr2vms-0'
})(['text-decoration:none;text-transform:uppercase;color:#3B3E49;display:inline-block;']);

var Svg = _styledComponents2.default.svg.withConfig({
  displayName: 'ShareLinks__Svg',
  componentId: 'hr2vms-1'
})(['width:auto;height:30px;margin:0 15px;color:#CDCFD4;&:hover{color:#3B3E49;}']);

var ShareLinks = _styledComponents2.default.div.withConfig({
  displayName: 'ShareLinks',
  componentId: 'hr2vms-2'
})(['text-align:center;']);

exports.default = function () {
  return _react2.default.createElement(
    ShareLinks,
    null,
    _react2.default.createElement(
      Links,
      { href: 'https://twitter.com/jgatjens', target: '_blank' },
      _react2.default.createElement(
        Svg,
        { viewBox: '0 0 16 16' },
        _react2.default.createElement('path', { fill: 'currentColor', d: 'M15.969,3.058c-0.586,0.26-1.217,0.436-1.878,0.515c0.675-0.405,1.194-1.045,1.438-1.809c-0.632,0.375-1.332,0.647-2.076,0.793c-0.596-0.636-1.446-1.033-2.387-1.033c-1.806,0-3.27,1.464-3.27,3.27 c0,0.256,0.029,0.506,0.085,0.745C5.163,5.404,2.753,4.102,1.14,2.124C0.859,2.607,0.698,3.168,0.698,3.767 c0,1.134,0.577,2.135,1.455,2.722C1.616,6.472,1.112,6.325,0.671,6.08c0,0.014,0,0.027,0,0.041c0,1.584,1.127,2.906,2.623,3.206 C3.02,9.402,2.731,9.442,2.433,9.442c-0.211,0-0.416-0.021-0.615-0.059c0.416,1.299,1.624,2.245,3.055,2.271 c-1.119,0.877-2.529,1.4-4.061,1.4c-0.264,0-0.524-0.015-0.78-0.046c1.447,0.928,3.166,1.469,5.013,1.469 c6.015,0,9.304-4.983,9.304-9.304c0-0.142-0.003-0.283-0.009-0.423C14.976,4.29,15.531,3.714,15.969,3.058z' })
      )
    ),
    _react2.default.createElement(
      Links,
      { href: 'https://github.com/jgatjens', target: '_blank' },
      _react2.default.createElement(
        Svg,
        { viewBox: '0 0 16 16' },
        _react2.default.createElement('path', { fill: 'currentColor', d: 'M7.999,0.431c-4.285,0-7.76,3.474-7.76,7.761 c0,3.428,2.223,6.337,5.307,7.363c0.388,0.071,0.53-0.168,0.53-0.374c0-0.184-0.007-0.672-0.01-1.32 c-2.159,0.469-2.614-1.04-2.614-1.04c-0.353-0.896-0.862-1.135-0.862-1.135c-0.705-0.481,0.053-0.472,0.053-0.472 c0.779,0.055,1.189,0.8,1.189,0.8c0.692,1.186,1.816,0.843,2.258,0.645c0.071-0.502,0.271-0.843,0.493-1.037 C4.86,11.425,3.049,10.76,3.049,7.786c0-0.847,0.302-1.54,0.799-2.082C3.768,5.507,3.501,4.718,3.924,3.65 c0,0,0.652-0.209,2.134,0.796C6.677,4.273,7.34,4.187,8,4.184c0.659,0.003,1.323,0.089,1.943,0.261 c1.482-1.004,2.132-0.796,2.132-0.796c0.423,1.068,0.157,1.857,0.077,2.054c0.497,0.542,0.798,1.235,0.798,2.082 c0,2.981-1.814,3.637-3.543,3.829c0.279,0.24,0.527,0.713,0.527,1.437c0,1.037-0.01,1.874-0.01,2.129 c0,0.208,0.14,0.449,0.534,0.373c3.081-1.028,5.302-3.935,5.302-7.362C15.76,3.906,12.285,0.431,7.999,0.431z' })
      )
    ),
    _react2.default.createElement(
      Links,
      { href: 'https://www.linkedin.com/in/jgatjens', target: '_blank' },
      _react2.default.createElement(
        Svg,
        { viewBox: '0 0 430.1 430.1' },
        _react2.default.createElement('path', { fill: 'currentColor', d: 'M430.1 261.5V420.6h-92.2V272.2c0-37.3-13.3-62.7-46.7-62.7 -25.5 0-40.6 17.1-47.3 33.7 -2.4 5.9-3.1 14.2-3.1 22.5V420.6h-92.2c0 0 1.2-251.3 0-277.3h92.2v39.3c-0.2 0.3-0.4 0.6-0.6 0.9h0.6v-0.9c12.3-18.9 34.1-45.8 83.1-45.8C384.6 136.7 430.1 176.4 430.1 261.5zM52.2 9.6C20.6 9.6 0 30.3 0 57.5c0 26.6 20 47.9 51 47.9h0.6c32.2 0 52.2-21.3 52.2-47.9C103.1 30.3 83.7 9.6 52.2 9.6zM5.5 420.6h92.2v-277.3H5.5V420.6z' })
      )
    ),
    _react2.default.createElement(
      Links,
      { href: 'https://www.twitch.tv/jgatjens', target: '_blank' },
      _react2.default.createElement(
        Svg,
        { fill: 'currentColor', width: '28', height: '28' },
        _react2.default.createElement('path', { d: 'M1.969 0L0 4.806v19.642h7V28h3.938l3.718-3.552h5.688L28 17.134V0H1.969zm23.406 15.88L21 20.06h-7l-3.719 3.552V20.06H4.375V2.507h21v13.374zM21 7.314v7.314h-2.625V7.313H21zm-7 0v7.314h-2.625V7.313H14z' })
      )
    )
  );
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactStatic = __webpack_require__(2);

var _ShareLinks = __webpack_require__(8);

var _ShareLinks2 = _interopRequireDefault(_ShareLinks);

var _PromoHeader = __webpack_require__(30);

var _PromoHeader2 = _interopRequireDefault(_PromoHeader);

var _Schedule = __webpack_require__(33);

var _Schedule2 = _interopRequireDefault(_Schedule);

var _sharePromo = __webpack_require__(34);

var _sharePromo2 = _interopRequireDefault(_sharePromo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// components
var PromoPage = _styledComponents2.default.div.withConfig({
  displayName: 'Promo__PromoPage',
  componentId: 'sc-1chc8xc-0'
})(['display:block;height:100%;.container{max-width:440px;margin:0 auto;padding-top:35px;padding-left:20px;padding-right:20px;color:#3B3E48;}h2{font-size:20px;font-weight:normal;}ul{font-size:14px;line-height:22px;list-style:disc;padding-left:18px;}div[class*="ShareLinks"]{margin-top:30px;text-align:left;}']);

var Desc = _styledComponents2.default.p.withConfig({
  displayName: 'Promo__Desc',
  componentId: 'sc-1chc8xc-1'
})(['color:#3B3E48;font-size:16px;line-height:1.4;margin-top:0;margin-bottom:25px;']);

exports.default = function () {
  return _react2.default.createElement(
    PromoPage,
    null,
    _react2.default.createElement(
      _reactStatic.Head,
      null,
      _react2.default.createElement(
        'title',
        null,
        'Twitch Promo - Jairo G\xE4tjens'
      ),
      _react2.default.createElement('meta', { name: 'description', content: 'Estaremos sorteando un skin de League of legends cada semana en el stream de los viernes a las 9:00 pm (-06  CST)' }),
      _react2.default.createElement('meta', { name: 'keywords', content: 'Promo, twitch, jgatjens, Lol, League, Legends, Games' }),
      _react2.default.createElement('meta', { name: 'author', content: 'Jairo G\xE4tjens' }),
      _react2.default.createElement('meta', { property: 'og:type', content: 'website' }),
      _react2.default.createElement('meta', { property: 'og:title', content: 'Twitch Promo - Jairo G\xE4tjens' }),
      _react2.default.createElement('meta', { property: 'og:description', content: 'Estaremos sorteando un skin de League of legends cada semana en el stream de los viernes a las 9:00 pm (-06  CST)' }),
      _react2.default.createElement('meta', { property: 'og:image', content: _sharePromo2.default }),
      _react2.default.createElement('meta', { name: 'twitter:card', content: 'summary_large_image' }),
      _react2.default.createElement('meta', { name: 'twitter:site', content: '@jgatjens' }),
      _react2.default.createElement('meta', { name: 'twitter:creator', content: '@jgatjens' }),
      _react2.default.createElement('meta', { name: 'twitter:title', content: 'Twitch Promo - Jairo G\xE4tjens' }),
      _react2.default.createElement('meta', { name: 'twitter:description', content: 'Estaremos sorteando un skin de League of legends cada semana en el stream de los viernes a las 9:00 pm (-06  CST)' }),
      _react2.default.createElement('meta', { name: 'twitter:image', content: _sharePromo2.default })
    ),
    _react2.default.createElement(_PromoHeader2.default, null),
    _react2.default.createElement(
      'div',
      { className: 'container' },
      _react2.default.createElement(
        Desc,
        null,
        'Estaremos sorteando un skin de League of legends cada semana.'
      ),
      _react2.default.createElement(_Schedule2.default, null),
      _react2.default.createElement(
        'h2',
        null,
        'Reglas del concurso'
      ),
      _react2.default.createElement(
        'ul',
        null,
        _react2.default.createElement(
          'li',
          null,
          'Ser follower del stream ',
          _react2.default.createElement(
            'a',
            { href: 'https://www.twitch.tv/jgatjens', target: '_blank' },
            'https://www.twitch.tv/jgatjens'
          ),
          '.'
        ),
        _react2.default.createElement(
          'li',
          null,
          'Se hara una rifa entre los followers.'
        ),
        _react2.default.createElement(
          'li',
          null,
          'Estar presente el dia del sorteo.'
        ),
        _react2.default.createElement(
          'li',
          null,
          'Dudas por discord o bien los d\xEDas del stream.'
        ),
        _react2.default.createElement(
          'li',
          null,
          'Al final del stream se dara a conocer el ganador.'
        ),
        _react2.default.createElement(
          'li',
          null,
          'El ganador debera tener cuenta de League of legends en LAN para resivir el skin.'
        )
      ),
      _react2.default.createElement(_ShareLinks2.default, null)
    )
  );
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

exports.default = function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h1',
      null,
      '404 - Oh no\'s! We couldn\'t find that page :('
    )
  );
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(12);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(13);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Export your top level component as JSX (for static rendering)
exports.default = _App2.default;

// Render your app


// Your top level component

if (typeof document !== 'undefined') {
  var renderMethod =  false ? _reactDom2.default.render : _reactDom2.default.hydrate || _reactDom2.default.render;
  var render = function render(Comp) {
    renderMethod(_react2.default.createElement(Comp, null), document.getElementById('root'));
  };

  // Render!
  render(_App2.default);
}

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  ', '\n  \n  body, html {\n    font-family: \'Roboto\';\n    font-size: 16px;\n    margin: 0;\n    padding: 0;\n    height: 100%;\n  }\n\n  #root {\n    height: 100%;\n  }\n'], ['\n  ', '\n  \n  body, html {\n    font-family: \'Roboto\';\n    font-size: 16px;\n    margin: 0;\n    padding: 0;\n    height: 100%;\n  }\n\n  #root {\n    height: 100%;\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

var _styledComponents = __webpack_require__(1);

var _styledNormalize = __webpack_require__(14);

var _styledNormalize2 = _interopRequireDefault(_styledNormalize);

var _reactHotLoader = __webpack_require__(15);

var _reactStaticRoutes = __webpack_require__(16);

var _reactStaticRoutes2 = _interopRequireDefault(_reactStaticRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
//


(0, _styledComponents.injectGlobal)(_templateObject, _styledNormalize2.default);

var App = function App() {
  return _react2.default.createElement(
    _reactStatic.Router,
    null,
    _react2.default.createElement(_reactStaticRoutes2.default, null)
  );
};

exports.default = (0, _reactHotLoader.hot)(module)(App);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("styled-normalize");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path2 = __webpack_require__(17);

var _path3 = _interopRequireDefault(_path2);

var _importCss2 = __webpack_require__(18);

var _importCss3 = _interopRequireDefault(_importCss2);

var _universalImport2 = __webpack_require__(19);

var _universalImport3 = _interopRequireDefault(_universalImport2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(20);

var _reactUniversalComponent = __webpack_require__(21);

var _reactUniversalComponent2 = _interopRequireDefault(_reactUniversalComponent);

var _reactStatic = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _reactUniversalComponent.setHasBabelPlugin)();

var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return _react2.default.createElement(
      'div',
      null,
      'An error occurred loading this page\'s template. More information is available in the console.'
    );
  }
};

var t_0 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Home',
  file: 'C:/Users/jgatjens/Dev/jgatjens.github.io/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 6)), (0, _importCss3.default)('src/containers/Home', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Home');
  },
  resolve: function resolve() {
    return /*require.resolve*/(6);
  },
  chunkName: function chunkName() {
    return 'src/containers/Home';
  }
}), universalOptions);
var t_1 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Promo',
  file: 'C:/Users/jgatjens/Dev/jgatjens.github.io/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 9)), (0, _importCss3.default)('src/containers/Promo', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Promo');
  },
  resolve: function resolve() {
    return /*require.resolve*/(9);
  },
  chunkName: function chunkName() {
    return 'src/containers/Promo';
  }
}), universalOptions);
var t_2 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/404',
  file: 'C:/Users/jgatjens/Dev/jgatjens.github.io/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 10)), (0, _importCss3.default)('src/containers/404', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/404');
  },
  resolve: function resolve() {
    return /*require.resolve*/(10);
  },
  chunkName: function chunkName() {
    return 'src/containers/404';
  }
}), universalOptions);

// Template Map
global.componentsByTemplateID = global.componentsByTemplateID || [t_0, t_1, t_2];

// Template Tree
global.templateIDsByPath = global.templateIDsByPath || {
  '404': 2

  // Get template for given path
};var getComponentForPath = function getComponentForPath(path) {
  path = (0, _reactStatic.cleanPath)(path);
  return global.componentsByTemplateID[global.templateIDsByPath[path]];
};

global.reactStaticGetComponentForPath = getComponentForPath;
global.reactStaticRegisterTemplateIDForPath = function (path, id) {
  global.templateIDsByPath[path] = id;
};

var Routes = function (_Component) {
  _inherits(Routes, _Component);

  function Routes() {
    _classCallCheck(this, Routes);

    return _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).apply(this, arguments));
  }

  _createClass(Routes, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          Comp = _props.component,
          render = _props.render,
          children = _props.children;


      var getFullComponentForPath = function getFullComponentForPath(path) {
        var Comp = getComponentForPath(path);
        var is404 = path === '404';
        if (!Comp) {
          is404 = true;
          Comp = getComponentForPath('404');
        }
        return function (newProps) {
          return Comp ? _react2.default.createElement(Comp, _extends({}, newProps, is404 ? { is404: true } : {})) : null;
        };
      };

      var renderProps = {
        componentsByTemplateID: global.componentsByTemplateID,
        templateIDsByPath: global.templateIDsByPath,
        getComponentForPath: getFullComponentForPath
      };

      if (Comp) {
        return _react2.default.createElement(Comp, renderProps);
      }

      if (render || children) {
        return (render || children)(renderProps);
      }

      // This is the default auto-routing renderer
      return _react2.default.createElement(_reactRouterDom.Route, { path: '*', render: function render(props) {
          var Comp = getFullComponentForPath(props.location.pathname);
          // If Comp is used as a component here, it triggers React to re-mount the entire
          // component tree underneath during reconciliation, losing all internal state.
          // By unwrapping it here we keep the real, static component exposed directly to React.
          return Comp && Comp(_extends({}, props, { key: props.location.pathname }));
        } });
    }
  }]);

  return Routes;
}(_react.Component);

exports.default = Routes;
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/importCss");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requireUniversalModule = __webpack_require__(22);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(23);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks).default;
  }
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(24);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (
    // $FlowIgnore
    module.hot && (module.hot.data || module.hot.status() === 'apply')
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(component) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.modCache = {};
  options.promCache = {};

  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, null, [{
      key: 'preload',

      /* eslint-enable react/sort-comp */

      /* eslint-disable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        props = props || {};

        var _req = (0, _requireUniversalModule2.default)(component, options, props),
            requireAsync = _req.requireAsync,
            requireSync = _req.requireSync;

        var Component = void 0;

        try {
          Component = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (Component) return Component;
          return requireAsync(props, context);
        }).then(function (Component) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });
          return Component;
        });
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        if (!_this._mounted) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = { error: null };
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this._mounted = true;

        var _req2 = (0, _requireUniversalModule2.default)(component, options, this.props),
            addModule = _req2.addModule,
            requireSync = _req2.requireSync,
            requireAsync = _req2.requireAsync,
            asyncOnly = _req2.asyncOnly;

        var Component = void 0;

        try {
          Component = requireSync(this.props, this.context);
        } catch (error) {
          return this.update({ error: error });
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(this.props); // record the module for SSR flushing :)

        if (this.context.report) {
          this.context.report(chunkName);
        }

        if (Component || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          this.update({ Component: Component }, true, true, _utils.isServer);
          return;
        }

        this.handleBefore(true, false);
        this.requireAsync(requireAsync, this.props, true);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._mounted = false;
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var _this2 = this;

        if (isDynamic || this._asyncOnly) {
          var _req3 = (0, _requireUniversalModule2.default)(component, options, nextProps, this.props),
              requireSync = _req3.requireSync,
              requireAsync = _req3.requireAsync,
              shouldUpdate = _req3.shouldUpdate;

          if (shouldUpdate(nextProps, this.props)) {
            var Component = void 0;

            try {
              Component = requireSync(nextProps, this.context);
            } catch (error) {
              return this.update({ error: error });
            }

            this.handleBefore(false, !!Component);

            if (!Component) {
              return this.requireAsync(requireAsync, nextProps);
            }

            var state = { Component: Component };

            if (alwaysDelay) {
              if (loadingTransition) this.update({ Component: null }); // display `loading` during componentWillReceiveProps
              setTimeout(function () {
                return _this2.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          } else if (isHMR()) {
            var _Component = requireSync(nextProps, this.context);
            this.setState({ Component: function Component() {
                return null;
              } }); // HMR /w Redux and HOCs can be finicky, so we
            setTimeout(function () {
              return _this2.setState({ Component: _Component });
            }); // toggle components to insure updates occur
          }
        }
      }
    }, {
      key: 'requireAsync',
      value: function requireAsync(_requireAsync, props, isMount) {
        var _this3 = this;

        if (this.state.Component && loadingTransition) {
          this.update({ Component: null }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();

        _requireAsync(props, this.context).then(function (Component) {
          var state = { Component: Component };

          var timeLapsed = new Date() - time;
          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this3.update(state, isMount);
            }, extraDelay);
          }

          _this3.update(state, isMount);
        }).catch(function (error) {
          return _this3.update({ error: error });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;

          var info = { isMount: isMount, isSync: isSync, isServer: isServer };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var Component = state.Component,
            error = state.error;


        if (Component && !error) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;

            var info = { isMount: isMount, isSync: isSync, isServer: isServer };
            onAfter(info, Component);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      }
    }, {
      key: 'render',
      value: function render() {
        var _state = this.state,
            error = _state.error,
            Component = _state.Component;

        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        // user-provided props (e.g. for data-fetching loading):


        if (isLoading) {
          return (0, _utils.createElement)(Loading, props);
        } else if (userError) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: userError }));
        } else if (error) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: error }));
        } else if (Component) {
          // primary usage (for async import loading + errors):
          return (0, _utils.createElement)(Component, props);
        }

        return (0, _utils.createElement)(Loading, props);
      }
    }]);

    return UniversalComponent;
  }(_react2.default.Component), _class.contextTypes = {
    store: _propTypes2.default.object,
    report: _propTypes2.default.func
  }, _temp;
}
exports.default = universal;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;
exports.default = requireUniversalModule;

var _utils = __webpack_require__(4);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache;


  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;

  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);

    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;

    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);
        if (onError) {
          var _isServer = typeof window === 'undefined';
          var info = { isServer: _isServer };
          onError(error, info);
        }
        rej(error);
      };

      // const timer = timeout && setTimeout(reject, timeout)
      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);

        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);

        reject(new Error('export not found'));
      };

      var request = load(props, { resolve: resolve, reject: reject });

      // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.
      if (!request || typeof request.then !== 'function') return;
      request.then(resolve).catch(reject);
    });

    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);
        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);

    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);

    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    return typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };

  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load
  };
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2.default.Component);

ReportChunks.propTypes = {
  report: _propTypes2.default.func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2.default.func.isRequired
};
exports.default = ReportChunks;

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _jgatjens = __webpack_require__(7);

var _jgatjens2 = _interopRequireDefault(_jgatjens);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Logo = _styledComponents2.default.img.withConfig({
  displayName: 'Profile__Logo',
  componentId: 'sc-9a693q-0'
})(['margin:0 auto;background-color:#F2F2F2;display:block;width:200px;height:200px;']);

var Title = _styledComponents2.default.h1.withConfig({
  displayName: 'Profile__Title',
  componentId: 'sc-9a693q-1'
})(['margin:0.67em 0;color:#3B3E48;font-size:22px;font-weight:500;word-spacing:2px;small{padding-top:5px;display:block;font-weight:200;color:#777777;font-size:13px;}']);

var Picture = _styledComponents2.default.div.withConfig({
  displayName: 'Profile__Picture',
  componentId: 'sc-9a693q-2'
})(['text-align:center;']);

exports.default = function () {
  return _react2.default.createElement(
    Picture,
    null,
    _react2.default.createElement(Logo, { src: _jgatjens2.default, alt: 'Jairo Gatjens' }),
    _react2.default.createElement(
      Title,
      null,
      'Jairo G\xE4tjens ',
      _react2.default.createElement(
        'small',
        null,
        'Heredia, Costa Rica'
      )
    )
  );
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SkillList = _styledComponents2.default.div.withConfig({
  displayName: 'SkillList',
  componentId: 'sc-1qnmrb0-0'
})(['padding-top:10px;text-align:center;']);

var Button = _styledComponents2.default.a.withConfig({
  displayName: 'SkillList__Button',
  componentId: 'sc-1qnmrb0-1'
})(['display:inline-block;font-size:15px;border-radius:20px;padding:7px 18px;border:1px solid #CDCFD4;margin:0 2px 10px;font-weight:200;color:#777777;text-decoration:none;text-transform:uppercase;', ''], function (props) {
  return props.active && (0, _styledComponents.css)(['background-color:#3B3E49;border-color:#3B3E49;color:white;']);
});

exports.default = function () {
  return _react2.default.createElement(
    SkillList,
    null,
    _react2.default.createElement(
      Button,
      { href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/', target: '_blank' },
      'Javascript'
    ),
    _react2.default.createElement(
      Button,
      { href: 'https://nodejs.org/', target: '_blank' },
      'Nodejs'
    ),
    _react2.default.createElement(
      Button,
      { href: 'https://facebook.github.io/react-native/', target: '_blank' },
      'Mobile'
    ),
    _react2.default.createElement(
      Button,
      { active: true, href: 'https://www.linkedin.com/in/jgatjens?trk=hp-identity-photo#background-skills-container', target: '_blank' },
      '+10'
    )
  );
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = _styledComponents2.default.div.withConfig({
  displayName: 'Footer',
  componentId: 'sc-1qy0s7h-0'
})(['text-decoration:none;text-transform:uppercase;color:#3B3E49;display:inline-block;width:100%;text-align:center;.line{margin:40px auto 20px auto;height:1px;display:block;width:150px;background-color:#E6E7E9;}a{text-decoration:none;text-transform:uppercase;color:#3B3E49;padding:10px 0;display:block;font-weight:800;}']);

exports.default = function () {
  return _react2.default.createElement(
    Footer,
    null,
    _react2.default.createElement('div', { className: 'line' }),
    _react2.default.createElement(
      'a',
      { href: 'mailto:jgatjens@gmail.com' },
      'Hire me'
    )
  );
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _forkme = __webpack_require__(29);

var _forkme2 = _interopRequireDefault(_forkme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ForkMe = _styledComponents2.default.a.withConfig({
    displayName: 'ForkMe',
    componentId: 'sc-1kd4ieh-0'
})(['  position:absolute;top:0;right:0;border:0;']);

exports.default = function () {
    return _react2.default.createElement(
        ForkMe,
        { href: 'https://github.com/jgatjens/jgatjens.github.io/tree/develop' },
        _react2.default.createElement('img', { src: _forkme2.default, alt: 'Fork me on GitHub',
            datacanonicalsrc: 'https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png' })
    );
};

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNy4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMTQ5cHgiIGhlaWdodD0iMTQ5cHgiIHZpZXdCb3g9IjAgMCAxNDkgMTQ5IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxNDkgMTQ5OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8cmVjdCBzdHlsZT0iZmlsbDpub25lOyIgd2lkdGg9IjE0OSIgaGVpZ2h0PSIxNDkiLz4NCgkNCgkJPHRleHQgdHJhbnNmb3JtPSJtYXRyaXgoMC43MDcxIDAuNzA3MSAtMC43MDcxIDAuNzA3MSA0My40NzM3IDIyLjM3MykiIHN0eWxlPSJmaWxsOiM3ODc4Nzg7IGZvbnQtZmFtaWx5OidSb2JvdG8tUmVndWxhcic7IGZvbnQtc2l6ZToxNC45MDAxOyI+Rm9yayBtZSBvbiBHaXRIdWI8L3RleHQ+DQoJPGc+DQoJCTxnPg0KCQkJPHBvbHlnb24gc3R5bGU9ImZpbGw6I0NFRDBENDsiIHBvaW50cz0iNDguOTY1LDAgMTQ5LDEwMC4wMzUgMTQ5LDk3LjkyOCA1MS4wNzIsMCAJCQkiLz4NCgkJCTxwb2x5Z29uIHN0eWxlPSJmaWxsOiNDRUQwRDQ7IiBwb2ludHM9IjE0OSwxNDQuMjg2IDQuNzE0LDAgMi42MDcsMCAxNDksMTQ2LjM5MyAJCQkiLz4NCgkJPC9nPg0KCTwvZz4NCjwvZz4NCjwvc3ZnPg0K"

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _headerLeft = __webpack_require__(31);

var _headerLeft2 = _interopRequireDefault(_headerLeft);

var _headerRight = __webpack_require__(32);

var _headerRight2 = _interopRequireDefault(_headerRight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PromoHeader = _styledComponents2.default.div.withConfig({
  displayName: 'PromoHeader',
  componentId: 'cpo0n-0'
})(['display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;background-color:#202255;min-height:396px;position:relative;color:white;.bg-left,.bg-right{background-size:contain;background-repeat:no-repeat;background-position-y:bottom;position:absolute;height:100%;width:260px;top:0;z-index:0;}.bg-left{background-image:url(', ');background-position-x:left;left:0;}.bg-right{background-image:url(', ');background-position-x:right;right:0;}svg,a,h1,div{z-index:1;}'], _headerLeft2.default, _headerRight2.default);

var Title = _styledComponents2.default.h1.withConfig({
  displayName: 'PromoHeader__Title',
  componentId: 'cpo0n-1'
})(['font-size:40px;line-height:1;max-width:266px;margin:0 auto;text-align:center;margin-top:30px;text-transform:capitalize;@media (max-width:480px){font-size:25px;}']);

var Winner = _styledComponents2.default.div.withConfig({
  displayName: 'PromoHeader__Winner',
  componentId: 'cpo0n-2'
})(['font-size:13px;line-height:1.3;text-align:center;padding-top:30px;padding-bottom:50px;@media (max-width:480px){padding-bottom:25px;}a{color:white;}span{font-weight:bold;}']);

exports.default = function () {
  return _react2.default.createElement(
    PromoHeader,
    null,
    _react2.default.createElement('div', { className: 'bg-left' }),
    _react2.default.createElement('div', { className: 'bg-right' }),
    _react2.default.createElement(
      _reactStatic.Link,
      { exact: true, to: '/' },
      _react2.default.createElement(
        'svg',
        { width: '25', height: '14' },
        _react2.default.createElement(
          'g',
          { stroke: '#FFF', strokeWidth: '2', fill: 'currentColor' },
          _react2.default.createElement('path', { d: 'M23.02 7H2', strokeLinecap: 'square' }),
          _react2.default.createElement('path', { d: 'M5.5 12.5l-4-5.377 4-5.623' })
        )
      )
    ),
    _react2.default.createElement(
      Title,
      null,
      'Skin Gratis cada semana'
    ),
    _react2.default.createElement(
      Winner,
      null,
      'Ganador actual ',
      _react2.default.createElement('br', null),
      'usuario: ',
      _react2.default.createElement(
        'a',
        { href: 'https://www.twitch.tv/xnexuxx', target: '_blank' },
        'xnexuxx'
      )
    ),
    _react2.default.createElement(
      'svg',
      { width: '75', height: '43' },
      _react2.default.createElement('path', { d: 'M46.713 0l-1.038 3.14.026 14.495h3.866v1.932h2.077l2.076-1.932h3.633l6.747-6.281V0H46.713zm15.57 10.388l-2.854 2.657h-4.671l-2.595 2.416v-2.416H48.27V1.69h14.014v8.697zm-4.67-5.557h1.816v4.832h-1.817V4.83zm-4.672 0h1.817v4.832H52.94V4.83zM75 27.298v11.354L68.253 43H64.1v-1.933L60.986 43h-3.633v-1.933L55.017 43H48.27l-2.076-1.933-.52 1.933-5.942-.024-2.362-1.909L37.11 43l-6.747-.024-.26-1.909-1.816 1.909-10.38.024-2.077-.966V43h-5.709l-6.228-3.624L0 35.753V19.809h8.045l3.893 3.624h17.647v-3.624h14.533v3.624h3.633v1.932l2.076-1.932h4.412l3.892-3.624h8.305v3.624h4.412L75 27.298zm-64.879-2.174H6.488V21.5H1.817v13.528l2.854 2.899h5.45v-4.59H6.488v-3.865h3.633v-4.348zm19.464 0h-4.672v8.213h-1.816v-8.213h-4.412v8.213H16.87v-8.213h-4.931v12.803H26.47l3.114-2.899v-9.904zm6.228 0h-4.412v12.803h4.412V25.124zm0-3.624h-4.412v1.933h4.412V21.5zm10.121 3.624h-3.633V21.5H37.63v13.528l2.854 2.899h5.45v-4.59h-3.633v-3.865h3.633v-4.348zm11.938 0h-7.266L47.75 27.78v7.247l3.114 2.899h7.007v-4.59h-5.19v-3.865h5.19v-4.348zm15.311 2.657l-3.114-2.657h-5.45V21.5h-4.93v16.427h4.93v-8.455h3.634v8.455h4.93V27.781z', fill: '#FFF' })
    )
  );
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/header-left.57ece537.png";

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/header-right.9d75552f.png";

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schedule = _styledComponents2.default.div.withConfig({
  displayName: 'Schedule',
  componentId: 'zs5z7e-0'
})(['a{display:flex;align-items:center;padding-bottom:5px;text-decoration:none;}svg{position:relative;margin-left:5px;left:0px;transform:rotate(180deg) scale(0.7);transition:left 300ms ease-in-out 0s;}']);

exports.default = function () {
  return _react2.default.createElement(
    Schedule,
    null,
    _react2.default.createElement(
      'a',
      { href: 'https://www.twitch.tv/popout/jgatjens/extensions/naty2zwfp7vecaivuve8ef1hohh6bo/panel', target: '_blank' },
      'Horario',
      _react2.default.createElement(
        'svg',
        { width: '25', height: '14' },
        _react2.default.createElement(
          'g',
          { stroke: 'currentColor', strokeWidth: '2', fill: 'transparent' },
          _react2.default.createElement('path', { d: 'M23.02 7H2', strokeLinecap: 'square' }),
          _react2.default.createElement('path', { d: 'M5.5 12.5l-4-5.377 4-5.623' })
        )
      )
    )
  );
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/share-promo.1de58934.png";

/***/ })
/******/ ]);
});
//# sourceMappingURL=static.f98f85a7.js.map