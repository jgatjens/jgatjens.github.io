(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
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
/******/ 	// The chunk loading function for additional chunks
/******/ 	// Since all referenced chunks are already included
/******/ 	// in this file, this function is empty here.
/******/ 	__webpack_require__.e = function requireEnsure() {
/******/ 		return Promise.resolve();
/******/ 	};
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 35);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/taggedTemplateLiteral");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@reach/router");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);


var _templateObject, _templateObject2, _templateObject3;



var Links = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.a(_templateObject || (_templateObject = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  text-decoration: none;\n  text-transform: uppercase;\n  color: #3B3E49;\n  display: inline-block;\n  margin-top: 25px;\n"])));
var Svg = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.svg(_templateObject2 || (_templateObject2 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  width: auto;\n  height: 30px;\n  margin: 0 15px;\n  color: #020218;\n\n  &:hover {\n    color: #FF2F4A;\n  }\n"])));
var ShareLinks = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject3 || (_templateObject3 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  text-align: center;\n"])));
/* harmony default export */ __webpack_exports__["a"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ShareLinks, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Links, {
    href: "https://twitter.com/jgatjens",
    target: "_blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Svg, {
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "currentColor",
    d: "M15.969,3.058c-0.586,0.26-1.217,0.436-1.878,0.515c0.675-0.405,1.194-1.045,1.438-1.809c-0.632,0.375-1.332,0.647-2.076,0.793c-0.596-0.636-1.446-1.033-2.387-1.033c-1.806,0-3.27,1.464-3.27,3.27 c0,0.256,0.029,0.506,0.085,0.745C5.163,5.404,2.753,4.102,1.14,2.124C0.859,2.607,0.698,3.168,0.698,3.767 c0,1.134,0.577,2.135,1.455,2.722C1.616,6.472,1.112,6.325,0.671,6.08c0,0.014,0,0.027,0,0.041c0,1.584,1.127,2.906,2.623,3.206 C3.02,9.402,2.731,9.442,2.433,9.442c-0.211,0-0.416-0.021-0.615-0.059c0.416,1.299,1.624,2.245,3.055,2.271 c-1.119,0.877-2.529,1.4-4.061,1.4c-0.264,0-0.524-0.015-0.78-0.046c1.447,0.928,3.166,1.469,5.013,1.469 c6.015,0,9.304-4.983,9.304-9.304c0-0.142-0.003-0.283-0.009-0.423C14.976,4.29,15.531,3.714,15.969,3.058z"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Links, {
    href: "https://github.com/jgatjens",
    target: "_blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Svg, {
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "currentColor",
    d: "M7.999,0.431c-4.285,0-7.76,3.474-7.76,7.761 c0,3.428,2.223,6.337,5.307,7.363c0.388,0.071,0.53-0.168,0.53-0.374c0-0.184-0.007-0.672-0.01-1.32 c-2.159,0.469-2.614-1.04-2.614-1.04c-0.353-0.896-0.862-1.135-0.862-1.135c-0.705-0.481,0.053-0.472,0.053-0.472 c0.779,0.055,1.189,0.8,1.189,0.8c0.692,1.186,1.816,0.843,2.258,0.645c0.071-0.502,0.271-0.843,0.493-1.037 C4.86,11.425,3.049,10.76,3.049,7.786c0-0.847,0.302-1.54,0.799-2.082C3.768,5.507,3.501,4.718,3.924,3.65 c0,0,0.652-0.209,2.134,0.796C6.677,4.273,7.34,4.187,8,4.184c0.659,0.003,1.323,0.089,1.943,0.261 c1.482-1.004,2.132-0.796,2.132-0.796c0.423,1.068,0.157,1.857,0.077,2.054c0.497,0.542,0.798,1.235,0.798,2.082 c0,2.981-1.814,3.637-3.543,3.829c0.279,0.24,0.527,0.713,0.527,1.437c0,1.037-0.01,1.874-0.01,2.129 c0,0.208,0.14,0.449,0.534,0.373c3.081-1.028,5.302-3.935,5.302-7.362C15.76,3.906,12.285,0.431,7.999,0.431z"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Links, {
    href: "https://www.linkedin.com/in/jgatjens",
    target: "_blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Svg, {
    viewBox: "0 0 430.1 430.1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "currentColor",
    d: "M430.1 261.5V420.6h-92.2V272.2c0-37.3-13.3-62.7-46.7-62.7 -25.5 0-40.6 17.1-47.3 33.7 -2.4 5.9-3.1 14.2-3.1 22.5V420.6h-92.2c0 0 1.2-251.3 0-277.3h92.2v39.3c-0.2 0.3-0.4 0.6-0.6 0.9h0.6v-0.9c12.3-18.9 34.1-45.8 83.1-45.8C384.6 136.7 430.1 176.4 430.1 261.5zM52.2 9.6C20.6 9.6 0 30.3 0 57.5c0 26.6 20 47.9 51 47.9h0.6c32.2 0 52.2-21.3 52.2-47.9C103.1 30.3 83.7 9.6 52.2 9.6zM5.5 420.6h92.2v-277.3H5.5V420.6z"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Links, {
    href: "https://www.twitch.tv/jgatjens",
    target: "_blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Svg, {
    fill: "currentColor",
    width: "28",
    height: "28"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M1.969 0L0 4.806v19.642h7V28h3.938l3.718-3.552h5.688L28 17.134V0H1.969zm23.406 15.88L21 20.06h-7l-3.719 3.552V20.06H4.375V2.507h21v13.374zM21 7.314v7.314h-2.625V7.313H21zm-7 0v7.314h-2.625V7.313H14z"
  }))));
});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = __webpack_require__(13);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _requireUniversalModule = __webpack_require__(41);

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

var _reportChunks = __webpack_require__(43);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks)["default"];
  }
});
exports["default"] = universal;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(19);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(21);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _context = __webpack_require__(20);

var _context2 = _interopRequireDefault(_context);

var _utils = __webpack_require__(14);

var _helpers = __webpack_require__(44);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (// $FlowIgnore
    module.hot && (false)
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(asyncModule) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var userRender = opts.render,
      _opts$loading = opts.loading,
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
      options = _objectWithoutProperties(opts, ['render', 'loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var renderFunc = userRender || (0, _utils.createDefaultRender)(Loading, Err);
  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.usesBabelPlugin = hasBabelPlugin;
  options.modCache = {};
  options.promCache = {};
  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, [{
      key: 'requireAsyncInner',
      value: function requireAsyncInner(requireAsync, props, state, isMount) {
        var _this2 = this;

        if (!state.mod && loadingTransition) {
          this.update({
            mod: null,
            props: props
          }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();
        requireAsync(props).then(function (mod) {
          var state = {
            mod: mod,
            props: props
          };
          var timeLapsed = new Date() - time;

          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this2.update(state, isMount);
            }, extraDelay);
          }

          _this2.update(state, isMount);
        })["catch"](function (error) {
          return _this2.update({
            error: error,
            props: props
          });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;
          var info = {
            isMount: isMount,
            isSync: isSync,
            isServer: isServer
          };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var mod = state.mod,
            error = state.error;

        if (mod && !error) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;
            var info = {
              isMount: isMount,
              isSync: isSync,
              isServer: isServer
            };
            onAfter(info, mod);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      } // $FlowFixMe

    }, {
      key: 'init',
      value: function init(props) {
        var _req = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            addModule = _req.addModule,
            requireSync = _req.requireSync,
            requireAsync = _req.requireAsync,
            asyncOnly = _req.asyncOnly;

        var mod = void 0;

        try {
          mod = requireSync(props);
        } catch (error) {
          return (0, _helpers.__update)(props, {
            error: error,
            props: props
          }, this._initialized);
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(props); // record the module for SSR flushing :)

        if (this.context && this.context.report) {
          this.context.report(chunkName);
        }

        if (mod || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          return (0, _helpers.__update)(props, {
            asyncOnly: asyncOnly,
            props: props,
            mod: mod
          }, this._initialized, true, true, _utils.isServer);
        }

        this.handleBefore(true, false);
        this.requireAsyncInner(requireAsync, props, {
          props: props,
          asyncOnly: asyncOnly,
          mod: mod
        }, true);
        return {
          mod: mod,
          asyncOnly: asyncOnly,
          props: props
        };
      }
    }], [{
      key: 'preload',
      value: function preload(props) {
        props = props || {};

        var _req2 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireAsync = _req2.requireAsync,
            requireSync = _req2.requireSync;

        var mod = void 0;

        try {
          mod = requireSync(props);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (mod) return mod;
          return requireAsync(props);
        }).then(function (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
          return mod;
        });
      }
      /* eslint-enable react/sort-comp */

      /* eslint-disable react/sort-comp */

    }, {
      key: 'preloadWeak',
      value: function preloadWeak(props) {
        props = props || {};

        var _req3 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireSync = _req3.requireSync;

        var mod = requireSync(props);

        if (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
        }

        return mod;
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        if (!_this._initialized) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = _this.init(_this.props); // $FlowFixMe

      _this.state.error = null;
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this._initialized = true;
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        var _this3 = this;

        if (isDynamic || this._asyncOnly) {
          var _req4 = (0, _requireUniversalModule2["default"])(asyncModule, options, this.props, prevProps),
              requireSync = _req4.requireSync,
              requireAsync = _req4.requireAsync,
              shouldUpdate = _req4.shouldUpdate;

          if (shouldUpdate(this.props, prevProps)) {
            var mod = void 0;

            try {
              mod = requireSync(this.props);
            } catch (error) {
              return this.update({
                error: error
              });
            }

            this.handleBefore(false, !!mod);

            if (!mod) {
              return this.requireAsyncInner(requireAsync, this.props, {
                mod: mod
              });
            }

            var state = {
              mod: mod
            };

            if (alwaysDelay) {
              if (loadingTransition) this.update({
                mod: null
              }); // display `loading` during componentWillReceiveProps

              setTimeout(function () {
                return _this3.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          }
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._initialized = false;
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        var _state = this.state,
            mod = _state.mod,
            error = _state.error;
        return renderFunc(props, mod, isLoading, userError || error);
      }
    }], [{
      key: 'getDerivedStateFromProps',
      value: function getDerivedStateFromProps(nextProps, currentState) {
        var _req5 = (0, _requireUniversalModule2["default"])(asyncModule, options, nextProps, currentState.props),
            requireSync = _req5.requireSync,
            shouldUpdate = _req5.shouldUpdate;

        if (isHMR() && shouldUpdate(currentState.props, nextProps)) {
          var mod = requireSync(nextProps);
          return _extends({}, currentState, {
            mod: mod
          });
        }

        return null;
      }
    }]);

    return UniversalComponent;
  }(_react2["default"].Component), _class.contextType = _context2["default"], _temp;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(40)(module)))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(14);

var requireById = function requireById(id) {
  if (!(0, _utils.isWebpack)() && typeof id === 'string') {
    return __webpack_require__(42)("" + id);
  }

  return __webpack_require__('' + id);
};

exports["default"] = requireById;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/jgatjens.a21b6ebb.jpg";

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_share_jgatjens_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);
/* harmony import */ var _assets_share_jgatjens_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_share_jgatjens_jpg__WEBPACK_IMPORTED_MODULE_2__);




var Seo = function Seo(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_static__WEBPACK_IMPORTED_MODULE_1__["Head"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, data.metaTitle || "Jairo Gätjens - Website"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "description",
    content: data.metaDescription || "I'm an experienced Developer based in Costa Rica."
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "keywords",
    content: data.metaKeyboards || "Website, Resume, Profile, Github, HTML, CSS, JavaScript"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "author",
    content: "Jairo G\xE4tjens"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "icon",
    href: "/favicon.ico",
    type: "image/x-icon"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:type",
    content: "website"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:url",
    content: "https://jgatjens.com/"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:title",
    content: data.metaTitle || "Jairo Gätjens - Website"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:description",
    content: data.metaDescription || "I'm an experienced Developer based in Costa Rica."
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:image",
    content: _assets_share_jgatjens_jpg__WEBPACK_IMPORTED_MODULE_2___default.a
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "twitter:card",
    content: "summary_large_image"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "twitter:site",
    content: "@jgatjens"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "twitter:creator",
    content: "@jgatjens"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "twitter:title",
    content: data.metaTitle || "Jairo Gätjens - Website"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "twitter:description",
    content: data.metaDescription || "I'm an experienced Developer based in Costa Rica."
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "twitter:image",
    content: _assets_share_jgatjens_jpg__WEBPACK_IMPORTED_MODULE_2___default.a
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Seo);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "@babel/runtime/helpers/taggedTemplateLiteral"
var taggedTemplateLiteral_ = __webpack_require__(1);
var taggedTemplateLiteral_default = /*#__PURE__*/__webpack_require__.n(taggedTemplateLiteral_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(3);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(2);

// EXTERNAL MODULE: external "@reach/router"
var router_ = __webpack_require__(4);

// EXTERNAL MODULE: external "styled-normalize"
var external_styled_normalize_ = __webpack_require__(29);
var external_styled_normalize_default = /*#__PURE__*/__webpack_require__.n(external_styled_normalize_);

// CONCATENATED MODULE: /Users/jairo.gatjens/DEV/react-static-v6/src/containers/Dynamic.tsx


var Dynamic_Dynamic = function Dynamic() {
  return /*#__PURE__*/external_react_default.a.createElement("div", null, "This is a dynamic page! It will not be statically exported, but is available at runtime");
};

/* harmony default export */ var containers_Dynamic = (Dynamic_Dynamic);
// CONCATENATED MODULE: /Users/jairo.gatjens/DEV/react-static-v6/src/App.tsx


var _templateObject;






 // import FancyDiv from 'components/FancyDiv'
// Any routes that start with 'dynamic' will be treated as non-static routes

Object(external_react_static_["addPrefetchExcludes"])(['dynamic']);
var GlobalStyle = Object(external_styled_components_["createGlobalStyle"])(_templateObject || (_templateObject = taggedTemplateLiteral_default()(["\n  ", "\n  \n  body, html {\n    font-family: 'Poppins', sans-serif;\n    font-size: 16px;\n    margin: 0;\n    padding: 0;\n    height: 100%;\n  }\n\n  #root, \n  #root > div, \n  #root > div > div {\n    height: 100%;\n  }\n"])), external_styled_normalize_default.a);

function App() {
  return /*#__PURE__*/external_react_default.a.createElement(external_react_static_["Root"], null, /*#__PURE__*/external_react_default.a.createElement(GlobalStyle, null), /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Suspense, {
    fallback: /*#__PURE__*/external_react_default.a.createElement("em", null, "Loading...")
  }, /*#__PURE__*/external_react_default.a.createElement(router_["Router"], null, /*#__PURE__*/external_react_default.a.createElement(containers_Dynamic, {
    path: "dynamic"
  }), /*#__PURE__*/external_react_default.a.createElement(external_react_static_["Routes"], {
    path: "*"
  }))));
}

/* harmony default export */ var src_App = __webpack_exports__["a"] = (App);

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(13);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createDefaultRender = exports.createElement = exports.findExport = exports.resolveExport = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _requireById = __webpack_require__(9);

var _requireById2 = _interopRequireDefault(_requireById);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};

var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod["default"] : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return React.createElement('div', null, 'Loading...');
};

var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return React.createElement('div', null, 'Error: ', error && error.message);
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return (0, _requireById2["default"])(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {}
  }

  return null;
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, modCache) {
  var isSync = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
  var exp = findExport(mod, key);

  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';

    var info = {
      isServer: _isServer,
      isSync: isSync
    };
    onLoad(mod, info, props);
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
  return React.isValidElement(Component) ? React.cloneElement(Component, props) : React.createElement(Component, props);
};

var createDefaultRender = exports.createDefaultRender = function createDefaultRender(Loading, Err) {
  return function (props, mod, isLoading, error) {
    if (isLoading) {
      return createElement(Loading, props);
    } else if (error) {
      return createElement(Err, _extends({}, props, {
        error: error
      }));
    } else if (mod) {
      // primary usage (for async import loading + errors):
      return createElement(mod, props);
    }

    return createElement(Loading, props);
  };
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

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/extends");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/share-jgatjens.36c71e74.jpg";

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("/Users/jairo.gatjens/DEV/react-static-v6/node_modules/react-static/lib/browser");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var ReportContext = _react2["default"].createContext({
  report: function report() {}
});

exports["default"] = ReportContext;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireDefault");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireWildcard");

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@babel/runtime/helpers/taggedTemplateLiteral"
var taggedTemplateLiteral_ = __webpack_require__(1);
var taggedTemplateLiteral_default = /*#__PURE__*/__webpack_require__.n(taggedTemplateLiteral_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(3);

// EXTERNAL MODULE: external "@reach/router"
var router_ = __webpack_require__(4);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(2);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: /Users/jairo.gatjens/DEV/react-static-v6/src/assets/jgatjens.jpg
var jgatjens = __webpack_require__(10);
var jgatjens_default = /*#__PURE__*/__webpack_require__.n(jgatjens);

// CONCATENATED MODULE: /Users/jairo.gatjens/DEV/react-static-v6/src/components/Profile.tsx


var _templateObject, _templateObject2, _templateObject3;




var Logo = external_styled_components_default.a.img(_templateObject || (_templateObject = taggedTemplateLiteral_default()(["\n  margin: 0 auto;\n  background-color: #f2f2f2;\n  display: block;\n  width: 142px;\n  height: 142px;\n"])));
var Title = external_styled_components_default.a.h1(_templateObject2 || (_templateObject2 = taggedTemplateLiteral_default()(["\n  margin: 20px 0 0 0;\n  color: #020218;\n  font-size: 34px;\n  font-weight: 600;\n  word-spacing: 2px;\n\n  small {\n    padding-top: 10px;\n    display: block;\n    font-weight: 500;\n    font-size: 13px;\n  }\n"])));
var Picture = external_styled_components_default.a.div(_templateObject3 || (_templateObject3 = taggedTemplateLiteral_default()(["\n  text-align: center;\n"])));

var Profile_Profile = function Profile(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/external_react_default.a.createElement(Picture, null, /*#__PURE__*/external_react_default.a.createElement(Logo, {
    src: jgatjens_default.a,
    alt: "Jairo Gatjens"
  }), /*#__PURE__*/external_react_default.a.createElement(Title, null, data.title, " ", /*#__PURE__*/external_react_default.a.createElement("small", null, data.location)));
};

/* harmony default export */ var components_Profile = (Profile_Profile);
// EXTERNAL MODULE: /Users/jairo.gatjens/DEV/react-static-v6/src/components/Seo.tsx
var Seo = __webpack_require__(11);

// EXTERNAL MODULE: /Users/jairo.gatjens/DEV/react-static-v6/src/components/ShareLinks.tsx
var ShareLinks = __webpack_require__(7);

// CONCATENATED MODULE: /Users/jairo.gatjens/DEV/react-static-v6/src/components/HireMe.tsx


var HireMe_templateObject;



var Link = external_styled_components_default.a.a(HireMe_templateObject || (HireMe_templateObject = taggedTemplateLiteral_default()(["\n  height: 48px;\n  width: 240px;\n  border-radius: 6px;\n  line-height: 48px;\n  border-color: #020218;\n  color: #020218;\n  padding: 0;\n  background-color: white;\n  text-transform: uppercase;\n  border-width: 2px;\n  border-style: solid;\n  font-weight: 600;\n  font-size: 17px;\n  margin-top: 30px;\n  display: block;\n  text-align: center;\n  text-decoration: none;\n\n  &:hover {\n    color: white;\n    background-color: #ff2f4a;\n    border-color: #ffcbd1;\n  }\n"])));

var HireMe_HireMe = function HireMe(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/external_react_default.a.createElement(Link, {
    href: data.url
  }, data.text);
};

/* harmony default export */ var components_HireMe = (HireMe_HireMe);
// EXTERNAL MODULE: /Users/jairo.gatjens/DEV/react-static-v6/src/assets/bg-website.jpg
var bg_website = __webpack_require__(31);
var bg_website_default = /*#__PURE__*/__webpack_require__.n(bg_website);

// CONCATENATED MODULE: /Users/jairo.gatjens/DEV/react-static-v6/src/components/Background.tsx


var Background_templateObject, Background_templateObject2;




var Background = external_styled_components_default.a.div(Background_templateObject || (Background_templateObject = taggedTemplateLiteral_default()(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n\n  img {\n    position: absolute;\n    width: 100%;\n    bottom: 0;\n    left: 0;\n    max-width: 1053px;\n  }\n"])));
var FigureLines = external_styled_components_default.a.div(Background_templateObject2 || (Background_templateObject2 = taggedTemplateLiteral_default()(["\n    position: absolute;\n    top: 30%;\n    left: -3px;\n\n    span {\n        height: 4px;\n        background-color: #020218;\n        border-radius: 6px;\n        display: block;\n        margin-bottom: 3px;\n    }\n\n    span:nth-child(1) { width: 60px; }\n    span:nth-child(2) { width: 80px; }\n    span:nth-child(3) { width: 40px; }\n\n"])));
/* harmony default export */ var components_Background = (function () {
  return /*#__PURE__*/external_react_default.a.createElement(Background, null, /*#__PURE__*/external_react_default.a.createElement(FigureLines, null, /*#__PURE__*/external_react_default.a.createElement("span", null), /*#__PURE__*/external_react_default.a.createElement("span", null), /*#__PURE__*/external_react_default.a.createElement("span", null)), /*#__PURE__*/external_react_default.a.createElement("img", {
    src: bg_website_default.a,
    alt: "bg homepage"
  }));
});
// CONCATENATED MODULE: /Users/jairo.gatjens/DEV/react-static-v6/src/pages/index.tsx


var pages_templateObject, pages_templateObject2, pages_templateObject3, _templateObject4;




 // components






var Desc = external_styled_components_default.a.p(pages_templateObject || (pages_templateObject = taggedTemplateLiteral_default()(["\n  margin: 0;\n  padding: 30px 0 0 0;\n  line-height: 22px;\n  font-weight: 200;\n  color: #020218;\n  font-size: 13px;\n  text-align: center;\n"])));
var HomePage = external_styled_components_default.a.div(pages_templateObject2 || (pages_templateObject2 = taggedTemplateLiteral_default()(["\n  display: flex;\n  align-items: center;\n  align-items: center;\n  height: 100%;\n  flex-direction: column;\n  justify-content: center;\n"])));
var Menu = external_styled_components_default.a.nav(pages_templateObject3 || (pages_templateObject3 = taggedTemplateLiteral_default()(["\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  color: #020218;\n\n  @keyframes bounce {\n    0%,\n    20%,\n    50%,\n    80%,\n    100% {\n      transform: translateX(10px);\n    }\n    40% {\n      transform: translateX(35px);\n    }\n    60% {\n      transform: translateX(20px);\n    }\n  }\n\n  div {\n    display: inline-block;\n    transform: rotateY(180deg);\n  }\n\n  svg {\n    position: relative;\n    top: 1px;\n    margin-right: 10px;\n    animation: bounce 2s infinite;\n  }\n\n  a {\n    color: #020218;\n    text-transform: uppercase;\n    text-decoration: none;\n    ont-weight: 600;\n    font-size: 17px;\n    &:hover {\n      color: #ff2f4a;\n      text-decoration: underline;\n    }\n  }\n"])));
var MenuLocale = external_styled_components_default.a.nav(_templateObject4 || (_templateObject4 = taggedTemplateLiteral_default()(["\n  position: absolute;\n  top: 20px;\n  left: 20px;\n  color: #020218;\n  display: flex;\n  align-items: center;\n\n  svg {\n    width: 20px;\n    heigth: 20px;\n  }\n\n  a {\n    color: #020218;\n    margin-left: 10px;\n    text-transform: uppercase;\n    text-decoration: none;\n    ont-weight: 600;\n    font-size: 17px;\n    &:hover {\n      color: #ff2f4a;\n      text-decoration: underline;\n    }\n  }\n"])));
/* harmony default export */ var pages = __webpack_exports__["default"] = (function () {
  var _useRouteData = Object(external_react_static_["useRouteData"])(),
      data = _useRouteData.data;

  var locale = data.locale;
  return /*#__PURE__*/external_react_default.a.createElement(HomePage, null, /*#__PURE__*/external_react_default.a.createElement(Seo["a" /* default */], {
    data: data.Seo
  }), /*#__PURE__*/external_react_default.a.createElement(MenuLocale, null, /*#__PURE__*/external_react_default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512"
  }, /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M256 0C114.848 0 0 114.848 0 256s114.848 256 256 256 256-114.848 256-256S397.152 0 256 0zm181.248 124.896c-27.584 10.944-55.936 19.616-85.024 25.312A361.934 361.934 0 00293.312 35.36c59.008 9.984 110.144 42.976 143.936 89.536zm-108.8 200.864a533.523 533.523 0 00-144.928 0 332.338 332.338 0 01-.064-139.296c23.872 3.264 48 5.536 72.544 5.536s48.64-2.272 72.512-5.536a332.338 332.338 0 01-.064 139.296zm-8.288-170.592a500.92 500.92 0 01-128.352 0c13.12-41.152 34.56-80.16 64.192-114.72 29.632 34.56 51.04 73.568 64.16 114.72zM218.624 35.36c-26.944 35.232-46.528 74.176-58.88 114.848-29.056-5.696-57.408-14.368-84.992-25.312 33.76-46.56 84.896-79.552 143.872-89.536zM32 256c0-37.312 9.312-72.448 25.504-103.424 30.592 12.576 61.984 22.464 94.272 28.96a364.405 364.405 0 00.032 149.184c-32.256 6.432-63.776 16.256-94.304 28.8C41.312 328.48 32 293.344 32 256zm42.752 131.104c27.584-10.944 55.936-19.616 84.992-25.312a361.934 361.934 0 0058.912 114.848c-59.008-9.984-110.144-42.976-143.904-89.536zm117.088-30.272a500.672 500.672 0 01128.32 0c-13.12 41.152-34.56 80.16-64.16 114.72-29.632-34.56-51.04-73.568-64.16-114.72zM293.312 476.64a361.934 361.934 0 0058.912-114.848c29.056 5.696 57.44 14.4 85.024 25.312-33.792 46.56-84.928 79.552-143.936 89.536zm66.848-145.984c10.304-49.184 10.336-99.968.032-149.152 32.288-6.496 63.712-16.352 94.304-28.96C470.688 183.552 480 218.688 480 256c0 37.344-9.312 72.48-25.504 103.456-30.528-12.512-62.048-22.336-94.336-28.8z"
  })), /*#__PURE__*/external_react_default.a.createElement(router_["Link"], {
    to: "/"
  }, "en"), /*#__PURE__*/external_react_default.a.createElement(router_["Link"], {
    to: "/es"
  }, "es")), /*#__PURE__*/external_react_default.a.createElement(Menu, null, /*#__PURE__*/external_react_default.a.createElement("div", null, /*#__PURE__*/external_react_default.a.createElement("svg", {
    width: "25",
    height: "14"
  }, /*#__PURE__*/external_react_default.a.createElement("g", {
    stroke: "currentColor",
    strokeWidth: "2",
    fill: "currentColor"
  }, /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M23.02 7H2",
    strokeLinecap: "square"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M5.5 12.5l-4-5.377 4-5.623"
  })))), /*#__PURE__*/external_react_default.a.createElement(router_["Link"], {
    to: locale !== "en" ? "/".concat(locale, "/resume") : "/resume"
  }, data.resume || "resume")), /*#__PURE__*/external_react_default.a.createElement(components_Background, null), /*#__PURE__*/external_react_default.a.createElement(components_Profile, {
    data: data.profile
  }), /*#__PURE__*/external_react_default.a.createElement(components_HireMe, {
    data: data.hire_me
  }), /*#__PURE__*/external_react_default.a.createElement(Desc, {
    dangerouslySetInnerHTML: {
      __html: data.profile.description
    }
  }), /*#__PURE__*/external_react_default.a.createElement(ShareLinks["a" /* default */], null));
});

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@babel/runtime/helpers/taggedTemplateLiteral"
var taggedTemplateLiteral_ = __webpack_require__(1);
var taggedTemplateLiteral_default = /*#__PURE__*/__webpack_require__.n(taggedTemplateLiteral_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(3);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(2);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: /Users/jairo.gatjens/DEV/react-static-v6/src/components/ShareLinks.tsx
var ShareLinks = __webpack_require__(7);

// CONCATENATED MODULE: /Users/jairo.gatjens/DEV/react-static-v6/src/components/Footer.tsx


var _templateObject;



var Footer = external_styled_components_default.a.div(_templateObject || (_templateObject = taggedTemplateLiteral_default()(["\n  text-decoration: none;\n  text-transform: uppercase;\n  color: #3B3E49;\n  display: inline-block;\n  width: 100%;\n  text-align: center;\n\n  .line {\n    margin: 40px auto 20px auto;\n    height: 1px;\n    display: block;\n    width: 150px;\n    background-color: #E6E7E9;\n  }\n\n  a {\n    text-decoration: none;\n    text-transform: uppercase;\n    color: #3B3E49;\n    padding: 10px 0;\n    display: block;\n    font-weight: 800;\n  }\n    \n"])));
/* harmony default export */ var components_Footer = (function () {
  return /*#__PURE__*/external_react_default.a.createElement(Footer, null, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "line"
  }), /*#__PURE__*/external_react_default.a.createElement("a", {
    href: "mailto:jgatjens@gmail.com"
  }, "Hire me"));
});
// EXTERNAL MODULE: /Users/jairo.gatjens/DEV/react-static-v6/src/assets/forkme.svg
var forkme = __webpack_require__(30);
var forkme_default = /*#__PURE__*/__webpack_require__.n(forkme);

// CONCATENATED MODULE: /Users/jairo.gatjens/DEV/react-static-v6/src/components/ForkMe.tsx


var ForkMe_templateObject;




var ForkMe = external_styled_components_default.a.a(ForkMe_templateObject || (ForkMe_templateObject = taggedTemplateLiteral_default()([" \n  position: absolute; top: 0; right: 0; border: 0;\n"])));
/* harmony default export */ var components_ForkMe = (function () {
  return /*#__PURE__*/external_react_default.a.createElement(ForkMe, {
    href: "https://github.com/jgatjens/jgatjens.github.io/tree/develop"
  }, /*#__PURE__*/external_react_default.a.createElement("img", {
    src: forkme_default.a,
    alt: "Fork me on GitHub"
  }));
});
// EXTERNAL MODULE: /Users/jairo.gatjens/DEV/react-static-v6/src/assets/jgatjens.jpg
var jgatjens = __webpack_require__(10);
var jgatjens_default = /*#__PURE__*/__webpack_require__.n(jgatjens);

// CONCATENATED MODULE: /Users/jairo.gatjens/DEV/react-static-v6/src/pages/404.tsx


var _404_templateObject, _templateObject2;



 // components





var Desc = external_styled_components_default.a.h1(_404_templateObject || (_404_templateObject = taggedTemplateLiteral_default()(["\n  margin: 0;\n  padding: 15px 0 25px 0;\n  line-height: 22px;\n  font-weight: 200;\n  color: #777777;\n  font-size: 13px;\n  text-align: center;\n"])));
var HomePage = external_styled_components_default.a.div(_templateObject2 || (_templateObject2 = taggedTemplateLiteral_default()(["\n  display: flex;\n  align-items: center;\n  align-items: center;\n  height: 100%;\n  flex-direction: column;\n  justify-content: center;\n"])));
/* harmony default export */ var _404 = __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/external_react_default.a.createElement(HomePage, null, /*#__PURE__*/external_react_default.a.createElement(external_react_static_["Head"], null, /*#__PURE__*/external_react_default.a.createElement("title", null, "Jairo G\xE4tjens - Website"), /*#__PURE__*/external_react_default.a.createElement("meta", {
    name: "description",
    content: "I'm an experienced Full-Stack Developer based in Costa Rica."
  }), /*#__PURE__*/external_react_default.a.createElement("meta", {
    name: "keywords",
    content: "Website, Resume, Profile, Github, HTML, CSS, JavaScript, Nodejs, React, Angular"
  }), /*#__PURE__*/external_react_default.a.createElement("meta", {
    name: "author",
    content: "Jairo G\xE4tjens"
  }), /*#__PURE__*/external_react_default.a.createElement("link", {
    rel: "icon",
    href: "/favicon.ico",
    type: "image/x-icon"
  }), /*#__PURE__*/external_react_default.a.createElement("meta", {
    property: "og:type",
    content: "website"
  }), /*#__PURE__*/external_react_default.a.createElement("meta", {
    property: "og:url",
    content: "http://jgatjens.com/"
  }), /*#__PURE__*/external_react_default.a.createElement("meta", {
    property: "og:title",
    content: "Jairo G\xE4tjens"
  }), /*#__PURE__*/external_react_default.a.createElement("meta", {
    property: "og:description",
    content: "I'm an experienced Full-Stack Developer based in Costa Rica."
  }), /*#__PURE__*/external_react_default.a.createElement("meta", {
    property: "og:image",
    content: jgatjens_default.a
  }), /*#__PURE__*/external_react_default.a.createElement("meta", {
    name: "twitter:card",
    content: "summary_large_image"
  }), /*#__PURE__*/external_react_default.a.createElement("meta", {
    name: "twitter:site",
    content: "@jgatjens"
  }), /*#__PURE__*/external_react_default.a.createElement("meta", {
    name: "twitter:creator",
    content: "@jgatjens"
  }), /*#__PURE__*/external_react_default.a.createElement("meta", {
    name: "twitter:title",
    content: "Website Jairo Gatjens"
  }), /*#__PURE__*/external_react_default.a.createElement("meta", {
    name: "twitter:description",
    content: "Jairo Gatjens has been web developer for 8 years, and is currently a Front End Lead in Costa Rica. He received his degree in Computer Science in 2009. Some of his current responsibilities are: developing quality software, participating in the architecture phase and serving as the platform lead on projects, advising and mentoring fellow developers, assisting in the definition of technology standards and best practices."
  }), /*#__PURE__*/external_react_default.a.createElement("meta", {
    name: "twitter:image",
    content: jgatjens_default.a
  })), /*#__PURE__*/external_react_default.a.createElement(components_ForkMe, null), /*#__PURE__*/external_react_default.a.createElement(Desc, null, "404 - Oh no's! We couldn't find that page :("), /*#__PURE__*/external_react_default.a.createElement(ShareLinks["a" /* default */], null), /*#__PURE__*/external_react_default.a.createElement(components_Footer, null));
});

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@babel/runtime/helpers/extends"
var extends_ = __webpack_require__(15);
var extends_default = /*#__PURE__*/__webpack_require__.n(extends_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/taggedTemplateLiteral"
var taggedTemplateLiteral_ = __webpack_require__(1);
var taggedTemplateLiteral_default = /*#__PURE__*/__webpack_require__.n(taggedTemplateLiteral_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(2);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(3);

// EXTERNAL MODULE: /Users/jairo.gatjens/DEV/react-static-v6/src/components/ShareLinks.tsx
var ShareLinks = __webpack_require__(7);

// EXTERNAL MODULE: external "@reach/router"
var router_ = __webpack_require__(4);

// EXTERNAL MODULE: /Users/jairo.gatjens/DEV/react-static-v6/src/assets/header-left.png
var header_left = __webpack_require__(32);
var header_left_default = /*#__PURE__*/__webpack_require__.n(header_left);

// EXTERNAL MODULE: /Users/jairo.gatjens/DEV/react-static-v6/src/assets/header-right.png
var header_right = __webpack_require__(33);
var header_right_default = /*#__PURE__*/__webpack_require__.n(header_right);

// EXTERNAL MODULE: /Users/jairo.gatjens/DEV/react-static-v6/src/assets/icon-jgatjens.png
var icon_jgatjens = __webpack_require__(34);
var icon_jgatjens_default = /*#__PURE__*/__webpack_require__.n(icon_jgatjens);

// CONCATENATED MODULE: /Users/jairo.gatjens/DEV/react-static-v6/src/components/PromoResume.tsx


var _templateObject, _templateObject2, _templateObject3;







var PromoResumePage = external_styled_components_default.a.div(_templateObject || (_templateObject = taggedTemplateLiteral_default()(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  background-color: #202255;\n  min-height: 396px;\n  position: relative;\n  color: white;\n\n  .bg-left,\n  .bg-right {\n    background-size: contain;\n    background-repeat: no-repeat;\n    background-position-y: bottom;\n    position: absolute;\n    height: 100%;\n    width: 260px;\n    top: 0;\n    z-index: 0;\n  }\n\n  H1 {\n    margin-bottom: 50px;\n  }\n\n  .bg-left {\n    background-image: url(", ");\n    background-position-x: left;\n    left: 0;\n  }\n\n  .bg-right {\n    background-image: url(", ");\n    background-position-x: right;\n    right: 0;\n  }\n\n  svg,\n  a,\n  h1,\n  div {\n    z-index: 1;\n  }\n"])), header_left_default.a, header_right_default.a);
var Title = external_styled_components_default.a.h1(_templateObject2 || (_templateObject2 = taggedTemplateLiteral_default()(["\n  font-size: 40px;\n  line-height: 1;\n  max-width: 266px;\n  margin: 0 auto;\n  text-align: center;\n  margin-top: 30px;\n  text-transform: capitalize;\n\n  @media (max-width: 480px) {\n    font-size: 25px;\n  }\n"])));
var IconImage = external_styled_components_default.a.img(_templateObject3 || (_templateObject3 = taggedTemplateLiteral_default()(["\n  width: 100px;\n  position: absolute;\n  left: 50%;\n  margin-left: -50px;\n  bottom: 0;\n\n  @media (max-width: 480px) {\n    padding-bottom: 25px;\n  }\n"])));

var PromoResume_PromoResume = function PromoResume(_ref) {
  var locale = _ref.locale;
  return /*#__PURE__*/external_react_default.a.createElement(PromoResumePage, null, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "bg-left"
  }), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "bg-right"
  }), /*#__PURE__*/external_react_default.a.createElement(router_["Link"], {
    to: locale !== "en" ? "/".concat(locale) : "/"
  }, /*#__PURE__*/external_react_default.a.createElement("svg", {
    width: "25",
    height: "14"
  }, /*#__PURE__*/external_react_default.a.createElement("g", {
    stroke: "#FFF",
    strokeWidth: "2",
    fill: "currentColor"
  }, /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M23.02 7H2",
    strokeLinecap: "square"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M5.5 12.5l-4-5.377 4-5.623"
  })))), /*#__PURE__*/external_react_default.a.createElement(Title, null, "Jairo Gatjens"), /*#__PURE__*/external_react_default.a.createElement(IconImage, {
    src: icon_jgatjens_default.a,
    alt: "icon"
  }));
};

/* harmony default export */ var components_PromoResume = (PromoResume_PromoResume);
// EXTERNAL MODULE: /Users/jairo.gatjens/DEV/react-static-v6/src/components/Seo.tsx
var Seo = __webpack_require__(11);

// CONCATENATED MODULE: /Users/jairo.gatjens/DEV/react-static-v6/src/pages/resume.tsx



var resume_templateObject, resume_templateObject2, resume_templateObject3;



 // components




var ResumePage = external_styled_components_default.a.div(resume_templateObject || (resume_templateObject = taggedTemplateLiteral_default()(["\n  display: block;\n  height: 100%;\n\n  .container {\n    max-width: 640px;\n    margin: 0 auto;\n    padding-top: 45px;\n    padding-left: 20px;\n    padding-right: 20px;\n    padding-bottom: 45px;\n    color: #3b3e48;\n  }\n\n  h2 {\n    font-size: 20px;\n    font-weight: normal;\n    margin-top: 30px;\n    text-transform: uppercase;\n  }\n\n  p {\n    font-size: 14px;\n    line-height: 22px;\n  }\n\n  ul {\n    font-size: 14px;\n    line-height: 22px;\n    list-style: disc;\n    padding-left: 18px;\n\n    @media (min-width: 640px) {\n      margin-left: 20px;\n    }\n  }\n\n  div[class*=\"ShareLinks\"] {\n    margin-top: 30px;\n    margin-bottom: 40px;\n    text-align: left;\n  }\n"])));
var Desc = external_styled_components_default.a.p(resume_templateObject2 || (resume_templateObject2 = taggedTemplateLiteral_default()(["\n  color: #3b3e48;\n  font-size: 16px;\n  line-height: 1.4;\n  margin-top: 0;\n  margin-bottom: 25px;\n\n  a {\n    color: #ff2f4a;\n  }\n"])));
var HistoryTitle = external_styled_components_default.a.div(resume_templateObject3 || (resume_templateObject3 = taggedTemplateLiteral_default()(["\n  a {\n    color: #ff2f4a;\n    font-weight: bold;\n    padding-right: 5px;\n  }\n\n  h4 {\n    display: inline-block;\n    font-weight: normal;\n    margin-bottom: 0;\n    font-style: italic;\n  }\n"])));

var resume_List = function List(_ref) {
  var items = _ref.items;
  return /*#__PURE__*/external_react_default.a.createElement("ul", null, items.map(function (str, i) {
    if (str.length === 0) {
      return;
    }

    return /*#__PURE__*/external_react_default.a.createElement("li", {
      key: i
    }, str);
  }));
};

var resume_HistoryItem = function HistoryItem(_ref2) {
  var company = _ref2.company,
      company_url = _ref2.company_url,
      job_name = _ref2.job_name,
      date = _ref2.date,
      skills = _ref2.skills;
  return /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement(HistoryTitle, null, /*#__PURE__*/external_react_default.a.createElement("a", {
    href: company_url,
    target: "_blank"
  }, company), /*#__PURE__*/external_react_default.a.createElement("h4", null, "\u2014 ", job_name), /*#__PURE__*/external_react_default.a.createElement("p", null, date)), /*#__PURE__*/external_react_default.a.createElement(resume_List, {
    items: skills.split("-")
  }));
};

var resume_Resume = function Resume() {
  var res = Object(external_react_static_["useRouteData"])();
  var data = res.data;
  console.log(data.locale);
  return /*#__PURE__*/external_react_default.a.createElement(ResumePage, null, /*#__PURE__*/external_react_default.a.createElement(Seo["a" /* default */], {
    data: data.seo
  }), /*#__PURE__*/external_react_default.a.createElement(components_PromoResume, {
    locale: data.locale
  }), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/external_react_default.a.createElement(Desc, null, data.location || "Santa Teresa, Costa Rica", " ", /*#__PURE__*/external_react_default.a.createElement("br", null), /*#__PURE__*/external_react_default.a.createElement("b", null, data.email_title || "Email", ":"), " ", /*#__PURE__*/external_react_default.a.createElement("a", {
    href: "mailto:{{data.email}}"
  }, data.email)), /*#__PURE__*/external_react_default.a.createElement("h2", null, data.summary_title || "SUMMARY"), /*#__PURE__*/external_react_default.a.createElement("p", null, data.summary), /*#__PURE__*/external_react_default.a.createElement("h2", null, data.skills_title || "SKILLS"), /*#__PURE__*/external_react_default.a.createElement(resume_List, {
    items: data.skills.split("-")
  }), /*#__PURE__*/external_react_default.a.createElement("h2", null, data.work_title || "WORK HISTORY"), data.work_history.map(function (work, i) {
    return /*#__PURE__*/external_react_default.a.createElement(resume_HistoryItem, extends_default()({
      key: i
    }, work));
  }), /*#__PURE__*/external_react_default.a.createElement("h2", null, data.academic_title), /*#__PURE__*/external_react_default.a.createElement(HistoryTitle, null, /*#__PURE__*/external_react_default.a.createElement("a", {
    href: "https://ufidelitas.ac.cr/",
    target: "_blank"
  }, "Universidad Fidelitas, Costa Rica"), /*#__PURE__*/external_react_default.a.createElement("h4", null, "\u2014 Bachelor\u2019s in Computer Science"), /*#__PURE__*/external_react_default.a.createElement("p", null, "2005 - 2008")), /*#__PURE__*/external_react_default.a.createElement(HistoryTitle, null, /*#__PURE__*/external_react_default.a.createElement("a", {
    href: "https://ulatina.ac.cr/",
    target: "_blank"
  }, "Universidad Latina, Costa Rica"), /*#__PURE__*/external_react_default.a.createElement("h4", null, "\u2014 Electrical and Electronics Engineering"), /*#__PURE__*/external_react_default.a.createElement("p", null, "2011 - 2012")), /*#__PURE__*/external_react_default.a.createElement(ShareLinks["a" /* default */], null)));
};

/* harmony default export */ var resume = __webpack_exports__["default"] = (resume_Resume);

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _reactStatic = __webpack_require__(3);

var _router = __webpack_require__(4);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var _default = function _default(_ref) {
  var _ref$RouterProps = _ref.RouterProps,
      userRouterProps = _ref$RouterProps === void 0 ? {} : _ref$RouterProps;
  return {
    Root: function Root(PreviousRoot) {
      return function (_ref2) {
        var children = _ref2.children,
            rest = _objectWithoutProperties(_ref2, ["children"]);

        var basepath = (0, _reactStatic.useBasepath)();
        var staticInfo = (0, _reactStatic.useStaticInfo)();

        var RouteHandler = function RouteHandler(props) {
          return /*#__PURE__*/_react["default"].createElement(PreviousRoot, _extends({}, rest, props), children);
        };

        var renderedChildren =
        /*#__PURE__*/
        // Place a top-level router inside the root
        // This will give proper context to Link and other reach components
        _react["default"].createElement(_router.Router, _extends({}, basepath ? {
          basepath: basepath
        } : {}, userRouterProps), /*#__PURE__*/_react["default"].createElement(RouteHandler, {
          path: "/*"
        })); // If we're in SSR, use a manual server location


        return typeof document === 'undefined' ? /*#__PURE__*/_react["default"].createElement(_router.ServerLocation, {
          url: (0, _reactStatic.makePathAbsolute)("".concat(basepath, "/").concat(staticInfo.path))
        }, renderedChildren) : renderedChildren;
      };
    },
    Routes: function Routes(PreviousRoutes) {
      return function (props) {
        return (
          /*#__PURE__*/
          // Wrap Routes in location
          _react["default"].createElement(_router.Location, null, function (location) {
            return /*#__PURE__*/_react["default"].createElement(PreviousRoutes, _extends({
              path: "/*"
            }, props, {
              location: location
            }));
          })
        );
      };
    }
  };
};

exports["default"] = _default;

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("styled-normalize");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNy4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMTQ5cHgiIGhlaWdodD0iMTQ5cHgiIHZpZXdCb3g9IjAgMCAxNDkgMTQ5IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxNDkgMTQ5OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8cmVjdCBzdHlsZT0iZmlsbDpub25lOyIgd2lkdGg9IjE0OSIgaGVpZ2h0PSIxNDkiLz4NCgkNCgkJPHRleHQgdHJhbnNmb3JtPSJtYXRyaXgoMC43MDcxIDAuNzA3MSAtMC43MDcxIDAuNzA3MSA0My40NzM3IDIyLjM3MykiIHN0eWxlPSJmaWxsOiM3ODc4Nzg7IGZvbnQtZmFtaWx5OidSb2JvdG8tUmVndWxhcic7IGZvbnQtc2l6ZToxNC45MDAxOyI+Rm9yayBtZSBvbiBHaXRIdWI8L3RleHQ+DQoJPGc+DQoJCTxnPg0KCQkJPHBvbHlnb24gc3R5bGU9ImZpbGw6I0NFRDBENDsiIHBvaW50cz0iNDguOTY1LDAgMTQ5LDEwMC4wMzUgMTQ5LDk3LjkyOCA1MS4wNzIsMCAJCQkiLz4NCgkJCTxwb2x5Z29uIHN0eWxlPSJmaWxsOiNDRUQwRDQ7IiBwb2ludHM9IjE0OSwxNDQuMjg2IDQuNzE0LDAgMi42MDcsMCAxNDksMTQ2LjM5MyAJCQkiLz4NCgkJPC9nPg0KCTwvZz4NCjwvZz4NCjwvc3ZnPg0K"

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/bg-website.fbf62aad.jpg";

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/header-left.57ece537.png";

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/header-right.9d75552f.png";

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/icon-jgatjens.0707bbb9.png";

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(36);
__webpack_require__(38);
module.exports = __webpack_require__(45);


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable import/no-dynamic-require */

var plugins = __webpack_require__(37)["default"];

var _require = __webpack_require__(18),
    registerPlugins = _require.registerPlugins;

registerPlugins(plugins);

if (false) {}

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports
 // Plugins

var plugins = [{
  location: "__react_static_root__/node_modules/react-static-plugin-typescript",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-styled-components",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-source-filesystem",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-reach-router",
  plugins: [],
  hooks: _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default()({})
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-sitemap/dist",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/",
  plugins: [],
  hooks: {}
}]; // Export em!

/* harmony default export */ __webpack_exports__["default"] = (plugins);

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable import/no-dynamic-require */

var _require = __webpack_require__(18),
    registerTemplates = _require.registerTemplates;

var _require2 = __webpack_require__(39),
    templates = _require2["default"],
    notFoundTemplate = _require2.notFoundTemplate;

registerTemplates(templates, notFoundTemplate);

if (false) {}

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notFoundTemplate", function() { return notFoundTemplate; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_universal_component__WEBPACK_IMPORTED_MODULE_3__);








Object(react_universal_component__WEBPACK_IMPORTED_MODULE_3__["setHasBabelPlugin"])();
var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, "An error occurred loading this page's template. More information is available in the console.");
  },
  ignoreBabelRename: true
};
var t_0 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/404.tsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/404.tsx */).then(__webpack_require__.bind(null, 25))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/404.tsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(25);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/404.tsx";
  }
}), universalOptions);
t_0.template = '__react_static_root__/src/pages/404.tsx';
var t_1 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/index.tsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/index.tsx */).then(__webpack_require__.bind(null, 24))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/index.tsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(24);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/index.tsx";
  }
}), universalOptions);
t_1.template = '__react_static_root__/src/pages/index.tsx';
var t_2 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/resume.tsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/resume.tsx */).then(__webpack_require__.bind(null, 26))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/resume.tsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(26);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/resume.tsx";
  }
}), universalOptions);
t_2.template = '__react_static_root__/src/pages/resume.tsx'; // Template Map

/* harmony default export */ __webpack_exports__["default"] = ({
  '__react_static_root__/src/pages/404.tsx': t_0,
  '__react_static_root__/src/pages/index.tsx': t_1,
  '__react_static_root__/src/pages/resume.tsx': t_2
}); // Not Found Template

var notFoundTemplate = "__react_static_root__/src/pages/404.tsx";
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

exports["default"] = requireUniversalModule;

var _utils = __webpack_require__(14);

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
      promCache = options.promCache,
      usesBabelPlugin = options.usesBabelPlugin;
  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;
  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props) {
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
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props) {
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

          var info = {
            isServer: _isServer
          };
          onError(error, info);
        }

        rej(error);
      }; // const timer = timeout && setTimeout(reject, timeout)


      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);
        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, modCache);
        if (exp) return res(exp);
        reject(new Error('export not found'));
      };

      var request = load(props, {
        resolve: resolve,
        reject: reject
      }); // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.

      if (!request || typeof request.then !== 'function') return;
      request.then(resolve)["catch"](reject);
    });
    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);

        if (usesBabelPlugin) {
          // if ignoreBabelRename is true, don't apply regex
          var shouldKeepName = options && !!options.ignoreBabelRename;

          if (!shouldKeepName) {
            name = name.replace(/\//g, '-');
          }
        }

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
    var resultingConfig = typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;

    if (options) {
      resultingConfig = _extends({}, resultingConfig, options);
    }

    return resultingConfig;
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
    load: load,
    ignoreBabelRename: true
  };
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	".": 9,
	"./": 9,
	"./index": 9,
	"./index.js": 9
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 42;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(13);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(19);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _context = __webpack_require__(20);

var _context2 = _interopRequireDefault(_context);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks(props) {
    _classCallCheck(this, ReportChunks);

    var _this = _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).call(this, props));

    _this.state = {
      report: props.report
    };
    return _this;
  }

  _createClass(ReportChunks, [{
    key: 'render',
    value: function render() {
      return _react2["default"].createElement(_context2["default"].Provider, {
        value: this.state
      }, this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2["default"].Component);

ReportChunks.propTypes = {
  report: _propTypes2["default"].func.isRequired
};
exports["default"] = ReportChunks;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__handleAfter = exports.__update = undefined;

var _hoistNonReactStatics = __webpack_require__(21);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _index = __webpack_require__(8);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var __update = exports.__update = function __update(props, state, isInitialized) {
  var isMount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var isSync = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var isServer = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  if (!isInitialized) return state;

  if (!state.error) {
    state.error = null;
  }

  return __handleAfter(props, state, isMount, isSync, isServer);
};
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["__handleAfter"] }] */


var __handleAfter = exports.__handleAfter = function __handleAfter(props, state, isMount, isSync, isServer) {
  var mod = state.mod,
      error = state.error;

  if (mod && !error) {
    (0, _hoistNonReactStatics2["default"])(_index2["default"], mod, {
      preload: true,
      preloadWeak: true
    });

    if (props.onAfter) {
      var onAfter = props.onAfter;
      var info = {
        isMount: isMount,
        isSync: isSync,
        isServer: isServer
      };
      onAfter(info, mod);
    }
  } else if (error && props.onError) {
    props.onError(error);
  }

  return state;
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(22);

var _interopRequireWildcard = __webpack_require__(23);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(0));

var _useStaticInfo = __webpack_require__(46);

var _Suspense = _interopRequireDefault(__webpack_require__(47));
/* eslint-disable import/no-dynamic-require */
// Override the suspense module to be our own
// This is expected to break when using preact
// In order to make it work with preact 10, use `patch-package` to remove those 2 lines
// Reference: https://github.com/react-static/react-static/pull/1500


React.Suspense = _Suspense["default"];
React["default"].Suspense = _Suspense["default"];

var App = __webpack_require__(49)["default"];

var _default = function _default(staticInfo) {
  return function (props) {
    return /*#__PURE__*/React.createElement(_useStaticInfo.staticInfoContext.Provider, {
      value: staticInfo
    }, /*#__PURE__*/React.createElement(App, props));
  };
};

exports["default"] = _default;

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("/Users/jairo.gatjens/DEV/react-static-v6/node_modules/react-static/lib/browser/hooks/useStaticInfo");

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(23);

var _interopRequireDefault = __webpack_require__(22);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(15));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(48));

var React = _interopRequireWildcard(__webpack_require__(0));

var OriginalSuspense = React.Suspense;

function Suspense(_ref) {
  var key = _ref.key,
      children = _ref.children,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["key", "children"]);
  return typeof document !== 'undefined' ? /*#__PURE__*/React.createElement(OriginalSuspense, (0, _extends2["default"])({
    key: key
  }, rest), children) : /*#__PURE__*/React.createElement(React.Fragment, {
    key: key
  }, children);
}

var _default = Suspense;
exports["default"] = _default;

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectWithoutProperties");

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);


 // Your top level component

 // Export your top level component as JSX (for static rendering)

/* harmony default export */ __webpack_exports__["default"] = (_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]); // Render your app

if (typeof document !== 'undefined') {
  var target = document.getElementById('root');
  var renderMethod = target.hasChildNodes() ? react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.hydrate : react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render;

  var render = function render(Comp) {
    renderMethod( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__["AppContainer"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comp, null)), target);
  }; // Render!


  render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]); // Hot Module Replacement

  if (module && module.hot) {
    module.hot.accept('./App', function () {
      render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);
    });
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(50)(module)))

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = function (originalModule) {
  if (!originalModule.webpackPolyfill) {
    var module = Object.create(originalModule); // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    Object.defineProperty(module, "exports", {
      enumerable: true
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ })
/******/ ]);
});