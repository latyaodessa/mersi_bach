module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./configureStore.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = __webpack_require__("redux");

var _reduxThunk = _interopRequireDefault(__webpack_require__("redux-thunk"));

var _reduxLogger = __webpack_require__("redux-logger");

var _reduxPromiseMiddleware = _interopRequireDefault(__webpack_require__("redux-promise-middleware"));

var _reducers = _interopRequireDefault(__webpack_require__("./src/reducers.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import reducer from "./ducks";
var logger = (0, _reduxLogger.createLogger)({//
});

var configureStore = function configureStore(preloadedState) {
  return (0, _redux.createStore)(_reducers.default, preloadedState, (0, _redux.applyMiddleware)((0, _reduxPromiseMiddleware.default)(), _reduxThunk.default));
};

var _default = configureStore;
exports.default = _default;

/***/ }),

/***/ "./pages/_app.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("@babel/runtime/regenerator"));

var _react = _interopRequireDefault(__webpack_require__("react"));

var _reactRedux = __webpack_require__("react-redux");

var _app = _interopRequireWildcard(__webpack_require__("next/app"));

var _nextReduxWrapper = _interopRequireDefault(__webpack_require__("next-redux-wrapper"));

var _configureStore = _interopRequireDefault(__webpack_require__("./configureStore.js"));

var _jsxFileName = "/Users/andrefedorenko/Dropbox/Studium/mersi/bachelor/frontend/pages/_app.js";

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = (0, _nextReduxWrapper.default)(_configureStore.default)(
/*#__PURE__*/
function (_App) {
  _inherits(MyApp, _App);

  function MyApp() {
    _classCallCheck(this, MyApp);

    return _possibleConstructorReturn(this, (MyApp.__proto__ || Object.getPrototypeOf(MyApp)).apply(this, arguments));
  }

  _createClass(MyApp, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          Component = _props.Component,
          pageProps = _props.pageProps,
          store = _props.store;
      return _react.default.createElement(_app.Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, _react.default.createElement(_reactRedux.Provider, {
        store: store,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, _react.default.createElement(Component, _extends({}, pageProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(_ref) {
        var Component, ctx;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, ctx = _ref.ctx;

                if (!Component.getInitialProps) {
                  _context.next = 7;
                  break;
                }

                _context.next = 4;
                return Component.getInitialProps(ctx);

              case 4:
                _context.t0 = _context.sent;
                _context.next = 8;
                break;

              case 7:
                _context.t0 = {};

              case 8:
                _context.t1 = _context.t0;
                return _context.abrupt("return", {
                  pageProps: _context.t1
                });

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return MyApp;
}(_app.default));

exports.default = _default;

/***/ }),

/***/ "./src/constants/post/posts-constants.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SEARCH_POST_REJECTED = exports.SEARCH_POST_FULFILLED = exports.FETCH_RELATED_POSTS_REJECTED = exports.FETCH_RELATED_POSTS_FULFILLED = exports.FETCH_TOP_NATIVE_REJECTED = exports.FETCH_TOP_NATIVE_FULFILLED = exports.FETCH_TOP_SETS_REJECTED = exports.FETCH_TOP_SETS_FULFILLED = exports.FETCH_SETS_POSTS_REJECTED = exports.FETCH_SETS_POSTS_FULFILLED = exports.FETCH_ART_POSTS_REJECTED = exports.FETCH_ART_POSTS_FULFILLED = exports.FETCH_NATIVE_POSTS_REJECTED = exports.FETCH_NATIVE_POSTS_FULFILLED = exports.FETCH_SINGLE_POST_REJECTED = exports.FETCH_SINGLE_POST_FULFILLED = void 0;
var FETCH_SINGLE_POST_FULFILLED = 'FETCH_SINGLE_POST_FULFILLED';
exports.FETCH_SINGLE_POST_FULFILLED = FETCH_SINGLE_POST_FULFILLED;
var FETCH_SINGLE_POST_REJECTED = 'FETCH_SINGLE_POST_REJECTED';
exports.FETCH_SINGLE_POST_REJECTED = FETCH_SINGLE_POST_REJECTED;
var FETCH_NATIVE_POSTS_FULFILLED = 'FETCH_NATIVE_POSTS_FULFILLED';
exports.FETCH_NATIVE_POSTS_FULFILLED = FETCH_NATIVE_POSTS_FULFILLED;
var FETCH_NATIVE_POSTS_REJECTED = 'FETCH_POSTS_REJECTED';
exports.FETCH_NATIVE_POSTS_REJECTED = FETCH_NATIVE_POSTS_REJECTED;
var FETCH_ART_POSTS_FULFILLED = 'FETCH_ART_POSTS_FULFILLED';
exports.FETCH_ART_POSTS_FULFILLED = FETCH_ART_POSTS_FULFILLED;
var FETCH_ART_POSTS_REJECTED = 'FETCH_ART_POSTS_REJECTED';
exports.FETCH_ART_POSTS_REJECTED = FETCH_ART_POSTS_REJECTED;
var FETCH_SETS_POSTS_FULFILLED = 'FETCH_SETS_POSTS_FULFILLED';
exports.FETCH_SETS_POSTS_FULFILLED = FETCH_SETS_POSTS_FULFILLED;
var FETCH_SETS_POSTS_REJECTED = 'FETCH_SETS_POSTS_REJECTED';
exports.FETCH_SETS_POSTS_REJECTED = FETCH_SETS_POSTS_REJECTED;
var FETCH_TOP_SETS_FULFILLED = 'FETCH_TOP_SETS_FULFILLED';
exports.FETCH_TOP_SETS_FULFILLED = FETCH_TOP_SETS_FULFILLED;
var FETCH_TOP_SETS_REJECTED = 'FETCH_TOP_SETS_REJECTED';
exports.FETCH_TOP_SETS_REJECTED = FETCH_TOP_SETS_REJECTED;
var FETCH_TOP_NATIVE_FULFILLED = 'FETCH_TOP_NATIVE_FULFILLED';
exports.FETCH_TOP_NATIVE_FULFILLED = FETCH_TOP_NATIVE_FULFILLED;
var FETCH_TOP_NATIVE_REJECTED = 'FETCH_TOP_NATIVE_REJECTED';
exports.FETCH_TOP_NATIVE_REJECTED = FETCH_TOP_NATIVE_REJECTED;
var FETCH_RELATED_POSTS_FULFILLED = 'FETCH_RELATED_POSTS_FULFILLED';
exports.FETCH_RELATED_POSTS_FULFILLED = FETCH_RELATED_POSTS_FULFILLED;
var FETCH_RELATED_POSTS_REJECTED = 'FETCH_RELATED_POSTS_REJECTED';
exports.FETCH_RELATED_POSTS_REJECTED = FETCH_RELATED_POSTS_REJECTED;
var SEARCH_POST_FULFILLED = 'SEARCH_POST_FULFILLED';
exports.SEARCH_POST_FULFILLED = SEARCH_POST_FULFILLED;
var SEARCH_POST_REJECTED = 'SEARCH_POST_REJECTED';
exports.SEARCH_POST_REJECTED = SEARCH_POST_REJECTED;

/***/ }),

/***/ "./src/constants/user/user-constants.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GET_IS_POST_EXIST_REJECTED = exports.GET_IS_POST_EXIST_FULFILLED = exports.DELETE_POST_FROM_DASHBOARD_REJECTED = exports.DELETE_POST_FROM_DASHBOARD_FULFILLED = exports.SAVE_POST_TO_DASHBOARD_REJECTED = exports.SAVE_POST_TO_DASHBOARD_FULFILLED = exports.GET_SAVED_POSTS_REJECTED = exports.GET_SAVED_POSTS_FULFILLED = exports.USER_LOGOUT = exports.USER_LOGIN = exports.GET_USER_REJECTED = exports.GET_USER_FULFILLED = exports.CREATE_VK_USER_REJECTED = exports.CREATE_VK_USER_FULFILLED = exports.CREATE_FACEBOOK_USER_REJECTED = exports.CREATE_FACEBOOK_USER_FULFILLED = void 0;
var CREATE_FACEBOOK_USER_FULFILLED = 'CREATE_FACEBOOK_USER_FULFILLED';
exports.CREATE_FACEBOOK_USER_FULFILLED = CREATE_FACEBOOK_USER_FULFILLED;
var CREATE_FACEBOOK_USER_REJECTED = 'CREATE_FACEBOOK_USER_REJECTED';
exports.CREATE_FACEBOOK_USER_REJECTED = CREATE_FACEBOOK_USER_REJECTED;
var CREATE_VK_USER_FULFILLED = 'CREATE_VK_USER_FULFILLED';
exports.CREATE_VK_USER_FULFILLED = CREATE_VK_USER_FULFILLED;
var CREATE_VK_USER_REJECTED = 'CREATE_VK_USER_REJECTED';
exports.CREATE_VK_USER_REJECTED = CREATE_VK_USER_REJECTED;
var GET_USER_FULFILLED = "GET_USER_FULFILLED";
exports.GET_USER_FULFILLED = GET_USER_FULFILLED;
var GET_USER_REJECTED = "GET_USER_REJECTED";
exports.GET_USER_REJECTED = GET_USER_REJECTED;
var USER_LOGIN = "LOGIN";
exports.USER_LOGIN = USER_LOGIN;
var USER_LOGOUT = "LOGOUT";
exports.USER_LOGOUT = USER_LOGOUT;
var GET_SAVED_POSTS_FULFILLED = "GET_SAVED_POSTS_FULFILLED";
exports.GET_SAVED_POSTS_FULFILLED = GET_SAVED_POSTS_FULFILLED;
var GET_SAVED_POSTS_REJECTED = "GET_SAVED_POSTS_REJECTED";
exports.GET_SAVED_POSTS_REJECTED = GET_SAVED_POSTS_REJECTED;
var SAVE_POST_TO_DASHBOARD_FULFILLED = "SAVE_POST_TO_DASHBOARD_FULFILLED";
exports.SAVE_POST_TO_DASHBOARD_FULFILLED = SAVE_POST_TO_DASHBOARD_FULFILLED;
var SAVE_POST_TO_DASHBOARD_REJECTED = "SAVE_POST_TO_DASHBOARD_REJECTED";
exports.SAVE_POST_TO_DASHBOARD_REJECTED = SAVE_POST_TO_DASHBOARD_REJECTED;
var DELETE_POST_FROM_DASHBOARD_FULFILLED = "DELETE_POST_FROM_DASHBOARD_FULFILLED";
exports.DELETE_POST_FROM_DASHBOARD_FULFILLED = DELETE_POST_FROM_DASHBOARD_FULFILLED;
var DELETE_POST_FROM_DASHBOARD_REJECTED = "DELETE_POST_FROM_DASHBOARD_REJECTED";
exports.DELETE_POST_FROM_DASHBOARD_REJECTED = DELETE_POST_FROM_DASHBOARD_REJECTED;
var GET_IS_POST_EXIST_FULFILLED = "GET_IS_POST_EXIST_FULFILLED";
exports.GET_IS_POST_EXIST_FULFILLED = GET_IS_POST_EXIST_FULFILLED;
var GET_IS_POST_EXIST_REJECTED = "GET_IS_POST_EXIST_REJECTED";
exports.GET_IS_POST_EXIST_REJECTED = GET_IS_POST_EXIST_REJECTED;

/***/ }),

/***/ "./src/reducers.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = __webpack_require__("redux");

var _nativePostReducer = _interopRequireDefault(__webpack_require__("./src/reducers/post/native-post-reducer.js"));

var _artPostReducer = _interopRequireDefault(__webpack_require__("./src/reducers/post/art-post-reducer.js"));

var _setsPostReducer = _interopRequireDefault(__webpack_require__("./src/reducers/post/sets-post-reducer.js"));

var _singlePostReducer = _interopRequireDefault(__webpack_require__("./src/reducers/post/single-post-reducer.js"));

var _relatedPostsReducer = _interopRequireDefault(__webpack_require__("./src/reducers/post/related-posts-reducer.js"));

var _topNativeReducer = _interopRequireDefault(__webpack_require__("./src/reducers/post/top-native-reducer.js"));

var _topSetsReducer = _interopRequireDefault(__webpack_require__("./src/reducers/post/top-sets-reducer.js"));

var _searchPostReducer = _interopRequireDefault(__webpack_require__("./src/reducers/post/search-post-reducer.js"));

var _windowReducer = _interopRequireDefault(__webpack_require__("./src/reducers/window-reducer.js"));

var _loginLogoutReducer = _interopRequireDefault(__webpack_require__("./src/reducers/core/login-logout-reducer.js"));

var _facebookLoginReducer = _interopRequireDefault(__webpack_require__("./src/reducers/user/facebook-login-reducer.js"));

var _userReducer = _interopRequireDefault(__webpack_require__("./src/reducers/user/user-reducer.js"));

var _vkReducer = _interopRequireDefault(__webpack_require__("./src/reducers/user/vk-reducer.js"));

var _savedPostsReducer = _interopRequireDefault(__webpack_require__("./src/reducers/user/dashboard/saved-posts-reducer.js"));

var _savedPhotosReducer = _interopRequireDefault(__webpack_require__("./src/reducers/user/dashboard/saved-photos-reducer.js"));

var _savePostToDashboardReducer = _interopRequireDefault(__webpack_require__("./src/reducers/user/dashboard/save-post-to-dashboard-reducer.js"));

var _deletePostFromDashboard = _interopRequireDefault(__webpack_require__("./src/reducers/user/dashboard/delete-post-from-dashboard.js"));

var _postExistenceByUserReducer = _interopRequireDefault(__webpack_require__("./src/reducers/post/post-existence-by-user-reducer.js"));

var _reactRouterRedux = __webpack_require__("react-router-redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _redux.combineReducers)({
  native: _nativePostReducer.default,
  sets: _setsPostReducer.default,
  art: _artPostReducer.default,
  single: _singlePostReducer.default,
  related: _relatedPostsReducer.default,
  topNative: _topNativeReducer.default,
  topSets: _topSetsReducer.default,
  searchPosts: _searchPostReducer.default,
  window: _windowReducer.default,
  loginLogout: _loginLogoutReducer.default,
  user: _userReducer.default,
  facebook: _facebookLoginReducer.default,
  vk: _vkReducer.default,
  savedPosts: _savedPostsReducer.default,
  savedPhotos: _savedPhotosReducer.default,
  savePost: _savePostToDashboardReducer.default,
  deletePost: _deletePostFromDashboard.default,
  postExistenceByUser: _postExistenceByUserReducer.default,
  routing: _reactRouterRedux.routerReducer
});

exports.default = _default;

/***/ }),

/***/ "./src/reducers/core/login-logout-reducer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reducer;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    isLogin: "",
    executed: false
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'LOGIN':
      {
        return _objectSpread({}, state, {
          isLogin: true,
          executed: true
        });
      }

    case 'LOGOUT':
      {
        return _objectSpread({}, state, {
          isLogin: false,
          executed: true
        });
      }

    default:
      {
        return _objectSpread({}, state);
      }
  }
}

/***/ }),

/***/ "./src/reducers/post/art-post-reducer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reducer;

var _postsConstants = __webpack_require__("./src/constants/post/posts-constants.js");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    fetched: false,
    error: null,
    fetching: true
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _postsConstants.FETCH_ART_POSTS_REJECTED:
      {
        return _objectSpread({}, state, {
          fetching: false,
          error: action.payload
        });
      }

    case _postsConstants.FETCH_ART_POSTS_FULFILLED:
      {
        return _objectSpread({}, state, {
          fetching: false,
          fetched: true,
          post: action.payload
        });
      }

    default:
      {
        return _objectSpread({}, state);
      }
  }
}

/***/ }),

/***/ "./src/reducers/post/native-post-reducer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reducer;

var _postsConstants = __webpack_require__("./src/constants/post/posts-constants.js");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    fetched: false,
    error: null,
    fetching: true
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _postsConstants.FETCH_NATIVE_POSTS_REJECTED:
      {
        return _objectSpread({}, state, {
          fetching: false,
          error: action.payload
        });
      }

    case _postsConstants.FETCH_NATIVE_POSTS_FULFILLED:
      {
        return _objectSpread({}, state, {
          fetching: false,
          fetched: true,
          post: action.payload
        });
      }

    default:
      {
        return _objectSpread({}, state);
      }
  }
}

/***/ }),

/***/ "./src/reducers/post/post-existence-by-user-reducer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reducer;

var _userConstants = __webpack_require__("./src/constants/user/user-constants.js");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    existence: false,
    fetched: false,
    error: null,
    fetching: true
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _userConstants.GET_IS_POST_EXIST_REJECTED:
      {
        return _objectSpread({}, state, {
          fetching: false,
          error: action.payload
        });
      }

    case _userConstants.GET_IS_POST_EXIST_FULFILLED:
      {
        return _objectSpread({}, state, {
          fetching: false,
          fetched: true,
          existence: action.payload
        });
      }

    default:
      {
        return _objectSpread({}, state);
      }
  }
}

/***/ }),

/***/ "./src/reducers/post/related-posts-reducer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reducer;

var _postsConstants = __webpack_require__("./src/constants/post/posts-constants.js");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    posts: "",
    fetched: false,
    error: null
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _postsConstants.FETCH_RELATED_POSTS_REJECTED:
      {
        return _objectSpread({}, state, {
          fetching: false,
          error: action.payload
        });
      }

    case _postsConstants.FETCH_RELATED_POSTS_FULFILLED:
      {
        return _objectSpread({}, state, {
          fetching: false,
          fetched: true,
          posts: action.payload
        });
      }

    default:
      {
        return _objectSpread({}, state);
      }
  }
}

/***/ }),

/***/ "./src/reducers/post/search-post-reducer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reducer;

var _postsConstants = __webpack_require__("./src/constants/post/posts-constants.js");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    posts: "",
    fetched: false,
    error: null
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _postsConstants.SEARCH_POST_REJECTED:
      {
        return _objectSpread({}, state, {
          fetching: false,
          error: action.payload
        });
      }

    case _postsConstants.SEARCH_POST_FULFILLED:
      {
        return _objectSpread({}, state, {
          fetching: false,
          fetched: true,
          posts: action.payload
        });
      }

    default:
      {
        return _objectSpread({}, state);
      }
  }
}

/***/ }),

/***/ "./src/reducers/post/sets-post-reducer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reducer;

var _postsConstants = __webpack_require__("./src/constants/post/posts-constants.js");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    fetched: false,
    error: null
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _postsConstants.FETCH_SETS_POSTS_REJECTED:
      {
        return _objectSpread({}, state, {
          fetching: false,
          error: action.payload
        });
      }

    case _postsConstants.FETCH_SETS_POSTS_FULFILLED:
      {
        return _objectSpread({}, state, {
          fetching: false,
          fetched: true,
          post: action.payload
        });
      }

    default:
      {
        return _objectSpread({}, state);
      }
  }
}

/***/ }),

/***/ "./src/reducers/post/single-post-reducer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reducer;

var _postsConstants = __webpack_require__("./src/constants/post/posts-constants.js");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    fetched: false,
    error: null
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _postsConstants.FETCH_SINGLE_POST_REJECTED:
      {
        return _objectSpread({}, state, {
          fetching: false,
          error: action.payload
        });
      }

    case _postsConstants.FETCH_SINGLE_POST_FULFILLED:
      {
        return _objectSpread({}, state, {
          fetching: false,
          fetched: true,
          post: action.payload
        });
      }

    default:
      {
        return _objectSpread({}, state);
      }
  }
}

/***/ }),

/***/ "./src/reducers/post/top-native-reducer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reducer;

var _postsConstants = __webpack_require__("./src/constants/post/posts-constants.js");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    fetched: false,
    error: null
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _postsConstants.FETCH_TOP_NATIVE_REJECTED:
      {
        return _objectSpread({}, state, {
          fetching: false,
          error: action.payload
        });
      }

    case _postsConstants.FETCH_TOP_NATIVE_FULFILLED:
      {
        return _objectSpread({}, state, {
          fetching: false,
          fetched: true,
          post: action.payload
        });
      }

    default:
      {
        return _objectSpread({}, state);
      }
  }
}

/***/ }),

/***/ "./src/reducers/post/top-sets-reducer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reducer;

var _postsConstants = __webpack_require__("./src/constants/post/posts-constants.js");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    fetched: false,
    error: null
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _postsConstants.FETCH_TOP_SETS_REJECTED:
      {
        return _objectSpread({}, state, {
          fetching: false,
          error: action.payload
        });
      }

    case _postsConstants.FETCH_TOP_SETS_FULFILLED:
      {
        return _objectSpread({}, state, {
          fetching: false,
          fetched: true,
          post: action.payload
        });
      }

    default:
      {
        return _objectSpread({}, state);
      }
  }
}

/***/ }),

/***/ "./src/reducers/user/dashboard/delete-post-from-dashboard.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reducer;

var _userConstants = __webpack_require__("./src/constants/user/user-constants.js");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    deleted: false,
    deleting: true,
    error: null
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _userConstants.DELETE_POST_FROM_DASHBOARD_REJECTED:
      {
        return _objectSpread({}, state, {
          fetching: false,
          error: action.payload
        });
      }

    case _userConstants.DELETE_POST_FROM_DASHBOARD_FULFILLED:
      {
        return _objectSpread({}, state, {
          deleted: true,
          deleting: false
        });
      }

    default:
      {
        return _objectSpread({}, state);
      }
  }
}

/***/ }),

/***/ "./src/reducers/user/dashboard/save-post-to-dashboard-reducer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reducer;

var _userConstants = __webpack_require__("./src/constants/user/user-constants.js");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    saved: null,
    fetching: null,
    fetched: false,
    error: null
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _userConstants.SAVE_POST_TO_DASHBOARD_REJECTED:
      {
        return _objectSpread({}, state, {
          fetching: false,
          error: action.payload
        });
      }

    case _userConstants.SAVE_POST_TO_DASHBOARD_FULFILLED:
      {
        return _objectSpread({}, state, {
          fetching: false,
          fetched: true,
          saved: action.payload
        });
      }

    default:
      {
        return _objectSpread({}, state);
      }
  }
}

/***/ }),

/***/ "./src/reducers/user/dashboard/saved-photos-reducer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reducer;

var _userConstants = __webpack_require__("./src/constants/user/user-constants.js");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    savedPhotos: null,
    fetching: null,
    fetched: false,
    error: null
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _userConstants.GET_SAVED_PHOTOS_REJECTED:
      {
        return _objectSpread({}, state, {
          fetching: false,
          error: action.payload
        });
      }

    case _userConstants.GET_SAVED_PHOTOS_FULFILLED:
      {
        return _objectSpread({}, state, {
          fetching: false,
          fetched: true,
          savedPhotos: action.payload
        });
      }

    default:
      {
        return _objectSpread({}, state);
      }
  }
}

/***/ }),

/***/ "./src/reducers/user/dashboard/saved-posts-reducer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reducer;

var _userConstants = __webpack_require__("./src/constants/user/user-constants.js");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    savedPosts: null,
    fetching: null,
    fetched: false,
    error: null
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _userConstants.GET_SAVED_POSTS_REJECTED:
      {
        return _objectSpread({}, state, {
          fetching: false,
          error: action.payload
        });
      }

    case _userConstants.GET_SAVED_POSTS_FULFILLED:
      {
        return _objectSpread({}, state, {
          fetching: false,
          fetched: true,
          savedPosts: action.payload
        });
      }

    default:
      {
        return _objectSpread({}, state);
      }
  }
}

/***/ }),

/***/ "./src/reducers/user/facebook-login-reducer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reducer;

var _userConstants = __webpack_require__("./src/constants/user/user-constants.js");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    user: null,
    fetching: null,
    fetched: false,
    error: null
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _userConstants.CREATE_FACEBOOK_USER_REJECTED:
      {
        return _objectSpread({}, state, {
          fetching: false,
          error: action.payload
        });
      }

    case _userConstants.CREATE_FACEBOOK_USER_FULFILLED:
      {
        return _objectSpread({}, state, {
          fetching: false,
          fetched: true,
          user: action.payload
        });
      }

    default:
      {
        return _objectSpread({}, state);
      }
  }
}

/***/ }),

/***/ "./src/reducers/user/user-reducer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reducer;

var _userConstants = __webpack_require__("./src/constants/user/user-constants.js");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    user: null,
    fetching: false,
    fetched: false,
    error: null
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _userConstants.GET_USER_REJECTED:
      {
        return _objectSpread({}, state, {
          fetching: false,
          error: action.payload
        });
      }

    case _userConstants.GET_USER_FULFILLED:
      {
        return _objectSpread({}, state, {
          fetching: false,
          fetched: true,
          user: action.payload
        });
      }

    default:
      {
        return _objectSpread({}, state);
      }
  }
}

/***/ }),

/***/ "./src/reducers/user/vk-reducer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reducer;

var _userConstants = __webpack_require__("./src/constants/user/user-constants.js");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    user: null,
    fetching: null,
    fetched: false,
    error: null
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _userConstants.CREATE_VK_USER_REJECTED:
      {
        return _objectSpread({}, state, {
          fetching: false,
          error: action.payload
        });
      }

    case _userConstants.CREATE_VK_USER_FULFILLED:
      {
        return _objectSpread({}, state, {
          fetching: false,
          fetched: true,
          user: action.payload
        });
      }

    default:
      {
        return _objectSpread({}, state);
      }
  }
}

/***/ }),

/***/ "./src/reducers/window-reducer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reducer;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    fetched: false,
    error: null
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'RESIZE':
      {
        return _objectSpread({}, state, {
          mobile: 850,
          post: action.payload
        });
      }

    default:
      {
        return _objectSpread({}, state);
      }
  }
}

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/_app.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "next-redux-wrapper":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/app":
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router-redux":
/***/ (function(module, exports) {

module.exports = require("react-router-redux");

/***/ }),

/***/ "redux":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-logger":
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),

/***/ "redux-promise-middleware":
/***/ (function(module, exports) {

module.exports = require("redux-promise-middleware");

/***/ }),

/***/ "redux-thunk":
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map