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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("@babel/runtime/regenerator"));

var _react = _interopRequireDefault(__webpack_require__("react"));

var _reactRedux = __webpack_require__("react-redux");

var _gridPictures = _interopRequireDefault(__webpack_require__("./src/components/home/components/grid-pictures.js"));

var _MainLayoutWithNavigation = _interopRequireDefault(__webpack_require__("./src/components/layouts/MainLayoutWithNavigation.js"));

var _homeMetaGenerator = _interopRequireDefault(__webpack_require__("./src/components/home/components/homeMetaGenerator.js"));

var _VegaChart = _interopRequireDefault(__webpack_require__("./src/components/charts/VegaChart.js"));

var _jsxFileName = "/Users/andrefedorenko/Dropbox/Studium/mersi/bachelor/frontend/pages/index.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  _createClass(Index, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(_ref) {
        var store, isServer;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                store = _ref.store, isServer = _ref.isServer;
                return _context.abrupt("return", {
                  isServer: isServer
                });

              case 2:
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

  function Index(props) {
    var _this;

    _classCallCheck(this, Index);

    _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "changeRandomise", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(changeTo) {
        _this.setState({
          randomise: changeTo
        });
      }
    });
    _this.state = {
      randomise: false,
      charts: 4
    };
    return _this;
  }

  _createClass(Index, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_MainLayoutWithNavigation.default, {
        meta: (0, _homeMetaGenerator.default)(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, _react.default.createElement("div", {
        className: "child-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, _react.default.createElement("div", {
        style: {
          width: "100%"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, _react.default.createElement("div", {
        className: "pure-g",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, _react.default.createElement("div", {
        className: "pure-u-1-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, _react.default.createElement("a", {
        onClick: this.changeRandomise.bind(this, true),
        className: "pure-button pure-button-primary",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, "Randomise")), _react.default.createElement("div", {
        className: "pure-u-1-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, _react.default.createElement("a", {
        className: "pure-button pure-button-primary",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, "Change Colors")), _react.default.createElement("div", {
        className: "pure-u-1-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, _react.default.createElement("a", {
        className: "pure-button pure-button-primary",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, "A Fetch Stock data")), _react.default.createElement("div", {
        className: "pure-u-1-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, _react.default.createElement("a", {
        className: "pure-button pure-button-primary",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, "A Change Charts Type")))), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, _react.default.createElement("div", {
        style: styles.oneLine,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, _react.default.createElement(_VegaChart.default, {
        randomise: this.state.randomise,
        changeRandomise: this.changeRandomise,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      })), _react.default.createElement("div", {
        style: styles.oneLine,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, _react.default.createElement(_VegaChart.default, {
        randomise: this.state.randomise,
        changeRandomise: this.changeRandomise,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      })), _react.default.createElement("div", {
        style: styles.oneLine,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, _react.default.createElement(_VegaChart.default, {
        randomise: this.state.randomise,
        changeRandomise: this.changeRandomise,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      })), _react.default.createElement("div", {
        style: styles.oneLine,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, _react.default.createElement(_VegaChart.default, {
        randomise: this.state.randomise,
        changeRandomise: this.changeRandomise,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      })), _react.default.createElement("div", {
        style: styles.oneLine,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, _react.default.createElement(_VegaChart.default, {
        randomise: this.state.randomise,
        changeRandomise: this.changeRandomise,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      })), _react.default.createElement("div", {
        style: styles.oneLine,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, _react.default.createElement(_VegaChart.default, {
        randomise: this.state.randomise,
        changeRandomise: this.changeRandomise,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      })), _react.default.createElement("div", {
        style: styles.oneLine,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, _react.default.createElement(_VegaChart.default, {
        randomise: this.state.randomise,
        changeRandomise: this.changeRandomise,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      })), _react.default.createElement("div", {
        style: styles.oneLine,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, _react.default.createElement(_VegaChart.default, {
        randomise: this.state.randomise,
        changeRandomise: this.changeRandomise,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      })))));
    }
  }]);

  return Index;
}(_react.default.Component);

var styles = {
  oneLine: {
    float: 'left'
  }
};

var _default = (0, _reactRedux.connect)()(Index);

exports.default = _default;

/***/ }),

/***/ "./res/styles/common/elements.scss":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defaultExport = new String(".ph{list-style-image:url(\"https://youngfolks.ru/static/img/32/camera.png\");}.md{list-style-image:url(\"https://youngfolks.ru/static/img/32/model.png\");}.art{list-style-image:url(\"https://youngfolks.ru/img/static/32/painter.png\");}.ph li,.md li,.art li{font-size:20px;margin-bottom:15px;line-height:21px;padding-left:15px;}.ul-main-list{margin-top:30px;}.ph-white{list-style-image:url(\"https://youngfolks.ru/static/img/32/camera-white.png\");}.md-white{list-style-image:url(\"https://youngfolks.ru/static/img/32/model-white.png\");}.art-white{list-style-image:url(\"https://youngfolks.ru/static/img/32/painter-white.png\");}.ph-white li,.md-white li,.art-white li{font-size:20px;text-align:center;position:relative;background-color:transparent;color:#FFF;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcy9zdHlsZXMvY29tbW9uL2VsZW1lbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRWtCLEFBRzBFLEFBR0QsQUFHRSxBQUd6RCxBQU1DLEFBRzZELEFBR0QsQUFHRSxBQUcvRCxlQWpCSSxBQWtCRCxDQWJELGlCQWNDLENBbEJELGlCQUNDLEFBa0JXLGtCQWxCVixDQVRvRCxDQUhDLENBTUMsSUFlSSxDQUhDLENBTUMsRUFPcEUsV0FBQyIsImZpbGUiOiJyZXMvc3R5bGVzL2NvbW1vbi9lbGVtZW50cy5zY3NzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hbmRyZWZlZG9yZW5rby9Ecm9wYm94L1N0dWRpdW0vbWVyc2kvYmFjaGVsb3IvZnJvbnRlbmQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY3NzYC8qaWNvbiBsaXN0Ki9cbi5waCB7XG4gIGxpc3Qtc3R5bGUtaW1hZ2U6IHVybChcImh0dHBzOi8veW91bmdmb2xrcy5ydS9zdGF0aWMvaW1nLzMyL2NhbWVyYS5wbmdcIik7IH1cblxuLm1kIHtcbiAgbGlzdC1zdHlsZS1pbWFnZTogdXJsKFwiaHR0cHM6Ly95b3VuZ2ZvbGtzLnJ1L3N0YXRpYy9pbWcvMzIvbW9kZWwucG5nXCIpOyB9XG5cbi5hcnQge1xuICBsaXN0LXN0eWxlLWltYWdlOiB1cmwoXCJodHRwczovL3lvdW5nZm9sa3MucnUvaW1nL3N0YXRpYy8zMi9wYWludGVyLnBuZ1wiKTsgfVxuXG4ucGggbGksIC5tZCBsaSwgLmFydCBsaSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDsgfVxuXG4udWwtbWFpbi1saXN0IHtcbiAgbWFyZ2luLXRvcDogMzBweDsgfVxuXG4ucGgtd2hpdGUge1xuICBsaXN0LXN0eWxlLWltYWdlOiB1cmwoXCJodHRwczovL3lvdW5nZm9sa3MucnUvc3RhdGljL2ltZy8zMi9jYW1lcmEtd2hpdGUucG5nXCIpOyB9XG5cbi5tZC13aGl0ZSB7XG4gIGxpc3Qtc3R5bGUtaW1hZ2U6IHVybChcImh0dHBzOi8veW91bmdmb2xrcy5ydS9zdGF0aWMvaW1nLzMyL21vZGVsLXdoaXRlLnBuZ1wiKTsgfVxuXG4uYXJ0LXdoaXRlIHtcbiAgbGlzdC1zdHlsZS1pbWFnZTogdXJsKFwiaHR0cHM6Ly95b3VuZ2ZvbGtzLnJ1L3N0YXRpYy9pbWcvMzIvcGFpbnRlci13aGl0ZS5wbmdcIik7IH1cblxuLnBoLXdoaXRlIGxpLCAubWQtd2hpdGUgbGksIC5hcnQtd2hpdGUgbGkge1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNGRkY7IH1cbmA7Il19 */\n/*@ sourceURL=res/styles/common/elements.scss */");

_defaultExport.__hash = "2716874644";
_defaultExport.__scoped = ".ph.jsx-3644341141{list-style-image:url(\"https://youngfolks.ru/static/img/32/camera.png\");}.md.jsx-3644341141{list-style-image:url(\"https://youngfolks.ru/static/img/32/model.png\");}.art.jsx-3644341141{list-style-image:url(\"https://youngfolks.ru/img/static/32/painter.png\");}.ph.jsx-3644341141 li.jsx-3644341141,.md.jsx-3644341141 li.jsx-3644341141,.art.jsx-3644341141 li.jsx-3644341141{font-size:20px;margin-bottom:15px;line-height:21px;padding-left:15px;}.ul-main-list.jsx-3644341141{margin-top:30px;}.ph-white.jsx-3644341141{list-style-image:url(\"https://youngfolks.ru/static/img/32/camera-white.png\");}.md-white.jsx-3644341141{list-style-image:url(\"https://youngfolks.ru/static/img/32/model-white.png\");}.art-white.jsx-3644341141{list-style-image:url(\"https://youngfolks.ru/static/img/32/painter-white.png\");}.ph-white.jsx-3644341141 li.jsx-3644341141,.md-white.jsx-3644341141 li.jsx-3644341141,.art-white.jsx-3644341141 li.jsx-3644341141{font-size:20px;text-align:center;position:relative;background-color:transparent;color:#FFF;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcy9zdHlsZXMvY29tbW9uL2VsZW1lbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRWtCLEFBRzBFLEFBR0QsQUFHRSxBQUd6RCxBQU1DLEFBRzZELEFBR0QsQUFHRSxBQUcvRCxlQWpCSSxBQWtCRCxDQWJELGlCQWNDLENBbEJELGlCQUNDLEFBa0JXLGtCQWxCVixDQVRvRCxDQUhDLENBTUMsSUFlSSxDQUhDLENBTUMsRUFPcEUsV0FBQyIsImZpbGUiOiJyZXMvc3R5bGVzL2NvbW1vbi9lbGVtZW50cy5zY3NzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hbmRyZWZlZG9yZW5rby9Ecm9wYm94L1N0dWRpdW0vbWVyc2kvYmFjaGVsb3IvZnJvbnRlbmQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY3NzYC8qaWNvbiBsaXN0Ki9cbi5waCB7XG4gIGxpc3Qtc3R5bGUtaW1hZ2U6IHVybChcImh0dHBzOi8veW91bmdmb2xrcy5ydS9zdGF0aWMvaW1nLzMyL2NhbWVyYS5wbmdcIik7IH1cblxuLm1kIHtcbiAgbGlzdC1zdHlsZS1pbWFnZTogdXJsKFwiaHR0cHM6Ly95b3VuZ2ZvbGtzLnJ1L3N0YXRpYy9pbWcvMzIvbW9kZWwucG5nXCIpOyB9XG5cbi5hcnQge1xuICBsaXN0LXN0eWxlLWltYWdlOiB1cmwoXCJodHRwczovL3lvdW5nZm9sa3MucnUvaW1nL3N0YXRpYy8zMi9wYWludGVyLnBuZ1wiKTsgfVxuXG4ucGggbGksIC5tZCBsaSwgLmFydCBsaSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDsgfVxuXG4udWwtbWFpbi1saXN0IHtcbiAgbWFyZ2luLXRvcDogMzBweDsgfVxuXG4ucGgtd2hpdGUge1xuICBsaXN0LXN0eWxlLWltYWdlOiB1cmwoXCJodHRwczovL3lvdW5nZm9sa3MucnUvc3RhdGljL2ltZy8zMi9jYW1lcmEtd2hpdGUucG5nXCIpOyB9XG5cbi5tZC13aGl0ZSB7XG4gIGxpc3Qtc3R5bGUtaW1hZ2U6IHVybChcImh0dHBzOi8veW91bmdmb2xrcy5ydS9zdGF0aWMvaW1nLzMyL21vZGVsLXdoaXRlLnBuZ1wiKTsgfVxuXG4uYXJ0LXdoaXRlIHtcbiAgbGlzdC1zdHlsZS1pbWFnZTogdXJsKFwiaHR0cHM6Ly95b3VuZ2ZvbGtzLnJ1L3N0YXRpYy9pbWcvMzIvcGFpbnRlci13aGl0ZS5wbmdcIik7IH1cblxuLnBoLXdoaXRlIGxpLCAubWQtd2hpdGUgbGksIC5hcnQtd2hpdGUgbGkge1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNGRkY7IH1cbmA7Il19 */\n/*@ sourceURL=res/styles/common/elements.scss */";
_defaultExport.__scopedHash = "3644341141";
var _default = _defaultExport;
exports.default = _default;

/***/ }),

/***/ "./res/styles/index.scss":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defaultExport = new String(".navigation{list-style:none;margin:0;background:#6a8ba9;display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row wrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}.navigation li:last-child{margin-left:auto;}.navigation .prev-last-li{position:absolute;right:0;margin-right:100px;}.navigation a{-webkit-text-decoration:none;text-decoration:none;display:block;padding:1em;color:#FFF;}.navigation a:hover{background:#a98173;}#menu{position:absolute;right:0;color:#FFF;text-align:center;border-radius:4px;background:#b38f83;box-shadow:0 1px 8px rgba(0,0,0,0.05);-webkit-transition:opacity .4s;transition:opacity .4s;z-index:1;}#menu ul{list-style:none;width:150px;padding:0;}#menu:after{position:absolute;top:-7px;right:30px;content:\"\";display:block;border-left:6px solid transparent;border-right:6px solid transparent;border-bottom:8px solid white;}.login-menu-container{margin-right:15px;cursor:pointer;}.login-menu-container img{border-radius:50%;border-style:solid;width:45px;height:45px;object-fit:cover;border-color:#a98173;border-width:2px;}.login-menu-container a{padding:0;}.hamburger{background-color:transparent;border:0px;outline:0px;width:50px;height:50px;height:auto;position:fixed;top:15px;right:15px;cursor:pointer;z-index:9999;}.hamburger .burger{-webkit-transition:all 0.3s;transition:all 0.3s;border-radius:5px;height:5px;width:100%;display:inline-block;background-color:#4e4d4d;}.focus .burger{-webkit-transition:all 0.3s;transition:all 0.3s;}.focus .burger:first-of-type{background-color:#C62828;-webkit-transition-delay:0.4s;transition-delay:0.4s;-webkit-transform:translate3d(0px,0px,0px) rotateZ(45deg);-ms-transform:translate3d(0px,0px,0px) rotateZ(45deg);transform:translate3d(0px,0px,0px) rotateZ(45deg);width:40px;-webkit-transform-origin:left top;-ms-transform-origin:left top;transform-origin:left top;}.focus .burger:nth-of-type(2){opacity:0;}.focus .burger:last-of-type{background-color:#C62828;-webkit-transition-delay:0.4s;transition-delay:0.4s;-webkit-transform:translate3d(0px,0px,0px) rotateZ(-45deg);-ms-transform:translate3d(0px,0px,0px) rotateZ(-45deg);transform:translate3d(0px,0px,0px) rotateZ(-45deg);width:40px;-webkit-transform-origin:left bottom;-ms-transform-origin:left bottom;transform-origin:left bottom;}.b-a-expanded{-webkit-transition:all .25s;transition:all .25s;top:-0px;}.menu-expanded{position:fixed;-webkit-transition:all .25s;transition:all .25s;text-align:center;height:100%;width:100%;border-radius:0;top:0;left:0;z-index:1;cursor:pointer;background-color:rgba(0,0,0,0.85);}.menu-expanded ul{padding:0;list-style-type:none;-webkit-transition:all 0s;transition:all 0s;position:relative;left:0;z-index:2;}.menu-expanded a{-webkit-transition:all .15s;transition:all .15s;-webkit-text-decoration:none;text-decoration:none;font-size:2em;padding:5px;color:#FFF;display:block;}.menu-expanded a:hover{background-color:rgba(255,255,255,0.8);-webkit-transition:all .15s;transition:all .15s;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;color:#333;border:1px solid rgba(255,255,255,0.15);}.pics-content{margin:20px;}.single-img{box-shadow:0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);max-width:100%;height:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-left:auto;margin-right:auto;-webkit-animation:fade-in 2s;animation:fade-in 2s;-moz-animation:fade-in 2s;-webkit-animation:fade-in 2s;-o-animation:fade-in 2s;}.single-post-header{width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.top-text{margin:20px;}.save-button-icon{-webkit-transition:-webkit-transform 0.5s;-webkit-transition:transform 0.5s;transition:transform 0.5s;cursor:pointer;}.save-button-icon img{width:50px;height:50px;}.save-button-icon:hover{-webkit-transform:translateY(-5px);-ms-transform:translateY(-5px);transform:translateY(-5px);}.button-container{margin-left:auto;margin-right:15px;}.related-post-slider{padding:13px;height:300px;width:90%;}.related-post-slider div div .hovereffect{height:300px;}.related-post-slider .swiper-container{height:300px;}.search-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.nothing-found-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}#wrap{margin:50px 100px;display:inline-block;position:relative;height:60px;float:right;padding:0;}input[type=\"text\"]{height:60px;width:100%;font-size:55px;display:inline-block;font-weight:100;border:none;outline:none;color:#555;padding:3px;padding-right:60px;position:absolute;top:0;right:0;background:none;-webkit-transition:width 0.4s cubic-bezier(0,0.795,0,1);transition:width 0.4s cubic-bezier(0,0.795,0,1);cursor:text;}input[type=\"text\"]:focus:hover{border-bottom:1px solid #BBB;}input[type=\"submit\"]{height:67px;width:63px;display:inline-block;float:right;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADNQTFRFU1NT9fX1lJSUXl5e1dXVfn5+c3Nz6urqv7+/tLS0iYmJqampn5+fysrK39/faWlp////Vi4ZywAAABF0Uk5T/////////////////////wAlrZliAAABLklEQVR42rSWWRbDIAhFHeOUtN3/ags1zaA4cHrKZ8JFRHwoXkwTvwGP1Qo0bYObAPwiLmbNAHBWFBZlD9j0JxflDViIObNHG/Do8PRHTJk0TezAhv7qloK0JJEBh+F8+U/hopIELOWfiZUCDOZD1RADOQKA75oq4cvVkcT+OdHnqqpQCITWAjnWVgGQUWz12lJuGwGoaWgBKzRVBcCypgUkOAoWgBX/L0CmxN40u6xwcIJ1cOzWYDffp3axsQOyvdkXiH9FKRFwPRHYZUaXMgPLeiW7QhbDRciyLXJaKheCuLbiVoqx1DVRyH26yb0hsuoOFEPsoz+BVE0MRlZNjGZcRQyHYkmMp2hBTIzdkzCTc/pLqOnBrk7/yZdAOq/q5NPBH1f7x7fGP4C3AAMAQrhzX9zhcGsAAAAASUVORK5CYII=) center center no-repeat;text-indent:-10000px;border:none;position:absolute;top:0;right:0;cursor:pointer;opacity:0.4;-webkit-transition:opacity .4s ease;transition:opacity .4s ease;}input[type=\"submit\"]:hover{opacity:0.8;}.search-icon img{height:40px;margin-top:7px;}.search-icon a{padding:0;}html,body{background:#FFF;margin:0;padding:0;font:100% \"Noto Sans\",sans-serif;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:100%;}h1{position:relative;font-weight:600;font-size:0.9em;text-transform:uppercase;-webkit-letter-spacing:0.3em;-moz-letter-spacing:0.3em;-ms-letter-spacing:0.3em;letter-spacing:0.3em;overflow:hidden;}h1:before{content:\"\";position:absolute;left:0;bottom:0;height:2px;width:4em;-webkit-animation:slide-in 1s ease-in both 0.5s;animation:slide-in 1s ease-in both 0.5s;}h1.no-underscore:before{display:none;}.child-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;min-height:100vh;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-top:5px;margin-bottom:5px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.wrapper{max-width:1160px;margin:0 auto;position:relative;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;}.content-wrapper{width:100%;}.content{clear:both;overflow:auto;}.content h1{margin-left:5px;}.grid-list-container{margin-top:20px;margin-bottom:20px;}.swiper-container{z-index:0;}@-webkit-keyframes slide-in{0%{-webkit-transform:translate3d(-180%,0,0);-ms-transform:translate3d(-180%,0,0);transform:translate3d(-180%,0,0);}100%{-webkit-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0);}}@keyframes slide-in{0%{-webkit-transform:translate3d(-180%,0,0);-ms-transform:translate3d(-180%,0,0);transform:translate3d(-180%,0,0);}100%{-webkit-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0);}}@-webkit-keyframes slide-up{0%{opacity:0;-webkit-transform:translate3d(0,100%,0);-ms-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);}90%{opacity:1;}100%{-webkit-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0);}}@keyframes slide-up{0%{opacity:0;-webkit-transform:translate3d(0,100%,0);-ms-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);}90%{opacity:1;}100%{-webkit-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0);}}@-webkit-keyframes fade-in{0%{opacity:0;}100%{opacity:1;}}@keyframes fade-in{0%{opacity:0;}100%{opacity:1;}}.grig-img-container{background-color:transparent;border:0;border-radius:0;}.grig-img-container img{width:100%;height:265px;object-fit:cover;padding-left:5px;padding-bottom:5px;}.hovereffect{overflow:hidden;position:relative;text-align:center;cursor:default;}.hovereffect .overlay{position:absolute;overflow:hidden;cursor:pointer;width:80%;height:80%;left:10%;top:10%;border-bottom:1px solid #FFF;border-top:1px solid #FFF;-webkit-transition:opacity 0.35s,-webkit-transform 0.35s;-webkit-transition:opacity 0.35s,-webkit-transform 0.35s;-webkit-transition:opacity 0.35s,transform 0.35s;transition:opacity 0.35s,transform 0.35s;-webkit-transform:scale(0,1);-ms-transform:scale(0,1);-webkit-transform:scale(0,1);-ms-transform:scale(0,1);transform:scale(0,1);}.hovereffect:hover .overlay{opacity:1;-webkit-filter:alpha(opacity=100);filter:alpha(opacity=100);-webkit-transform:scale(1);-ms-transform:scale(1);-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}.hovereffect img{display:block;position:relative;-webkit-transition:all 0.35s;-webkit-transition:all 0.35s;transition:all 0.35s;}.hovereffect:hover img{-webkit-filter:url('data:image/svg+xml;charset=utf-8,<svg xmlns=\"http://www.w3.org/2000/svg\"><filter id=\"filter\"><feComponentTransfer color-interpolation-filters=\"sRGB\"><feFuncR type=\"linear\" slope=\"0.6\" /><feFuncG type=\"linear\" slope=\"0.6\" /><feFuncB type=\"linear\" slope=\"0.6\" /></feComponentTransfer></filter></svg>#filter');filter:url('data:image/svg+xml;charset=utf-8,<svg xmlns=\"http://www.w3.org/2000/svg\"><filter id=\"filter\"><feComponentTransfer color-interpolation-filters=\"sRGB\"><feFuncR type=\"linear\" slope=\"0.6\" /><feFuncG type=\"linear\" slope=\"0.6\" /><feFuncB type=\"linear\" slope=\"0.6\" /></feComponentTransfer></filter></svg>#filter');-webkit-filter:brightness(0.6);filter:brightness(0.6);-webkit-filter:brightness(0.6);}.hovereffect h2{text-transform:uppercase;text-align:center;position:relative;font-size:17px;background-color:transparent;color:#FFF;padding:1em 0;opacity:0;-webkit-filter:alpha(opacity=0);filter:alpha(opacity=0);-webkit-transition:opacity 0.35s,-webkit-transform 0.35s;-webkit-transition:opacity 0.35s,-webkit-transform 0.35s;-webkit-transition:opacity 0.35s,transform 0.35s;transition:opacity 0.35s,transform 0.35s;-webkit-transform:translate3d(0,-100%,0);-webkit-transform:translate3d(0,-100%,0);-ms-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);}.hovereffect .overlay .hovereffect a,.hovereffect p{color:#FFF;-webkit-filter:alpha(opacity=0);filter:alpha(opacity=0);-webkit-transition:opacity 0.35s,-webkit-transform 0.35s;-webkit-transition:opacity 0.35s,-webkit-transform 0.35s;-webkit-transition:opacity 0.35s,transform 0.35s;transition:opacity 0.35s,transform 0.35s;-webkit-transform:translate3d(0,100%,0);-webkit-transform:translate3d(0,100%,0);-ms-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);}.hovereffect:hover a,.hovereffect:hover p,.hovereffect:hover h2{opacity:1;-webkit-filter:alpha(opacity=100);filter:alpha(opacity=100);-webkit-transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0);}.pure-g{text-align:center;}.redBg{background-color:red;border-radius:51px;color:white;padding:5px;}#waiting-loader{padding:20px;width:0;margin:0 auto;}#loader{overflow:hidden;position:absolute;width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.circle{height:100px;width:100px;border-radius:100%;box-shadow:0 1px 0 0 rgba(255,192,0,0.25),0 -1px 0 0 rgba(255,64,0,0.25),1px 0 0 0 rgba(255,192,0,0.25),-1px 0 0 0 rgba(255,64,0,0.25),1px -1px 0 0 rgba(255,128,0,0.5),-1px 1px 0 0 rgba(255,128,0,0.5),1px 1px 0 0 rgba(255,255,0,0.75),-1px -1px 0 0 rgba(255,0,0,0.75);}.circle:nth-of-type(2){box-shadow:0 1px 0 0 rgba(225,131,194,0.25),0 -1px 0 0 rgba(165,181,222,0.25),1px 0 0 0 rgba(225,131,194,0.25),-1px 0 0 0 rgba(165,181,222,0.25),1px -1px 0 0 rgba(195,156,208,0.5),-1px 1px 0 0 rgba(195,156,208,0.5),1px 1px 0 0 rgba(255,105,180,0.75),-1px -1px 0 0 rgba(135,206,235,0.75);-webkit-animation:rotateThis 1s linear infinite;animation:rotateThis 1s linear infinite;}.circle:nth-of-type(3){box-shadow:0 1px 0 0 rgba(192,63,153,0.25),0 -1px 0 0 rgba(214,69,99,0.25),1px 0 0 0 rgba(192,63,153,0.25),-1px 0 0 0 rgba(214,69,99,0.25),1px -1px 0 0 rgba(203,66,126,0.5),-1px 1px 0 0 rgba(203,66,126,0.5),1px 1px 0 0 rgba(181,59,180,0.75),-1px -1px 0 0 rgba(225,72,71,0.75);}.circle-multiple{height:100px;width:100px;}.circle-multiple .circle{position:absolute;margin:auto;}.circle-multiple .circle:nth-of-type(1){-webkit-animation:psycho 2s linear infinite;animation:psycho 2s linear infinite;}.circle-multiple .circle:nth-of-type(2){-webkit-animation:psycho 2s linear .1s infinite;animation:psycho 2s linear .1s infinite;}.circle-multiple .circle:nth-of-type(3){-webkit-animation:psycho 2s linear .25s infinite;animation:psycho 2s linear .25s infinite;}@-webkit-keyframes rotateThis{from{-webkit-transform:rotate(0deg) scale(1);-ms-transform:rotate(0deg) scale(1);transform:rotate(0deg) scale(1);}to{-webkit-transform:rotate(360deg) scale(1);-ms-transform:rotate(360deg) scale(1);transform:rotate(360deg) scale(1);}}@keyframes rotateThis{from{-webkit-transform:rotate(0deg) scale(1);-ms-transform:rotate(0deg) scale(1);transform:rotate(0deg) scale(1);}to{-webkit-transform:rotate(360deg) scale(1);-ms-transform:rotate(360deg) scale(1);transform:rotate(360deg) scale(1);}}@-webkit-keyframes psycho{0%{-webkit-transform:rotate(0deg) scale(1) translate(0,0);-ms-transform:rotate(0deg) scale(1) translate(0,0);transform:rotate(0deg) scale(1) translate(0,0);}33%{-webkit-transform:rotate(360deg) scale(1) translate(5px,5px);-ms-transform:rotate(360deg) scale(1) translate(5px,5px);transform:rotate(360deg) scale(1) translate(5px,5px);}66%{-webkit-transform:rotate(720deg) scale(1) translate(-5px,-5px);-ms-transform:rotate(720deg) scale(1) translate(-5px,-5px);transform:rotate(720deg) scale(1) translate(-5px,-5px);}100%{-webkit-transform:rotate(1080deg) scale(1) translate(0,0);-ms-transform:rotate(1080deg) scale(1) translate(0,0);transform:rotate(1080deg) scale(1) translate(0,0);}}@keyframes psycho{0%{-webkit-transform:rotate(0deg) scale(1) translate(0,0);-ms-transform:rotate(0deg) scale(1) translate(0,0);transform:rotate(0deg) scale(1) translate(0,0);}33%{-webkit-transform:rotate(360deg) scale(1) translate(5px,5px);-ms-transform:rotate(360deg) scale(1) translate(5px,5px);transform:rotate(360deg) scale(1) translate(5px,5px);}66%{-webkit-transform:rotate(720deg) scale(1) translate(-5px,-5px);-ms-transform:rotate(720deg) scale(1) translate(-5px,-5px);transform:rotate(720deg) scale(1) translate(-5px,-5px);}100%{-webkit-transform:rotate(1080deg) scale(1) translate(0,0);-ms-transform:rotate(1080deg) scale(1) translate(0,0);transform:rotate(1080deg) scale(1) translate(0,0);}}.under-button{text-align:center;margin-top:10px;}.under-button img{height:45px;opacity:0.5;}.under-button img:hover{cursor:pointer;-webkit-animation:spin 1s linear infinite;-moz-animation:spin 1s linear infinite;-webkit-animation:spin 1s linear infinite;animation:spin 1s linear infinite;opacity:0.8;}@-moz-keyframes spin{100%{-moz-transform:rotate(360deg);}}@-webkit-keyframes spin{100%{-webkit-transform:rotate(360deg);}}@-webkit-keyframes spin{100%{-webkit-transform:rotate(360deg);-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes spin{100%{-webkit-transform:rotate(360deg);-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}.sidebar{margin-left:10px;position:relative;min-width:300px;margin-top:20px;float:right;overflow:hidden;}.sidebar-header{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.info{margin:25px;}.info ul li{position:relative;left:-20px;list-style:none;overflow:hidden;height:30px;border:solid gray;border-width:0px 0px 1px 0px;font-size:14px;line-height:30px;cursor:pointer;}.info ul li a{color:#000;text-transform:uppercase;font-weight:600;font-size:0.9em;-webkit-letter-spacing:0.3em;-moz-letter-spacing:0.3em;-ms-letter-spacing:0.3em;letter-spacing:0.3em;-webkit-text-decoration:none;text-decoration:none;}.sidebar-header-text{position:relative;}.avatar{border-radius:50%;width:120px;height:120px;object-fit:cover;}.ph{list-style-image:url(\"https://youngfolks.ru/static/img/32/camera.png\");}.md{list-style-image:url(\"https://youngfolks.ru/static/img/32/model.png\");}.art{list-style-image:url(\"https://youngfolks.ru/img/static/32/painter.png\");}.ph li,.md li,.art li{font-size:20px;margin-bottom:15px;line-height:21px;padding-left:15px;}.ul-main-list{margin-top:30px;}.ph-white{list-style-image:url(\"https://youngfolks.ru/static/img/32/camera-white.png\");}.md-white{list-style-image:url(\"https://youngfolks.ru/static/img/32/model-white.png\");}.art-white{list-style-image:url(\"https://youngfolks.ru/static/img/32/painter-white.png\");}.ph-white li,.md-white li,.art-white li{font-size:20px;text-align:center;position:relative;background-color:transparent;color:#FFF;}.login-form{margin-top:30px;margin-bottom:30px;}.login-profile-img{display:block;height:7em;width:7em;object-fit:cover;margin-right:auto;margin-left:auto;border:.5em solid #f2f2f2;border-radius:100%;box-shadow:6px 9px 14px 0px rgba(0,0,0,0.1);}.profile-container{margin-top:-3.5em;padding:5em 1.5em 1.5em 1.5em;background:#fbfbfb;max-width:350px;text-align:center;margin-right:auto;margin-left:auto;}.button{display:block;min-width:240px;height:55px;line-height:55px;margin:20px;color:#FFF;position:relative;top:0;bottom:0;left:0;right:0;cursor:pointer;overflow:hidden;border-radius:5px;box-shadow:0 0 20px 0 rgba(0,0,0,0.3);-webkit-transition:all 0.25s cubic-bezier(0.31,-0.105,0.43,1.4);transition:all 0.25s cubic-bezier(0.31,-0.105,0.43,1.4);}.button.vk{background-color:#466991;}.button.fb{background-color:#3b5998;}.button.yf{background-color:#775e55;-webkit-letter-spacing:0.3em;-moz-letter-spacing:0.3em;-ms-letter-spacing:0.3em;letter-spacing:0.3em;}.button span,.button .icon{display:block;height:100%;text-align:center;position:absolute;top:0;}.button span{width:72%;line-height:inherit;font-size:15px;text-transform:uppercase;left:0;-webkit-transition:all 0.25s cubic-bezier(0.31,-0.105,0.43,1.4);transition:all 0.25s cubic-bezier(0.31,-0.105,0.43,1.4);}.button span:after{content:'';background-color:#FFF;width:2px;height:70%;position:absolute;top:15%;right:-1px;}.button .icon{margin-top:10px;width:28%;right:0;-webkit-transition:all 0.25s cubic-bezier(0.31,-0.105,0.43,1.4);transition:all 0.25s cubic-bezier(0.31,-0.105,0.43,1.4);}.button .icon .fa{font-size:30px;vertical-align:middle;-webkit-transition:all 0.25s cubic-bezier(0.31,-0.105,0.43,1.4),height 0.25s ease;transition:all 0.25s cubic-bezier(0.31,-0.105,0.43,1.4),height 0.25s ease;}.button .icon .fa-remove{height:36px;}.button:hover{opacity:.9;}.button:hover span{left:-72%;opacity:0;}.button:hover .icon{width:100%;}.button:hover .icon .fa-remove{height:46px;}.button:active{opacity:1;}.child-container-dashboard{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;min-height:100vh;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-top:5px;margin-bottom:5px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:#f5f5f5;}.dashboard-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:100%;}.dashboard-header{width:100%;}.dashboard-header img{padding:10px;border-radius:50%;width:100px;height:100px;object-fit:cover;}.inner-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.delete-container{position:absolute;right:0;margin:10px;cursor:pointer;-webkit-animation:spinreverse 5s infinite linear;z-index:10;}.delete-container img{width:40px;height:40px;}@-webkit-keyframes spinreverse{0%{-webkit-transform:rotate(0deg);}100%{-webkit-transform:rotate(-360deg);}}.swiper-wrapper{height:400px;max-width:850px;padding:5px;}.slider-img{height:400px;width:100%;object-fit:cover;}.popup{background:#6d6d6d;width:400px;text-align:center;position:fixed;box-shadow:1px 1px 4px rgba(0,0,0,0.2),-1px 0 4px rgba(0,0,0,0.2);top:calc(50vh - 150px);left:calc(50vw - 200px);-webkit-transition:all 0.7s cubic-bezier(0.845,-0.265,0.19,1.28);transition:all 0.7s cubic-bezier(0.845,-0.265,0.19,1.28);z-index:10;-webkit-transform:scale(1);-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);opacity:0.9;}.popup ul{padding:0;margin:0;}.popup ul li{display:inline-block;width:50%;}.popup ul li a{width:100%;border-radius:0;}.popup ul li:first-of-type a{background:#A7C5BD;}.popup ul li:last-of-type a{background:#b38f83;}.popup p{font-size:18px;color:#FFF;padding:40px;}.button-popup{display:inline-block;min-width:200px;height:60px;line-height:60px;border:none;background:#69B1A9;color:#FFF;font-size:15px;cursor:pointer;text-transform:uppercase;-webkit-transition:all .3s;transition:all .3s;-webkit-letter-spacing:0.3em;-moz-letter-spacing:0.3em;-ms-letter-spacing:0.3em;letter-spacing:0.3em;-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFa0IsQUFFbUIsQUFZQyxBQUdDLEFBS0csQUFNRixBQUlELEFBV0YsQUFLRSxBQVVBLEFBSUEsQUFTUixBQUdtQixBQWFULEFBUUEsQUFHSyxBQU9mLEFBR2UsQUFPTCxBQUlMLEFBYUwsQUFRVSxBQVFzQixBQU85QixBQUdnRSxBQWVqRSxBQUtDLEFBR2MsQUFJZixBQUlnQixBQUdWLEFBSUosQUFLQSxBQUdBLEFBR0EsQUFJQSxBQUtLLEFBUU4sQUFrQmlCLEFBR2pCLEFBZUEsQUFHQSxBQUlGLEFBSU0sQUFTRSxBQVFQLEFBU0UsQUFHQSxBQVFJLEFBTU4sQUFHQSxBQUlLLEFBR0EsQUFJTixBQU8yQixBQUVKLEFBSXJCLEFBR0EsQUFFcUIsQUFJckIsQUFFQSxBQUdpQixBQUtsQixBQVNLLEFBTUUsQUFnQlIsQUFPSSxBQU1pVCxBQUt0UyxBQWdCZCxBQVVELEFBTVEsQUFHRyxBQU1SLEFBS0csQUFTSCxBQU1pVCxBQUlYLEFBR3RTLEFBSUssQUFJa0IsQUFHSSxBQUdDLEFBSVAsQUFFRSxBQUljLEFBRU0sQUFFRSxBQUVMLEFBSW5DLEFBSU4sQUFJRyxBQVFpQixBQUlHLEFBSUEsQUFJbEIsQUFRSixBQUtELEFBR00sQUFZUCxBQVFPLEFBR0EsQUFPcUQsQUFHRCxBQUdFLEFBR3pELEFBTUMsQUFHNkQsQUFHRCxBQUdFLEFBRy9ELEFBT0MsQUFJRixBQVdJLEFBU0osQUFrQlcsQUFHQSxBQUdBLEFBS1gsQUFPSixBQVFDLEFBU0ssQUFNRCxBQUtILEFBR0QsQUFHRCxBQUlDLEFBR0MsQUFHRixBQUdHLEFBU0EsQUFPRixBQUdFLEFBT0EsQUFLSyxBQVFQLEFBS3NCLEFBRUcsQUFHdkIsQUFLQSxBQUtNLEFBY1QsQUFJVyxBQUlWLEFBSVEsQUFHQSxBQUdKLEFBS00sVUEvdUJWLEFBa0NBLEFBNEJVLEFBc0lWLEFBNkRBLEFBY3lCLEFBRXZCLEFBTUEsQUFFQSxBQXdDYSxBQTRDQSxBQW9QTixBQWtDVixBQVNDLEFBNkVGLENBbG5CVyxBQVlSLEFBdUdNLEFBeUJOLEFBSUUsQUEyQ0QsQUFtRVcsQUE0SUMsQUF3SEgsQUFzQlYsQUFPQSxBQXlCQSxBQXdCQSxBQTBDSSxDQTdvQkgsQUF1QkEsQUErQ0YsQUFxQkEsQUFjRSxBQUlFLEFBNFBILEFBb0NDLEFBMkpBLEFBYUEsQ0EzZ0JBLEFBSUMsQUFHQSxBQTZGQSxBQTBKTixBQWNJLEFBYUEsQUE0UU0sQUE4QkYsQUFLTCxDQTlYTyxBQWlPUCxBQW9CSyxBQTZCSixDQXppQlEsQUFnWnNCLEFBMkV2QixBQWtCRCxBQTBGSSxBQW1IWCxDQS95QkYsQUF5Q0csQUFvT0gsQUFpRFEsQUFJRSxBQTZDRCxBQXNGQSxBQWdKRCxBQW9CRSxBQTZFVCxDQTNxQlEsQUFtTEEsQUFvSEosQUF1T0ksQ0ExZ0JWLEFBZUEsQUFnQkMsQUFVTSxBQUlJLEFBMEpFLEFBZ0VMLEFBK0ZBLEFBaUVHLEFBeUNQLEFBOEJJLEFBNENMLEFBbUJRLEFBSVAsQUF3RGtCLEFBMkh0QixDQTF0QlksQUFzdkJSLEFBY0YsQUFXVSxBQUdBLENBcEdULENBN1FRLEFBT0wsQUFnV0osQUFtQk0sRUE3bkJILEFBd0NFLEFBcUJNLEFBdWdCUixDQXBaSSxBQTBKSixBQTBRSSxDQTF3QkUsQUErRkcsQUFVQSxBQW9LWixBQTZDSyxBQTRGRyxBQXdEQyxBQVlOLEFBbUpILEFBb0NnQixBQUdBLEFBSUwsQ0F6b0JGLEFBZVIsQUFvS0QsQUE0ZFEsQUF3QlYsQUE2REksQUE0REMsQ0Fqd0JGLEFBc05LLEFBZ2lCQyxDQTN2QlAsQ0E4QkMsQUF1S21CLEFBZ0R2QixBQWtFRSxBQXlNTyxBQTROSixDQXZTQyxBQTZDb0IsQUFxRHBCLEFBaUVELEFBb0NHLENBbmlCRyxBQWdMQSxBQXFiTixBQXVCc0IsQUFpQmhCLEFBaUJQLENBcFprQixDQXJWYixBQXdkb0IsQUFLVCxBQThFVCxBQTJFUixDQXZaTSxBQXlGRSxBQU1ILEFBZ0ZKLEFBdURNLEFBb0ZBLEFBdUcwQyxBQXlFdEIsQ0Fua0JsQixBQWlGZSxBQW1EZCxBQStITCxBQXlGQyxBQStFSSxBQU1ILENBNWFOLEFBNkZGLEFBc1JPLENBdGhCRSxBQTZCUCxBQWdvQm1FLEFBd0hsRSxDQTN3QkQsQUFNQSxBQWdMVSxBQWtJTCxBQW1aRCxDQW5tQkssQUFxRUYsQUF5bEJKLENBdnVCRixBQWtYQSxDQW5GSyxBQThaSixBQUtLLENBeElELENBM09DLEFBMEtELEFBNkdOLEFBMERFLENBdnVCTyxBQW1QUixBQTJOOFIsQUFnTnhSLENBaHBCRSxBQWlSVCxBQXNLQyxBQW9HSSxBQTRIUyxHQXptQmIsQUF1Qk0sQUFPRyxBQXFCWixBQXlCWSxBQStlRixDQXhrQkwsQUFtUU0sQUFtRVYsQUEwWkssQUFxQ0UsQ0FseUJILEFBb1FXLENBbVFULEFBdURFLEFBa0JXLENBMWhCbEIsQUF1U0ksQUEyRUgsQUEySEksQUF5REUsQ0FzSStCLENBcFpoQyxBQThVQyxDQS9vQkEsQ0FxTnlyQixBQTRDanNCLEFBd2NPLENBem5CUCxBQXVHRSxBQWdQQyxBQThEMEIsQ0E3SnBCLENBeElILEFBdUpMLEFBNFFDLENBcmtCSyxBQW1nQkMsQ0FwTEcsQUFXTixBQW1KSCxDQXFITixDQS9tQjRCLEFBeUJ0QixBQTJDTSxDQW5IRCxBQWtCTCxBQXVhQyxBQXNWNEQsRUE1ckI5RCxBQTZNNkIsQUFvaEI1QixDQXRjSSxBQXlEMEMsQUFrSDlDLEFBOEZJLENBMVdILEFBd1NRLEFBeUdkLENBcmdCUSxBQTZESCxBQXlYTyxDQXpOVixBQWFrQixBQTRDWSxBQXVKZ0MsQUF3Q3RELEFBdURWLENBbEdpRSxBQStEN0QsQ0F6RDhELEFBcUdqRSxDQS9vQlcsQUEyZ0JELEFBNkxBLENBN2hCSSxBQUlILEFBeUZGLEFBdVBLLEFBbUxMLEFBU0ssQUFpQkEsQ0FscUJWLEFBd0RNLEFBOEZOLEFBdURTLENBblFWLEFBb1lrQixBQWlNZ0QsQ0EzaEJ4RCxBQXVCVixBQVV5QyxBQVVDLEFBOFBqQyxBQStPMEQsQUFpRm5CLENBM0VvQixBQTBONUQsQ0E5YlgsQUFtS1EsQ0EzRHFCLEFBbUkxQixBQTZFQSxDQTlxQlMsQUFtSFIsQUFtR0YsQ0E0YVEsQ0FYQSxDQTlkTixHQXZJQSxBQXVERyxBQXNFSSxBQWdGTixBQXdKZ0IsQUF1UEgsQ0ExaEJMLEFBNllvQixFQUdDLENBOVEvQixBQWlGVyxBQW1RTyxBQXVEakIsQUE2RUEsQUFtQ1UsQ0FsckJtQixDQXFGOUIsQUFhSixBQXFEcUIsRUFtV1gsQ0EvWEosQUF5V3FCLENBcGRDLEFBb1ZaLEFBa2JaLENBeHZCTSxBQTBFSCxDQW1Nb0IsQUFTQSxDQWpOeEIsQUE4RkMsQUFtYUwsQ0Fsb0JlLEFBdW5CSCxDQTlpQlQsQUFxR00sQUFva0JKLEVBOW5CSyxDQWtTTCxDQTZPRixDQXJOc0IsQ0F5REksQUE4VXBCLENBanVCVSxDQTZDZCxDQXZEQSxBQXNKQyxBQXVHMEIsQUFrRWhCLENBbFFWLENBZ0NPLEFBdWNBLEFBb0lQLENBelF5QixDQTdhbkIsQUF3a0JYLENBN1FtQixBQWdDWixDQXpPRSxDQWdLcUIsQ0EwU3BCLENBbmdCWCxBQThRYSxBQTZJUyxBQTBCYixFQXppQkYsQUEwRUUsQUEwakJQLENBcGFXLEFBcWxCSixDQTlxQkosQUE4UitCLEVBaFRuQyxBQThoQmUsSUFybkJDLEFBeVhiLEFBOE9LLEFBd0lRLENBMVVBLENBclpPLEFBZ2tCaUIsQ0F4ZnJDLENBbkNnQixDQXFEWixBQWthRyxDQTZFQyxDQTVpQkwsQ0EydUJZLEVBOVpELEVBdkxOLEFBMENJLEFBNEdvQyxDQWhRM0MsRUErZ0JDLElBOWZELENBN0RELENBbU9PLENBdkdFLEFBcVZKLEFBZUosQUE2S0ksQUFpQkEsQ0E3UGdDLEFBa1MzQixDQWpmaUIsQUFxWm1CLElBMWpCdkIsRUEwRy9CLENBcWFZLENBemxCYSxBQW9jdUIsQ0FxVW5DLEdBcGxCWCxDQXZCZSxBQStWUCxFQXJRRCxBQTZRTSxBQTZKTixDQXZqQkUsQ0FxVndDLENBb0I3QyxFQTlSSSxFQWdEQSxBQTBWZ0MsQ0E5SFcsQUErUkMsRUF2SW5CLENBMWY5QixJQS9HRCxBQXdRUSxBQTJOTCxBQStNSyxHQXZqQkEsRUF3T0UsQ0E3SitCLENBdEZSLENBdkJMLEFBNEpyQixDQW1hOEQsQ0F4cEJwRSxFQTlCZ0IsQUF3WitCLENBMFFFLEVBM1NsQixHQWhGdkIsQUEwYUEsR0F2akJFLENBV0QsQUF1UVksR0EyWVgsUUEvS3NDLEVBdEZyQyxDQXZTVixHQTFRZSxPQWtjUixDQXJUeUIsQ0E2SC9CLE9BaExGLEdBVUEsR0FzYlMsQUE2TEcsQUFnQkgsS0E1b0JNLEdBVUcsQUFtVGEsRUE5UGhCLFdBZ0RGLEtBME5rQixLQTJDMFEsS0FuVHZSLE1BZ1RXLE9BeE81QixDQWtFUSxBQTJhRCxJQTZEUixPQTFpQkUsSUF0RVcsQUFpbkJHLEFBd0NOLENBbFphLEFBbUN5USxHQXlRdlIsU0EvUUEsS0FsY1EsTUErSmhCLEdBd2VnRCxBQXlJekMsR0FyckJRLElBNm5CaEIsRUFqV21CLE1BbFJBLEdBbW5CbEIsS0ErRlUsZUEvYkksQUFvRmUseUJBbkZuQixBQWdDcUIsTUF3WC9CLFlBQUMsQ0E1V3NCLHNCQVhBLGtDQWpDWiw2RUFpQ2EsOEZBaEJiLHNEQUNRLCtCQUFDLHdDQTVKWCxxQkFDVCxZQUNNLGtCQUNaLE1BQ0UsUUFDTyxlQUNILFlBQ2dCLGdFQUFDIiwiZmlsZSI6InJlcy9zdHlsZXMvaW5kZXguc2NzcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYW5kcmVmZWRvcmVua28vRHJvcGJveC9TdHVkaXVtL21lcnNpL2JhY2hlbG9yL2Zyb250ZW5kIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNzc2AubmF2aWdhdGlvbiB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgYmFja2dyb3VuZDogIzZhOGJhOTtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tb3otYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWZsZXgtZmxvdzogcm93IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDsgfVxuICAubmF2aWdhdGlvbiBsaTpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bzsgfVxuICAubmF2aWdhdGlvbiAucHJldi1sYXN0LWxpIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMDBweDsgfVxuICAubmF2aWdhdGlvbiBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogMWVtO1xuICAgIGNvbG9yOiAjRkZGOyB9XG4gICAgLm5hdmlnYXRpb24gYTpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiAjYTk4MTczOyB9XG5cbi8qIG1lbnUgYXBwZWFyYW5jZSovXG4jbWVudSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGNvbG9yOiAjRkZGO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZDogI2IzOGY4MztcbiAgYm94LXNoYWRvdzogMCAxcHggOHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjRzO1xuICB6LWluZGV4OiAxOyB9XG4gICNtZW51IHVsIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBwYWRkaW5nOiAwOyB9XG5cbiNtZW51OmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC03cHg7XG4gIHJpZ2h0OiAzMHB4O1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDhweCBzb2xpZCB3aGl0ZTsgfVxuXG4ubG9naW4tbWVudS1jb250YWluZXIge1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjsgfVxuICAubG9naW4tbWVudS1jb250YWluZXIgaW1nIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICB3aWR0aDogNDVweDtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgYm9yZGVyLWNvbG9yOiAjYTk4MTczO1xuICAgIGJvcmRlci13aWR0aDogMnB4OyB9XG4gIC5sb2dpbi1tZW51LWNvbnRhaW5lciBhIHtcbiAgICBwYWRkaW5nOiAwOyB9XG5cbi5oYW1idXJnZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAwcHg7XG4gIG91dGxpbmU6IDBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMTVweDtcbiAgcmlnaHQ6IDE1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgei1pbmRleDogOTk5OTsgfVxuICAuaGFtYnVyZ2VyIC5idXJnZXIge1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBoZWlnaHQ6IDVweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRlNGQ0ZDsgfVxuXG4uZm9jdXMgLmJ1cmdlciB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzOyB9XG4gIC5mb2N1cyAuYnVyZ2VyOmZpcnN0LW9mLXR5cGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNDNjI4Mjg7XG4gICAgdHJhbnNpdGlvbi1kZWxheTogMC40cztcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpIHJvdGF0ZVooNDVkZWcpO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wOyB9XG4gIC5mb2N1cyAuYnVyZ2VyOm50aC1vZi10eXBlKDIpIHtcbiAgICBvcGFjaXR5OiAwOyB9XG4gIC5mb2N1cyAuYnVyZ2VyOmxhc3Qtb2YtdHlwZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0M2MjgyODtcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjRzO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCkgcm90YXRlWigtNDVkZWcpO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tOyB9XG5cbi5iLWEtZXhwYW5kZWQge1xuICB0cmFuc2l0aW9uOiBhbGwgLjI1cztcbiAgdG9wOiAtMHB4OyB9XG5cbi5tZW51LWV4cGFuZGVkIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0cmFuc2l0aW9uOiBhbGwgLjI1cztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDE7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg1KTsgfVxuICAubWVudS1leHBhbmRlZCB1bCB7XG4gICAgcGFkZGluZzogMDtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgdHJhbnNpdGlvbjogYWxsIDBzO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHotaW5kZXg6IDI7IH1cbiAgLm1lbnUtZXhwYW5kZWQgYSB7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4xNXM7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBjb2xvcjogI0ZGRjtcbiAgICBkaXNwbGF5OiBibG9jazsgfVxuICAgIC5tZW51LWV4cGFuZGVkIGE6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIC4xNXM7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgICAgY29sb3I6ICMzMzM7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpOyB9XG5cbi5waWNzLWNvbnRlbnQge1xuICBtYXJnaW46IDIwcHg7IH1cblxuLnNpbmdsZS1pbWcge1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgYW5pbWF0aW9uOiBmYWRlLWluIDJzO1xuICAtbW96LWFuaW1hdGlvbjogZmFkZS1pbiAycztcbiAgLyogRmlyZWZveCAqL1xuICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZS1pbiAycztcbiAgLyogU2FmYXJpIGFuZCBDaHJvbWUgKi9cbiAgLW8tYW5pbWF0aW9uOiBmYWRlLWluIDJzO1xuICAvKiBPcGVyYSAqLyB9XG5cbi5zaW5nbGUtcG9zdC1oZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cblxuLnRvcC10ZXh0IHtcbiAgbWFyZ2luOiAyMHB4OyB9XG5cbi5zYXZlLWJ1dHRvbi1pY29uIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7XG4gIGN1cnNvcjogcG9pbnRlcjsgfVxuICAuc2F2ZS1idXR0b24taWNvbiBpbWcge1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDsgfVxuICAuc2F2ZS1idXR0b24taWNvbjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpOyB9XG5cbi5idXR0b24tY29udGFpbmVyIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogMTVweDsgfVxuXG4ucmVsYXRlZC1wb3N0LXNsaWRlciB7XG4gIHBhZGRpbmc6IDEzcHg7XG4gIGhlaWdodDogMzAwcHg7XG4gIHdpZHRoOiA5MCU7IH1cbiAgLnJlbGF0ZWQtcG9zdC1zbGlkZXIgZGl2IGRpdiAuaG92ZXJlZmZlY3Qge1xuICAgIGhlaWdodDogMzAwcHg7IH1cbiAgLnJlbGF0ZWQtcG9zdC1zbGlkZXIgLnN3aXBlci1jb250YWluZXIge1xuICAgIGhlaWdodDogMzAwcHg7IH1cblxuLnNlYXJjaC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XG5cbi5ub3RoaW5nLWZvdW5kLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XG5cbiN3cmFwIHtcbiAgbWFyZ2luOiA1MHB4IDEwMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiA2MHB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIHBhZGRpbmc6IDA7IH1cblxuaW5wdXRbdHlwZT1cInRleHRcIl0ge1xuICBoZWlnaHQ6IDYwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDU1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBjb2xvcjogIzU1NTtcbiAgcGFkZGluZzogM3B4O1xuICBwYWRkaW5nLXJpZ2h0OiA2MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIHRyYW5zaXRpb246IHdpZHRoIDAuNHMgY3ViaWMtYmV6aWVyKDAsIDAuNzk1LCAwLCAxKTtcbiAgY3Vyc29yOiB0ZXh0OyB9XG5cbmlucHV0W3R5cGU9XCJ0ZXh0XCJdOmZvY3VzOmhvdmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNCQkI7IH1cblxuaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XG4gIGhlaWdodDogNjdweDtcbiAgd2lkdGg6IDYzcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZmxvYXQ6IHJpZ2h0O1xuICBiYWNrZ3JvdW5kOiB1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFEQUFBQUF3Q0FNQUFBQmczQW0xQUFBQUdYUkZXSFJUYjJaMGQyRnlaUUJCWkc5aVpTQkpiV0ZuWlZKbFlXUjVjY2xsUEFBQUFETlFURlJGVTFOVDlmWDFsSlNVWGw1ZTFkWFZmbjUrYzNOejZ1cnF2NysvdExTMGlZbUpxYW1wbjUrZnlzckszOS9mYVdscC8vLy9WaTRaeXdBQUFCRjBVazVULy8vLy8vLy8vLy8vLy8vLy8vLy8vd0FsclpsaUFBQUJMa2xFUVZSNDJyU1dXUmJESUFoRkhlT1V0TjMvYWdzMXphQTRjSHJLWjhKRlJId29Ya3dUdndHUDFRbzBiWU9iQVB3aUxtYk5BSEJXRkJabEQ5ajBKeGZsRFZpSU9iTkhHL0RvOFBSSFRKazBUZXpBaHY3cWxvSzBKSkVCaCtGOCtVL2hvcElFTE9XZmlaVUNET1pEMVJBRE9RS0E3NW9xNGN2VmtjVCtPZEhucXFwUUNJVFdBam5XVmdHUVVXejEybEp1R3dHb2FXZ0JLelJWQmNDeXBnVWtPQW9XZ0JYL0wwQ214TjQwdTZ4d2NJSjFjT3pXWURmZnAzYXhzUU95dmRrWGlIOUZLUkZ3UFJIWVpVYVhNZ1BMZWlXN1FoYkRSY2l5TFhKYUtoZUN1TGJpVm9xeDFEVlJ5SDI2eWIwaHN1b09GRVBzb3orQlZFME1SbFpOakdaY1JReUhZa21NcDJoQlRJemRrekNUYy9wTHFPbkJyazcveVpkQU9xL3E1TlBCSDFmN3g3ZkdQNEMzQUFNQVFyaHpYOXpoY0dzQUFBQUFTVVZPUks1Q1lJST0pIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0O1xuICB0ZXh0LWluZGVudDogLTEwMDAwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG9wYWNpdHk6IDAuNDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuNHMgZWFzZTsgfVxuXG5pbnB1dFt0eXBlPVwic3VibWl0XCJdOmhvdmVyIHtcbiAgb3BhY2l0eTogMC44OyB9XG5cbi5zZWFyY2gtaWNvbiBpbWcge1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbi10b3A6IDdweDsgfVxuXG4uc2VhcmNoLWljb24gYSB7XG4gIHBhZGRpbmc6IDA7IH1cblxuaHRtbCxcbmJvZHkge1xuICBiYWNrZ3JvdW5kOiAjRkZGO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQ6IDEwMCUgXCJOb3RvIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlOyB9XG5cbmgxIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDAuOWVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC4zZW07XG4gIG92ZXJmbG93OiBoaWRkZW47IH1cbiAgaDE6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBoZWlnaHQ6IDJweDtcbiAgICB3aWR0aDogNGVtO1xuICAgIGFuaW1hdGlvbjogc2xpZGUtaW4gMXMgZWFzZS1pbiBib3RoIDAuNXM7IH1cbiAgaDEubm8tdW5kZXJzY29yZTpiZWZvcmUge1xuICAgIGRpc3BsYXk6IG5vbmU7IH1cblxuLmNoaWxkLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuXG4ud3JhcHBlciB7XG4gIG1heC13aWR0aDogMTE2MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDsgfVxuXG4uY29udGVudC13cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7IH1cblxuLmNvbnRlbnQge1xuICBjbGVhcjogYm90aDtcbiAgb3ZlcmZsb3c6IGF1dG87IH1cbiAgLmNvbnRlbnQgaDEge1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7IH1cblxuLmdyaWQtbGlzdC1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4OyB9XG5cbi5zd2lwZXItY29udGFpbmVyIHtcbiAgei1pbmRleDogMDsgfVxuXG4vKipcbiAqIEFuaW1hdGlvbnNcbiAqL1xuQGtleWZyYW1lcyBzbGlkZS1pbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xODAlLCAwLCAwKTsgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApOyB9IH1cblxuQGtleWZyYW1lcyBzbGlkZS11cCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7IH1cbiAgOTAlIHtcbiAgICBvcGFjaXR5OiAxOyB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7IH0gfVxuXG5Aa2V5ZnJhbWVzIGZhZGUtaW4ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDsgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxOyB9IH1cblxuLmdyaWctaW1nLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDA7IH1cblxuLmdyaWctaW1nLWNvbnRhaW5lciBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNjVweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4OyB9XG5cbi8qSG92ZXIqL1xuLmhvdmVyZWZmZWN0IHtcbiAgLypmbG9hdDogbGVmdDsqL1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBkZWZhdWx0OyB9XG5cbi5ob3ZlcmVmZmVjdCAub3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IDgwJTtcbiAgbGVmdDogMTAlO1xuICB0b3A6IDEwJTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNGRkY7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRkZGO1xuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC4zNXMsIC13ZWJraXQtdHJhbnNmb3JtIDAuMzVzO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMzVzLCB0cmFuc2Zvcm0gMC4zNXM7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLCAxKTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMCwgMSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCwgMSk7IH1cblxuLmhvdmVyZWZmZWN0OmhvdmVyIC5vdmVybGF5IHtcbiAgb3BhY2l0eTogMTtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTEwMCk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7IH1cblxuLmhvdmVyZWZmZWN0IGltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMzVzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zNXM7IH1cblxuLmhvdmVyZWZmZWN0OmhvdmVyIGltZyB7XG4gIGZpbHRlcjogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCw8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48ZmlsdGVyIGlkPVwiZmlsdGVyXCI+PGZlQ29tcG9uZW50VHJhbnNmZXIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPVwic1JHQlwiPjxmZUZ1bmNSIHR5cGU9XCJsaW5lYXJcIiBzbG9wZT1cIjAuNlwiIC8+PGZlRnVuY0cgdHlwZT1cImxpbmVhclwiIHNsb3BlPVwiMC42XCIgLz48ZmVGdW5jQiB0eXBlPVwibGluZWFyXCIgc2xvcGU9XCIwLjZcIiAvPjwvZmVDb21wb25lbnRUcmFuc2Zlcj48L2ZpbHRlcj48L3N2Zz4jZmlsdGVyJyk7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwLjYpO1xuICAtd2Via2l0LWZpbHRlcjogYnJpZ2h0bmVzcygwLjYpOyB9XG5cbi5ob3ZlcmVmZmVjdCBoMiB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogI0ZGRjtcbiAgcGFkZGluZzogMWVtIDA7XG4gIG9wYWNpdHk6IDA7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMzVzLCAtd2Via2l0LXRyYW5zZm9ybSAwLjM1cztcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjM1cywgdHJhbnNmb3JtIDAuMzVzO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTsgfVxuXG4uaG92ZXJlZmZlY3QgLm92ZXJsYXlcbi5ob3ZlcmVmZmVjdCBhLCAuaG92ZXJlZmZlY3QgcCB7XG4gIGNvbG9yOiAjRkZGO1xuICAvKnBhZGRpbmc6IDFlbSAwOyovXG4gIC8qb3BhY2l0eTogMDsqL1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjM1cywgLXdlYmtpdC10cmFuc2Zvcm0gMC4zNXM7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zNXMsIHRyYW5zZm9ybSAwLjM1cztcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApOyB9XG5cbi5ob3ZlcmVmZmVjdDpob3ZlciBhLCAuaG92ZXJlZmZlY3Q6aG92ZXIgcCwgLmhvdmVyZWZmZWN0OmhvdmVyIGgyIHtcbiAgb3BhY2l0eTogMTtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTEwMCk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTsgfVxuXG4ucHVyZS1nIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG5cbi5yZWRCZyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgYm9yZGVyLXJhZGl1czogNTFweDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA1cHg7IH1cblxuI3dhaXRpbmctbG9hZGVyIHtcbiAgcGFkZGluZzogMjBweDtcbiAgd2lkdGg6IDA7XG4gIG1hcmdpbjogMCBhdXRvOyB9XG5cbiNsb2FkZXIge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XG5cbi5jaXJjbGUge1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDAgMCByZ2JhKDI1NSwgMTkyLCAwLCAwLjI1KSwgMCAtMXB4IDAgMCByZ2JhKDI1NSwgNjQsIDAsIDAuMjUpLCAxcHggMCAwIDAgcmdiYSgyNTUsIDE5MiwgMCwgMC4yNSksIC0xcHggMCAwIDAgcmdiYSgyNTUsIDY0LCAwLCAwLjI1KSwgMXB4IC0xcHggMCAwIHJnYmEoMjU1LCAxMjgsIDAsIDAuNSksIC0xcHggMXB4IDAgMCByZ2JhKDI1NSwgMTI4LCAwLCAwLjUpLCAxcHggMXB4IDAgMCByZ2JhKDI1NSwgMjU1LCAwLCAwLjc1KSwgLTFweCAtMXB4IDAgMCByZ2JhKDI1NSwgMCwgMCwgMC43NSk7IH1cblxuLmNpcmNsZTpudGgtb2YtdHlwZSgyKSB7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDAgMCByZ2JhKDIyNSwgMTMxLCAxOTQsIDAuMjUpLCAwIC0xcHggMCAwIHJnYmEoMTY1LCAxODEsIDIyMiwgMC4yNSksIDFweCAwIDAgMCByZ2JhKDIyNSwgMTMxLCAxOTQsIDAuMjUpLCAtMXB4IDAgMCAwIHJnYmEoMTY1LCAxODEsIDIyMiwgMC4yNSksIDFweCAtMXB4IDAgMCByZ2JhKDE5NSwgMTU2LCAyMDgsIDAuNSksIC0xcHggMXB4IDAgMCByZ2JhKDE5NSwgMTU2LCAyMDgsIDAuNSksIDFweCAxcHggMCAwIHJnYmEoMjU1LCAxMDUsIDE4MCwgMC43NSksIC0xcHggLTFweCAwIDAgcmdiYSgxMzUsIDIwNiwgMjM1LCAwLjc1KTtcbiAgYW5pbWF0aW9uOiByb3RhdGVUaGlzIDFzIGxpbmVhciBpbmZpbml0ZTsgfVxuXG4uY2lyY2xlOm50aC1vZi10eXBlKDMpIHtcbiAgYm94LXNoYWRvdzogMCAxcHggMCAwIHJnYmEoMTkyLCA2MywgMTUzLCAwLjI1KSwgMCAtMXB4IDAgMCByZ2JhKDIxNCwgNjksIDk5LCAwLjI1KSwgMXB4IDAgMCAwIHJnYmEoMTkyLCA2MywgMTUzLCAwLjI1KSwgLTFweCAwIDAgMCByZ2JhKDIxNCwgNjksIDk5LCAwLjI1KSwgMXB4IC0xcHggMCAwIHJnYmEoMjAzLCA2NiwgMTI2LCAwLjUpLCAtMXB4IDFweCAwIDAgcmdiYSgyMDMsIDY2LCAxMjYsIDAuNSksIDFweCAxcHggMCAwIHJnYmEoMTgxLCA1OSwgMTgwLCAwLjc1KSwgLTFweCAtMXB4IDAgMCByZ2JhKDIyNSwgNzIsIDcxLCAwLjc1KTsgfVxuXG4uY2lyY2xlLW11bHRpcGxlIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMHB4OyB9XG5cbi5jaXJjbGUtbXVsdGlwbGUgLmNpcmNsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luOiBhdXRvOyB9XG4gIC5jaXJjbGUtbXVsdGlwbGUgLmNpcmNsZTpudGgtb2YtdHlwZSgxKSB7XG4gICAgYW5pbWF0aW9uOiBwc3ljaG8gMnMgbGluZWFyIGluZmluaXRlOyB9XG4gIC5jaXJjbGUtbXVsdGlwbGUgLmNpcmNsZTpudGgtb2YtdHlwZSgyKSB7XG4gICAgYW5pbWF0aW9uOiBwc3ljaG8gMnMgbGluZWFyIC4xcyBpbmZpbml0ZTsgfVxuICAuY2lyY2xlLW11bHRpcGxlIC5jaXJjbGU6bnRoLW9mLXR5cGUoMykge1xuICAgIGFuaW1hdGlvbjogcHN5Y2hvIDJzIGxpbmVhciAuMjVzIGluZmluaXRlOyB9XG5cbkBrZXlmcmFtZXMgcm90YXRlVGhpcyB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpIHNjYWxlKDEpOyB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpIHNjYWxlKDEpOyB9IH1cblxuQGtleWZyYW1lcyBwc3ljaG8ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZykgc2NhbGUoMSkgdHJhbnNsYXRlKDAsIDApOyB9XG4gIDMzJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKSBzY2FsZSgxKSB0cmFuc2xhdGUoNXB4LCA1cHgpOyB9XG4gIDY2JSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNzIwZGVnKSBzY2FsZSgxKSB0cmFuc2xhdGUoLTVweCwgLTVweCk7IH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTA4MGRlZykgc2NhbGUoMSkgdHJhbnNsYXRlKDAsIDApOyB9IH1cblxuLypidXR0b24qL1xuLnVuZGVyLWJ1dHRvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTBweDsgfVxuXG4udW5kZXItYnV0dG9uIGltZyB7XG4gIGhlaWdodDogNDVweDtcbiAgb3BhY2l0eTogMC41OyB9XG5cbi51bmRlci1idXR0b24gaW1nOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XG4gIC1tb3otYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcbiAgb3BhY2l0eTogMC44OyB9XG5cbkAtbW96LWtleWZyYW1lcyBzcGluIHtcbiAgMTAwJSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9IH1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHNwaW4ge1xuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH0gfVxuXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfSB9XG5cbi5zaWRlYmFyIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLXdpZHRoOiAzMDBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBvdmVyZmxvdzogaGlkZGVuOyB9XG5cbi5zaWRlYmFyLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cblxuLmluZm8ge1xuICBtYXJnaW46IDI1cHg7IH1cbiAgLmluZm8gdWwgbGkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiAtMjBweDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGJvcmRlcjogc29saWQgZ3JheTtcbiAgICBib3JkZXItd2lkdGg6IDBweCAwcHggMXB4IDBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XG4gICAgLmluZm8gdWwgbGkgYSB7XG4gICAgICBjb2xvcjogIzAwMDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgZm9udC1zaXplOiAwLjllbTtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjNlbTtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxuXG4uc2lkZWJhci1oZWFkZXItdGV4dCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuXG4uYXZhdGFyIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogMTIwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyOyB9XG5cbi8qaWNvbiBsaXN0Ki9cbi5waCB7XG4gIGxpc3Qtc3R5bGUtaW1hZ2U6IHVybChcImh0dHBzOi8veW91bmdmb2xrcy5ydS9zdGF0aWMvaW1nLzMyL2NhbWVyYS5wbmdcIik7IH1cblxuLm1kIHtcbiAgbGlzdC1zdHlsZS1pbWFnZTogdXJsKFwiaHR0cHM6Ly95b3VuZ2ZvbGtzLnJ1L3N0YXRpYy9pbWcvMzIvbW9kZWwucG5nXCIpOyB9XG5cbi5hcnQge1xuICBsaXN0LXN0eWxlLWltYWdlOiB1cmwoXCJodHRwczovL3lvdW5nZm9sa3MucnUvaW1nL3N0YXRpYy8zMi9wYWludGVyLnBuZ1wiKTsgfVxuXG4ucGggbGksIC5tZCBsaSwgLmFydCBsaSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDsgfVxuXG4udWwtbWFpbi1saXN0IHtcbiAgbWFyZ2luLXRvcDogMzBweDsgfVxuXG4ucGgtd2hpdGUge1xuICBsaXN0LXN0eWxlLWltYWdlOiB1cmwoXCJodHRwczovL3lvdW5nZm9sa3MucnUvc3RhdGljL2ltZy8zMi9jYW1lcmEtd2hpdGUucG5nXCIpOyB9XG5cbi5tZC13aGl0ZSB7XG4gIGxpc3Qtc3R5bGUtaW1hZ2U6IHVybChcImh0dHBzOi8veW91bmdmb2xrcy5ydS9zdGF0aWMvaW1nLzMyL21vZGVsLXdoaXRlLnBuZ1wiKTsgfVxuXG4uYXJ0LXdoaXRlIHtcbiAgbGlzdC1zdHlsZS1pbWFnZTogdXJsKFwiaHR0cHM6Ly95b3VuZ2ZvbGtzLnJ1L3N0YXRpYy9pbWcvMzIvcGFpbnRlci13aGl0ZS5wbmdcIik7IH1cblxuLnBoLXdoaXRlIGxpLCAubWQtd2hpdGUgbGksIC5hcnQtd2hpdGUgbGkge1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNGRkY7IH1cblxuLmxvZ2luLWZvcm0ge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4OyB9XG5cbi5sb2dpbi1wcm9maWxlLWltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDdlbTtcbiAgd2lkdGg6IDdlbTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGJvcmRlcjogLjVlbSBzb2xpZCAjZjJmMmYyO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBib3gtc2hhZG93OiA2cHggOXB4IDE0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgfVxuXG4ucHJvZmlsZS1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAtMy41ZW07XG4gIHBhZGRpbmc6IDVlbSAxLjVlbSAxLjVlbSAxLjVlbTtcbiAgYmFja2dyb3VuZDogI2ZiZmJmYjtcbiAgbWF4LXdpZHRoOiAzNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiBhdXRvOyB9XG5cbi5idXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWluLXdpZHRoOiAyNDBweDtcbiAgaGVpZ2h0OiA1NXB4O1xuICBsaW5lLWhlaWdodDogNTVweDtcbiAgbWFyZ2luOiAyMHB4O1xuICBjb2xvcjogI0ZGRjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAwIDAgMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjMxLCAtMC4xMDUsIDAuNDMsIDEuNCk7IH1cbiAgLmJ1dHRvbi52ayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ2Njk5MTsgfVxuICAuYnV0dG9uLmZiIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I1OTk4OyB9XG4gIC5idXR0b24ueWYge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3NzVlNTU7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuM2VtOyB9XG4gIC5idXR0b24gc3BhbixcbiAgLmJ1dHRvbiAuaWNvbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwOyB9XG4gIC5idXR0b24gc3BhbiB7XG4gICAgd2lkdGg6IDcyJTtcbiAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBsZWZ0OiAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC4zMSwgLTAuMTA1LCAwLjQzLCAxLjQpOyB9XG4gICAgLmJ1dHRvbiBzcGFuOmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgICAgIHdpZHRoOiAycHg7XG4gICAgICBoZWlnaHQ6IDcwJTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMTUlO1xuICAgICAgcmlnaHQ6IC0xcHg7IH1cbiAgLmJ1dHRvbiAuaWNvbiB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB3aWR0aDogMjglO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC4zMSwgLTAuMTA1LCAwLjQzLCAxLjQpOyB9XG4gICAgLmJ1dHRvbiAuaWNvbiAuZmEge1xuICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC4zMSwgLTAuMTA1LCAwLjQzLCAxLjQpLCBoZWlnaHQgMC4yNXMgZWFzZTsgfVxuICAgIC5idXR0b24gLmljb24gLmZhLXJlbW92ZSB7XG4gICAgICBoZWlnaHQ6IDM2cHg7IH1cbiAgLmJ1dHRvbjpob3ZlciB7XG4gICAgb3BhY2l0eTogLjk7IH1cbiAgICAuYnV0dG9uOmhvdmVyIHNwYW4ge1xuICAgICAgbGVmdDogLTcyJTtcbiAgICAgIG9wYWNpdHk6IDA7IH1cbiAgICAuYnV0dG9uOmhvdmVyIC5pY29uIHtcbiAgICAgIHdpZHRoOiAxMDAlOyB9XG4gICAgLmJ1dHRvbjpob3ZlciAuaWNvbiAuZmEtcmVtb3ZlIHtcbiAgICAgIGhlaWdodDogNDZweDsgfVxuICAuYnV0dG9uOmFjdGl2ZSB7XG4gICAgb3BhY2l0eTogMTsgfVxuXG4uY2hpbGQtY29udGFpbmVyLWRhc2hib2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTsgfVxuXG4uZGFzaGJvYXJkLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTsgfVxuXG4uZGFzaGJvYXJkLWhlYWRlciB7XG4gIHdpZHRoOiAxMDAlOyB9XG4gIC5kYXNoYm9hcmQtaGVhZGVyIGltZyB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7IH1cblxuLmlubmVyLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cblxuLmRlbGV0ZS1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW46IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW5yZXZlcnNlIDVzIGluZmluaXRlIGxpbmVhcjtcbiAgei1pbmRleDogMTA7IH1cbiAgLmRlbGV0ZS1jb250YWluZXIgaW1nIHtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7IH1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHNwaW5yZXZlcnNlIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMzYwZGVnKTsgfSB9XG5cbi5zd2lwZXItd3JhcHBlciB7XG4gIGhlaWdodDogNDAwcHg7XG4gIG1heC13aWR0aDogODUwcHg7XG4gIHBhZGRpbmc6IDVweDsgfVxuXG4uc2xpZGVyLWltZyB7XG4gIGhlaWdodDogNDAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjsgfVxuXG4ucG9wdXAge1xuICBiYWNrZ3JvdW5kOiAjNmQ2ZDZkO1xuICB3aWR0aDogNDAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMiksIC0xcHggMCA0cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB0b3A6IGNhbGMoNTB2aCAtIDE1MHB4KTtcbiAgbGVmdDogY2FsYyg1MHZ3IC0gMjAwcHgpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC43cyBjdWJpYy1iZXppZXIoMC44NDUsIC0wLjI2NSwgMC4xOSwgMS4yOCk7XG4gIHotaW5kZXg6IDEwO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIG9wYWNpdHk6IDAuOTsgfVxuICAucG9wdXAgdWwge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwOyB9XG4gICAgLnBvcHVwIHVsIGxpIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHdpZHRoOiA1MCU7IH1cbiAgICAgIC5wb3B1cCB1bCBsaSBhIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7IH1cbiAgICAgIC5wb3B1cCB1bCBsaTpmaXJzdC1vZi10eXBlIGEge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjQTdDNUJEOyB9XG4gICAgICAucG9wdXAgdWwgbGk6bGFzdC1vZi10eXBlIGEge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjYjM4ZjgzOyB9XG4gIC5wb3B1cCBwIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgY29sb3I6ICNGRkY7XG4gICAgcGFkZGluZzogNDBweDsgfVxuXG4uYnV0dG9uLXBvcHVwIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtaW4td2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGxpbmUtaGVpZ2h0OiA2MHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICM2OUIxQTk7XG4gIGNvbG9yOiAjRkZGO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdHJhbnNpdGlvbjogYWxsIC4zcztcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM2VtO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cbmA7Il19 */\n/*@ sourceURL=res/styles/index.scss */");

_defaultExport.__hash = "2519933776";
_defaultExport.__scoped = ".navigation.jsx-1700409169{list-style:none;margin:0;background:#6a8ba9;display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row wrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}.navigation.jsx-1700409169 li.jsx-1700409169:last-child{margin-left:auto;}.navigation.jsx-1700409169 .prev-last-li.jsx-1700409169{position:absolute;right:0;margin-right:100px;}.navigation.jsx-1700409169 a.jsx-1700409169{-webkit-text-decoration:none;text-decoration:none;display:block;padding:1em;color:#FFF;}.navigation.jsx-1700409169 a.jsx-1700409169:hover{background:#a98173;}#menu.jsx-1700409169{position:absolute;right:0;color:#FFF;text-align:center;border-radius:4px;background:#b38f83;box-shadow:0 1px 8px rgba(0,0,0,0.05);-webkit-transition:opacity .4s;transition:opacity .4s;z-index:1;}#menu.jsx-1700409169 ul.jsx-1700409169{list-style:none;width:150px;padding:0;}#menu.jsx-1700409169:after{position:absolute;top:-7px;right:30px;content:\"\";display:block;border-left:6px solid transparent;border-right:6px solid transparent;border-bottom:8px solid white;}.login-menu-container.jsx-1700409169{margin-right:15px;cursor:pointer;}.login-menu-container.jsx-1700409169 img.jsx-1700409169{border-radius:50%;border-style:solid;width:45px;height:45px;object-fit:cover;border-color:#a98173;border-width:2px;}.login-menu-container.jsx-1700409169 a.jsx-1700409169{padding:0;}.hamburger.jsx-1700409169{background-color:transparent;border:0px;outline:0px;width:50px;height:50px;height:auto;position:fixed;top:15px;right:15px;cursor:pointer;z-index:9999;}.hamburger.jsx-1700409169 .burger.jsx-1700409169{-webkit-transition:all 0.3s;transition:all 0.3s;border-radius:5px;height:5px;width:100%;display:inline-block;background-color:#4e4d4d;}.focus.jsx-1700409169 .burger.jsx-1700409169{-webkit-transition:all 0.3s;transition:all 0.3s;}.focus.jsx-1700409169 .burger.jsx-1700409169:first-of-type{background-color:#C62828;-webkit-transition-delay:0.4s;transition-delay:0.4s;-webkit-transform:translate3d(0px,0px,0px) rotateZ(45deg);-ms-transform:translate3d(0px,0px,0px) rotateZ(45deg);transform:translate3d(0px,0px,0px) rotateZ(45deg);width:40px;-webkit-transform-origin:left top;-ms-transform-origin:left top;transform-origin:left top;}.focus.jsx-1700409169 .burger.jsx-1700409169:nth-of-type(2){opacity:0;}.focus.jsx-1700409169 .burger.jsx-1700409169:last-of-type{background-color:#C62828;-webkit-transition-delay:0.4s;transition-delay:0.4s;-webkit-transform:translate3d(0px,0px,0px) rotateZ(-45deg);-ms-transform:translate3d(0px,0px,0px) rotateZ(-45deg);transform:translate3d(0px,0px,0px) rotateZ(-45deg);width:40px;-webkit-transform-origin:left bottom;-ms-transform-origin:left bottom;transform-origin:left bottom;}.b-a-expanded.jsx-1700409169{-webkit-transition:all .25s;transition:all .25s;top:-0px;}.menu-expanded.jsx-1700409169{position:fixed;-webkit-transition:all .25s;transition:all .25s;text-align:center;height:100%;width:100%;border-radius:0;top:0;left:0;z-index:1;cursor:pointer;background-color:rgba(0,0,0,0.85);}.menu-expanded.jsx-1700409169 ul.jsx-1700409169{padding:0;list-style-type:none;-webkit-transition:all 0s;transition:all 0s;position:relative;left:0;z-index:2;}.menu-expanded.jsx-1700409169 a.jsx-1700409169{-webkit-transition:all .15s;transition:all .15s;-webkit-text-decoration:none;text-decoration:none;font-size:2em;padding:5px;color:#FFF;display:block;}.menu-expanded.jsx-1700409169 a.jsx-1700409169:hover{background-color:rgba(255,255,255,0.8);-webkit-transition:all .15s;transition:all .15s;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;color:#333;border:1px solid rgba(255,255,255,0.15);}.pics-content.jsx-1700409169{margin:20px;}.single-img.jsx-1700409169{box-shadow:0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);max-width:100%;height:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-left:auto;margin-right:auto;-webkit-animation:fade-in-jsx-1700409169 2s;animation:fade-in-jsx-1700409169 2s;-moz-animation:fade-in 2s;-webkit-animation:fade-in 2s;-o-animation:fade-in 2s;}.single-post-header.jsx-1700409169{width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.top-text.jsx-1700409169{margin:20px;}.save-button-icon.jsx-1700409169{-webkit-transition:-webkit-transform 0.5s;-webkit-transition:transform 0.5s;transition:transform 0.5s;cursor:pointer;}.save-button-icon.jsx-1700409169 img.jsx-1700409169{width:50px;height:50px;}.save-button-icon.jsx-1700409169:hover{-webkit-transform:translateY(-5px);-ms-transform:translateY(-5px);transform:translateY(-5px);}.button-container.jsx-1700409169{margin-left:auto;margin-right:15px;}.related-post-slider.jsx-1700409169{padding:13px;height:300px;width:90%;}.related-post-slider.jsx-1700409169 div.jsx-1700409169 div.jsx-1700409169 .hovereffect.jsx-1700409169{height:300px;}.related-post-slider.jsx-1700409169 .swiper-container.jsx-1700409169{height:300px;}.search-container.jsx-1700409169{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.nothing-found-container.jsx-1700409169{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}#wrap.jsx-1700409169{margin:50px 100px;display:inline-block;position:relative;height:60px;float:right;padding:0;}input[type=\"text\"].jsx-1700409169{height:60px;width:100%;font-size:55px;display:inline-block;font-weight:100;border:none;outline:none;color:#555;padding:3px;padding-right:60px;position:absolute;top:0;right:0;background:none;-webkit-transition:width 0.4s cubic-bezier(0,0.795,0,1);transition:width 0.4s cubic-bezier(0,0.795,0,1);cursor:text;}input[type=\"text\"].jsx-1700409169:focus.jsx-1700409169:hover{border-bottom:1px solid #BBB;}input[type=\"submit\"].jsx-1700409169{height:67px;width:63px;display:inline-block;float:right;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADNQTFRFU1NT9fX1lJSUXl5e1dXVfn5+c3Nz6urqv7+/tLS0iYmJqampn5+fysrK39/faWlp////Vi4ZywAAABF0Uk5T/////////////////////wAlrZliAAABLklEQVR42rSWWRbDIAhFHeOUtN3/ags1zaA4cHrKZ8JFRHwoXkwTvwGP1Qo0bYObAPwiLmbNAHBWFBZlD9j0JxflDViIObNHG/Do8PRHTJk0TezAhv7qloK0JJEBh+F8+U/hopIELOWfiZUCDOZD1RADOQKA75oq4cvVkcT+OdHnqqpQCITWAjnWVgGQUWz12lJuGwGoaWgBKzRVBcCypgUkOAoWgBX/L0CmxN40u6xwcIJ1cOzWYDffp3axsQOyvdkXiH9FKRFwPRHYZUaXMgPLeiW7QhbDRciyLXJaKheCuLbiVoqx1DVRyH26yb0hsuoOFEPsoz+BVE0MRlZNjGZcRQyHYkmMp2hBTIzdkzCTc/pLqOnBrk7/yZdAOq/q5NPBH1f7x7fGP4C3AAMAQrhzX9zhcGsAAAAASUVORK5CYII=) center center no-repeat;text-indent:-10000px;border:none;position:absolute;top:0;right:0;cursor:pointer;opacity:0.4;-webkit-transition:opacity .4s ease;transition:opacity .4s ease;}input[type=\"submit\"].jsx-1700409169:hover{opacity:0.8;}.search-icon.jsx-1700409169 img.jsx-1700409169{height:40px;margin-top:7px;}.search-icon.jsx-1700409169 a.jsx-1700409169{padding:0;}html.jsx-1700409169,body.jsx-1700409169{background:#FFF;margin:0;padding:0;font:100% \"Noto Sans\",sans-serif;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:100%;}h1.jsx-1700409169{position:relative;font-weight:600;font-size:0.9em;text-transform:uppercase;-webkit-letter-spacing:0.3em;-moz-letter-spacing:0.3em;-ms-letter-spacing:0.3em;letter-spacing:0.3em;overflow:hidden;}h1.jsx-1700409169:before{content:\"\";position:absolute;left:0;bottom:0;height:2px;width:4em;-webkit-animation:slide-in-jsx-1700409169 1s ease-in both 0.5s;animation:slide-in-jsx-1700409169 1s ease-in both 0.5s;}h1.no-underscore.jsx-1700409169:before{display:none;}.child-container.jsx-1700409169{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;min-height:100vh;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-top:5px;margin-bottom:5px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.wrapper.jsx-1700409169{max-width:1160px;margin:0 auto;position:relative;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;}.content-wrapper.jsx-1700409169{width:100%;}.content.jsx-1700409169{clear:both;overflow:auto;}.content.jsx-1700409169 h1.jsx-1700409169{margin-left:5px;}.grid-list-container.jsx-1700409169{margin-top:20px;margin-bottom:20px;}.swiper-container.jsx-1700409169{z-index:0;}@-webkit-keyframes slide-in-jsx-1700409169{0%{-webkit-transform:translate3d(-180%,0,0);-ms-transform:translate3d(-180%,0,0);transform:translate3d(-180%,0,0);}100%{-webkit-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0);}}@keyframes slide-in-jsx-1700409169{0%{-webkit-transform:translate3d(-180%,0,0);-ms-transform:translate3d(-180%,0,0);transform:translate3d(-180%,0,0);}100%{-webkit-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0);}}@-webkit-keyframes slide-up-jsx-1700409169{0%{opacity:0;-webkit-transform:translate3d(0,100%,0);-ms-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);}90%{opacity:1;}100%{-webkit-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0);}}@keyframes slide-up-jsx-1700409169{0%{opacity:0;-webkit-transform:translate3d(0,100%,0);-ms-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);}90%{opacity:1;}100%{-webkit-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0);}}@-webkit-keyframes fade-in-jsx-1700409169{0%{opacity:0;}100%{opacity:1;}}@keyframes fade-in-jsx-1700409169{0%{opacity:0;}100%{opacity:1;}}.grig-img-container.jsx-1700409169{background-color:transparent;border:0;border-radius:0;}.grig-img-container.jsx-1700409169 img.jsx-1700409169{width:100%;height:265px;object-fit:cover;padding-left:5px;padding-bottom:5px;}.hovereffect.jsx-1700409169{overflow:hidden;position:relative;text-align:center;cursor:default;}.hovereffect.jsx-1700409169 .overlay.jsx-1700409169{position:absolute;overflow:hidden;cursor:pointer;width:80%;height:80%;left:10%;top:10%;border-bottom:1px solid #FFF;border-top:1px solid #FFF;-webkit-transition:opacity 0.35s,-webkit-transform 0.35s;-webkit-transition:opacity 0.35s,-webkit-transform 0.35s;-webkit-transition:opacity 0.35s,transform 0.35s;transition:opacity 0.35s,transform 0.35s;-webkit-transform:scale(0,1);-ms-transform:scale(0,1);-webkit-transform:scale(0,1);-ms-transform:scale(0,1);transform:scale(0,1);}.hovereffect.jsx-1700409169:hover .overlay.jsx-1700409169{opacity:1;-webkit-filter:alpha(opacity=100);filter:alpha(opacity=100);-webkit-transform:scale(1);-ms-transform:scale(1);-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}.hovereffect.jsx-1700409169 img.jsx-1700409169{display:block;position:relative;-webkit-transition:all 0.35s;-webkit-transition:all 0.35s;transition:all 0.35s;}.hovereffect.jsx-1700409169:hover img.jsx-1700409169{-webkit-filter:url('data:image/svg+xml;charset=utf-8,<svg xmlns=\"http://www.w3.org/2000/svg\"><filter id=\"filter\"><feComponentTransfer color-interpolation-filters=\"sRGB\"><feFuncR type=\"linear\" slope=\"0.6\" /><feFuncG type=\"linear\" slope=\"0.6\" /><feFuncB type=\"linear\" slope=\"0.6\" /></feComponentTransfer></filter></svg>#filter');filter:url('data:image/svg+xml;charset=utf-8,<svg xmlns=\"http://www.w3.org/2000/svg\"><filter id=\"filter\"><feComponentTransfer color-interpolation-filters=\"sRGB\"><feFuncR type=\"linear\" slope=\"0.6\" /><feFuncG type=\"linear\" slope=\"0.6\" /><feFuncB type=\"linear\" slope=\"0.6\" /></feComponentTransfer></filter></svg>#filter');-webkit-filter:brightness(0.6);filter:brightness(0.6);-webkit-filter:brightness(0.6);}.hovereffect.jsx-1700409169 h2.jsx-1700409169{text-transform:uppercase;text-align:center;position:relative;font-size:17px;background-color:transparent;color:#FFF;padding:1em 0;opacity:0;-webkit-filter:alpha(opacity=0);filter:alpha(opacity=0);-webkit-transition:opacity 0.35s,-webkit-transform 0.35s;-webkit-transition:opacity 0.35s,-webkit-transform 0.35s;-webkit-transition:opacity 0.35s,transform 0.35s;transition:opacity 0.35s,transform 0.35s;-webkit-transform:translate3d(0,-100%,0);-webkit-transform:translate3d(0,-100%,0);-ms-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);}.hovereffect.jsx-1700409169 .overlay.jsx-1700409169 .hovereffect.jsx-1700409169 a.jsx-1700409169,.hovereffect.jsx-1700409169 p.jsx-1700409169{color:#FFF;-webkit-filter:alpha(opacity=0);filter:alpha(opacity=0);-webkit-transition:opacity 0.35s,-webkit-transform 0.35s;-webkit-transition:opacity 0.35s,-webkit-transform 0.35s;-webkit-transition:opacity 0.35s,transform 0.35s;transition:opacity 0.35s,transform 0.35s;-webkit-transform:translate3d(0,100%,0);-webkit-transform:translate3d(0,100%,0);-ms-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);}.hovereffect.jsx-1700409169:hover a.jsx-1700409169,.hovereffect.jsx-1700409169:hover p.jsx-1700409169,.hovereffect.jsx-1700409169:hover h2.jsx-1700409169{opacity:1;-webkit-filter:alpha(opacity=100);filter:alpha(opacity=100);-webkit-transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0);}.pure-g.jsx-1700409169{text-align:center;}.redBg.jsx-1700409169{background-color:red;border-radius:51px;color:white;padding:5px;}#waiting-loader.jsx-1700409169{padding:20px;width:0;margin:0 auto;}#loader.jsx-1700409169{overflow:hidden;position:absolute;width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.circle.jsx-1700409169{height:100px;width:100px;border-radius:100%;box-shadow:0 1px 0 0 rgba(255,192,0,0.25),0 -1px 0 0 rgba(255,64,0,0.25),1px 0 0 0 rgba(255,192,0,0.25),-1px 0 0 0 rgba(255,64,0,0.25),1px -1px 0 0 rgba(255,128,0,0.5),-1px 1px 0 0 rgba(255,128,0,0.5),1px 1px 0 0 rgba(255,255,0,0.75),-1px -1px 0 0 rgba(255,0,0,0.75);}.circle.jsx-1700409169:nth-of-type(2){box-shadow:0 1px 0 0 rgba(225,131,194,0.25),0 -1px 0 0 rgba(165,181,222,0.25),1px 0 0 0 rgba(225,131,194,0.25),-1px 0 0 0 rgba(165,181,222,0.25),1px -1px 0 0 rgba(195,156,208,0.5),-1px 1px 0 0 rgba(195,156,208,0.5),1px 1px 0 0 rgba(255,105,180,0.75),-1px -1px 0 0 rgba(135,206,235,0.75);-webkit-animation:rotateThis-jsx-1700409169 1s linear infinite;animation:rotateThis-jsx-1700409169 1s linear infinite;}.circle.jsx-1700409169:nth-of-type(3){box-shadow:0 1px 0 0 rgba(192,63,153,0.25),0 -1px 0 0 rgba(214,69,99,0.25),1px 0 0 0 rgba(192,63,153,0.25),-1px 0 0 0 rgba(214,69,99,0.25),1px -1px 0 0 rgba(203,66,126,0.5),-1px 1px 0 0 rgba(203,66,126,0.5),1px 1px 0 0 rgba(181,59,180,0.75),-1px -1px 0 0 rgba(225,72,71,0.75);}.circle-multiple.jsx-1700409169{height:100px;width:100px;}.circle-multiple.jsx-1700409169 .circle.jsx-1700409169{position:absolute;margin:auto;}.circle-multiple.jsx-1700409169 .circle.jsx-1700409169:nth-of-type(1){-webkit-animation:psycho-jsx-1700409169 2s linear infinite;animation:psycho-jsx-1700409169 2s linear infinite;}.circle-multiple.jsx-1700409169 .circle.jsx-1700409169:nth-of-type(2){-webkit-animation:psycho-jsx-1700409169 2s linear .1s infinite;animation:psycho-jsx-1700409169 2s linear .1s infinite;}.circle-multiple.jsx-1700409169 .circle.jsx-1700409169:nth-of-type(3){-webkit-animation:psycho-jsx-1700409169 2s linear .25s infinite;animation:psycho-jsx-1700409169 2s linear .25s infinite;}@-webkit-keyframes rotateThis-jsx-1700409169{from{-webkit-transform:rotate(0deg) scale(1);-ms-transform:rotate(0deg) scale(1);transform:rotate(0deg) scale(1);}to{-webkit-transform:rotate(360deg) scale(1);-ms-transform:rotate(360deg) scale(1);transform:rotate(360deg) scale(1);}}@keyframes rotateThis-jsx-1700409169{from{-webkit-transform:rotate(0deg) scale(1);-ms-transform:rotate(0deg) scale(1);transform:rotate(0deg) scale(1);}to{-webkit-transform:rotate(360deg) scale(1);-ms-transform:rotate(360deg) scale(1);transform:rotate(360deg) scale(1);}}@-webkit-keyframes psycho-jsx-1700409169{0%{-webkit-transform:rotate(0deg) scale(1) translate(0,0);-ms-transform:rotate(0deg) scale(1) translate(0,0);transform:rotate(0deg) scale(1) translate(0,0);}33%{-webkit-transform:rotate(360deg) scale(1) translate(5px,5px);-ms-transform:rotate(360deg) scale(1) translate(5px,5px);transform:rotate(360deg) scale(1) translate(5px,5px);}66%{-webkit-transform:rotate(720deg) scale(1) translate(-5px,-5px);-ms-transform:rotate(720deg) scale(1) translate(-5px,-5px);transform:rotate(720deg) scale(1) translate(-5px,-5px);}100%{-webkit-transform:rotate(1080deg) scale(1) translate(0,0);-ms-transform:rotate(1080deg) scale(1) translate(0,0);transform:rotate(1080deg) scale(1) translate(0,0);}}@keyframes psycho-jsx-1700409169{0%{-webkit-transform:rotate(0deg) scale(1) translate(0,0);-ms-transform:rotate(0deg) scale(1) translate(0,0);transform:rotate(0deg) scale(1) translate(0,0);}33%{-webkit-transform:rotate(360deg) scale(1) translate(5px,5px);-ms-transform:rotate(360deg) scale(1) translate(5px,5px);transform:rotate(360deg) scale(1) translate(5px,5px);}66%{-webkit-transform:rotate(720deg) scale(1) translate(-5px,-5px);-ms-transform:rotate(720deg) scale(1) translate(-5px,-5px);transform:rotate(720deg) scale(1) translate(-5px,-5px);}100%{-webkit-transform:rotate(1080deg) scale(1) translate(0,0);-ms-transform:rotate(1080deg) scale(1) translate(0,0);transform:rotate(1080deg) scale(1) translate(0,0);}}.under-button.jsx-1700409169{text-align:center;margin-top:10px;}.under-button.jsx-1700409169 img.jsx-1700409169{height:45px;opacity:0.5;}.under-button.jsx-1700409169 img.jsx-1700409169:hover{cursor:pointer;-webkit-animation:spin 1s linear infinite;-moz-animation:spin 1s linear infinite;-webkit-animation:spin-jsx-1700409169 1s linear infinite;animation:spin-jsx-1700409169 1s linear infinite;opacity:0.8;}@-moz-keyframes spin{100%.jsx-1700409169{-moz-transform:rotate(360deg);}}@-webkit-keyframes spin{100%.jsx-1700409169{-webkit-transform:rotate(360deg);}}@-webkit-keyframes spin-jsx-1700409169{100%{-webkit-transform:rotate(360deg);-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes spin-jsx-1700409169{100%{-webkit-transform:rotate(360deg);-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}.sidebar.jsx-1700409169{margin-left:10px;position:relative;min-width:300px;margin-top:20px;float:right;overflow:hidden;}.sidebar-header.jsx-1700409169{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.info.jsx-1700409169{margin:25px;}.info.jsx-1700409169 ul.jsx-1700409169 li.jsx-1700409169{position:relative;left:-20px;list-style:none;overflow:hidden;height:30px;border:solid gray;border-width:0px 0px 1px 0px;font-size:14px;line-height:30px;cursor:pointer;}.info.jsx-1700409169 ul.jsx-1700409169 li.jsx-1700409169 a.jsx-1700409169{color:#000;text-transform:uppercase;font-weight:600;font-size:0.9em;-webkit-letter-spacing:0.3em;-moz-letter-spacing:0.3em;-ms-letter-spacing:0.3em;letter-spacing:0.3em;-webkit-text-decoration:none;text-decoration:none;}.sidebar-header-text.jsx-1700409169{position:relative;}.avatar.jsx-1700409169{border-radius:50%;width:120px;height:120px;object-fit:cover;}.ph.jsx-1700409169{list-style-image:url(\"https://youngfolks.ru/static/img/32/camera.png\");}.md.jsx-1700409169{list-style-image:url(\"https://youngfolks.ru/static/img/32/model.png\");}.art.jsx-1700409169{list-style-image:url(\"https://youngfolks.ru/img/static/32/painter.png\");}.ph.jsx-1700409169 li.jsx-1700409169,.md.jsx-1700409169 li.jsx-1700409169,.art.jsx-1700409169 li.jsx-1700409169{font-size:20px;margin-bottom:15px;line-height:21px;padding-left:15px;}.ul-main-list.jsx-1700409169{margin-top:30px;}.ph-white.jsx-1700409169{list-style-image:url(\"https://youngfolks.ru/static/img/32/camera-white.png\");}.md-white.jsx-1700409169{list-style-image:url(\"https://youngfolks.ru/static/img/32/model-white.png\");}.art-white.jsx-1700409169{list-style-image:url(\"https://youngfolks.ru/static/img/32/painter-white.png\");}.ph-white.jsx-1700409169 li.jsx-1700409169,.md-white.jsx-1700409169 li.jsx-1700409169,.art-white.jsx-1700409169 li.jsx-1700409169{font-size:20px;text-align:center;position:relative;background-color:transparent;color:#FFF;}.login-form.jsx-1700409169{margin-top:30px;margin-bottom:30px;}.login-profile-img.jsx-1700409169{display:block;height:7em;width:7em;object-fit:cover;margin-right:auto;margin-left:auto;border:.5em solid #f2f2f2;border-radius:100%;box-shadow:6px 9px 14px 0px rgba(0,0,0,0.1);}.profile-container.jsx-1700409169{margin-top:-3.5em;padding:5em 1.5em 1.5em 1.5em;background:#fbfbfb;max-width:350px;text-align:center;margin-right:auto;margin-left:auto;}.button.jsx-1700409169{display:block;min-width:240px;height:55px;line-height:55px;margin:20px;color:#FFF;position:relative;top:0;bottom:0;left:0;right:0;cursor:pointer;overflow:hidden;border-radius:5px;box-shadow:0 0 20px 0 rgba(0,0,0,0.3);-webkit-transition:all 0.25s cubic-bezier(0.31,-0.105,0.43,1.4);transition:all 0.25s cubic-bezier(0.31,-0.105,0.43,1.4);}.button.vk.jsx-1700409169{background-color:#466991;}.button.fb.jsx-1700409169{background-color:#3b5998;}.button.yf.jsx-1700409169{background-color:#775e55;-webkit-letter-spacing:0.3em;-moz-letter-spacing:0.3em;-ms-letter-spacing:0.3em;letter-spacing:0.3em;}.button.jsx-1700409169 span.jsx-1700409169,.button.jsx-1700409169 .icon.jsx-1700409169{display:block;height:100%;text-align:center;position:absolute;top:0;}.button.jsx-1700409169 span.jsx-1700409169{width:72%;line-height:inherit;font-size:15px;text-transform:uppercase;left:0;-webkit-transition:all 0.25s cubic-bezier(0.31,-0.105,0.43,1.4);transition:all 0.25s cubic-bezier(0.31,-0.105,0.43,1.4);}.button.jsx-1700409169 span.jsx-1700409169:after{content:'';background-color:#FFF;width:2px;height:70%;position:absolute;top:15%;right:-1px;}.button.jsx-1700409169 .icon.jsx-1700409169{margin-top:10px;width:28%;right:0;-webkit-transition:all 0.25s cubic-bezier(0.31,-0.105,0.43,1.4);transition:all 0.25s cubic-bezier(0.31,-0.105,0.43,1.4);}.button.jsx-1700409169 .icon.jsx-1700409169 .fa.jsx-1700409169{font-size:30px;vertical-align:middle;-webkit-transition:all 0.25s cubic-bezier(0.31,-0.105,0.43,1.4),height 0.25s ease;transition:all 0.25s cubic-bezier(0.31,-0.105,0.43,1.4),height 0.25s ease;}.button.jsx-1700409169 .icon.jsx-1700409169 .fa-remove.jsx-1700409169{height:36px;}.button.jsx-1700409169:hover{opacity:.9;}.button.jsx-1700409169:hover span.jsx-1700409169{left:-72%;opacity:0;}.button.jsx-1700409169:hover .icon.jsx-1700409169{width:100%;}.button.jsx-1700409169:hover .icon.jsx-1700409169 .fa-remove.jsx-1700409169{height:46px;}.button.jsx-1700409169:active{opacity:1;}.child-container-dashboard.jsx-1700409169{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;min-height:100vh;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-top:5px;margin-bottom:5px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:#f5f5f5;}.dashboard-container.jsx-1700409169{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:100%;}.dashboard-header.jsx-1700409169{width:100%;}.dashboard-header.jsx-1700409169 img.jsx-1700409169{padding:10px;border-radius:50%;width:100px;height:100px;object-fit:cover;}.inner-container.jsx-1700409169{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.delete-container.jsx-1700409169{position:absolute;right:0;margin:10px;cursor:pointer;-webkit-animation:spinreverse 5s infinite linear;z-index:10;}.delete-container.jsx-1700409169 img.jsx-1700409169{width:40px;height:40px;}@-webkit-keyframes spinreverse{0%.jsx-1700409169{-webkit-transform:rotate(0deg);}100%.jsx-1700409169{-webkit-transform:rotate(-360deg);}}.swiper-wrapper.jsx-1700409169{height:400px;max-width:850px;padding:5px;}.slider-img.jsx-1700409169{height:400px;width:100%;object-fit:cover;}.popup.jsx-1700409169{background:#6d6d6d;width:400px;text-align:center;position:fixed;box-shadow:1px 1px 4px rgba(0,0,0,0.2),-1px 0 4px rgba(0,0,0,0.2);top:calc(50vh - 150px);left:calc(50vw - 200px);-webkit-transition:all 0.7s cubic-bezier(0.845,-0.265,0.19,1.28);transition:all 0.7s cubic-bezier(0.845,-0.265,0.19,1.28);z-index:10;-webkit-transform:scale(1);-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);opacity:0.9;}.popup.jsx-1700409169 ul.jsx-1700409169{padding:0;margin:0;}.popup.jsx-1700409169 ul.jsx-1700409169 li.jsx-1700409169{display:inline-block;width:50%;}.popup.jsx-1700409169 ul.jsx-1700409169 li.jsx-1700409169 a.jsx-1700409169{width:100%;border-radius:0;}.popup.jsx-1700409169 ul.jsx-1700409169 li.jsx-1700409169:first-of-type a.jsx-1700409169{background:#A7C5BD;}.popup.jsx-1700409169 ul.jsx-1700409169 li.jsx-1700409169:last-of-type a.jsx-1700409169{background:#b38f83;}.popup.jsx-1700409169 p.jsx-1700409169{font-size:18px;color:#FFF;padding:40px;}.button-popup.jsx-1700409169{display:inline-block;min-width:200px;height:60px;line-height:60px;border:none;background:#69B1A9;color:#FFF;font-size:15px;cursor:pointer;text-transform:uppercase;-webkit-transition:all .3s;transition:all .3s;-webkit-letter-spacing:0.3em;-moz-letter-spacing:0.3em;-ms-letter-spacing:0.3em;letter-spacing:0.3em;-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFa0IsQUFFbUIsQUFZQyxBQUdDLEFBS0csQUFNRixBQUlELEFBV0YsQUFLRSxBQVVBLEFBSUEsQUFTUixBQUdtQixBQWFULEFBUUEsQUFHSyxBQU9mLEFBR2UsQUFPTCxBQUlMLEFBYUwsQUFRVSxBQVFzQixBQU85QixBQUdnRSxBQWVqRSxBQUtDLEFBR2MsQUFJZixBQUlnQixBQUdWLEFBSUosQUFLQSxBQUdBLEFBR0EsQUFJQSxBQUtLLEFBUU4sQUFrQmlCLEFBR2pCLEFBZUEsQUFHQSxBQUlGLEFBSU0sQUFTRSxBQVFQLEFBU0UsQUFHQSxBQVFJLEFBTU4sQUFHQSxBQUlLLEFBR0EsQUFJTixBQU8yQixBQUVKLEFBSXJCLEFBR0EsQUFFcUIsQUFJckIsQUFFQSxBQUdpQixBQUtsQixBQVNLLEFBTUUsQUFnQlIsQUFPSSxBQU1pVCxBQUt0UyxBQWdCZCxBQVVELEFBTVEsQUFHRyxBQU1SLEFBS0csQUFTSCxBQU1pVCxBQUlYLEFBR3RTLEFBSUssQUFJa0IsQUFHSSxBQUdDLEFBSVAsQUFFRSxBQUljLEFBRU0sQUFFRSxBQUVMLEFBSW5DLEFBSU4sQUFJRyxBQVFpQixBQUlHLEFBSUEsQUFJbEIsQUFRSixBQUtELEFBR00sQUFZUCxBQVFPLEFBR0EsQUFPcUQsQUFHRCxBQUdFLEFBR3pELEFBTUMsQUFHNkQsQUFHRCxBQUdFLEFBRy9ELEFBT0MsQUFJRixBQVdJLEFBU0osQUFrQlcsQUFHQSxBQUdBLEFBS1gsQUFPSixBQVFDLEFBU0ssQUFNRCxBQUtILEFBR0QsQUFHRCxBQUlDLEFBR0MsQUFHRixBQUdHLEFBU0EsQUFPRixBQUdFLEFBT0EsQUFLSyxBQVFQLEFBS3NCLEFBRUcsQUFHdkIsQUFLQSxBQUtNLEFBY1QsQUFJVyxBQUlWLEFBSVEsQUFHQSxBQUdKLEFBS00sVUEvdUJWLEFBa0NBLEFBNEJVLEFBc0lWLEFBNkRBLEFBY3lCLEFBRXZCLEFBTUEsQUFFQSxBQXdDYSxBQTRDQSxBQW9QTixBQWtDVixBQVNDLEFBNkVGLENBbG5CVyxBQVlSLEFBdUdNLEFBeUJOLEFBSUUsQUEyQ0QsQUFtRVcsQUE0SUMsQUF3SEgsQUFzQlYsQUFPQSxBQXlCQSxBQXdCQSxBQTBDSSxDQTdvQkgsQUF1QkEsQUErQ0YsQUFxQkEsQUFjRSxBQUlFLEFBNFBILEFBb0NDLEFBMkpBLEFBYUEsQ0EzZ0JBLEFBSUMsQUFHQSxBQTZGQSxBQTBKTixBQWNJLEFBYUEsQUE0UU0sQUE4QkYsQUFLTCxDQTlYTyxBQWlPUCxBQW9CSyxBQTZCSixDQXppQlEsQUFnWnNCLEFBMkV2QixBQWtCRCxBQTBGSSxBQW1IWCxDQS95QkYsQUF5Q0csQUFvT0gsQUFpRFEsQUFJRSxBQTZDRCxBQXNGQSxBQWdKRCxBQW9CRSxBQTZFVCxDQTNxQlEsQUFtTEEsQUFvSEosQUF1T0ksQ0ExZ0JWLEFBZUEsQUFnQkMsQUFVTSxBQUlJLEFBMEpFLEFBZ0VMLEFBK0ZBLEFBaUVHLEFBeUNQLEFBOEJJLEFBNENMLEFBbUJRLEFBSVAsQUF3RGtCLEFBMkh0QixDQTF0QlksQUFzdkJSLEFBY0YsQUFXVSxBQUdBLENBcEdULENBN1FRLEFBT0wsQUFnV0osQUFtQk0sRUE3bkJILEFBd0NFLEFBcUJNLEFBdWdCUixDQXBaSSxBQTBKSixBQTBRSSxDQTF3QkUsQUErRkcsQUFVQSxBQW9LWixBQTZDSyxBQTRGRyxBQXdEQyxBQVlOLEFBbUpILEFBb0NnQixBQUdBLEFBSUwsQ0F6b0JGLEFBZVIsQUFvS0QsQUE0ZFEsQUF3QlYsQUE2REksQUE0REMsQ0Fqd0JGLEFBc05LLEFBZ2lCQyxDQTN2QlAsQ0E4QkMsQUF1S21CLEFBZ0R2QixBQWtFRSxBQXlNTyxBQTROSixDQXZTQyxBQTZDb0IsQUFxRHBCLEFBaUVELEFBb0NHLENBbmlCRyxBQWdMQSxBQXFiTixBQXVCc0IsQUFpQmhCLEFBaUJQLENBcFprQixDQXJWYixBQXdkb0IsQUFLVCxBQThFVCxBQTJFUixDQXZaTSxBQXlGRSxBQU1ILEFBZ0ZKLEFBdURNLEFBb0ZBLEFBdUcwQyxBQXlFdEIsQ0Fua0JsQixBQWlGZSxBQW1EZCxBQStITCxBQXlGQyxBQStFSSxBQU1ILENBNWFOLEFBNkZGLEFBc1JPLENBdGhCRSxBQTZCUCxBQWdvQm1FLEFBd0hsRSxDQTN3QkQsQUFNQSxBQWdMVSxBQWtJTCxBQW1aRCxDQW5tQkssQUFxRUYsQUF5bEJKLENBdnVCRixBQWtYQSxDQW5GSyxBQThaSixBQUtLLENBeElELENBM09DLEFBMEtELEFBNkdOLEFBMERFLENBdnVCTyxBQW1QUixBQTJOOFIsQUFnTnhSLENBaHBCRSxBQWlSVCxBQXNLQyxBQW9HSSxBQTRIUyxHQXptQmIsQUF1Qk0sQUFPRyxBQXFCWixBQXlCWSxBQStlRixDQXhrQkwsQUFtUU0sQUFtRVYsQUEwWkssQUFxQ0UsQ0FseUJILEFBb1FXLENBbVFULEFBdURFLEFBa0JXLENBMWhCbEIsQUF1U0ksQUEyRUgsQUEySEksQUF5REUsQ0FzSStCLENBcFpoQyxBQThVQyxDQS9vQkEsQ0FxTnlyQixBQTRDanNCLEFBd2NPLENBem5CUCxBQXVHRSxBQWdQQyxBQThEMEIsQ0E3SnBCLENBeElILEFBdUpMLEFBNFFDLENBcmtCSyxBQW1nQkMsQ0FwTEcsQUFXTixBQW1KSCxDQXFITixDQS9tQjRCLEFBeUJ0QixBQTJDTSxDQW5IRCxBQWtCTCxBQXVhQyxBQXNWNEQsRUE1ckI5RCxBQTZNNkIsQUFvaEI1QixDQXRjSSxBQXlEMEMsQUFrSDlDLEFBOEZJLENBMVdILEFBd1NRLEFBeUdkLENBcmdCUSxBQTZESCxBQXlYTyxDQXpOVixBQWFrQixBQTRDWSxBQXVKZ0MsQUF3Q3RELEFBdURWLENBbEdpRSxBQStEN0QsQ0F6RDhELEFBcUdqRSxDQS9vQlcsQUEyZ0JELEFBNkxBLENBN2hCSSxBQUlILEFBeUZGLEFBdVBLLEFBbUxMLEFBU0ssQUFpQkEsQ0FscUJWLEFBd0RNLEFBOEZOLEFBdURTLENBblFWLEFBb1lrQixBQWlNZ0QsQ0EzaEJ4RCxBQXVCVixBQVV5QyxBQVVDLEFBOFBqQyxBQStPMEQsQUFpRm5CLENBM0VvQixBQTBONUQsQ0E5YlgsQUFtS1EsQ0F3RUwsQUE2RUEsQ0E5cUJTLEFBbUhSLEFBbUdGLENBNGFRLENBWEEsQ0E5ZE4sR0F2SUEsQUF1REcsQUFzRUksQUFnRk4sQUF3SmdCLEFBdVBILENBMWhCTCxHQWtJVixBQWlGVyxBQW1RTyxBQXVEakIsQUE2RUEsQUFtQ1UsQ0FsckJtQixDQXFGOUIsQUFhSixBQXFEcUIsRUFtV1gsQ0EvWEosQUF5V3FCLENBcGRDLEFBb1ZaLEFBa2JaLENBeHZCTSxBQTBFSCxDQW1Nb0IsQUFTQSxDQWpOeEIsQUE4RkMsQUFtYUwsQ0Fsb0JlLEFBdW5CSCxDQTlpQlQsQUFxR00sQUFva0JKLEVBOW5CSyxDQWtTTCxDQTZPRixDQXJOc0IsQ0F5REksQUE4VXBCLENBanVCVSxDQTZDZCxBQTRWMEIsQ0FuWjFCLEFBc0pDLEFBdUcwQixBQWtFaEIsQ0FsUVYsQ0FnQ08sQUF1Y0EsQUFvSVAsQ0F6UXlCLENBN2FuQixBQXdrQlgsQ0E3UW1CLEFBZ0NaLENBek9FLENBZ0txQixBQWtKSSxDQXdKeEIsQ0FuZ0JYLEFBOFFhLEFBZ0d1QixBQTZDZCxBQTBCYixFQXppQkYsQUEwRUUsQUEwakJQLENBcGFXLEFBcWxCSixDQTlxQkosQUE4UitCLEVBaFRuQyxBQThoQmUsSUFybkJDLEFBeVhiLEFBOE9LLEFBd0lRLENBMVVBLENBclpPLEFBZ2tCaUIsQ0F4ZnJDLENBbkNnQixDQXFEWixBQWthRyxDQTZFQyxDQTVpQkwsQ0EydUJZLEVBOVpELEVBdkxOLEFBMENJLEFBNEdvQyxDQWhRM0MsRUErZ0JDLElBOWZELENBN0RELENBbU9PLENBdkdFLEFBcVZKLEFBZUosQUE2S0ksQUFpQkEsQ0E3UGdDLEFBa1MzQixDQTVGb0MsSUExakJ2QixFQTBHL0IsQ0FxYVksQ0F6bEJhLEFBb2N1QixDQXFVbkMsR0FwbEJYLENBdkJlLEFBK1ZQLEVBclFELEFBNlFNLEFBNkpOLENBdmpCRSxDQXFWd0MsR0ExUXpDLEVBZ0RBLEFBMFZnQyxDQTlIVyxBQStSQyxFQXZJbkIsQ0ExZjlCLElBL0dELEFBOFArQixBQVV2QixBQTBhQSxHQXZqQkEsRUF3T0UsQ0E3SitCLENBdEZSLENBdkJMLEFBNEpyQixDQW1hOEQsQ0F4cEJwRSxFQTlCZ0IsQUF3WitCLENBMFFFLEVBM1NsQixHQWhGdkIsQUEwTlAsQUFnTk8sR0F2akJFLENBV0QsQUF1UVksR0EyWVgsS0F0VFIsR0F1SThDLEVBdEZyQyxDQXZTVixHQTFRZSxPQWtjUixDQXJUeUIsQ0E2SC9CLE9BaExGLEdBVUEsR0FzYlMsQUE2TEcsQUFnQkgsS0E1b0JNLEdBVUcsQUFtVGEsYUE5TWxCLEtBME5rQixLQTJDMFEsU0FyVDFSLEVBa1RjLE9BeE81QixDQWtFUSxBQTJhRCxJQTZEUixPQTFpQkUsSUEyaUJjLEFBd0NOLENBM3BCUSxBQXlRSyxBQW1DeVEsR0F5UXZSLFNBL1FBLEtBbGNRLFNBdW9CZ0MsQUF5SXpDLEdBcnJCUSxBQW1FSCxJQTBqQmIsRUFqV21CLE1BbFJBLEdBbW5CbEIsS0ErRlUsSUF4cEJWLFdBeU5jLHlCQUNKLEFBZ0NxQixLQW1ERixDQXFVN0IsWUFBQyxDQTVXc0Isc0JBWEEsa0NBakNaLDZFQWlDYSw4RkFoQmIsc0RBQ1EsK0JBQUMsd0NBNUpYLHFCQUNULFlBQ00sa0JBQ1osTUFDRSxRQUNPLGVBQ0gsWUFDZ0IsZ0VBQUMiLCJmaWxlIjoicmVzL3N0eWxlcy9pbmRleC5zY3NzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hbmRyZWZlZG9yZW5rby9Ecm9wYm94L1N0dWRpdW0vbWVyc2kvYmFjaGVsb3IvZnJvbnRlbmQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY3NzYC5uYXZpZ2F0aW9uIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBiYWNrZ3JvdW5kOiAjNmE4YmE5O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1vei1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtZmxleC1mbG93OiByb3cgd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0OyB9XG4gIC5uYXZpZ2F0aW9uIGxpOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvOyB9XG4gIC5uYXZpZ2F0aW9uIC5wcmV2LWxhc3QtbGkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwMHB4OyB9XG4gIC5uYXZpZ2F0aW9uIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiAxZW07XG4gICAgY29sb3I6ICNGRkY7IH1cbiAgICAubmF2aWdhdGlvbiBhOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICNhOTgxNzM7IH1cblxuLyogbWVudSBhcHBlYXJhbmNlKi9cbiNtZW51IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgY29sb3I6ICNGRkY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kOiAjYjM4ZjgzO1xuICBib3gtc2hhZG93OiAwIDFweCA4cHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuNHM7XG4gIHotaW5kZXg6IDE7IH1cbiAgI21lbnUgdWwge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIHBhZGRpbmc6IDA7IH1cblxuI21lbnU6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTdweDtcbiAgcmlnaHQ6IDMwcHg7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItbGVmdDogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogOHB4IHNvbGlkIHdoaXRlOyB9XG5cbi5sb2dpbi1tZW51LWNvbnRhaW5lciB7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgY3Vyc29yOiBwb2ludGVyOyB9XG4gIC5sb2dpbi1tZW51LWNvbnRhaW5lciBpbWcge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIHdpZHRoOiA0NXB4O1xuICAgIGhlaWdodDogNDVweDtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBib3JkZXItY29sb3I6ICNhOTgxNzM7XG4gICAgYm9yZGVyLXdpZHRoOiAycHg7IH1cbiAgLmxvZ2luLW1lbnUtY29udGFpbmVyIGEge1xuICAgIHBhZGRpbmc6IDA7IH1cblxuLmhhbWJ1cmdlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDBweDtcbiAgb3V0bGluZTogMHB4O1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAxNXB4O1xuICByaWdodDogMTVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB6LWluZGV4OiA5OTk5OyB9XG4gIC5oYW1idXJnZXIgLmJ1cmdlciB7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGhlaWdodDogNXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGU0ZDRkOyB9XG5cbi5mb2N1cyAuYnVyZ2VyIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7IH1cbiAgLmZvY3VzIC5idXJnZXI6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0M2MjgyODtcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjRzO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCkgcm90YXRlWig0NWRlZyk7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3A7IH1cbiAgLmZvY3VzIC5idXJnZXI6bnRoLW9mLXR5cGUoMikge1xuICAgIG9wYWNpdHk6IDA7IH1cbiAgLmZvY3VzIC5idXJnZXI6bGFzdC1vZi10eXBlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzYyODI4O1xuICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuNHM7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KSByb3RhdGVaKC00NWRlZyk7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207IH1cblxuLmItYS1leHBhbmRlZCB7XG4gIHRyYW5zaXRpb246IGFsbCAuMjVzO1xuICB0b3A6IC0wcHg7IH1cblxuLm1lbnUtZXhwYW5kZWQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRyYW5zaXRpb246IGFsbCAuMjVzO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODUpOyB9XG4gIC5tZW51LWV4cGFuZGVkIHVsIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMHM7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogMjsgfVxuICAubWVudS1leHBhbmRlZCBhIHtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjE1cztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGNvbG9yOiAjRkZGO1xuICAgIGRpc3BsYXk6IGJsb2NrOyB9XG4gICAgLm1lbnUtZXhwYW5kZWQgYTpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgLjE1cztcbiAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgICBjb2xvcjogIzMzMztcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7IH1cblxuLnBpY3MtY29udGVudCB7XG4gIG1hcmdpbjogMjBweDsgfVxuXG4uc2luZ2xlLWltZyB7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBhbmltYXRpb246IGZhZGUtaW4gMnM7XG4gIC1tb3otYW5pbWF0aW9uOiBmYWRlLWluIDJzO1xuICAvKiBGaXJlZm94ICovXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlLWluIDJzO1xuICAvKiBTYWZhcmkgYW5kIENocm9tZSAqL1xuICAtby1hbmltYXRpb246IGZhZGUtaW4gMnM7XG4gIC8qIE9wZXJhICovIH1cblxuLnNpbmdsZS1wb3N0LWhlYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuXG4udG9wLXRleHQge1xuICBtYXJnaW46IDIwcHg7IH1cblxuLnNhdmUtYnV0dG9uLWljb24ge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cztcbiAgY3Vyc29yOiBwb2ludGVyOyB9XG4gIC5zYXZlLWJ1dHRvbi1pY29uIGltZyB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4OyB9XG4gIC5zYXZlLWJ1dHRvbi1pY29uOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7IH1cblxuLmJ1dHRvbi1jb250YWluZXIge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4OyB9XG5cbi5yZWxhdGVkLXBvc3Qtc2xpZGVyIHtcbiAgcGFkZGluZzogMTNweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgd2lkdGg6IDkwJTsgfVxuICAucmVsYXRlZC1wb3N0LXNsaWRlciBkaXYgZGl2IC5ob3ZlcmVmZmVjdCB7XG4gICAgaGVpZ2h0OiAzMDBweDsgfVxuICAucmVsYXRlZC1wb3N0LXNsaWRlciAuc3dpcGVyLWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAzMDBweDsgfVxuXG4uc2VhcmNoLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cblxuLm5vdGhpbmctZm91bmQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cblxuI3dyYXAge1xuICBtYXJnaW46IDUwcHggMTAwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDYwcHg7XG4gIGZsb2F0OiByaWdodDtcbiAgcGFkZGluZzogMDsgfVxuXG5pbnB1dFt0eXBlPVwidGV4dFwiXSB7XG4gIGhlaWdodDogNjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogNTVweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXdlaWdodDogMTAwO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGNvbG9yOiAjNTU1O1xuICBwYWRkaW5nOiAzcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDYwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgdHJhbnNpdGlvbjogd2lkdGggMC40cyBjdWJpYy1iZXppZXIoMCwgMC43OTUsIDAsIDEpO1xuICBjdXJzb3I6IHRleHQ7IH1cblxuaW5wdXRbdHlwZT1cInRleHRcIl06Zm9jdXM6aG92ZXIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0JCQjsgfVxuXG5pbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcbiAgaGVpZ2h0OiA2N3B4O1xuICB3aWR0aDogNjNweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmbG9hdDogcmlnaHQ7XG4gIGJhY2tncm91bmQ6IHVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURBQUFBQXdDQU1BQUFCZzNBbTFBQUFBR1hSRldIUlRiMlowZDJGeVpRQkJaRzlpWlNCSmJXRm5aVkpsWVdSNWNjbGxQQUFBQUROUVRGUkZVMU5UOWZYMWxKU1VYbDVlMWRYVmZuNStjM056NnVycXY3Ky90TFMwaVltSnFhbXBuNStmeXNySzM5L2ZhV2xwLy8vL1ZpNFp5d0FBQUJGMFVrNVQvLy8vLy8vLy8vLy8vLy8vLy8vLy93QWxyWmxpQUFBQkxrbEVRVlI0MnJTV1dSYkRJQWhGSGVPVXROMy9hZ3MxemFBNGNIcktaOEpGUkh3b1hrd1R2d0dQMVFvMGJZT2JBUHdpTG1iTkFIQldGQlpsRDlqMEp4ZmxEVmlJT2JOSEcvRG84UFJIVEprMFRlekFodjdxbG9LMEpKRUJoK0Y4K1UvaG9wSUVMT1dmaVpVQ0RPWkQxUkFET1FLQTc1b3E0Y3ZWa2NUK09kSG5xcXBRQ0lUV0FqbldWZ0dRVVd6MTJsSnVHd0dvYVdnQkt6UlZCY0N5cGdVa09Bb1dnQlgvTDBDbXhONDB1Nnh3Y0lKMWNPeldZRGZmcDNheHNRT3l2ZGtYaUg5RktSRndQUkhZWlVhWE1nUExlaVc3UWhiRFJjaXlMWEphS2hlQ3VMYmlWb3F4MURWUnlIMjZ5YjBoc3VvT0ZFUHNveitCVkUwTVJsWk5qR1pjUlF5SFlrbU1wMmhCVEl6ZGt6Q1RjL3BMcU9uQnJrNy95WmRBT3EvcTVOUEJIMWY3eDdmR1A0QzNBQU1BUXJoelg5emhjR3NBQUFBQVNVVk9SSzVDWUlJPSkgY2VudGVyIGNlbnRlciBuby1yZXBlYXQ7XG4gIHRleHQtaW5kZW50OiAtMTAwMDBweDtcbiAgYm9yZGVyOiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3BhY2l0eTogMC40O1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC40cyBlYXNlOyB9XG5cbmlucHV0W3R5cGU9XCJzdWJtaXRcIl06aG92ZXIge1xuICBvcGFjaXR5OiAwLjg7IH1cblxuLnNlYXJjaC1pY29uIGltZyB7XG4gIGhlaWdodDogNDBweDtcbiAgbWFyZ2luLXRvcDogN3B4OyB9XG5cbi5zZWFyY2gtaWNvbiBhIHtcbiAgcGFkZGluZzogMDsgfVxuXG5odG1sLFxuYm9keSB7XG4gIGJhY2tncm91bmQ6ICNGRkY7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZm9udDogMTAwJSBcIk5vdG8gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7IH1cblxuaDEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxuICBoMTpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGhlaWdodDogMnB4O1xuICAgIHdpZHRoOiA0ZW07XG4gICAgYW5pbWF0aW9uOiBzbGlkZS1pbiAxcyBlYXNlLWluIGJvdGggMC41czsgfVxuICBoMS5uby11bmRlcnNjb3JlOmJlZm9yZSB7XG4gICAgZGlzcGxheTogbm9uZTsgfVxuXG4uY2hpbGQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XG5cbi53cmFwcGVyIHtcbiAgbWF4LXdpZHRoOiAxMTYwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4OyB9XG5cbi5jb250ZW50LXdyYXBwZXIge1xuICB3aWR0aDogMTAwJTsgfVxuXG4uY29udGVudCB7XG4gIGNsZWFyOiBib3RoO1xuICBvdmVyZmxvdzogYXV0bzsgfVxuICAuY29udGVudCBoMSB7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDsgfVxuXG4uZ3JpZC1saXN0LWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7IH1cblxuLnN3aXBlci1jb250YWluZXIge1xuICB6LWluZGV4OiAwOyB9XG5cbi8qKlxuICogQW5pbWF0aW9uc1xuICovXG5Aa2V5ZnJhbWVzIHNsaWRlLWluIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTE4MCUsIDAsIDApOyB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7IH0gfVxuXG5Aa2V5ZnJhbWVzIHNsaWRlLXVwIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMDAlLCAwKTsgfVxuICA5MCUge1xuICAgIG9wYWNpdHk6IDE7IH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTsgfSB9XG5cbkBrZXlmcmFtZXMgZmFkZS1pbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwOyB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7IH0gfVxuXG4uZ3JpZy1pbWctY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogMDsgfVxuXG4uZ3JpZy1pbWctY29udGFpbmVyIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI2NXB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7IH1cblxuLypIb3ZlciovXG4uaG92ZXJlZmZlY3Qge1xuICAvKmZsb2F0OiBsZWZ0OyovXG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IGRlZmF1bHQ7IH1cblxuLmhvdmVyZWZmZWN0IC5vdmVybGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogODAlO1xuICBsZWZ0OiAxMCU7XG4gIHRvcDogMTAlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0ZGRjtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNGRkY7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjM1cywgLXdlYmtpdC10cmFuc2Zvcm0gMC4zNXM7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zNXMsIHRyYW5zZm9ybSAwLjM1cztcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAsIDEpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLCAxKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLCAxKTsgfVxuXG4uaG92ZXJlZmZlY3Q6aG92ZXIgLm92ZXJsYXkge1xuICBvcGFjaXR5OiAxO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MTAwKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfVxuXG4uaG92ZXJlZmZlY3QgaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zNXM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjM1czsgfVxuXG4uaG92ZXJlZmZlY3Q6aG92ZXIgaW1nIHtcbiAgZmlsdGVyOiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxmaWx0ZXIgaWQ9XCJmaWx0ZXJcIj48ZmVDb21wb25lbnRUcmFuc2ZlciBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9XCJzUkdCXCI+PGZlRnVuY1IgdHlwZT1cImxpbmVhclwiIHNsb3BlPVwiMC42XCIgLz48ZmVGdW5jRyB0eXBlPVwibGluZWFyXCIgc2xvcGU9XCIwLjZcIiAvPjxmZUZ1bmNCIHR5cGU9XCJsaW5lYXJcIiBzbG9wZT1cIjAuNlwiIC8+PC9mZUNvbXBvbmVudFRyYW5zZmVyPjwvZmlsdGVyPjwvc3ZnPiNmaWx0ZXInKTtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuNik7XG4gIC13ZWJraXQtZmlsdGVyOiBicmlnaHRuZXNzKDAuNik7IH1cblxuLmhvdmVyZWZmZWN0IGgyIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjRkZGO1xuICBwYWRkaW5nOiAxZW0gMDtcbiAgb3BhY2l0eTogMDtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC4zNXMsIC13ZWJraXQtdHJhbnNmb3JtIDAuMzVzO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMzVzLCB0cmFuc2Zvcm0gMC4zNXM7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApOyB9XG5cbi5ob3ZlcmVmZmVjdCAub3ZlcmxheVxuLmhvdmVyZWZmZWN0IGEsIC5ob3ZlcmVmZmVjdCBwIHtcbiAgY29sb3I6ICNGRkY7XG4gIC8qcGFkZGluZzogMWVtIDA7Ki9cbiAgLypvcGFjaXR5OiAwOyovXG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMzVzLCAtd2Via2l0LXRyYW5zZm9ybSAwLjM1cztcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjM1cywgdHJhbnNmb3JtIDAuMzVzO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7IH1cblxuLmhvdmVyZWZmZWN0OmhvdmVyIGEsIC5ob3ZlcmVmZmVjdDpob3ZlciBwLCAuaG92ZXJlZmZlY3Q6aG92ZXIgaDIge1xuICBvcGFjaXR5OiAxO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MTAwKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApOyB9XG5cbi5wdXJlLWcge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuLnJlZEJnIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBib3JkZXItcmFkaXVzOiA1MXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDVweDsgfVxuXG4jd2FpdGluZy1sb2FkZXIge1xuICBwYWRkaW5nOiAyMHB4O1xuICB3aWR0aDogMDtcbiAgbWFyZ2luOiAwIGF1dG87IH1cblxuI2xvYWRlciB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cblxuLmNpcmNsZSB7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYm94LXNoYWRvdzogMCAxcHggMCAwIHJnYmEoMjU1LCAxOTIsIDAsIDAuMjUpLCAwIC0xcHggMCAwIHJnYmEoMjU1LCA2NCwgMCwgMC4yNSksIDFweCAwIDAgMCByZ2JhKDI1NSwgMTkyLCAwLCAwLjI1KSwgLTFweCAwIDAgMCByZ2JhKDI1NSwgNjQsIDAsIDAuMjUpLCAxcHggLTFweCAwIDAgcmdiYSgyNTUsIDEyOCwgMCwgMC41KSwgLTFweCAxcHggMCAwIHJnYmEoMjU1LCAxMjgsIDAsIDAuNSksIDFweCAxcHggMCAwIHJnYmEoMjU1LCAyNTUsIDAsIDAuNzUpLCAtMXB4IC0xcHggMCAwIHJnYmEoMjU1LCAwLCAwLCAwLjc1KTsgfVxuXG4uY2lyY2xlOm50aC1vZi10eXBlKDIpIHtcbiAgYm94LXNoYWRvdzogMCAxcHggMCAwIHJnYmEoMjI1LCAxMzEsIDE5NCwgMC4yNSksIDAgLTFweCAwIDAgcmdiYSgxNjUsIDE4MSwgMjIyLCAwLjI1KSwgMXB4IDAgMCAwIHJnYmEoMjI1LCAxMzEsIDE5NCwgMC4yNSksIC0xcHggMCAwIDAgcmdiYSgxNjUsIDE4MSwgMjIyLCAwLjI1KSwgMXB4IC0xcHggMCAwIHJnYmEoMTk1LCAxNTYsIDIwOCwgMC41KSwgLTFweCAxcHggMCAwIHJnYmEoMTk1LCAxNTYsIDIwOCwgMC41KSwgMXB4IDFweCAwIDAgcmdiYSgyNTUsIDEwNSwgMTgwLCAwLjc1KSwgLTFweCAtMXB4IDAgMCByZ2JhKDEzNSwgMjA2LCAyMzUsIDAuNzUpO1xuICBhbmltYXRpb246IHJvdGF0ZVRoaXMgMXMgbGluZWFyIGluZmluaXRlOyB9XG5cbi5jaXJjbGU6bnRoLW9mLXR5cGUoMykge1xuICBib3gtc2hhZG93OiAwIDFweCAwIDAgcmdiYSgxOTIsIDYzLCAxNTMsIDAuMjUpLCAwIC0xcHggMCAwIHJnYmEoMjE0LCA2OSwgOTksIDAuMjUpLCAxcHggMCAwIDAgcmdiYSgxOTIsIDYzLCAxNTMsIDAuMjUpLCAtMXB4IDAgMCAwIHJnYmEoMjE0LCA2OSwgOTksIDAuMjUpLCAxcHggLTFweCAwIDAgcmdiYSgyMDMsIDY2LCAxMjYsIDAuNSksIC0xcHggMXB4IDAgMCByZ2JhKDIwMywgNjYsIDEyNiwgMC41KSwgMXB4IDFweCAwIDAgcmdiYSgxODEsIDU5LCAxODAsIDAuNzUpLCAtMXB4IC0xcHggMCAwIHJnYmEoMjI1LCA3MiwgNzEsIDAuNzUpOyB9XG5cbi5jaXJjbGUtbXVsdGlwbGUge1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogMTAwcHg7IH1cblxuLmNpcmNsZS1tdWx0aXBsZSAuY2lyY2xlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW46IGF1dG87IH1cbiAgLmNpcmNsZS1tdWx0aXBsZSAuY2lyY2xlOm50aC1vZi10eXBlKDEpIHtcbiAgICBhbmltYXRpb246IHBzeWNobyAycyBsaW5lYXIgaW5maW5pdGU7IH1cbiAgLmNpcmNsZS1tdWx0aXBsZSAuY2lyY2xlOm50aC1vZi10eXBlKDIpIHtcbiAgICBhbmltYXRpb246IHBzeWNobyAycyBsaW5lYXIgLjFzIGluZmluaXRlOyB9XG4gIC5jaXJjbGUtbXVsdGlwbGUgLmNpcmNsZTpudGgtb2YtdHlwZSgzKSB7XG4gICAgYW5pbWF0aW9uOiBwc3ljaG8gMnMgbGluZWFyIC4yNXMgaW5maW5pdGU7IH1cblxuQGtleWZyYW1lcyByb3RhdGVUaGlzIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZykgc2NhbGUoMSk7IH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgc2NhbGUoMSk7IH0gfVxuXG5Aa2V5ZnJhbWVzIHBzeWNobyB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKSBzY2FsZSgxKSB0cmFuc2xhdGUoMCwgMCk7IH1cbiAgMzMlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpIHNjYWxlKDEpIHRyYW5zbGF0ZSg1cHgsIDVweCk7IH1cbiAgNjYlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg3MjBkZWcpIHNjYWxlKDEpIHRyYW5zbGF0ZSgtNXB4LCAtNXB4KTsgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMDgwZGVnKSBzY2FsZSgxKSB0cmFuc2xhdGUoMCwgMCk7IH0gfVxuXG4vKmJ1dHRvbiovXG4udW5kZXItYnV0dG9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxMHB4OyB9XG5cbi51bmRlci1idXR0b24gaW1nIHtcbiAgaGVpZ2h0OiA0NXB4O1xuICBvcGFjaXR5OiAwLjU7IH1cblxuLnVuZGVyLWJ1dHRvbiBpbWc6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcbiAgLW1vei1hbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xuICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xuICBvcGFjaXR5OiAwLjg7IH1cblxuQC1tb3ota2V5ZnJhbWVzIHNwaW4ge1xuICAxMDAlIHtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH0gfVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgc3BpbiB7XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfSB9XG5cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9IH1cblxuLnNpZGViYXIge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4td2lkdGg6IDMwMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIG92ZXJmbG93OiBoaWRkZW47IH1cblxuLnNpZGViYXItaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuXG4uaW5mbyB7XG4gIG1hcmdpbjogMjVweDsgfVxuICAuaW5mbyB1bCBsaSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IC0yMHB4O1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYm9yZGVyOiBzb2xpZCBncmF5O1xuICAgIGJvcmRlci13aWR0aDogMHB4IDBweCAxcHggMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgICAuaW5mbyB1bCBsaSBhIHtcbiAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBmb250LXNpemU6IDAuOWVtO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuM2VtO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XG5cbi5zaWRlYmFyLWhlYWRlci10ZXh0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG5cbi5hdmF0YXIge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7IH1cblxuLyppY29uIGxpc3QqL1xuLnBoIHtcbiAgbGlzdC1zdHlsZS1pbWFnZTogdXJsKFwiaHR0cHM6Ly95b3VuZ2ZvbGtzLnJ1L3N0YXRpYy9pbWcvMzIvY2FtZXJhLnBuZ1wiKTsgfVxuXG4ubWQge1xuICBsaXN0LXN0eWxlLWltYWdlOiB1cmwoXCJodHRwczovL3lvdW5nZm9sa3MucnUvc3RhdGljL2ltZy8zMi9tb2RlbC5wbmdcIik7IH1cblxuLmFydCB7XG4gIGxpc3Qtc3R5bGUtaW1hZ2U6IHVybChcImh0dHBzOi8veW91bmdmb2xrcy5ydS9pbWcvc3RhdGljLzMyL3BhaW50ZXIucG5nXCIpOyB9XG5cbi5waCBsaSwgLm1kIGxpLCAuYXJ0IGxpIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMjFweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4OyB9XG5cbi51bC1tYWluLWxpc3Qge1xuICBtYXJnaW4tdG9wOiAzMHB4OyB9XG5cbi5waC13aGl0ZSB7XG4gIGxpc3Qtc3R5bGUtaW1hZ2U6IHVybChcImh0dHBzOi8veW91bmdmb2xrcy5ydS9zdGF0aWMvaW1nLzMyL2NhbWVyYS13aGl0ZS5wbmdcIik7IH1cblxuLm1kLXdoaXRlIHtcbiAgbGlzdC1zdHlsZS1pbWFnZTogdXJsKFwiaHR0cHM6Ly95b3VuZ2ZvbGtzLnJ1L3N0YXRpYy9pbWcvMzIvbW9kZWwtd2hpdGUucG5nXCIpOyB9XG5cbi5hcnQtd2hpdGUge1xuICBsaXN0LXN0eWxlLWltYWdlOiB1cmwoXCJodHRwczovL3lvdW5nZm9sa3MucnUvc3RhdGljL2ltZy8zMi9wYWludGVyLXdoaXRlLnBuZ1wiKTsgfVxuXG4ucGgtd2hpdGUgbGksIC5tZC13aGl0ZSBsaSwgLmFydC13aGl0ZSBsaSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogI0ZGRjsgfVxuXG4ubG9naW4tZm9ybSB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7IH1cblxuLmxvZ2luLXByb2ZpbGUtaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogN2VtO1xuICB3aWR0aDogN2VtO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgYm9yZGVyOiAuNWVtIHNvbGlkICNmMmYyZjI7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJveC1zaGFkb3c6IDZweCA5cHggMTRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpOyB9XG5cbi5wcm9maWxlLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IC0zLjVlbTtcbiAgcGFkZGluZzogNWVtIDEuNWVtIDEuNWVtIDEuNWVtO1xuICBiYWNrZ3JvdW5kOiAjZmJmYmZiO1xuICBtYXgtd2lkdGg6IDM1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87IH1cblxuLmJ1dHRvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtaW4td2lkdGg6IDI0MHB4O1xuICBoZWlnaHQ6IDU1cHg7XG4gIGxpbmUtaGVpZ2h0OiA1NXB4O1xuICBtYXJnaW46IDIwcHg7XG4gIGNvbG9yOiAjRkZGO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjMpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuMzEsIC0wLjEwNSwgMC40MywgMS40KTsgfVxuICAuYnV0dG9uLnZrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDY2OTkxOyB9XG4gIC5idXR0b24uZmIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYjU5OTg7IH1cbiAgLmJ1dHRvbi55ZiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc3NWU1NTtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4zZW07IH1cbiAgLmJ1dHRvbiBzcGFuLFxuICAuYnV0dG9uIC5pY29uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7IH1cbiAgLmJ1dHRvbiBzcGFuIHtcbiAgICB3aWR0aDogNzIlO1xuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxlZnQ6IDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjMxLCAtMC4xMDUsIDAuNDMsIDEuNCk7IH1cbiAgICAuYnV0dG9uIHNwYW46YWZ0ZXIge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICAgICAgd2lkdGg6IDJweDtcbiAgICAgIGhlaWdodDogNzAlO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAxNSU7XG4gICAgICByaWdodDogLTFweDsgfVxuICAuYnV0dG9uIC5pY29uIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIHdpZHRoOiAyOCU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjMxLCAtMC4xMDUsIDAuNDMsIDEuNCk7IH1cbiAgICAuYnV0dG9uIC5pY29uIC5mYSB7XG4gICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjMxLCAtMC4xMDUsIDAuNDMsIDEuNCksIGhlaWdodCAwLjI1cyBlYXNlOyB9XG4gICAgLmJ1dHRvbiAuaWNvbiAuZmEtcmVtb3ZlIHtcbiAgICAgIGhlaWdodDogMzZweDsgfVxuICAuYnV0dG9uOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAuOTsgfVxuICAgIC5idXR0b246aG92ZXIgc3BhbiB7XG4gICAgICBsZWZ0OiAtNzIlO1xuICAgICAgb3BhY2l0eTogMDsgfVxuICAgIC5idXR0b246aG92ZXIgLmljb24ge1xuICAgICAgd2lkdGg6IDEwMCU7IH1cbiAgICAuYnV0dG9uOmhvdmVyIC5pY29uIC5mYS1yZW1vdmUge1xuICAgICAgaGVpZ2h0OiA0NnB4OyB9XG4gIC5idXR0b246YWN0aXZlIHtcbiAgICBvcGFjaXR5OiAxOyB9XG5cbi5jaGlsZC1jb250YWluZXItZGFzaGJvYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZjVmNWY1OyB9XG5cbi5kYXNoYm9hcmQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlOyB9XG5cbi5kYXNoYm9hcmQtaGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7IH1cbiAgLmRhc2hib2FyZC1oZWFkZXIgaW1nIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjsgfVxuXG4uaW5uZXItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuXG4uZGVsZXRlLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbnJldmVyc2UgNXMgaW5maW5pdGUgbGluZWFyO1xuICB6LWluZGV4OiAxMDsgfVxuICAuZGVsZXRlLWNvbnRhaW5lciBpbWcge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDsgfVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgc3BpbnJldmVyc2Uge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0zNjBkZWcpOyB9IH1cblxuLnN3aXBlci13cmFwcGVyIHtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgbWF4LXdpZHRoOiA4NTBweDtcbiAgcGFkZGluZzogNXB4OyB9XG5cbi5zbGlkZXItaW1nIHtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyOyB9XG5cbi5wb3B1cCB7XG4gIGJhY2tncm91bmQ6ICM2ZDZkNmQ7XG4gIHdpZHRoOiA0MDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgLTFweCAwIDRweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHRvcDogY2FsYyg1MHZoIC0gMTUwcHgpO1xuICBsZWZ0OiBjYWxjKDUwdncgLSAyMDBweCk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjdzIGN1YmljLWJlemllcigwLjg0NSwgLTAuMjY1LCAwLjE5LCAxLjI4KTtcbiAgei1pbmRleDogMTA7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgb3BhY2l0eTogMC45OyB9XG4gIC5wb3B1cCB1bCB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7IH1cbiAgICAucG9wdXAgdWwgbGkge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgd2lkdGg6IDUwJTsgfVxuICAgICAgLnBvcHVwIHVsIGxpIGEge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDsgfVxuICAgICAgLnBvcHVwIHVsIGxpOmZpcnN0LW9mLXR5cGUgYSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNBN0M1QkQ7IH1cbiAgICAgIC5wb3B1cCB1bCBsaTpsYXN0LW9mLXR5cGUgYSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNiMzhmODM7IH1cbiAgLnBvcHVwIHAge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjb2xvcjogI0ZGRjtcbiAgICBwYWRkaW5nOiA0MHB4OyB9XG5cbi5idXR0b24tcG9wdXAge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1pbi13aWR0aDogMjAwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgbGluZS1oZWlnaHQ6IDYwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogIzY5QjFBOTtcbiAgY29sb3I6ICNGRkY7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xuICBsZXR0ZXItc3BhY2luZzogMC4zZW07XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxuYDsiXX0= */\n/*@ sourceURL=res/styles/index.scss */";
_defaultExport.__scopedHash = "1700409169";
var _default = _defaultExport;
exports.default = _default;

/***/ }),

/***/ "./res/styles/loader.scss":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defaultExport = new String("#waiting-loader{padding:20px;width:0;margin:0 auto;}#loader{overflow:hidden;position:absolute;width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.circle{height:100px;width:100px;border-radius:100%;box-shadow:0 1px 0 0 rgba(255,192,0,0.25),0 -1px 0 0 rgba(255,64,0,0.25),1px 0 0 0 rgba(255,192,0,0.25),-1px 0 0 0 rgba(255,64,0,0.25),1px -1px 0 0 rgba(255,128,0,0.5),-1px 1px 0 0 rgba(255,128,0,0.5),1px 1px 0 0 rgba(255,255,0,0.75),-1px -1px 0 0 rgba(255,0,0,0.75);}.circle:nth-of-type(2){box-shadow:0 1px 0 0 rgba(225,131,194,0.25),0 -1px 0 0 rgba(165,181,222,0.25),1px 0 0 0 rgba(225,131,194,0.25),-1px 0 0 0 rgba(165,181,222,0.25),1px -1px 0 0 rgba(195,156,208,0.5),-1px 1px 0 0 rgba(195,156,208,0.5),1px 1px 0 0 rgba(255,105,180,0.75),-1px -1px 0 0 rgba(135,206,235,0.75);-webkit-animation:rotateThis 1s linear infinite;animation:rotateThis 1s linear infinite;}.circle:nth-of-type(3){box-shadow:0 1px 0 0 rgba(192,63,153,0.25),0 -1px 0 0 rgba(214,69,99,0.25),1px 0 0 0 rgba(192,63,153,0.25),-1px 0 0 0 rgba(214,69,99,0.25),1px -1px 0 0 rgba(203,66,126,0.5),-1px 1px 0 0 rgba(203,66,126,0.5),1px 1px 0 0 rgba(181,59,180,0.75),-1px -1px 0 0 rgba(225,72,71,0.75);}.circle-multiple{height:100px;width:100px;}.circle-multiple .circle{position:absolute;margin:auto;}.circle-multiple .circle:nth-of-type(1){-webkit-animation:psycho 2s linear infinite;animation:psycho 2s linear infinite;}.circle-multiple .circle:nth-of-type(2){-webkit-animation:psycho 2s linear .1s infinite;animation:psycho 2s linear .1s infinite;}.circle-multiple .circle:nth-of-type(3){-webkit-animation:psycho 2s linear .25s infinite;animation:psycho 2s linear .25s infinite;}@-webkit-keyframes rotateThis{from{-webkit-transform:rotate(0deg) scale(1);-ms-transform:rotate(0deg) scale(1);transform:rotate(0deg) scale(1);}to{-webkit-transform:rotate(360deg) scale(1);-ms-transform:rotate(360deg) scale(1);transform:rotate(360deg) scale(1);}}@keyframes rotateThis{from{-webkit-transform:rotate(0deg) scale(1);-ms-transform:rotate(0deg) scale(1);transform:rotate(0deg) scale(1);}to{-webkit-transform:rotate(360deg) scale(1);-ms-transform:rotate(360deg) scale(1);transform:rotate(360deg) scale(1);}}@-webkit-keyframes psycho{0%{-webkit-transform:rotate(0deg) scale(1) translate(0,0);-ms-transform:rotate(0deg) scale(1) translate(0,0);transform:rotate(0deg) scale(1) translate(0,0);}33%{-webkit-transform:rotate(360deg) scale(1) translate(5px,5px);-ms-transform:rotate(360deg) scale(1) translate(5px,5px);transform:rotate(360deg) scale(1) translate(5px,5px);}66%{-webkit-transform:rotate(720deg) scale(1) translate(-5px,-5px);-ms-transform:rotate(720deg) scale(1) translate(-5px,-5px);transform:rotate(720deg) scale(1) translate(-5px,-5px);}100%{-webkit-transform:rotate(1080deg) scale(1) translate(0,0);-ms-transform:rotate(1080deg) scale(1) translate(0,0);transform:rotate(1080deg) scale(1) translate(0,0);}}@keyframes psycho{0%{-webkit-transform:rotate(0deg) scale(1) translate(0,0);-ms-transform:rotate(0deg) scale(1) translate(0,0);transform:rotate(0deg) scale(1) translate(0,0);}33%{-webkit-transform:rotate(360deg) scale(1) translate(5px,5px);-ms-transform:rotate(360deg) scale(1) translate(5px,5px);transform:rotate(360deg) scale(1) translate(5px,5px);}66%{-webkit-transform:rotate(720deg) scale(1) translate(-5px,-5px);-ms-transform:rotate(720deg) scale(1) translate(-5px,-5px);transform:rotate(720deg) scale(1) translate(-5px,-5px);}100%{-webkit-transform:rotate(1080deg) scale(1) translate(0,0);-ms-transform:rotate(1080deg) scale(1) translate(0,0);transform:rotate(1080deg) scale(1) translate(0,0);}}.under-button{text-align:center;margin-top:10px;}.under-button img{height:45px;opacity:0.5;}.under-button img:hover{cursor:pointer;-webkit-animation:spin 1s linear infinite;-moz-animation:spin 1s linear infinite;-webkit-animation:spin 1s linear infinite;animation:spin 1s linear infinite;opacity:0.8;}@-moz-keyframes spin{100%{-moz-transform:rotate(360deg);}}@-webkit-keyframes spin{100%{-webkit-transform:rotate(360deg);}}@-webkit-keyframes spin{100%{-webkit-transform:rotate(360deg);-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes spin{100%{-webkit-transform:rotate(360deg);-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcy9zdHlsZXMvbG9hZGVyLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRWtCLEFBRWdCLEFBS0csQUFTSCxBQU1pVCxBQUlYLEFBR3RTLEFBSUssQUFJa0IsQUFHSSxBQUdDLEFBSVAsQUFFRSxBQUljLEFBRU0sQUFFRSxBQUVMLEFBSW5DLEFBSU4sQUFJRyxBQVFpQixBQUlHLEFBSUEsWUFuQnZCLENBakVKLEFBY0ksQUFhQSxFQTBDOEIsQ0FoRXhCLEVBMEJOLEFBOEJJLEdBNURGLEdBZ0VELENBbERNLEFBWU4sS0FJQSxBQTZDb0IsR0FJRyxBQUtULENBL0VoQixBQXVETSxDQTVERixTQWUyUixDQVQ5UixZQUNDLEFBOEQwQix1QkFwQ0YsUUFHSSxFQUdDLE1BK0JSLFlBM0JDLE1BRUUsTUF1Q1QsV0E1RUwsc0JBeUM0QixTQU1HLFNBSkcsQ0FvQjdDLEtBbEIrQyxPQWtCOUMsOENBOURNLDhDQWFpUyxXQUg1USx3QkFKbVEsWUFOdlIsb0RBVXFCIiwiZmlsZSI6InJlcy9zdHlsZXMvbG9hZGVyLnNjc3MiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FuZHJlZmVkb3JlbmtvL0Ryb3Bib3gvU3R1ZGl1bS9tZXJzaS9iYWNoZWxvci9mcm9udGVuZCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3MgZnJvbSAnc3R5bGVkLWpzeC9jc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjc3NgI3dhaXRpbmctbG9hZGVyIHtcbiAgcGFkZGluZzogMjBweDtcbiAgd2lkdGg6IDA7XG4gIG1hcmdpbjogMCBhdXRvOyB9XG5cbiNsb2FkZXIge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XG5cbi5jaXJjbGUge1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDAgMCByZ2JhKDI1NSwgMTkyLCAwLCAwLjI1KSwgMCAtMXB4IDAgMCByZ2JhKDI1NSwgNjQsIDAsIDAuMjUpLCAxcHggMCAwIDAgcmdiYSgyNTUsIDE5MiwgMCwgMC4yNSksIC0xcHggMCAwIDAgcmdiYSgyNTUsIDY0LCAwLCAwLjI1KSwgMXB4IC0xcHggMCAwIHJnYmEoMjU1LCAxMjgsIDAsIDAuNSksIC0xcHggMXB4IDAgMCByZ2JhKDI1NSwgMTI4LCAwLCAwLjUpLCAxcHggMXB4IDAgMCByZ2JhKDI1NSwgMjU1LCAwLCAwLjc1KSwgLTFweCAtMXB4IDAgMCByZ2JhKDI1NSwgMCwgMCwgMC43NSk7IH1cblxuLmNpcmNsZTpudGgtb2YtdHlwZSgyKSB7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDAgMCByZ2JhKDIyNSwgMTMxLCAxOTQsIDAuMjUpLCAwIC0xcHggMCAwIHJnYmEoMTY1LCAxODEsIDIyMiwgMC4yNSksIDFweCAwIDAgMCByZ2JhKDIyNSwgMTMxLCAxOTQsIDAuMjUpLCAtMXB4IDAgMCAwIHJnYmEoMTY1LCAxODEsIDIyMiwgMC4yNSksIDFweCAtMXB4IDAgMCByZ2JhKDE5NSwgMTU2LCAyMDgsIDAuNSksIC0xcHggMXB4IDAgMCByZ2JhKDE5NSwgMTU2LCAyMDgsIDAuNSksIDFweCAxcHggMCAwIHJnYmEoMjU1LCAxMDUsIDE4MCwgMC43NSksIC0xcHggLTFweCAwIDAgcmdiYSgxMzUsIDIwNiwgMjM1LCAwLjc1KTtcbiAgYW5pbWF0aW9uOiByb3RhdGVUaGlzIDFzIGxpbmVhciBpbmZpbml0ZTsgfVxuXG4uY2lyY2xlOm50aC1vZi10eXBlKDMpIHtcbiAgYm94LXNoYWRvdzogMCAxcHggMCAwIHJnYmEoMTkyLCA2MywgMTUzLCAwLjI1KSwgMCAtMXB4IDAgMCByZ2JhKDIxNCwgNjksIDk5LCAwLjI1KSwgMXB4IDAgMCAwIHJnYmEoMTkyLCA2MywgMTUzLCAwLjI1KSwgLTFweCAwIDAgMCByZ2JhKDIxNCwgNjksIDk5LCAwLjI1KSwgMXB4IC0xcHggMCAwIHJnYmEoMjAzLCA2NiwgMTI2LCAwLjUpLCAtMXB4IDFweCAwIDAgcmdiYSgyMDMsIDY2LCAxMjYsIDAuNSksIDFweCAxcHggMCAwIHJnYmEoMTgxLCA1OSwgMTgwLCAwLjc1KSwgLTFweCAtMXB4IDAgMCByZ2JhKDIyNSwgNzIsIDcxLCAwLjc1KTsgfVxuXG4uY2lyY2xlLW11bHRpcGxlIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMHB4OyB9XG5cbi5jaXJjbGUtbXVsdGlwbGUgLmNpcmNsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luOiBhdXRvOyB9XG4gIC5jaXJjbGUtbXVsdGlwbGUgLmNpcmNsZTpudGgtb2YtdHlwZSgxKSB7XG4gICAgYW5pbWF0aW9uOiBwc3ljaG8gMnMgbGluZWFyIGluZmluaXRlOyB9XG4gIC5jaXJjbGUtbXVsdGlwbGUgLmNpcmNsZTpudGgtb2YtdHlwZSgyKSB7XG4gICAgYW5pbWF0aW9uOiBwc3ljaG8gMnMgbGluZWFyIC4xcyBpbmZpbml0ZTsgfVxuICAuY2lyY2xlLW11bHRpcGxlIC5jaXJjbGU6bnRoLW9mLXR5cGUoMykge1xuICAgIGFuaW1hdGlvbjogcHN5Y2hvIDJzIGxpbmVhciAuMjVzIGluZmluaXRlOyB9XG5cbkBrZXlmcmFtZXMgcm90YXRlVGhpcyB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpIHNjYWxlKDEpOyB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpIHNjYWxlKDEpOyB9IH1cblxuQGtleWZyYW1lcyBwc3ljaG8ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZykgc2NhbGUoMSkgdHJhbnNsYXRlKDAsIDApOyB9XG4gIDMzJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKSBzY2FsZSgxKSB0cmFuc2xhdGUoNXB4LCA1cHgpOyB9XG4gIDY2JSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNzIwZGVnKSBzY2FsZSgxKSB0cmFuc2xhdGUoLTVweCwgLTVweCk7IH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTA4MGRlZykgc2NhbGUoMSkgdHJhbnNsYXRlKDAsIDApOyB9IH1cblxuLypidXR0b24qL1xuLnVuZGVyLWJ1dHRvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTBweDsgfVxuXG4udW5kZXItYnV0dG9uIGltZyB7XG4gIGhlaWdodDogNDVweDtcbiAgb3BhY2l0eTogMC41OyB9XG5cbi51bmRlci1idXR0b24gaW1nOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XG4gIC1tb3otYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcbiAgb3BhY2l0eTogMC44OyB9XG5cbkAtbW96LWtleWZyYW1lcyBzcGluIHtcbiAgMTAwJSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9IH1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHNwaW4ge1xuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH0gfVxuXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfSB9XG5gOyJdfQ== */\n/*@ sourceURL=res/styles/loader.scss */");

_defaultExport.__hash = "98366741";
_defaultExport.__scoped = "#waiting-loader.jsx-766597652{padding:20px;width:0;margin:0 auto;}#loader.jsx-766597652{overflow:hidden;position:absolute;width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.circle.jsx-766597652{height:100px;width:100px;border-radius:100%;box-shadow:0 1px 0 0 rgba(255,192,0,0.25),0 -1px 0 0 rgba(255,64,0,0.25),1px 0 0 0 rgba(255,192,0,0.25),-1px 0 0 0 rgba(255,64,0,0.25),1px -1px 0 0 rgba(255,128,0,0.5),-1px 1px 0 0 rgba(255,128,0,0.5),1px 1px 0 0 rgba(255,255,0,0.75),-1px -1px 0 0 rgba(255,0,0,0.75);}.circle.jsx-766597652:nth-of-type(2){box-shadow:0 1px 0 0 rgba(225,131,194,0.25),0 -1px 0 0 rgba(165,181,222,0.25),1px 0 0 0 rgba(225,131,194,0.25),-1px 0 0 0 rgba(165,181,222,0.25),1px -1px 0 0 rgba(195,156,208,0.5),-1px 1px 0 0 rgba(195,156,208,0.5),1px 1px 0 0 rgba(255,105,180,0.75),-1px -1px 0 0 rgba(135,206,235,0.75);-webkit-animation:rotateThis-jsx-766597652 1s linear infinite;animation:rotateThis-jsx-766597652 1s linear infinite;}.circle.jsx-766597652:nth-of-type(3){box-shadow:0 1px 0 0 rgba(192,63,153,0.25),0 -1px 0 0 rgba(214,69,99,0.25),1px 0 0 0 rgba(192,63,153,0.25),-1px 0 0 0 rgba(214,69,99,0.25),1px -1px 0 0 rgba(203,66,126,0.5),-1px 1px 0 0 rgba(203,66,126,0.5),1px 1px 0 0 rgba(181,59,180,0.75),-1px -1px 0 0 rgba(225,72,71,0.75);}.circle-multiple.jsx-766597652{height:100px;width:100px;}.circle-multiple.jsx-766597652 .circle.jsx-766597652{position:absolute;margin:auto;}.circle-multiple.jsx-766597652 .circle.jsx-766597652:nth-of-type(1){-webkit-animation:psycho-jsx-766597652 2s linear infinite;animation:psycho-jsx-766597652 2s linear infinite;}.circle-multiple.jsx-766597652 .circle.jsx-766597652:nth-of-type(2){-webkit-animation:psycho-jsx-766597652 2s linear .1s infinite;animation:psycho-jsx-766597652 2s linear .1s infinite;}.circle-multiple.jsx-766597652 .circle.jsx-766597652:nth-of-type(3){-webkit-animation:psycho-jsx-766597652 2s linear .25s infinite;animation:psycho-jsx-766597652 2s linear .25s infinite;}@-webkit-keyframes rotateThis-jsx-766597652{from{-webkit-transform:rotate(0deg) scale(1);-ms-transform:rotate(0deg) scale(1);transform:rotate(0deg) scale(1);}to{-webkit-transform:rotate(360deg) scale(1);-ms-transform:rotate(360deg) scale(1);transform:rotate(360deg) scale(1);}}@keyframes rotateThis-jsx-766597652{from{-webkit-transform:rotate(0deg) scale(1);-ms-transform:rotate(0deg) scale(1);transform:rotate(0deg) scale(1);}to{-webkit-transform:rotate(360deg) scale(1);-ms-transform:rotate(360deg) scale(1);transform:rotate(360deg) scale(1);}}@-webkit-keyframes psycho-jsx-766597652{0%{-webkit-transform:rotate(0deg) scale(1) translate(0,0);-ms-transform:rotate(0deg) scale(1) translate(0,0);transform:rotate(0deg) scale(1) translate(0,0);}33%{-webkit-transform:rotate(360deg) scale(1) translate(5px,5px);-ms-transform:rotate(360deg) scale(1) translate(5px,5px);transform:rotate(360deg) scale(1) translate(5px,5px);}66%{-webkit-transform:rotate(720deg) scale(1) translate(-5px,-5px);-ms-transform:rotate(720deg) scale(1) translate(-5px,-5px);transform:rotate(720deg) scale(1) translate(-5px,-5px);}100%{-webkit-transform:rotate(1080deg) scale(1) translate(0,0);-ms-transform:rotate(1080deg) scale(1) translate(0,0);transform:rotate(1080deg) scale(1) translate(0,0);}}@keyframes psycho-jsx-766597652{0%{-webkit-transform:rotate(0deg) scale(1) translate(0,0);-ms-transform:rotate(0deg) scale(1) translate(0,0);transform:rotate(0deg) scale(1) translate(0,0);}33%{-webkit-transform:rotate(360deg) scale(1) translate(5px,5px);-ms-transform:rotate(360deg) scale(1) translate(5px,5px);transform:rotate(360deg) scale(1) translate(5px,5px);}66%{-webkit-transform:rotate(720deg) scale(1) translate(-5px,-5px);-ms-transform:rotate(720deg) scale(1) translate(-5px,-5px);transform:rotate(720deg) scale(1) translate(-5px,-5px);}100%{-webkit-transform:rotate(1080deg) scale(1) translate(0,0);-ms-transform:rotate(1080deg) scale(1) translate(0,0);transform:rotate(1080deg) scale(1) translate(0,0);}}.under-button.jsx-766597652{text-align:center;margin-top:10px;}.under-button.jsx-766597652 img.jsx-766597652{height:45px;opacity:0.5;}.under-button.jsx-766597652 img.jsx-766597652:hover{cursor:pointer;-webkit-animation:spin 1s linear infinite;-moz-animation:spin 1s linear infinite;-webkit-animation:spin-jsx-766597652 1s linear infinite;animation:spin-jsx-766597652 1s linear infinite;opacity:0.8;}@-moz-keyframes spin{100%.jsx-766597652{-moz-transform:rotate(360deg);}}@-webkit-keyframes spin{100%.jsx-766597652{-webkit-transform:rotate(360deg);}}@-webkit-keyframes spin-jsx-766597652{100%{-webkit-transform:rotate(360deg);-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes spin-jsx-766597652{100%{-webkit-transform:rotate(360deg);-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcy9zdHlsZXMvbG9hZGVyLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRWtCLEFBRWdCLEFBS0csQUFTSCxBQU1pVCxBQUlYLEFBR3RTLEFBSUssQUFJa0IsQUFHSSxBQUdDLEFBSVAsQUFFRSxBQUljLEFBRU0sQUFFRSxBQUVMLEFBSW5DLEFBSU4sQUFJRyxBQVFpQixBQUlHLEFBSUEsWUFuQnZCLENBakVKLEFBY0ksQUFhQSxFQTBDOEIsQ0FoRXhCLEVBMEJOLEFBOEJJLEdBNURGLEdBZ0VELENBbERNLEFBWU4sS0FJQSxBQTZDb0IsR0FJRyxBQUtULENBL0VoQixBQXVETSxDQTVERixTQWUyUixDQVQ5UixZQUNDLEFBOEQwQix1Q0FDTCxZQXJDRyxBQVVGLE1BRUUsRUFUSSxFQUdDLEVBNkNkLFdBNUVMLHNCQXlDNEIsU0FNRyxTQUpHLE1BRUUsdUJBa0IvQyxZQUFDLGtCQTlETSw4Q0FhaVMsV0FINVEsd0JBSm1RLFlBTnZSLGdGQVVxQiIsImZpbGUiOiJyZXMvc3R5bGVzL2xvYWRlci5zY3NzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hbmRyZWZlZG9yZW5rby9Ecm9wYm94L1N0dWRpdW0vbWVyc2kvYmFjaGVsb3IvZnJvbnRlbmQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY3NzYCN3YWl0aW5nLWxvYWRlciB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHdpZHRoOiAwO1xuICBtYXJnaW46IDAgYXV0bzsgfVxuXG4jbG9hZGVyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuXG4uY2lyY2xlIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBib3gtc2hhZG93OiAwIDFweCAwIDAgcmdiYSgyNTUsIDE5MiwgMCwgMC4yNSksIDAgLTFweCAwIDAgcmdiYSgyNTUsIDY0LCAwLCAwLjI1KSwgMXB4IDAgMCAwIHJnYmEoMjU1LCAxOTIsIDAsIDAuMjUpLCAtMXB4IDAgMCAwIHJnYmEoMjU1LCA2NCwgMCwgMC4yNSksIDFweCAtMXB4IDAgMCByZ2JhKDI1NSwgMTI4LCAwLCAwLjUpLCAtMXB4IDFweCAwIDAgcmdiYSgyNTUsIDEyOCwgMCwgMC41KSwgMXB4IDFweCAwIDAgcmdiYSgyNTUsIDI1NSwgMCwgMC43NSksIC0xcHggLTFweCAwIDAgcmdiYSgyNTUsIDAsIDAsIDAuNzUpOyB9XG5cbi5jaXJjbGU6bnRoLW9mLXR5cGUoMikge1xuICBib3gtc2hhZG93OiAwIDFweCAwIDAgcmdiYSgyMjUsIDEzMSwgMTk0LCAwLjI1KSwgMCAtMXB4IDAgMCByZ2JhKDE2NSwgMTgxLCAyMjIsIDAuMjUpLCAxcHggMCAwIDAgcmdiYSgyMjUsIDEzMSwgMTk0LCAwLjI1KSwgLTFweCAwIDAgMCByZ2JhKDE2NSwgMTgxLCAyMjIsIDAuMjUpLCAxcHggLTFweCAwIDAgcmdiYSgxOTUsIDE1NiwgMjA4LCAwLjUpLCAtMXB4IDFweCAwIDAgcmdiYSgxOTUsIDE1NiwgMjA4LCAwLjUpLCAxcHggMXB4IDAgMCByZ2JhKDI1NSwgMTA1LCAxODAsIDAuNzUpLCAtMXB4IC0xcHggMCAwIHJnYmEoMTM1LCAyMDYsIDIzNSwgMC43NSk7XG4gIGFuaW1hdGlvbjogcm90YXRlVGhpcyAxcyBsaW5lYXIgaW5maW5pdGU7IH1cblxuLmNpcmNsZTpudGgtb2YtdHlwZSgzKSB7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDAgMCByZ2JhKDE5MiwgNjMsIDE1MywgMC4yNSksIDAgLTFweCAwIDAgcmdiYSgyMTQsIDY5LCA5OSwgMC4yNSksIDFweCAwIDAgMCByZ2JhKDE5MiwgNjMsIDE1MywgMC4yNSksIC0xcHggMCAwIDAgcmdiYSgyMTQsIDY5LCA5OSwgMC4yNSksIDFweCAtMXB4IDAgMCByZ2JhKDIwMywgNjYsIDEyNiwgMC41KSwgLTFweCAxcHggMCAwIHJnYmEoMjAzLCA2NiwgMTI2LCAwLjUpLCAxcHggMXB4IDAgMCByZ2JhKDE4MSwgNTksIDE4MCwgMC43NSksIC0xcHggLTFweCAwIDAgcmdiYSgyMjUsIDcyLCA3MSwgMC43NSk7IH1cblxuLmNpcmNsZS1tdWx0aXBsZSB7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAxMDBweDsgfVxuXG4uY2lyY2xlLW11bHRpcGxlIC5jaXJjbGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbjogYXV0bzsgfVxuICAuY2lyY2xlLW11bHRpcGxlIC5jaXJjbGU6bnRoLW9mLXR5cGUoMSkge1xuICAgIGFuaW1hdGlvbjogcHN5Y2hvIDJzIGxpbmVhciBpbmZpbml0ZTsgfVxuICAuY2lyY2xlLW11bHRpcGxlIC5jaXJjbGU6bnRoLW9mLXR5cGUoMikge1xuICAgIGFuaW1hdGlvbjogcHN5Y2hvIDJzIGxpbmVhciAuMXMgaW5maW5pdGU7IH1cbiAgLmNpcmNsZS1tdWx0aXBsZSAuY2lyY2xlOm50aC1vZi10eXBlKDMpIHtcbiAgICBhbmltYXRpb246IHBzeWNobyAycyBsaW5lYXIgLjI1cyBpbmZpbml0ZTsgfVxuXG5Aa2V5ZnJhbWVzIHJvdGF0ZVRoaXMge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKSBzY2FsZSgxKTsgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKSBzY2FsZSgxKTsgfSB9XG5cbkBrZXlmcmFtZXMgcHN5Y2hvIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpIHNjYWxlKDEpIHRyYW5zbGF0ZSgwLCAwKTsgfVxuICAzMyUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgc2NhbGUoMSkgdHJhbnNsYXRlKDVweCwgNXB4KTsgfVxuICA2NiUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDcyMGRlZykgc2NhbGUoMSkgdHJhbnNsYXRlKC01cHgsIC01cHgpOyB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDEwODBkZWcpIHNjYWxlKDEpIHRyYW5zbGF0ZSgwLCAwKTsgfSB9XG5cbi8qYnV0dG9uKi9cbi51bmRlci1idXR0b24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEwcHg7IH1cblxuLnVuZGVyLWJ1dHRvbiBpbWcge1xuICBoZWlnaHQ6IDQ1cHg7XG4gIG9wYWNpdHk6IDAuNTsgfVxuXG4udW5kZXItYnV0dG9uIGltZzpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xuICAtbW96LWFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XG4gIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XG4gIG9wYWNpdHk6IDAuODsgfVxuXG5ALW1vei1rZXlmcmFtZXMgc3BpbiB7XG4gIDEwMCUge1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfSB9XG5cbkAtd2Via2l0LWtleWZyYW1lcyBzcGluIHtcbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9IH1cblxuQGtleWZyYW1lcyBzcGluIHtcbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH0gfVxuYDsiXX0= */\n/*@ sourceURL=res/styles/loader.scss */";
_defaultExport.__scopedHash = "766597652";
var _default = _defaultExport;
exports.default = _default;

/***/ }),

/***/ "./res/styles/main.scss":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defaultExport = new String(".pics-content{margin:20px;}.single-img{box-shadow:0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);max-width:100%;height:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-left:auto;margin-right:auto;-webkit-animation:fade-in 2s;animation:fade-in 2s;-moz-animation:fade-in 2s;-webkit-animation:fade-in 2s;-o-animation:fade-in 2s;}.single-post-header{width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.top-text{margin:20px;}.save-button-icon{-webkit-transition:-webkit-transform 0.5s;-webkit-transition:transform 0.5s;transition:transform 0.5s;cursor:pointer;}.save-button-icon img{width:50px;height:50px;}.save-button-icon:hover{-webkit-transform:translateY(-5px);-ms-transform:translateY(-5px);transform:translateY(-5px);}.button-container{margin-left:auto;margin-right:15px;}.related-post-slider{padding:13px;height:300px;width:90%;}.related-post-slider div div .hovereffect{height:300px;}.related-post-slider .swiper-container{height:300px;}.search-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.nothing-found-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}#wrap{margin:50px 100px;display:inline-block;position:relative;height:60px;float:right;padding:0;}input[type=\"text\"]{height:60px;width:100%;font-size:55px;display:inline-block;font-weight:100;border:none;outline:none;color:#555;padding:3px;padding-right:60px;position:absolute;top:0;right:0;background:none;-webkit-transition:width 0.4s cubic-bezier(0,0.795,0,1);transition:width 0.4s cubic-bezier(0,0.795,0,1);cursor:text;}input[type=\"text\"]:focus:hover{border-bottom:1px solid #BBB;}input[type=\"submit\"]{height:67px;width:63px;display:inline-block;float:right;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADNQTFRFU1NT9fX1lJSUXl5e1dXVfn5+c3Nz6urqv7+/tLS0iYmJqampn5+fysrK39/faWlp////Vi4ZywAAABF0Uk5T/////////////////////wAlrZliAAABLklEQVR42rSWWRbDIAhFHeOUtN3/ags1zaA4cHrKZ8JFRHwoXkwTvwGP1Qo0bYObAPwiLmbNAHBWFBZlD9j0JxflDViIObNHG/Do8PRHTJk0TezAhv7qloK0JJEBh+F8+U/hopIELOWfiZUCDOZD1RADOQKA75oq4cvVkcT+OdHnqqpQCITWAjnWVgGQUWz12lJuGwGoaWgBKzRVBcCypgUkOAoWgBX/L0CmxN40u6xwcIJ1cOzWYDffp3axsQOyvdkXiH9FKRFwPRHYZUaXMgPLeiW7QhbDRciyLXJaKheCuLbiVoqx1DVRyH26yb0hsuoOFEPsoz+BVE0MRlZNjGZcRQyHYkmMp2hBTIzdkzCTc/pLqOnBrk7/yZdAOq/q5NPBH1f7x7fGP4C3AAMAQrhzX9zhcGsAAAAASUVORK5CYII=) center center no-repeat;text-indent:-10000px;border:none;position:absolute;top:0;right:0;cursor:pointer;opacity:0.4;-webkit-transition:opacity .4s ease;transition:opacity .4s ease;}input[type=\"submit\"]:hover{opacity:0.8;}.search-icon img{height:40px;margin-top:7px;}.search-icon a{padding:0;}html,body{background:#FFF;margin:0;padding:0;font:100% \"Noto Sans\",sans-serif;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:100%;}h1{position:relative;font-weight:600;font-size:0.9em;text-transform:uppercase;-webkit-letter-spacing:0.3em;-moz-letter-spacing:0.3em;-ms-letter-spacing:0.3em;letter-spacing:0.3em;overflow:hidden;}h1:before{content:\"\";position:absolute;left:0;bottom:0;height:2px;width:4em;-webkit-animation:slide-in 1s ease-in both 0.5s;animation:slide-in 1s ease-in both 0.5s;}h1.no-underscore:before{display:none;}.child-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;min-height:100vh;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-top:5px;margin-bottom:5px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.wrapper{max-width:1160px;margin:0 auto;position:relative;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;}.content-wrapper{width:100%;}.content{clear:both;overflow:auto;}.content h1{margin-left:5px;}.grid-list-container{margin-top:20px;margin-bottom:20px;}.swiper-container{z-index:0;}@-webkit-keyframes slide-in{0%{-webkit-transform:translate3d(-180%,0,0);-ms-transform:translate3d(-180%,0,0);transform:translate3d(-180%,0,0);}100%{-webkit-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0);}}@keyframes slide-in{0%{-webkit-transform:translate3d(-180%,0,0);-ms-transform:translate3d(-180%,0,0);transform:translate3d(-180%,0,0);}100%{-webkit-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0);}}@-webkit-keyframes slide-up{0%{opacity:0;-webkit-transform:translate3d(0,100%,0);-ms-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);}90%{opacity:1;}100%{-webkit-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0);}}@keyframes slide-up{0%{opacity:0;-webkit-transform:translate3d(0,100%,0);-ms-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);}90%{opacity:1;}100%{-webkit-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0);}}@-webkit-keyframes fade-in{0%{opacity:0;}100%{opacity:1;}}@keyframes fade-in{0%{opacity:0;}100%{opacity:1;}}.grig-img-container{background-color:transparent;border:0;border-radius:0;}.grig-img-container img{width:100%;height:265px;object-fit:cover;padding-left:5px;padding-bottom:5px;}.hovereffect{overflow:hidden;position:relative;text-align:center;cursor:default;}.hovereffect .overlay{position:absolute;overflow:hidden;cursor:pointer;width:80%;height:80%;left:10%;top:10%;border-bottom:1px solid #FFF;border-top:1px solid #FFF;-webkit-transition:opacity 0.35s,-webkit-transform 0.35s;-webkit-transition:opacity 0.35s,-webkit-transform 0.35s;-webkit-transition:opacity 0.35s,transform 0.35s;transition:opacity 0.35s,transform 0.35s;-webkit-transform:scale(0,1);-ms-transform:scale(0,1);-webkit-transform:scale(0,1);-ms-transform:scale(0,1);transform:scale(0,1);}.hovereffect:hover .overlay{opacity:1;-webkit-filter:alpha(opacity=100);filter:alpha(opacity=100);-webkit-transform:scale(1);-ms-transform:scale(1);-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}.hovereffect img{display:block;position:relative;-webkit-transition:all 0.35s;-webkit-transition:all 0.35s;transition:all 0.35s;}.hovereffect:hover img{-webkit-filter:url('data:image/svg+xml;charset=utf-8,<svg xmlns=\"http://www.w3.org/2000/svg\"><filter id=\"filter\"><feComponentTransfer color-interpolation-filters=\"sRGB\"><feFuncR type=\"linear\" slope=\"0.6\" /><feFuncG type=\"linear\" slope=\"0.6\" /><feFuncB type=\"linear\" slope=\"0.6\" /></feComponentTransfer></filter></svg>#filter');filter:url('data:image/svg+xml;charset=utf-8,<svg xmlns=\"http://www.w3.org/2000/svg\"><filter id=\"filter\"><feComponentTransfer color-interpolation-filters=\"sRGB\"><feFuncR type=\"linear\" slope=\"0.6\" /><feFuncG type=\"linear\" slope=\"0.6\" /><feFuncB type=\"linear\" slope=\"0.6\" /></feComponentTransfer></filter></svg>#filter');-webkit-filter:brightness(0.6);filter:brightness(0.6);-webkit-filter:brightness(0.6);}.hovereffect h2{text-transform:uppercase;text-align:center;position:relative;font-size:17px;background-color:transparent;color:#FFF;padding:1em 0;opacity:0;-webkit-filter:alpha(opacity=0);filter:alpha(opacity=0);-webkit-transition:opacity 0.35s,-webkit-transform 0.35s;-webkit-transition:opacity 0.35s,-webkit-transform 0.35s;-webkit-transition:opacity 0.35s,transform 0.35s;transition:opacity 0.35s,transform 0.35s;-webkit-transform:translate3d(0,-100%,0);-webkit-transform:translate3d(0,-100%,0);-ms-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);}.hovereffect .overlay .hovereffect a,.hovereffect p{color:#FFF;-webkit-filter:alpha(opacity=0);filter:alpha(opacity=0);-webkit-transition:opacity 0.35s,-webkit-transform 0.35s;-webkit-transition:opacity 0.35s,-webkit-transform 0.35s;-webkit-transition:opacity 0.35s,transform 0.35s;transition:opacity 0.35s,transform 0.35s;-webkit-transform:translate3d(0,100%,0);-webkit-transform:translate3d(0,100%,0);-ms-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);}.hovereffect:hover a,.hovereffect:hover p,.hovereffect:hover h2{opacity:1;-webkit-filter:alpha(opacity=100);filter:alpha(opacity=100);-webkit-transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0);}.pure-g{text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcy9zdHlsZXMvbWFpbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVrQixBQUVlLEFBR2dFLEFBZWpFLEFBS0MsQUFHYyxBQUlmLEFBSWdCLEFBR1YsQUFJSixBQUtBLEFBR0EsQUFHQSxBQUlBLEFBS0ssQUFRTixBQWtCaUIsQUFHakIsQUFlQSxBQUdBLEFBSUYsQUFJTSxBQVNFLEFBUVAsQUFTRSxBQUdBLEFBUUksQUFNTixBQUdBLEFBSUssQUFHQSxBQUlOLEFBTzJCLEFBRUosQUFJckIsQUFHQSxBQUVxQixBQUlyQixBQUVBLEFBR2lCLEFBS2xCLEFBU0ssQUFNRSxBQWdCUixBQU9JLEFBTWlULEFBS3RTLEFBZ0JkLEFBVUQsQUFNUSxVQTlLUCxBQTZEQSxBQWN5QixBQUV2QixBQU1BLEFBRUEsQUF3Q2EsQUE0Q0EsQ0F0UU4sQUFZUixBQXVHTSxBQXlCTixBQUlFLEFBMkNELEFBbUVXLENBalJYLEFBdUJBLEFBK0NGLEFBcUJBLEFBY0UsQUFJRSxDQW5FRixBQUlDLEFBR0EsQUE2RkEsQ0FzR0ksRUEvSFQsQUFpRFEsQUFJRSxBQTZDRCxDQWpMQSxBQW9ISixDQTVGTyxBQWdFTCxBQStGQSxBQWlFRyxLQS9QTixBQXdDRSxBQXFCTSxDQW1ISixDQXpGUCxBQTZDSyxBQTRGRyxDQXBOUixDQWtFTSxFQXRCYyxBQWdEdkIsQUFrRUUsRUE5Q1MsQ0EwRlcsRUF0SGIsQUF5RkUsQUFNSCxDQXhMSSxBQWlGZSxBQW1EZCxDQS9IVCxBQTZGRixFQWhFWSxBQWtJTCxDQTNJRSxFQWlKRCxFQWdEQyxDQW5LTixDQTRDRCxJQW1CUyxBQW1FVixDQS9GZSxFQXlGVixFQWZFLEVBNUcwckIsQUE0Q2pzQixDQTFFRSxDQWlKTyxDQXhJSCxBQXVKTCxFQXNCVSxBQVdOLEtBdEh5QixDQThFeEIsQUF5RDBDLENBMUo3QyxDQXBIRSxBQTZESCxDQWdLSCxBQWFrQixBQTRDWSxJQXJPakIsQUFJSCxBQXlGRixDQXhFTCxBQXVEUyxDQWlJUSxDQWpEVCxFQWlCWixFQWhLRSxHQTdERSxHQXNFQyxBQXdKZ0IsSUFqS2xCLEFBaUZXLEVBakhNLEdBNUJmLENBeU9VLEVBekRXLEFBU0EsQ0FuSHZCLEVBakRJLEdBd09KLEVBd0JvQixJQTlNbkIsQUF1RzBCLEFBa0VoQixFQWxPSCxHQWdOTyxBQWdDWixDQXpPRSxDQWdLcUIsRUFxRGxCLEdBbEtBLENBcU11QixNQWRoQyxVQUNjLEVBdkxOLEFBMENJLEFBNEdvQyxTQXpFckMsQ0F2R0UsRUFzRmtCLE1BM0RuQyxNQUNFLENBdkJlLEVBMEZSLENBN0lFLElBMkVELEVBZ0RBLFFBbUJFLEdBN0lBLEVBd09FLENBN0orQixFQStDbEMsSUFxSXlDLEdBakNoQixHQWhGdkIsR0E3SUUsQ0FXRCxBQXVRWSxjQWpLcEIsWUFBQyxxQkE4STZCLEVBOVBoQixXQWdERixLQTBOa0IsVUF4UWIsYUF3RWpCLENBa0VRLFdBbEVQLElBdEVXLENBdVFVLHVCQXRRdEIsWUF3TmtCLDZCQUNKLHlCQUNKLEFBZ0NxQixtQkFZUixzQkFYQSxrQ0FqQ1osNkVBaUNhLDhGQWhCYixzREFDUSwrQkFBQyx3Q0E1SlgscUJBQ1QsWUFDTSxrQkFDWixNQUNFLFFBQ08sZUFDSCxZQUNnQixnRUFBQyIsImZpbGUiOiJyZXMvc3R5bGVzL21haW4uc2NzcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYW5kcmVmZWRvcmVua28vRHJvcGJveC9TdHVkaXVtL21lcnNpL2JhY2hlbG9yL2Zyb250ZW5kIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNzc2AucGljcy1jb250ZW50IHtcbiAgbWFyZ2luOiAyMHB4OyB9XG5cbi5zaW5nbGUtaW1nIHtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGFuaW1hdGlvbjogZmFkZS1pbiAycztcbiAgLW1vei1hbmltYXRpb246IGZhZGUtaW4gMnM7XG4gIC8qIEZpcmVmb3ggKi9cbiAgLXdlYmtpdC1hbmltYXRpb246IGZhZGUtaW4gMnM7XG4gIC8qIFNhZmFyaSBhbmQgQ2hyb21lICovXG4gIC1vLWFuaW1hdGlvbjogZmFkZS1pbiAycztcbiAgLyogT3BlcmEgKi8gfVxuXG4uc2luZ2xlLXBvc3QtaGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XG5cbi50b3AtdGV4dCB7XG4gIG1hcmdpbjogMjBweDsgfVxuXG4uc2F2ZS1idXR0b24taWNvbiB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xuICBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgLnNhdmUtYnV0dG9uLWljb24gaW1nIHtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7IH1cbiAgLnNhdmUtYnV0dG9uLWljb246aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTsgfVxuXG4uYnV0dG9uLWNvbnRhaW5lciB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7IH1cblxuLnJlbGF0ZWQtcG9zdC1zbGlkZXIge1xuICBwYWRkaW5nOiAxM3B4O1xuICBoZWlnaHQ6IDMwMHB4O1xuICB3aWR0aDogOTAlOyB9XG4gIC5yZWxhdGVkLXBvc3Qtc2xpZGVyIGRpdiBkaXYgLmhvdmVyZWZmZWN0IHtcbiAgICBoZWlnaHQ6IDMwMHB4OyB9XG4gIC5yZWxhdGVkLXBvc3Qtc2xpZGVyIC5zd2lwZXItY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDMwMHB4OyB9XG5cbi5zZWFyY2gtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxuXG4ubm90aGluZy1mb3VuZC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxuXG4jd3JhcCB7XG4gIG1hcmdpbjogNTBweCAxMDBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogNjBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwYWRkaW5nOiAwOyB9XG5cbmlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcbiAgaGVpZ2h0OiA2MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiA1NXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6ICM1NTU7XG4gIHBhZGRpbmc6IDNweDtcbiAgcGFkZGluZy1yaWdodDogNjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjRzIGN1YmljLWJlemllcigwLCAwLjc5NSwgMCwgMSk7XG4gIGN1cnNvcjogdGV4dDsgfVxuXG5pbnB1dFt0eXBlPVwidGV4dFwiXTpmb2N1czpob3ZlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjQkJCOyB9XG5cbmlucHV0W3R5cGU9XCJzdWJtaXRcIl0ge1xuICBoZWlnaHQ6IDY3cHg7XG4gIHdpZHRoOiA2M3B4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZsb2F0OiByaWdodDtcbiAgYmFja2dyb3VuZDogdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBREFBQUFBd0NBTUFBQUJnM0FtMUFBQUFHWFJGV0hSVGIyWjBkMkZ5WlFCQlpHOWlaU0JKYldGblpWSmxZV1I1Y2NsbFBBQUFBRE5RVEZSRlUxTlQ5ZlgxbEpTVVhsNWUxZFhWZm41K2MzTno2dXJxdjcrL3RMUzBpWW1KcWFtcG41K2Z5c3JLMzkvZmFXbHAvLy8vVmk0Wnl3QUFBQkYwVWs1VC8vLy8vLy8vLy8vLy8vLy8vLy8vL3dBbHJabGlBQUFCTGtsRVFWUjQyclNXV1JiRElBaEZIZU9VdE4zL2FnczF6YUE0Y0hyS1o4SkZSSHdvWGt3VHZ3R1AxUW8wYllPYkFQd2lMbWJOQUhCV0ZCWmxEOWowSnhmbERWaUlPYk5IRy9EbzhQUkhUSmswVGV6QWh2N3Fsb0swSkpFQmgrRjgrVS9ob3BJRUxPV2ZpWlVDRE9aRDFSQURPUUtBNzVvcTRjdlZrY1QrT2RIbnFxcFFDSVRXQWpuV1ZnR1FVV3oxMmxKdUd3R29hV2dCS3pSVkJjQ3lwZ1VrT0FvV2dCWC9MMENteE40MHU2eHdjSUoxY096V1lEZmZwM2F4c1FPeXZka1hpSDlGS1JGd1BSSFlaVWFYTWdQTGVpVzdRaGJEUmNpeUxYSmFLaGVDdUxiaVZvcXgxRFZSeUgyNnliMGhzdW9PRkVQc296K0JWRTBNUmxaTmpHWmNSUXlIWWttTXAyaEJUSXpka3pDVGMvcExxT25Ccms3L3laZEFPcS9xNU5QQkgxZjd4N2ZHUDRDM0FBTUFRcmh6WDl6aGNHc0FBQUFBU1VWT1JLNUNZSUk9KSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdDtcbiAgdGV4dC1pbmRlbnQ6IC0xMDAwMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvcGFjaXR5OiAwLjQ7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjRzIGVhc2U7IH1cblxuaW5wdXRbdHlwZT1cInN1Ym1pdFwiXTpob3ZlciB7XG4gIG9wYWNpdHk6IDAuODsgfVxuXG4uc2VhcmNoLWljb24gaW1nIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBtYXJnaW4tdG9wOiA3cHg7IH1cblxuLnNlYXJjaC1pY29uIGEge1xuICBwYWRkaW5nOiAwOyB9XG5cbmh0bWwsXG5ib2R5IHtcbiAgYmFja2dyb3VuZDogI0ZGRjtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250OiAxMDAlIFwiTm90byBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTsgfVxuXG5oMSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM2VtO1xuICBvdmVyZmxvdzogaGlkZGVuOyB9XG4gIGgxOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDA7XG4gICAgaGVpZ2h0OiAycHg7XG4gICAgd2lkdGg6IDRlbTtcbiAgICBhbmltYXRpb246IHNsaWRlLWluIDFzIGVhc2UtaW4gYm90aCAwLjVzOyB9XG4gIGgxLm5vLXVuZGVyc2NvcmU6YmVmb3JlIHtcbiAgICBkaXNwbGF5OiBub25lOyB9XG5cbi5jaGlsZC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cblxuLndyYXBwZXIge1xuICBtYXgtd2lkdGg6IDExNjBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7IH1cblxuLmNvbnRlbnQtd3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlOyB9XG5cbi5jb250ZW50IHtcbiAgY2xlYXI6IGJvdGg7XG4gIG92ZXJmbG93OiBhdXRvOyB9XG4gIC5jb250ZW50IGgxIHtcbiAgICBtYXJnaW4tbGVmdDogNXB4OyB9XG5cbi5ncmlkLWxpc3QtY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDsgfVxuXG4uc3dpcGVyLWNvbnRhaW5lciB7XG4gIHotaW5kZXg6IDA7IH1cblxuLyoqXG4gKiBBbmltYXRpb25zXG4gKi9cbkBrZXlmcmFtZXMgc2xpZGUtaW4ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTgwJSwgMCwgMCk7IH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTsgfSB9XG5cbkBrZXlmcmFtZXMgc2xpZGUtdXAge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApOyB9XG4gIDkwJSB7XG4gICAgb3BhY2l0eTogMTsgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApOyB9IH1cblxuQGtleWZyYW1lcyBmYWRlLWluIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7IH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTsgfSB9XG5cbi5ncmlnLWltZy1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiAwOyB9XG5cbi5ncmlnLWltZy1jb250YWluZXIgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjY1cHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDsgfVxuXG4vKkhvdmVyKi9cbi5ob3ZlcmVmZmVjdCB7XG4gIC8qZmxvYXQ6IGxlZnQ7Ki9cbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogZGVmYXVsdDsgfVxuXG4uaG92ZXJlZmZlY3QgLm92ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiA4MCU7XG4gIGxlZnQ6IDEwJTtcbiAgdG9wOiAxMCU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRkZGO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI0ZGRjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMzVzLCAtd2Via2l0LXRyYW5zZm9ybSAwLjM1cztcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjM1cywgdHJhbnNmb3JtIDAuMzVzO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCwgMSk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAsIDEpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDAsIDEpOyB9XG5cbi5ob3ZlcmVmZmVjdDpob3ZlciAub3ZlcmxheSB7XG4gIG9wYWNpdHk6IDE7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0xMDApO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpOyB9XG5cbi5ob3ZlcmVmZmVjdCBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjM1cztcbiAgdHJhbnNpdGlvbjogYWxsIDAuMzVzOyB9XG5cbi5ob3ZlcmVmZmVjdDpob3ZlciBpbWcge1xuICBmaWx0ZXI6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PGZpbHRlciBpZD1cImZpbHRlclwiPjxmZUNvbXBvbmVudFRyYW5zZmVyIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz1cInNSR0JcIj48ZmVGdW5jUiB0eXBlPVwibGluZWFyXCIgc2xvcGU9XCIwLjZcIiAvPjxmZUZ1bmNHIHR5cGU9XCJsaW5lYXJcIiBzbG9wZT1cIjAuNlwiIC8+PGZlRnVuY0IgdHlwZT1cImxpbmVhclwiIHNsb3BlPVwiMC42XCIgLz48L2ZlQ29tcG9uZW50VHJhbnNmZXI+PC9maWx0ZXI+PC9zdmc+I2ZpbHRlcicpO1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC42KTtcbiAgLXdlYmtpdC1maWx0ZXI6IGJyaWdodG5lc3MoMC42KTsgfVxuXG4uaG92ZXJlZmZlY3QgaDIge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNGRkY7XG4gIHBhZGRpbmc6IDFlbSAwO1xuICBvcGFjaXR5OiAwO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjM1cywgLXdlYmtpdC10cmFuc2Zvcm0gMC4zNXM7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zNXMsIHRyYW5zZm9ybSAwLjM1cztcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7IH1cblxuLmhvdmVyZWZmZWN0IC5vdmVybGF5XG4uaG92ZXJlZmZlY3QgYSwgLmhvdmVyZWZmZWN0IHAge1xuICBjb2xvcjogI0ZGRjtcbiAgLypwYWRkaW5nOiAxZW0gMDsqL1xuICAvKm9wYWNpdHk6IDA7Ki9cbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC4zNXMsIC13ZWJraXQtdHJhbnNmb3JtIDAuMzVzO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMzVzLCB0cmFuc2Zvcm0gMC4zNXM7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMDAlLCAwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMDAlLCAwKTsgfVxuXG4uaG92ZXJlZmZlY3Q6aG92ZXIgYSwgLmhvdmVyZWZmZWN0OmhvdmVyIHAsIC5ob3ZlcmVmZmVjdDpob3ZlciBoMiB7XG4gIG9wYWNpdHk6IDE7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0xMDApO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7IH1cblxuLnB1cmUtZyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuYDsiXX0= */\n/*@ sourceURL=res/styles/main.scss */");

_defaultExport.__hash = "4241590457";
_defaultExport.__scoped = ".pics-content.jsx-3914664824{margin:20px;}.single-img.jsx-3914664824{box-shadow:0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);max-width:100%;height:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-left:auto;margin-right:auto;-webkit-animation:fade-in-jsx-3914664824 2s;animation:fade-in-jsx-3914664824 2s;-moz-animation:fade-in 2s;-webkit-animation:fade-in 2s;-o-animation:fade-in 2s;}.single-post-header.jsx-3914664824{width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.top-text.jsx-3914664824{margin:20px;}.save-button-icon.jsx-3914664824{-webkit-transition:-webkit-transform 0.5s;-webkit-transition:transform 0.5s;transition:transform 0.5s;cursor:pointer;}.save-button-icon.jsx-3914664824 img.jsx-3914664824{width:50px;height:50px;}.save-button-icon.jsx-3914664824:hover{-webkit-transform:translateY(-5px);-ms-transform:translateY(-5px);transform:translateY(-5px);}.button-container.jsx-3914664824{margin-left:auto;margin-right:15px;}.related-post-slider.jsx-3914664824{padding:13px;height:300px;width:90%;}.related-post-slider.jsx-3914664824 div.jsx-3914664824 div.jsx-3914664824 .hovereffect.jsx-3914664824{height:300px;}.related-post-slider.jsx-3914664824 .swiper-container.jsx-3914664824{height:300px;}.search-container.jsx-3914664824{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.nothing-found-container.jsx-3914664824{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}#wrap.jsx-3914664824{margin:50px 100px;display:inline-block;position:relative;height:60px;float:right;padding:0;}input[type=\"text\"].jsx-3914664824{height:60px;width:100%;font-size:55px;display:inline-block;font-weight:100;border:none;outline:none;color:#555;padding:3px;padding-right:60px;position:absolute;top:0;right:0;background:none;-webkit-transition:width 0.4s cubic-bezier(0,0.795,0,1);transition:width 0.4s cubic-bezier(0,0.795,0,1);cursor:text;}input[type=\"text\"].jsx-3914664824:focus.jsx-3914664824:hover{border-bottom:1px solid #BBB;}input[type=\"submit\"].jsx-3914664824{height:67px;width:63px;display:inline-block;float:right;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADNQTFRFU1NT9fX1lJSUXl5e1dXVfn5+c3Nz6urqv7+/tLS0iYmJqampn5+fysrK39/faWlp////Vi4ZywAAABF0Uk5T/////////////////////wAlrZliAAABLklEQVR42rSWWRbDIAhFHeOUtN3/ags1zaA4cHrKZ8JFRHwoXkwTvwGP1Qo0bYObAPwiLmbNAHBWFBZlD9j0JxflDViIObNHG/Do8PRHTJk0TezAhv7qloK0JJEBh+F8+U/hopIELOWfiZUCDOZD1RADOQKA75oq4cvVkcT+OdHnqqpQCITWAjnWVgGQUWz12lJuGwGoaWgBKzRVBcCypgUkOAoWgBX/L0CmxN40u6xwcIJ1cOzWYDffp3axsQOyvdkXiH9FKRFwPRHYZUaXMgPLeiW7QhbDRciyLXJaKheCuLbiVoqx1DVRyH26yb0hsuoOFEPsoz+BVE0MRlZNjGZcRQyHYkmMp2hBTIzdkzCTc/pLqOnBrk7/yZdAOq/q5NPBH1f7x7fGP4C3AAMAQrhzX9zhcGsAAAAASUVORK5CYII=) center center no-repeat;text-indent:-10000px;border:none;position:absolute;top:0;right:0;cursor:pointer;opacity:0.4;-webkit-transition:opacity .4s ease;transition:opacity .4s ease;}input[type=\"submit\"].jsx-3914664824:hover{opacity:0.8;}.search-icon.jsx-3914664824 img.jsx-3914664824{height:40px;margin-top:7px;}.search-icon.jsx-3914664824 a.jsx-3914664824{padding:0;}html.jsx-3914664824,body.jsx-3914664824{background:#FFF;margin:0;padding:0;font:100% \"Noto Sans\",sans-serif;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:100%;}h1.jsx-3914664824{position:relative;font-weight:600;font-size:0.9em;text-transform:uppercase;-webkit-letter-spacing:0.3em;-moz-letter-spacing:0.3em;-ms-letter-spacing:0.3em;letter-spacing:0.3em;overflow:hidden;}h1.jsx-3914664824:before{content:\"\";position:absolute;left:0;bottom:0;height:2px;width:4em;-webkit-animation:slide-in-jsx-3914664824 1s ease-in both 0.5s;animation:slide-in-jsx-3914664824 1s ease-in both 0.5s;}h1.no-underscore.jsx-3914664824:before{display:none;}.child-container.jsx-3914664824{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;min-height:100vh;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-top:5px;margin-bottom:5px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.wrapper.jsx-3914664824{max-width:1160px;margin:0 auto;position:relative;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;}.content-wrapper.jsx-3914664824{width:100%;}.content.jsx-3914664824{clear:both;overflow:auto;}.content.jsx-3914664824 h1.jsx-3914664824{margin-left:5px;}.grid-list-container.jsx-3914664824{margin-top:20px;margin-bottom:20px;}.swiper-container.jsx-3914664824{z-index:0;}@-webkit-keyframes slide-in-jsx-3914664824{0%{-webkit-transform:translate3d(-180%,0,0);-ms-transform:translate3d(-180%,0,0);transform:translate3d(-180%,0,0);}100%{-webkit-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0);}}@keyframes slide-in-jsx-3914664824{0%{-webkit-transform:translate3d(-180%,0,0);-ms-transform:translate3d(-180%,0,0);transform:translate3d(-180%,0,0);}100%{-webkit-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0);}}@-webkit-keyframes slide-up-jsx-3914664824{0%{opacity:0;-webkit-transform:translate3d(0,100%,0);-ms-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);}90%{opacity:1;}100%{-webkit-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0);}}@keyframes slide-up-jsx-3914664824{0%{opacity:0;-webkit-transform:translate3d(0,100%,0);-ms-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);}90%{opacity:1;}100%{-webkit-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0);}}@-webkit-keyframes fade-in-jsx-3914664824{0%{opacity:0;}100%{opacity:1;}}@keyframes fade-in-jsx-3914664824{0%{opacity:0;}100%{opacity:1;}}.grig-img-container.jsx-3914664824{background-color:transparent;border:0;border-radius:0;}.grig-img-container.jsx-3914664824 img.jsx-3914664824{width:100%;height:265px;object-fit:cover;padding-left:5px;padding-bottom:5px;}.hovereffect.jsx-3914664824{overflow:hidden;position:relative;text-align:center;cursor:default;}.hovereffect.jsx-3914664824 .overlay.jsx-3914664824{position:absolute;overflow:hidden;cursor:pointer;width:80%;height:80%;left:10%;top:10%;border-bottom:1px solid #FFF;border-top:1px solid #FFF;-webkit-transition:opacity 0.35s,-webkit-transform 0.35s;-webkit-transition:opacity 0.35s,-webkit-transform 0.35s;-webkit-transition:opacity 0.35s,transform 0.35s;transition:opacity 0.35s,transform 0.35s;-webkit-transform:scale(0,1);-ms-transform:scale(0,1);-webkit-transform:scale(0,1);-ms-transform:scale(0,1);transform:scale(0,1);}.hovereffect.jsx-3914664824:hover .overlay.jsx-3914664824{opacity:1;-webkit-filter:alpha(opacity=100);filter:alpha(opacity=100);-webkit-transform:scale(1);-ms-transform:scale(1);-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}.hovereffect.jsx-3914664824 img.jsx-3914664824{display:block;position:relative;-webkit-transition:all 0.35s;-webkit-transition:all 0.35s;transition:all 0.35s;}.hovereffect.jsx-3914664824:hover img.jsx-3914664824{-webkit-filter:url('data:image/svg+xml;charset=utf-8,<svg xmlns=\"http://www.w3.org/2000/svg\"><filter id=\"filter\"><feComponentTransfer color-interpolation-filters=\"sRGB\"><feFuncR type=\"linear\" slope=\"0.6\" /><feFuncG type=\"linear\" slope=\"0.6\" /><feFuncB type=\"linear\" slope=\"0.6\" /></feComponentTransfer></filter></svg>#filter');filter:url('data:image/svg+xml;charset=utf-8,<svg xmlns=\"http://www.w3.org/2000/svg\"><filter id=\"filter\"><feComponentTransfer color-interpolation-filters=\"sRGB\"><feFuncR type=\"linear\" slope=\"0.6\" /><feFuncG type=\"linear\" slope=\"0.6\" /><feFuncB type=\"linear\" slope=\"0.6\" /></feComponentTransfer></filter></svg>#filter');-webkit-filter:brightness(0.6);filter:brightness(0.6);-webkit-filter:brightness(0.6);}.hovereffect.jsx-3914664824 h2.jsx-3914664824{text-transform:uppercase;text-align:center;position:relative;font-size:17px;background-color:transparent;color:#FFF;padding:1em 0;opacity:0;-webkit-filter:alpha(opacity=0);filter:alpha(opacity=0);-webkit-transition:opacity 0.35s,-webkit-transform 0.35s;-webkit-transition:opacity 0.35s,-webkit-transform 0.35s;-webkit-transition:opacity 0.35s,transform 0.35s;transition:opacity 0.35s,transform 0.35s;-webkit-transform:translate3d(0,-100%,0);-webkit-transform:translate3d(0,-100%,0);-ms-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);}.hovereffect.jsx-3914664824 .overlay.jsx-3914664824 .hovereffect.jsx-3914664824 a.jsx-3914664824,.hovereffect.jsx-3914664824 p.jsx-3914664824{color:#FFF;-webkit-filter:alpha(opacity=0);filter:alpha(opacity=0);-webkit-transition:opacity 0.35s,-webkit-transform 0.35s;-webkit-transition:opacity 0.35s,-webkit-transform 0.35s;-webkit-transition:opacity 0.35s,transform 0.35s;transition:opacity 0.35s,transform 0.35s;-webkit-transform:translate3d(0,100%,0);-webkit-transform:translate3d(0,100%,0);-ms-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);}.hovereffect.jsx-3914664824:hover a.jsx-3914664824,.hovereffect.jsx-3914664824:hover p.jsx-3914664824,.hovereffect.jsx-3914664824:hover h2.jsx-3914664824{opacity:1;-webkit-filter:alpha(opacity=100);filter:alpha(opacity=100);-webkit-transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0);}.pure-g.jsx-3914664824{text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcy9zdHlsZXMvbWFpbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVrQixBQUVlLEFBR2dFLEFBZWpFLEFBS0MsQUFHYyxBQUlmLEFBSWdCLEFBR1YsQUFJSixBQUtBLEFBR0EsQUFHQSxBQUlBLEFBS0ssQUFRTixBQWtCaUIsQUFHakIsQUFlQSxBQUdBLEFBSUYsQUFJTSxBQVNFLEFBUVAsQUFTRSxBQUdBLEFBUUksQUFNTixBQUdBLEFBSUssQUFHQSxBQUlOLEFBTzJCLEFBRUosQUFJckIsQUFHQSxBQUVxQixBQUlyQixBQUVBLEFBR2lCLEFBS2xCLEFBU0ssQUFNRSxBQWdCUixBQU9JLEFBTWlULEFBS3RTLEFBZ0JkLEFBVUQsQUFNUSxVQTlLUCxBQTZEQSxBQWN5QixBQUV2QixBQU1BLEFBRUEsQUF3Q2EsQUE0Q0EsQ0F0UU4sQUFZUixBQXVHTSxBQXlCTixBQUlFLEFBMkNELEFBbUVXLENBalJYLEFBdUJBLEFBK0NGLEFBcUJBLEFBY0UsQUFJRSxDQW5FRixBQUlDLEFBR0EsQUE2RkEsQ0FzR0ksRUEvSFQsQUFpRFEsQUFJRSxBQTZDRCxDQWpMQSxBQW9ISixDQTVGTyxBQWdFTCxBQStGQSxBQWlFRyxLQS9QTixBQXdDRSxBQXFCTSxDQW1ISixDQXpGUCxBQTZDSyxBQTRGRyxDQXBOUixDQWtFTSxFQXRCYyxBQWdEdkIsQUFrRUUsRUE5Q1MsQ0EwRlcsRUF0SGIsQUF5RkUsQUFNSCxDQXhMSSxBQWlGZSxBQW1EZCxDQS9IVCxBQTZGRixFQWhFWSxBQWtJTCxDQTNJRSxFQWlKRCxFQWdEQyxDQW5LTixDQTRDRCxJQW1CUyxBQW1FVixDQS9GZSxFQXlGVixFQWZFLEVBNUcwckIsQUE0Q2pzQixDQTFFRSxDQWlKTyxDQXhJSCxBQXVKTCxFQXNCVSxBQVdOLEtBdEh5QixDQThFeEIsQUF5RDBDLENBMUo3QyxDQXBIRSxBQTZESCxDQWdLSCxBQWFrQixBQTRDWSxJQXJPakIsQUFJSCxBQXlGRixDQXhFTCxBQXVEUyxDQWlJUSxDQWpEVCxFQWlCWixFQWhLRSxHQTdERSxHQXNFQyxBQXdKZ0IsSUFqS2xCLEFBaUZXLEVBakhNLEdBNUJmLENBeU9VLEVBekRXLEFBU0EsQ0FuSHZCLEVBakRJLEdBd09KLEVBd0JvQixJQTlNbkIsQUF1RzBCLEFBa0VoQixFQWxPSCxHQWdOTyxBQWdDWixDQXpPRSxDQWdLcUIsRUFxRGxCLEdBbEtBLENBcU11QixNQWRoQyxVQUNjLEVBdkxOLEFBMENJLEFBNEdvQyxTQXpFckMsQ0F2R0UsUUEyQmpCLE1BQ0UsQ0F2QmUsRUEwRlIsQ0E3SUUsSUEyRUQsRUFnREEsUUFTeUIsQUFVdkIsR0E3SUEsRUF3T0UsQ0E3SitCLEVBK0NsQyxJQXFJeUMsR0FqQ2hCLEdBaEZ2QixHQTdJRSxDQVdELEFBdVFZLGNBaktwQixZQUFDLHFCQThJNkIsYUE5TWxCLEtBME5rQixjQTFRaEIsU0EwRWQsQ0FrRVEsV0FsRVAsS0F4RWdCLEFBeVFLLDZCQXZRVixNQXlOTSxrQkF4TmxCLFdBeU5jLHlCQUNKLEFBZ0NxQixtQkFZUixzQkFYQSxrQ0FqQ1osNkVBaUNhLDhGQWhCYixzREFDUSwrQkFBQyx3Q0E1SlgscUJBQ1QsWUFDTSxrQkFDWixNQUNFLFFBQ08sZUFDSCxZQUNnQixnRUFBQyIsImZpbGUiOiJyZXMvc3R5bGVzL21haW4uc2NzcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYW5kcmVmZWRvcmVua28vRHJvcGJveC9TdHVkaXVtL21lcnNpL2JhY2hlbG9yL2Zyb250ZW5kIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNzc2AucGljcy1jb250ZW50IHtcbiAgbWFyZ2luOiAyMHB4OyB9XG5cbi5zaW5nbGUtaW1nIHtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGFuaW1hdGlvbjogZmFkZS1pbiAycztcbiAgLW1vei1hbmltYXRpb246IGZhZGUtaW4gMnM7XG4gIC8qIEZpcmVmb3ggKi9cbiAgLXdlYmtpdC1hbmltYXRpb246IGZhZGUtaW4gMnM7XG4gIC8qIFNhZmFyaSBhbmQgQ2hyb21lICovXG4gIC1vLWFuaW1hdGlvbjogZmFkZS1pbiAycztcbiAgLyogT3BlcmEgKi8gfVxuXG4uc2luZ2xlLXBvc3QtaGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XG5cbi50b3AtdGV4dCB7XG4gIG1hcmdpbjogMjBweDsgfVxuXG4uc2F2ZS1idXR0b24taWNvbiB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xuICBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgLnNhdmUtYnV0dG9uLWljb24gaW1nIHtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7IH1cbiAgLnNhdmUtYnV0dG9uLWljb246aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTsgfVxuXG4uYnV0dG9uLWNvbnRhaW5lciB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7IH1cblxuLnJlbGF0ZWQtcG9zdC1zbGlkZXIge1xuICBwYWRkaW5nOiAxM3B4O1xuICBoZWlnaHQ6IDMwMHB4O1xuICB3aWR0aDogOTAlOyB9XG4gIC5yZWxhdGVkLXBvc3Qtc2xpZGVyIGRpdiBkaXYgLmhvdmVyZWZmZWN0IHtcbiAgICBoZWlnaHQ6IDMwMHB4OyB9XG4gIC5yZWxhdGVkLXBvc3Qtc2xpZGVyIC5zd2lwZXItY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDMwMHB4OyB9XG5cbi5zZWFyY2gtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxuXG4ubm90aGluZy1mb3VuZC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxuXG4jd3JhcCB7XG4gIG1hcmdpbjogNTBweCAxMDBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogNjBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwYWRkaW5nOiAwOyB9XG5cbmlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcbiAgaGVpZ2h0OiA2MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiA1NXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6ICM1NTU7XG4gIHBhZGRpbmc6IDNweDtcbiAgcGFkZGluZy1yaWdodDogNjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjRzIGN1YmljLWJlemllcigwLCAwLjc5NSwgMCwgMSk7XG4gIGN1cnNvcjogdGV4dDsgfVxuXG5pbnB1dFt0eXBlPVwidGV4dFwiXTpmb2N1czpob3ZlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjQkJCOyB9XG5cbmlucHV0W3R5cGU9XCJzdWJtaXRcIl0ge1xuICBoZWlnaHQ6IDY3cHg7XG4gIHdpZHRoOiA2M3B4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZsb2F0OiByaWdodDtcbiAgYmFja2dyb3VuZDogdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBREFBQUFBd0NBTUFBQUJnM0FtMUFBQUFHWFJGV0hSVGIyWjBkMkZ5WlFCQlpHOWlaU0JKYldGblpWSmxZV1I1Y2NsbFBBQUFBRE5RVEZSRlUxTlQ5ZlgxbEpTVVhsNWUxZFhWZm41K2MzTno2dXJxdjcrL3RMUzBpWW1KcWFtcG41K2Z5c3JLMzkvZmFXbHAvLy8vVmk0Wnl3QUFBQkYwVWs1VC8vLy8vLy8vLy8vLy8vLy8vLy8vL3dBbHJabGlBQUFCTGtsRVFWUjQyclNXV1JiRElBaEZIZU9VdE4zL2FnczF6YUE0Y0hyS1o4SkZSSHdvWGt3VHZ3R1AxUW8wYllPYkFQd2lMbWJOQUhCV0ZCWmxEOWowSnhmbERWaUlPYk5IRy9EbzhQUkhUSmswVGV6QWh2N3Fsb0swSkpFQmgrRjgrVS9ob3BJRUxPV2ZpWlVDRE9aRDFSQURPUUtBNzVvcTRjdlZrY1QrT2RIbnFxcFFDSVRXQWpuV1ZnR1FVV3oxMmxKdUd3R29hV2dCS3pSVkJjQ3lwZ1VrT0FvV2dCWC9MMENteE40MHU2eHdjSUoxY096V1lEZmZwM2F4c1FPeXZka1hpSDlGS1JGd1BSSFlaVWFYTWdQTGVpVzdRaGJEUmNpeUxYSmFLaGVDdUxiaVZvcXgxRFZSeUgyNnliMGhzdW9PRkVQc296K0JWRTBNUmxaTmpHWmNSUXlIWWttTXAyaEJUSXpka3pDVGMvcExxT25Ccms3L3laZEFPcS9xNU5QQkgxZjd4N2ZHUDRDM0FBTUFRcmh6WDl6aGNHc0FBQUFBU1VWT1JLNUNZSUk9KSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdDtcbiAgdGV4dC1pbmRlbnQ6IC0xMDAwMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvcGFjaXR5OiAwLjQ7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjRzIGVhc2U7IH1cblxuaW5wdXRbdHlwZT1cInN1Ym1pdFwiXTpob3ZlciB7XG4gIG9wYWNpdHk6IDAuODsgfVxuXG4uc2VhcmNoLWljb24gaW1nIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBtYXJnaW4tdG9wOiA3cHg7IH1cblxuLnNlYXJjaC1pY29uIGEge1xuICBwYWRkaW5nOiAwOyB9XG5cbmh0bWwsXG5ib2R5IHtcbiAgYmFja2dyb3VuZDogI0ZGRjtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250OiAxMDAlIFwiTm90byBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTsgfVxuXG5oMSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM2VtO1xuICBvdmVyZmxvdzogaGlkZGVuOyB9XG4gIGgxOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDA7XG4gICAgaGVpZ2h0OiAycHg7XG4gICAgd2lkdGg6IDRlbTtcbiAgICBhbmltYXRpb246IHNsaWRlLWluIDFzIGVhc2UtaW4gYm90aCAwLjVzOyB9XG4gIGgxLm5vLXVuZGVyc2NvcmU6YmVmb3JlIHtcbiAgICBkaXNwbGF5OiBub25lOyB9XG5cbi5jaGlsZC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cblxuLndyYXBwZXIge1xuICBtYXgtd2lkdGg6IDExNjBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7IH1cblxuLmNvbnRlbnQtd3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlOyB9XG5cbi5jb250ZW50IHtcbiAgY2xlYXI6IGJvdGg7XG4gIG92ZXJmbG93OiBhdXRvOyB9XG4gIC5jb250ZW50IGgxIHtcbiAgICBtYXJnaW4tbGVmdDogNXB4OyB9XG5cbi5ncmlkLWxpc3QtY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDsgfVxuXG4uc3dpcGVyLWNvbnRhaW5lciB7XG4gIHotaW5kZXg6IDA7IH1cblxuLyoqXG4gKiBBbmltYXRpb25zXG4gKi9cbkBrZXlmcmFtZXMgc2xpZGUtaW4ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTgwJSwgMCwgMCk7IH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTsgfSB9XG5cbkBrZXlmcmFtZXMgc2xpZGUtdXAge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApOyB9XG4gIDkwJSB7XG4gICAgb3BhY2l0eTogMTsgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApOyB9IH1cblxuQGtleWZyYW1lcyBmYWRlLWluIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7IH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTsgfSB9XG5cbi5ncmlnLWltZy1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiAwOyB9XG5cbi5ncmlnLWltZy1jb250YWluZXIgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjY1cHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDsgfVxuXG4vKkhvdmVyKi9cbi5ob3ZlcmVmZmVjdCB7XG4gIC8qZmxvYXQ6IGxlZnQ7Ki9cbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogZGVmYXVsdDsgfVxuXG4uaG92ZXJlZmZlY3QgLm92ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiA4MCU7XG4gIGxlZnQ6IDEwJTtcbiAgdG9wOiAxMCU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRkZGO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI0ZGRjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMzVzLCAtd2Via2l0LXRyYW5zZm9ybSAwLjM1cztcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjM1cywgdHJhbnNmb3JtIDAuMzVzO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCwgMSk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAsIDEpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDAsIDEpOyB9XG5cbi5ob3ZlcmVmZmVjdDpob3ZlciAub3ZlcmxheSB7XG4gIG9wYWNpdHk6IDE7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0xMDApO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpOyB9XG5cbi5ob3ZlcmVmZmVjdCBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjM1cztcbiAgdHJhbnNpdGlvbjogYWxsIDAuMzVzOyB9XG5cbi5ob3ZlcmVmZmVjdDpob3ZlciBpbWcge1xuICBmaWx0ZXI6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PGZpbHRlciBpZD1cImZpbHRlclwiPjxmZUNvbXBvbmVudFRyYW5zZmVyIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz1cInNSR0JcIj48ZmVGdW5jUiB0eXBlPVwibGluZWFyXCIgc2xvcGU9XCIwLjZcIiAvPjxmZUZ1bmNHIHR5cGU9XCJsaW5lYXJcIiBzbG9wZT1cIjAuNlwiIC8+PGZlRnVuY0IgdHlwZT1cImxpbmVhclwiIHNsb3BlPVwiMC42XCIgLz48L2ZlQ29tcG9uZW50VHJhbnNmZXI+PC9maWx0ZXI+PC9zdmc+I2ZpbHRlcicpO1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC42KTtcbiAgLXdlYmtpdC1maWx0ZXI6IGJyaWdodG5lc3MoMC42KTsgfVxuXG4uaG92ZXJlZmZlY3QgaDIge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNGRkY7XG4gIHBhZGRpbmc6IDFlbSAwO1xuICBvcGFjaXR5OiAwO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjM1cywgLXdlYmtpdC10cmFuc2Zvcm0gMC4zNXM7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zNXMsIHRyYW5zZm9ybSAwLjM1cztcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7IH1cblxuLmhvdmVyZWZmZWN0IC5vdmVybGF5XG4uaG92ZXJlZmZlY3QgYSwgLmhvdmVyZWZmZWN0IHAge1xuICBjb2xvcjogI0ZGRjtcbiAgLypwYWRkaW5nOiAxZW0gMDsqL1xuICAvKm9wYWNpdHk6IDA7Ki9cbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC4zNXMsIC13ZWJraXQtdHJhbnNmb3JtIDAuMzVzO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMzVzLCB0cmFuc2Zvcm0gMC4zNXM7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMDAlLCAwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMDAlLCAwKTsgfVxuXG4uaG92ZXJlZmZlY3Q6aG92ZXIgYSwgLmhvdmVyZWZmZWN0OmhvdmVyIHAsIC5ob3ZlcmVmZmVjdDpob3ZlciBoMiB7XG4gIG9wYWNpdHk6IDE7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0xMDApO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7IH1cblxuLnB1cmUtZyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuYDsiXX0= */\n/*@ sourceURL=res/styles/main.scss */";
_defaultExport.__scopedHash = "3914664824";
var _default = _defaultExport;
exports.default = _default;

/***/ }),

/***/ "./res/styles/navigation.scss":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defaultExport = new String(".navigation{list-style:none;margin:0;background:#6a8ba9;display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row wrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}.navigation li:last-child{margin-left:auto;}.navigation .prev-last-li{position:absolute;right:0;margin-right:100px;}.navigation a{-webkit-text-decoration:none;text-decoration:none;display:block;padding:1em;color:#FFF;}.navigation a:hover{background:#a98173;}#menu{position:absolute;right:0;color:#FFF;text-align:center;border-radius:4px;background:#b38f83;box-shadow:0 1px 8px rgba(0,0,0,0.05);-webkit-transition:opacity .4s;transition:opacity .4s;z-index:1;}#menu ul{list-style:none;width:150px;padding:0;}#menu:after{position:absolute;top:-7px;right:30px;content:\"\";display:block;border-left:6px solid transparent;border-right:6px solid transparent;border-bottom:8px solid white;}.login-menu-container{margin-right:15px;cursor:pointer;}.login-menu-container img{border-radius:50%;border-style:solid;width:45px;height:45px;object-fit:cover;border-color:#a98173;border-width:2px;}.login-menu-container a{padding:0;}.hamburger{background-color:transparent;border:0px;outline:0px;width:50px;height:50px;height:auto;position:fixed;top:15px;right:15px;cursor:pointer;z-index:9999;}.hamburger .burger{-webkit-transition:all 0.3s;transition:all 0.3s;border-radius:5px;height:5px;width:100%;display:inline-block;background-color:#4e4d4d;}.focus .burger{-webkit-transition:all 0.3s;transition:all 0.3s;}.focus .burger:first-of-type{background-color:#C62828;-webkit-transition-delay:0.4s;transition-delay:0.4s;-webkit-transform:translate3d(0px,0px,0px) rotateZ(45deg);-ms-transform:translate3d(0px,0px,0px) rotateZ(45deg);transform:translate3d(0px,0px,0px) rotateZ(45deg);width:40px;-webkit-transform-origin:left top;-ms-transform-origin:left top;transform-origin:left top;}.focus .burger:nth-of-type(2){opacity:0;}.focus .burger:last-of-type{background-color:#C62828;-webkit-transition-delay:0.4s;transition-delay:0.4s;-webkit-transform:translate3d(0px,0px,0px) rotateZ(-45deg);-ms-transform:translate3d(0px,0px,0px) rotateZ(-45deg);transform:translate3d(0px,0px,0px) rotateZ(-45deg);width:40px;-webkit-transform-origin:left bottom;-ms-transform-origin:left bottom;transform-origin:left bottom;}.b-a-expanded{-webkit-transition:all .25s;transition:all .25s;top:-0px;}.menu-expanded{position:fixed;-webkit-transition:all .25s;transition:all .25s;text-align:center;height:100%;width:100%;border-radius:0;top:0;left:0;z-index:1;cursor:pointer;background-color:rgba(0,0,0,0.85);}.menu-expanded ul{padding:0;list-style-type:none;-webkit-transition:all 0s;transition:all 0s;position:relative;left:0;z-index:2;}.menu-expanded a{-webkit-transition:all .15s;transition:all .15s;-webkit-text-decoration:none;text-decoration:none;font-size:2em;padding:5px;color:#FFF;display:block;}.menu-expanded a:hover{background-color:rgba(255,255,255,0.8);-webkit-transition:all .15s;transition:all .15s;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;color:#333;border:1px solid rgba(255,255,255,0.15);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcy9zdHlsZXMvbmF2aWdhdGlvbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVrQixBQUVtQixBQVlDLEFBR0MsQUFLRyxBQU1GLEFBSUQsQUFXRixBQUtFLEFBVUEsQUFJQSxBQVNSLEFBR21CLEFBYVQsQUFRQSxBQUdLLEFBT2YsQUFHZSxBQU9MLEFBSUwsQUFhTCxBQVFVLEFBUXNCLFVBN0UvQixBQWtDQSxBQTRCVSxLQWJELENBckhYLEFBeUNHLENBOUJNLENBSVYsQUFlQSxBQWdCQyxBQVVNLEFBSUksQ0FuQ0MsTUF4QkQsQUErRkcsQUFVQSxDQTFGSCxBQWVSLENBZ0JBLENBTEQsQ0E4QkMsRUEyRE8sRUEzRUYsSUF4QkUsQUE2QlAsQ0FuQkEsQUFNQSxDQWtHUyxDQXpFUixJQXZFUSxDQWNBLEdBOENSLEFBdUJNLEFBT0csQUFxQlosQUF5QlksQ0F6RlAsQ0E3QkEsRUFzREgsR0F6Q08sRUFnRlIsR0FsRE8sR0FiaUIsQUF5QnRCLEFBMkNNLENBbkhELEFBa0JMLEVBaUVELE9BcERRLEVBMENQLEFBd0RNLENBOUdQLENBMENVLEFBdUJWLEFBVXlDLEFBVUMsSUF2R2pDLEFBbUhSLE1BakdBLEFBdURHLEFBc0VJLENBM0RFLElBckRvQixDQXFGOUIsQUFhSixJQWxGNEIsQ0FjbEIsQUEwRUgsRUFMSixDQWpJVyxDQXlFWixFQTJDTyxLQWhDUyxDQTZDZCxDQXZEQSxDQTZEQyxHQTNFTSxLQXlEWixFQXBITyxBQTBFRSxFQTZESixFQWxCSixJQXZGZ0IsRUFnQk8sQ0F3RXBCLENBbkNnQixDQXFEWixFQTdERCxNQTRDRSxNQWlCQSxDQTdERCxRQTZDdUIsSUExRU4sa0JBZ0dwQixJQS9HRCxPQWdIaUMsQ0F2QkwsRUF6RjNCLEVBOUJnQiwyQkFDQSxRQTZJaUIsUUFuRGpDLEdBVUEsUUFUZSxHQVVHLDJFQXJHRCxZQTJGRCxZQVVHIiwiZmlsZSI6InJlcy9zdHlsZXMvbmF2aWdhdGlvbi5zY3NzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hbmRyZWZlZG9yZW5rby9Ecm9wYm94L1N0dWRpdW0vbWVyc2kvYmFjaGVsb3IvZnJvbnRlbmQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY3NzYC5uYXZpZ2F0aW9uIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBiYWNrZ3JvdW5kOiAjNmE4YmE5O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1vei1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtZmxleC1mbG93OiByb3cgd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0OyB9XG4gIC5uYXZpZ2F0aW9uIGxpOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvOyB9XG4gIC5uYXZpZ2F0aW9uIC5wcmV2LWxhc3QtbGkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwMHB4OyB9XG4gIC5uYXZpZ2F0aW9uIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiAxZW07XG4gICAgY29sb3I6ICNGRkY7IH1cbiAgICAubmF2aWdhdGlvbiBhOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICNhOTgxNzM7IH1cblxuLyogbWVudSBhcHBlYXJhbmNlKi9cbiNtZW51IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgY29sb3I6ICNGRkY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kOiAjYjM4ZjgzO1xuICBib3gtc2hhZG93OiAwIDFweCA4cHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuNHM7XG4gIHotaW5kZXg6IDE7IH1cbiAgI21lbnUgdWwge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIHBhZGRpbmc6IDA7IH1cblxuI21lbnU6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTdweDtcbiAgcmlnaHQ6IDMwcHg7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItbGVmdDogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogOHB4IHNvbGlkIHdoaXRlOyB9XG5cbi5sb2dpbi1tZW51LWNvbnRhaW5lciB7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgY3Vyc29yOiBwb2ludGVyOyB9XG4gIC5sb2dpbi1tZW51LWNvbnRhaW5lciBpbWcge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIHdpZHRoOiA0NXB4O1xuICAgIGhlaWdodDogNDVweDtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBib3JkZXItY29sb3I6ICNhOTgxNzM7XG4gICAgYm9yZGVyLXdpZHRoOiAycHg7IH1cbiAgLmxvZ2luLW1lbnUtY29udGFpbmVyIGEge1xuICAgIHBhZGRpbmc6IDA7IH1cblxuLmhhbWJ1cmdlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDBweDtcbiAgb3V0bGluZTogMHB4O1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAxNXB4O1xuICByaWdodDogMTVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB6LWluZGV4OiA5OTk5OyB9XG4gIC5oYW1idXJnZXIgLmJ1cmdlciB7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGhlaWdodDogNXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGU0ZDRkOyB9XG5cbi5mb2N1cyAuYnVyZ2VyIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7IH1cbiAgLmZvY3VzIC5idXJnZXI6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0M2MjgyODtcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjRzO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCkgcm90YXRlWig0NWRlZyk7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3A7IH1cbiAgLmZvY3VzIC5idXJnZXI6bnRoLW9mLXR5cGUoMikge1xuICAgIG9wYWNpdHk6IDA7IH1cbiAgLmZvY3VzIC5idXJnZXI6bGFzdC1vZi10eXBlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzYyODI4O1xuICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuNHM7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KSByb3RhdGVaKC00NWRlZyk7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207IH1cblxuLmItYS1leHBhbmRlZCB7XG4gIHRyYW5zaXRpb246IGFsbCAuMjVzO1xuICB0b3A6IC0wcHg7IH1cblxuLm1lbnUtZXhwYW5kZWQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRyYW5zaXRpb246IGFsbCAuMjVzO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODUpOyB9XG4gIC5tZW51LWV4cGFuZGVkIHVsIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMHM7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogMjsgfVxuICAubWVudS1leHBhbmRlZCBhIHtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjE1cztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGNvbG9yOiAjRkZGO1xuICAgIGRpc3BsYXk6IGJsb2NrOyB9XG4gICAgLm1lbnUtZXhwYW5kZWQgYTpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgLjE1cztcbiAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgICBjb2xvcjogIzMzMztcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7IH1cbmA7Il19 */\n/*@ sourceURL=res/styles/navigation.scss */");

_defaultExport.__hash = "2863596531";
_defaultExport.__scoped = ".navigation.jsx-3692366770{list-style:none;margin:0;background:#6a8ba9;display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row wrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}.navigation.jsx-3692366770 li.jsx-3692366770:last-child{margin-left:auto;}.navigation.jsx-3692366770 .prev-last-li.jsx-3692366770{position:absolute;right:0;margin-right:100px;}.navigation.jsx-3692366770 a.jsx-3692366770{-webkit-text-decoration:none;text-decoration:none;display:block;padding:1em;color:#FFF;}.navigation.jsx-3692366770 a.jsx-3692366770:hover{background:#a98173;}#menu.jsx-3692366770{position:absolute;right:0;color:#FFF;text-align:center;border-radius:4px;background:#b38f83;box-shadow:0 1px 8px rgba(0,0,0,0.05);-webkit-transition:opacity .4s;transition:opacity .4s;z-index:1;}#menu.jsx-3692366770 ul.jsx-3692366770{list-style:none;width:150px;padding:0;}#menu.jsx-3692366770:after{position:absolute;top:-7px;right:30px;content:\"\";display:block;border-left:6px solid transparent;border-right:6px solid transparent;border-bottom:8px solid white;}.login-menu-container.jsx-3692366770{margin-right:15px;cursor:pointer;}.login-menu-container.jsx-3692366770 img.jsx-3692366770{border-radius:50%;border-style:solid;width:45px;height:45px;object-fit:cover;border-color:#a98173;border-width:2px;}.login-menu-container.jsx-3692366770 a.jsx-3692366770{padding:0;}.hamburger.jsx-3692366770{background-color:transparent;border:0px;outline:0px;width:50px;height:50px;height:auto;position:fixed;top:15px;right:15px;cursor:pointer;z-index:9999;}.hamburger.jsx-3692366770 .burger.jsx-3692366770{-webkit-transition:all 0.3s;transition:all 0.3s;border-radius:5px;height:5px;width:100%;display:inline-block;background-color:#4e4d4d;}.focus.jsx-3692366770 .burger.jsx-3692366770{-webkit-transition:all 0.3s;transition:all 0.3s;}.focus.jsx-3692366770 .burger.jsx-3692366770:first-of-type{background-color:#C62828;-webkit-transition-delay:0.4s;transition-delay:0.4s;-webkit-transform:translate3d(0px,0px,0px) rotateZ(45deg);-ms-transform:translate3d(0px,0px,0px) rotateZ(45deg);transform:translate3d(0px,0px,0px) rotateZ(45deg);width:40px;-webkit-transform-origin:left top;-ms-transform-origin:left top;transform-origin:left top;}.focus.jsx-3692366770 .burger.jsx-3692366770:nth-of-type(2){opacity:0;}.focus.jsx-3692366770 .burger.jsx-3692366770:last-of-type{background-color:#C62828;-webkit-transition-delay:0.4s;transition-delay:0.4s;-webkit-transform:translate3d(0px,0px,0px) rotateZ(-45deg);-ms-transform:translate3d(0px,0px,0px) rotateZ(-45deg);transform:translate3d(0px,0px,0px) rotateZ(-45deg);width:40px;-webkit-transform-origin:left bottom;-ms-transform-origin:left bottom;transform-origin:left bottom;}.b-a-expanded.jsx-3692366770{-webkit-transition:all .25s;transition:all .25s;top:-0px;}.menu-expanded.jsx-3692366770{position:fixed;-webkit-transition:all .25s;transition:all .25s;text-align:center;height:100%;width:100%;border-radius:0;top:0;left:0;z-index:1;cursor:pointer;background-color:rgba(0,0,0,0.85);}.menu-expanded.jsx-3692366770 ul.jsx-3692366770{padding:0;list-style-type:none;-webkit-transition:all 0s;transition:all 0s;position:relative;left:0;z-index:2;}.menu-expanded.jsx-3692366770 a.jsx-3692366770{-webkit-transition:all .15s;transition:all .15s;-webkit-text-decoration:none;text-decoration:none;font-size:2em;padding:5px;color:#FFF;display:block;}.menu-expanded.jsx-3692366770 a.jsx-3692366770:hover{background-color:rgba(255,255,255,0.8);-webkit-transition:all .15s;transition:all .15s;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;color:#333;border:1px solid rgba(255,255,255,0.15);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcy9zdHlsZXMvbmF2aWdhdGlvbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVrQixBQUVtQixBQVlDLEFBR0MsQUFLRyxBQU1GLEFBSUQsQUFXRixBQUtFLEFBVUEsQUFJQSxBQVNSLEFBR21CLEFBYVQsQUFRQSxBQUdLLEFBT2YsQUFHZSxBQU9MLEFBSUwsQUFhTCxBQVFVLEFBUXNCLFVBN0UvQixBQWtDQSxBQTRCVSxLQWJELENBckhYLEFBeUNHLENBOUJNLENBSVYsQUFlQSxBQWdCQyxBQVVNLEFBSUksQ0FuQ0MsTUF4QkQsQUErRkcsQUFVQSxDQTFGSCxBQWVSLENBZ0JBLENBTEQsQ0E4QkMsRUEyRE8sRUEzRUYsSUF4QkUsQUE2QlAsQ0FuQkEsQUFNQSxDQWtHUyxDQXpFUixJQXZFUSxDQWNBLEdBOENSLEFBdUJNLEFBT0csQUFxQlosQUF5QlksQ0F6RlAsQ0E3QkEsRUFzREgsR0F6Q08sRUFnRlIsR0FsRE8sR0FiaUIsQUF5QnRCLEFBMkNNLENBbkhELEFBa0JMLEVBaUVELE9BcERRLEVBMENQLEFBd0RNLENBOUdQLENBMENVLEFBdUJWLEFBVXlDLEFBVUMsSUF2R2pDLEFBbUhSLE1BakdBLEFBdURHLEFBc0VJLENBM0RFLElBckRvQixDQXFGOUIsQUFhSixJQWxGNEIsQ0FjbEIsQUEwRUgsRUFMSixDQWpJVyxDQXlFWixFQTJDTyxLQWhDUyxDQTZDZCxDQXZEQSxDQTZEQyxHQTNFTSxLQXlEWixFQXBITyxBQTBFRSxFQTZESixFQWxCSixJQXZGZ0IsRUFnQk8sQ0F3RXBCLENBbkNnQixDQXFEWixFQTdERCxNQTRDRSxNQWlCQSxDQTdERCxRQTZDdUIsSUExRU4sa0JBZ0dwQixJQS9HRCxPQWdIaUMsQ0F2QkwsRUF6RjNCLEVBOUJnQiwyQkFDQSxRQTZJaUIsUUFuRGpDLEdBVUEsUUFUZSxHQVVHLDJFQXJHRCxZQTJGRCxZQVVHIiwiZmlsZSI6InJlcy9zdHlsZXMvbmF2aWdhdGlvbi5zY3NzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hbmRyZWZlZG9yZW5rby9Ecm9wYm94L1N0dWRpdW0vbWVyc2kvYmFjaGVsb3IvZnJvbnRlbmQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY3NzYC5uYXZpZ2F0aW9uIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBiYWNrZ3JvdW5kOiAjNmE4YmE5O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1vei1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtZmxleC1mbG93OiByb3cgd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0OyB9XG4gIC5uYXZpZ2F0aW9uIGxpOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvOyB9XG4gIC5uYXZpZ2F0aW9uIC5wcmV2LWxhc3QtbGkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwMHB4OyB9XG4gIC5uYXZpZ2F0aW9uIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiAxZW07XG4gICAgY29sb3I6ICNGRkY7IH1cbiAgICAubmF2aWdhdGlvbiBhOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICNhOTgxNzM7IH1cblxuLyogbWVudSBhcHBlYXJhbmNlKi9cbiNtZW51IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgY29sb3I6ICNGRkY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kOiAjYjM4ZjgzO1xuICBib3gtc2hhZG93OiAwIDFweCA4cHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuNHM7XG4gIHotaW5kZXg6IDE7IH1cbiAgI21lbnUgdWwge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIHBhZGRpbmc6IDA7IH1cblxuI21lbnU6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTdweDtcbiAgcmlnaHQ6IDMwcHg7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItbGVmdDogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogOHB4IHNvbGlkIHdoaXRlOyB9XG5cbi5sb2dpbi1tZW51LWNvbnRhaW5lciB7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgY3Vyc29yOiBwb2ludGVyOyB9XG4gIC5sb2dpbi1tZW51LWNvbnRhaW5lciBpbWcge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIHdpZHRoOiA0NXB4O1xuICAgIGhlaWdodDogNDVweDtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBib3JkZXItY29sb3I6ICNhOTgxNzM7XG4gICAgYm9yZGVyLXdpZHRoOiAycHg7IH1cbiAgLmxvZ2luLW1lbnUtY29udGFpbmVyIGEge1xuICAgIHBhZGRpbmc6IDA7IH1cblxuLmhhbWJ1cmdlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDBweDtcbiAgb3V0bGluZTogMHB4O1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAxNXB4O1xuICByaWdodDogMTVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB6LWluZGV4OiA5OTk5OyB9XG4gIC5oYW1idXJnZXIgLmJ1cmdlciB7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGhlaWdodDogNXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGU0ZDRkOyB9XG5cbi5mb2N1cyAuYnVyZ2VyIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7IH1cbiAgLmZvY3VzIC5idXJnZXI6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0M2MjgyODtcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjRzO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCkgcm90YXRlWig0NWRlZyk7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3A7IH1cbiAgLmZvY3VzIC5idXJnZXI6bnRoLW9mLXR5cGUoMikge1xuICAgIG9wYWNpdHk6IDA7IH1cbiAgLmZvY3VzIC5idXJnZXI6bGFzdC1vZi10eXBlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzYyODI4O1xuICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuNHM7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KSByb3RhdGVaKC00NWRlZyk7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207IH1cblxuLmItYS1leHBhbmRlZCB7XG4gIHRyYW5zaXRpb246IGFsbCAuMjVzO1xuICB0b3A6IC0wcHg7IH1cblxuLm1lbnUtZXhwYW5kZWQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRyYW5zaXRpb246IGFsbCAuMjVzO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODUpOyB9XG4gIC5tZW51LWV4cGFuZGVkIHVsIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMHM7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogMjsgfVxuICAubWVudS1leHBhbmRlZCBhIHtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjE1cztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGNvbG9yOiAjRkZGO1xuICAgIGRpc3BsYXk6IGJsb2NrOyB9XG4gICAgLm1lbnUtZXhwYW5kZWQgYTpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgLjE1cztcbiAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgICBjb2xvcjogIzMzMztcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7IH1cbmA7Il19 */\n/*@ sourceURL=res/styles/navigation.scss */";
_defaultExport.__scopedHash = "3692366770";
var _default = _defaultExport;
exports.default = _default;

/***/ }),

/***/ "./res/styles/search-post.scss":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defaultExport = new String(".search-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.nothing-found-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}#wrap{margin:50px 100px;display:inline-block;position:relative;height:60px;float:right;padding:0;}input[type=\"text\"]{height:60px;width:100%;font-size:55px;display:inline-block;font-weight:100;border:none;outline:none;color:#555;padding:3px;padding-right:60px;position:absolute;top:0;right:0;background:none;-webkit-transition:width 0.4s cubic-bezier(0,0.795,0,1);transition:width 0.4s cubic-bezier(0,0.795,0,1);cursor:text;}input[type=\"text\"]:focus:hover{border-bottom:1px solid #BBB;}input[type=\"submit\"]{height:67px;width:63px;display:inline-block;float:right;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADNQTFRFU1NT9fX1lJSUXl5e1dXVfn5+c3Nz6urqv7+/tLS0iYmJqampn5+fysrK39/faWlp////Vi4ZywAAABF0Uk5T/////////////////////wAlrZliAAABLklEQVR42rSWWRbDIAhFHeOUtN3/ags1zaA4cHrKZ8JFRHwoXkwTvwGP1Qo0bYObAPwiLmbNAHBWFBZlD9j0JxflDViIObNHG/Do8PRHTJk0TezAhv7qloK0JJEBh+F8+U/hopIELOWfiZUCDOZD1RADOQKA75oq4cvVkcT+OdHnqqpQCITWAjnWVgGQUWz12lJuGwGoaWgBKzRVBcCypgUkOAoWgBX/L0CmxN40u6xwcIJ1cOzWYDffp3axsQOyvdkXiH9FKRFwPRHYZUaXMgPLeiW7QhbDRciyLXJaKheCuLbiVoqx1DVRyH26yb0hsuoOFEPsoz+BVE0MRlZNjGZcRQyHYkmMp2hBTIzdkzCTc/pLqOnBrk7/yZdAOq/q5NPBH1f7x7fGP4C3AAMAQrhzX9zhcGsAAAAASUVORK5CYII=) center center no-repeat;text-indent:-10000px;border:none;position:absolute;top:0;right:0;cursor:pointer;opacity:0.4;-webkit-transition:opacity .4s ease;transition:opacity .4s ease;}input[type=\"submit\"]:hover{opacity:0.8;}.search-icon img{height:40px;margin-top:7px;}.search-icon a{padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcy9zdHlsZXMvc2VhcmNoLXBvc3Quc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFa0IsQUFFZ0IsQUFJQSxBQUtLLEFBUU4sQUFrQmlCLEFBR2pCLEFBZUEsQUFHQSxBQUlGLFVBQUMsRUExQ0EsQUFxQkEsQUFjRSxBQUlFLE1BL0NNLEtBU04sQUFxQk0sSUFpQkwsRUF0QmMsU0FmVCxDQVRILEtBOEJOLFlBQytyQixDQTlCL3JCLEVBU0ksVUFSSixLQVpVLEFBSUgsQ0FpQlAsTUFSRixNQVNHLElBVEYsU0FVQSxXQUNDLFlBQ08sbUJBQ0QsVUExQkssUUEyQmpCLE1BQ0UsQ0F2QmUsT0F3QlAsZ0JBQ21DLDRFQXpCM0IsNEJBMEJaLFlBQUMsaWRBV1EscUJBQ1QsWUFDTSxrQkFDWixNQUNFLFFBQ08sZUFDSCxZQUNnQixnRUFBQyIsImZpbGUiOiJyZXMvc3R5bGVzL3NlYXJjaC1wb3N0LnNjc3MiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FuZHJlZmVkb3JlbmtvL0Ryb3Bib3gvU3R1ZGl1bS9tZXJzaS9iYWNoZWxvci9mcm9udGVuZCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3MgZnJvbSAnc3R5bGVkLWpzeC9jc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjc3NgLnNlYXJjaC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XG5cbi5ub3RoaW5nLWZvdW5kLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XG5cbiN3cmFwIHtcbiAgbWFyZ2luOiA1MHB4IDEwMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiA2MHB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIHBhZGRpbmc6IDA7IH1cblxuaW5wdXRbdHlwZT1cInRleHRcIl0ge1xuICBoZWlnaHQ6IDYwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDU1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBjb2xvcjogIzU1NTtcbiAgcGFkZGluZzogM3B4O1xuICBwYWRkaW5nLXJpZ2h0OiA2MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIHRyYW5zaXRpb246IHdpZHRoIDAuNHMgY3ViaWMtYmV6aWVyKDAsIDAuNzk1LCAwLCAxKTtcbiAgY3Vyc29yOiB0ZXh0OyB9XG5cbmlucHV0W3R5cGU9XCJ0ZXh0XCJdOmZvY3VzOmhvdmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNCQkI7IH1cblxuaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XG4gIGhlaWdodDogNjdweDtcbiAgd2lkdGg6IDYzcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZmxvYXQ6IHJpZ2h0O1xuICBiYWNrZ3JvdW5kOiB1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFEQUFBQUF3Q0FNQUFBQmczQW0xQUFBQUdYUkZXSFJUYjJaMGQyRnlaUUJCWkc5aVpTQkpiV0ZuWlZKbFlXUjVjY2xsUEFBQUFETlFURlJGVTFOVDlmWDFsSlNVWGw1ZTFkWFZmbjUrYzNOejZ1cnF2NysvdExTMGlZbUpxYW1wbjUrZnlzckszOS9mYVdscC8vLy9WaTRaeXdBQUFCRjBVazVULy8vLy8vLy8vLy8vLy8vLy8vLy8vd0FsclpsaUFBQUJMa2xFUVZSNDJyU1dXUmJESUFoRkhlT1V0TjMvYWdzMXphQTRjSHJLWjhKRlJId29Ya3dUdndHUDFRbzBiWU9iQVB3aUxtYk5BSEJXRkJabEQ5ajBKeGZsRFZpSU9iTkhHL0RvOFBSSFRKazBUZXpBaHY3cWxvSzBKSkVCaCtGOCtVL2hvcElFTE9XZmlaVUNET1pEMVJBRE9RS0E3NW9xNGN2VmtjVCtPZEhucXFwUUNJVFdBam5XVmdHUVVXejEybEp1R3dHb2FXZ0JLelJWQmNDeXBnVWtPQW9XZ0JYL0wwQ214TjQwdTZ4d2NJSjFjT3pXWURmZnAzYXhzUU95dmRrWGlIOUZLUkZ3UFJIWVpVYVhNZ1BMZWlXN1FoYkRSY2l5TFhKYUtoZUN1TGJpVm9xeDFEVlJ5SDI2eWIwaHN1b09GRVBzb3orQlZFME1SbFpOakdaY1JReUhZa21NcDJoQlRJemRrekNUYy9wTHFPbkJyazcveVpkQU9xL3E1TlBCSDFmN3g3ZkdQNEMzQUFNQVFyaHpYOXpoY0dzQUFBQUFTVVZPUks1Q1lJST0pIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0O1xuICB0ZXh0LWluZGVudDogLTEwMDAwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG9wYWNpdHk6IDAuNDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuNHMgZWFzZTsgfVxuXG5pbnB1dFt0eXBlPVwic3VibWl0XCJdOmhvdmVyIHtcbiAgb3BhY2l0eTogMC44OyB9XG5cbi5zZWFyY2gtaWNvbiBpbWcge1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbi10b3A6IDdweDsgfVxuXG4uc2VhcmNoLWljb24gYSB7XG4gIHBhZGRpbmc6IDA7IH1cbmA7Il19 */\n/*@ sourceURL=res/styles/search-post.scss */");

_defaultExport.__hash = "1070024113";
_defaultExport.__scoped = ".search-container.jsx-4671984{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.nothing-found-container.jsx-4671984{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}#wrap.jsx-4671984{margin:50px 100px;display:inline-block;position:relative;height:60px;float:right;padding:0;}input[type=\"text\"].jsx-4671984{height:60px;width:100%;font-size:55px;display:inline-block;font-weight:100;border:none;outline:none;color:#555;padding:3px;padding-right:60px;position:absolute;top:0;right:0;background:none;-webkit-transition:width 0.4s cubic-bezier(0,0.795,0,1);transition:width 0.4s cubic-bezier(0,0.795,0,1);cursor:text;}input[type=\"text\"].jsx-4671984:focus.jsx-4671984:hover{border-bottom:1px solid #BBB;}input[type=\"submit\"].jsx-4671984{height:67px;width:63px;display:inline-block;float:right;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADNQTFRFU1NT9fX1lJSUXl5e1dXVfn5+c3Nz6urqv7+/tLS0iYmJqampn5+fysrK39/faWlp////Vi4ZywAAABF0Uk5T/////////////////////wAlrZliAAABLklEQVR42rSWWRbDIAhFHeOUtN3/ags1zaA4cHrKZ8JFRHwoXkwTvwGP1Qo0bYObAPwiLmbNAHBWFBZlD9j0JxflDViIObNHG/Do8PRHTJk0TezAhv7qloK0JJEBh+F8+U/hopIELOWfiZUCDOZD1RADOQKA75oq4cvVkcT+OdHnqqpQCITWAjnWVgGQUWz12lJuGwGoaWgBKzRVBcCypgUkOAoWgBX/L0CmxN40u6xwcIJ1cOzWYDffp3axsQOyvdkXiH9FKRFwPRHYZUaXMgPLeiW7QhbDRciyLXJaKheCuLbiVoqx1DVRyH26yb0hsuoOFEPsoz+BVE0MRlZNjGZcRQyHYkmMp2hBTIzdkzCTc/pLqOnBrk7/yZdAOq/q5NPBH1f7x7fGP4C3AAMAQrhzX9zhcGsAAAAASUVORK5CYII=) center center no-repeat;text-indent:-10000px;border:none;position:absolute;top:0;right:0;cursor:pointer;opacity:0.4;-webkit-transition:opacity .4s ease;transition:opacity .4s ease;}input[type=\"submit\"].jsx-4671984:hover{opacity:0.8;}.search-icon.jsx-4671984 img.jsx-4671984{height:40px;margin-top:7px;}.search-icon.jsx-4671984 a.jsx-4671984{padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcy9zdHlsZXMvc2VhcmNoLXBvc3Quc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFa0IsQUFFZ0IsQUFJQSxBQUtLLEFBUU4sQUFrQmlCLEFBR2pCLEFBZUEsQUFHQSxBQUlGLFVBQUMsRUExQ0EsQUFxQkEsQUFjRSxBQUlFLE1BL0NNLEtBU04sQUFxQk0sSUFpQkwsRUF0QmMsU0FmVCxDQVRILEtBOEJOLFlBQytyQixDQTlCL3JCLEVBU0ksVUFSSixLQVpVLEFBSUgsQ0FpQlAsTUFSRixNQVNHLElBVEYsU0FVQSxXQUNDLFlBQ08sbUJBQ0QsVUExQkssUUEyQmpCLE1BQ0UsQ0F2QmUsT0F3QlAsZ0JBQ21DLDRFQXpCM0IsNEJBMEJaLFlBQUMsaWRBV1EscUJBQ1QsWUFDTSxrQkFDWixNQUNFLFFBQ08sZUFDSCxZQUNnQixnRUFBQyIsImZpbGUiOiJyZXMvc3R5bGVzL3NlYXJjaC1wb3N0LnNjc3MiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FuZHJlZmVkb3JlbmtvL0Ryb3Bib3gvU3R1ZGl1bS9tZXJzaS9iYWNoZWxvci9mcm9udGVuZCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3MgZnJvbSAnc3R5bGVkLWpzeC9jc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjc3NgLnNlYXJjaC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XG5cbi5ub3RoaW5nLWZvdW5kLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XG5cbiN3cmFwIHtcbiAgbWFyZ2luOiA1MHB4IDEwMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiA2MHB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIHBhZGRpbmc6IDA7IH1cblxuaW5wdXRbdHlwZT1cInRleHRcIl0ge1xuICBoZWlnaHQ6IDYwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDU1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBjb2xvcjogIzU1NTtcbiAgcGFkZGluZzogM3B4O1xuICBwYWRkaW5nLXJpZ2h0OiA2MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIHRyYW5zaXRpb246IHdpZHRoIDAuNHMgY3ViaWMtYmV6aWVyKDAsIDAuNzk1LCAwLCAxKTtcbiAgY3Vyc29yOiB0ZXh0OyB9XG5cbmlucHV0W3R5cGU9XCJ0ZXh0XCJdOmZvY3VzOmhvdmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNCQkI7IH1cblxuaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XG4gIGhlaWdodDogNjdweDtcbiAgd2lkdGg6IDYzcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZmxvYXQ6IHJpZ2h0O1xuICBiYWNrZ3JvdW5kOiB1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFEQUFBQUF3Q0FNQUFBQmczQW0xQUFBQUdYUkZXSFJUYjJaMGQyRnlaUUJCWkc5aVpTQkpiV0ZuWlZKbFlXUjVjY2xsUEFBQUFETlFURlJGVTFOVDlmWDFsSlNVWGw1ZTFkWFZmbjUrYzNOejZ1cnF2NysvdExTMGlZbUpxYW1wbjUrZnlzckszOS9mYVdscC8vLy9WaTRaeXdBQUFCRjBVazVULy8vLy8vLy8vLy8vLy8vLy8vLy8vd0FsclpsaUFBQUJMa2xFUVZSNDJyU1dXUmJESUFoRkhlT1V0TjMvYWdzMXphQTRjSHJLWjhKRlJId29Ya3dUdndHUDFRbzBiWU9iQVB3aUxtYk5BSEJXRkJabEQ5ajBKeGZsRFZpSU9iTkhHL0RvOFBSSFRKazBUZXpBaHY3cWxvSzBKSkVCaCtGOCtVL2hvcElFTE9XZmlaVUNET1pEMVJBRE9RS0E3NW9xNGN2VmtjVCtPZEhucXFwUUNJVFdBam5XVmdHUVVXejEybEp1R3dHb2FXZ0JLelJWQmNDeXBnVWtPQW9XZ0JYL0wwQ214TjQwdTZ4d2NJSjFjT3pXWURmZnAzYXhzUU95dmRrWGlIOUZLUkZ3UFJIWVpVYVhNZ1BMZWlXN1FoYkRSY2l5TFhKYUtoZUN1TGJpVm9xeDFEVlJ5SDI2eWIwaHN1b09GRVBzb3orQlZFME1SbFpOakdaY1JReUhZa21NcDJoQlRJemRrekNUYy9wTHFPbkJyazcveVpkQU9xL3E1TlBCSDFmN3g3ZkdQNEMzQUFNQVFyaHpYOXpoY0dzQUFBQUFTVVZPUks1Q1lJST0pIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0O1xuICB0ZXh0LWluZGVudDogLTEwMDAwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG9wYWNpdHk6IDAuNDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuNHMgZWFzZTsgfVxuXG5pbnB1dFt0eXBlPVwic3VibWl0XCJdOmhvdmVyIHtcbiAgb3BhY2l0eTogMC44OyB9XG5cbi5zZWFyY2gtaWNvbiBpbWcge1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbi10b3A6IDdweDsgfVxuXG4uc2VhcmNoLWljb24gYSB7XG4gIHBhZGRpbmc6IDA7IH1cbmA7Il19 */\n/*@ sourceURL=res/styles/search-post.scss */";
_defaultExport.__scopedHash = "4671984";
var _default = _defaultExport;
exports.default = _default;

/***/ }),

/***/ "./res/styles/sidebar.scss":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defaultExport = new String(".sidebar{margin-left:10px;position:relative;min-width:300px;margin-top:20px;float:right;overflow:hidden;}.sidebar-header{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.info{margin:25px;}.info ul li{position:relative;left:-20px;list-style:none;overflow:hidden;height:30px;border:solid gray;border-width:0px 0px 1px 0px;font-size:14px;line-height:30px;cursor:pointer;}.info ul li a{color:#000;text-transform:uppercase;font-weight:600;font-size:0.9em;-webkit-letter-spacing:0.3em;-moz-letter-spacing:0.3em;-ms-letter-spacing:0.3em;letter-spacing:0.3em;-webkit-text-decoration:none;text-decoration:none;}.sidebar-header-text{position:relative;}.avatar{border-radius:50%;width:120px;height:120px;object-fit:cover;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcy9zdHlsZXMvc2lkZWJhci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVrQixBQUVvQixBQVFKLEFBS0QsQUFHTSxBQVlQLEFBUU8sQUFHQSxXQVZPLENBaEJaLEtBWkssQ0FnQlAsQUFtQlEsQUFJUCxXQXRCSSxDQXVCSCxLQXZDRyxDQTRCQSxPQVlDLEVBdkJELE1BaEJBLENBNEJBLFFBV0UsQ0F0Qk4sTUFoQkEsQ0E0QlMsS0FYSCxDQVpJLEtBSk4sWUFpQmEsSUFqQloseUJBa0JGLGVBQ0UsaUJBZEUsQUFlSixlQUFDLEVBUUssa0RBQUMsMEJBdkJGIiwiZmlsZSI6InJlcy9zdHlsZXMvc2lkZWJhci5zY3NzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hbmRyZWZlZG9yZW5rby9Ecm9wYm94L1N0dWRpdW0vbWVyc2kvYmFjaGVsb3IvZnJvbnRlbmQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY3NzYC5zaWRlYmFyIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLXdpZHRoOiAzMDBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBvdmVyZmxvdzogaGlkZGVuOyB9XG5cbi5zaWRlYmFyLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cblxuLmluZm8ge1xuICBtYXJnaW46IDI1cHg7IH1cbiAgLmluZm8gdWwgbGkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiAtMjBweDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGJvcmRlcjogc29saWQgZ3JheTtcbiAgICBib3JkZXItd2lkdGg6IDBweCAwcHggMXB4IDBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XG4gICAgLmluZm8gdWwgbGkgYSB7XG4gICAgICBjb2xvcjogIzAwMDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgZm9udC1zaXplOiAwLjllbTtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjNlbTtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxuXG4uc2lkZWJhci1oZWFkZXItdGV4dCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuXG4uYXZhdGFyIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogMTIwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyOyB9XG5gOyJdfQ== */\n/*@ sourceURL=res/styles/sidebar.scss */");

_defaultExport.__hash = "2334204049";
_defaultExport.__scoped = ".sidebar.jsx-1212963984{margin-left:10px;position:relative;min-width:300px;margin-top:20px;float:right;overflow:hidden;}.sidebar-header.jsx-1212963984{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.info.jsx-1212963984{margin:25px;}.info.jsx-1212963984 ul.jsx-1212963984 li.jsx-1212963984{position:relative;left:-20px;list-style:none;overflow:hidden;height:30px;border:solid gray;border-width:0px 0px 1px 0px;font-size:14px;line-height:30px;cursor:pointer;}.info.jsx-1212963984 ul.jsx-1212963984 li.jsx-1212963984 a.jsx-1212963984{color:#000;text-transform:uppercase;font-weight:600;font-size:0.9em;-webkit-letter-spacing:0.3em;-moz-letter-spacing:0.3em;-ms-letter-spacing:0.3em;letter-spacing:0.3em;-webkit-text-decoration:none;text-decoration:none;}.sidebar-header-text.jsx-1212963984{position:relative;}.avatar.jsx-1212963984{border-radius:50%;width:120px;height:120px;object-fit:cover;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcy9zdHlsZXMvc2lkZWJhci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVrQixBQUVvQixBQVFKLEFBS0QsQUFHTSxBQVlQLEFBUU8sQUFHQSxXQVZPLENBaEJaLEtBWkssQ0FnQlAsQUFtQlEsQUFJUCxXQXRCSSxDQXVCSCxLQXZDRyxDQTRCQSxPQVlDLEVBdkJELE1BaEJBLENBNEJBLFFBV0UsQ0F0Qk4sTUFoQkEsQ0E0QlMsS0FYSCxDQVpJLEtBSk4sWUFpQmEsSUFqQloseUJBa0JGLGVBQ0UsaUJBZEUsQUFlSixlQUFDLEVBUUssa0RBQUMsMEJBdkJGIiwiZmlsZSI6InJlcy9zdHlsZXMvc2lkZWJhci5zY3NzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hbmRyZWZlZG9yZW5rby9Ecm9wYm94L1N0dWRpdW0vbWVyc2kvYmFjaGVsb3IvZnJvbnRlbmQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY3NzYC5zaWRlYmFyIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLXdpZHRoOiAzMDBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBvdmVyZmxvdzogaGlkZGVuOyB9XG5cbi5zaWRlYmFyLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cblxuLmluZm8ge1xuICBtYXJnaW46IDI1cHg7IH1cbiAgLmluZm8gdWwgbGkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiAtMjBweDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGJvcmRlcjogc29saWQgZ3JheTtcbiAgICBib3JkZXItd2lkdGg6IDBweCAwcHggMXB4IDBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XG4gICAgLmluZm8gdWwgbGkgYSB7XG4gICAgICBjb2xvcjogIzAwMDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgZm9udC1zaXplOiAwLjllbTtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjNlbTtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxuXG4uc2lkZWJhci1oZWFkZXItdGV4dCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuXG4uYXZhdGFyIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogMTIwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyOyB9XG5gOyJdfQ== */\n/*@ sourceURL=res/styles/sidebar.scss */";
_defaultExport.__scopedHash = "1212963984";
var _default = _defaultExport;
exports.default = _default;

/***/ }),

/***/ "./res/styles/user/login.scss":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defaultExport = new String(".login-form{margin-top:30px;margin-bottom:30px;}.login-profile-img{display:block;height:7em;width:7em;object-fit:cover;margin-right:auto;margin-left:auto;border:.5em solid #f2f2f2;border-radius:100%;box-shadow:6px 9px 14px 0px rgba(0,0,0,0.1);}.profile-container{margin-top:-3.5em;padding:5em 1.5em 1.5em 1.5em;background:#fbfbfb;max-width:350px;text-align:center;margin-right:auto;margin-left:auto;}.button{display:block;min-width:240px;height:55px;line-height:55px;margin:20px;color:#FFF;position:relative;top:0;bottom:0;left:0;right:0;cursor:pointer;overflow:hidden;border-radius:5px;box-shadow:0 0 20px 0 rgba(0,0,0,0.3);-webkit-transition:all 0.25s cubic-bezier(0.31,-0.105,0.43,1.4);transition:all 0.25s cubic-bezier(0.31,-0.105,0.43,1.4);}.button.vk{background-color:#466991;}.button.fb{background-color:#3b5998;}.button.yf{background-color:#775e55;-webkit-letter-spacing:0.3em;-moz-letter-spacing:0.3em;-ms-letter-spacing:0.3em;letter-spacing:0.3em;}.button span,.button .icon{display:block;height:100%;text-align:center;position:absolute;top:0;}.button span{width:72%;line-height:inherit;font-size:15px;text-transform:uppercase;left:0;-webkit-transition:all 0.25s cubic-bezier(0.31,-0.105,0.43,1.4);transition:all 0.25s cubic-bezier(0.31,-0.105,0.43,1.4);}.button span:after{content:'';background-color:#FFF;width:2px;height:70%;position:absolute;top:15%;right:-1px;}.button .icon{margin-top:10px;width:28%;right:0;-webkit-transition:all 0.25s cubic-bezier(0.31,-0.105,0.43,1.4);transition:all 0.25s cubic-bezier(0.31,-0.105,0.43,1.4);}.button .icon .fa{font-size:30px;vertical-align:middle;-webkit-transition:all 0.25s cubic-bezier(0.31,-0.105,0.43,1.4),height 0.25s ease;transition:all 0.25s cubic-bezier(0.31,-0.105,0.43,1.4),height 0.25s ease;}.button .icon .fa-remove{height:36px;}.button:hover{opacity:.9;}.button:hover span{left:-72%;opacity:0;}.button:hover .icon{width:100%;}.button:hover .icon .fa-remove{height:46px;}.button:active{opacity:1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcy9zdHlsZXMvdXNlci9sb2dpbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVrQixBQUVtQixBQUlGLEFBV0ksQUFTSixBQWtCVyxBQUdBLEFBR0EsQUFLWCxBQU9KLEFBUUMsQUFTSyxBQU1ELEFBS0gsQUFHRCxBQUdELEFBSUMsQUFHQyxBQUdGLFVBM0NVLEFBa0NWLEFBU0MsQ0FuQ1csQUFzQlYsQUFPQSxDQVZDLEFBYUEsRUFoR0YsQUFvQkssQUE2QkosQ0E4QlUsQ0FuRkgsQUE2RVQsRUE5RG9CLEVBK0VuQixLQXpGRCxBQW9DZ0IsQUFHQSxBQUlMLENBTUgsQUF3QlYsSUFyREksQUFvQ0csR0FRTCxDQVVpRCxDQS9FdkMsQUFNSCxFQThFNkQsS0ExRDdELENBNENOLENBZk8sQ0FPTyxHQTlDTixJQVRELEVBZ0VBLEtBNUNOLEdBNkJOLEtBdkNVLENBdUNULEVBaERVLEFBdURWLENBbkNJLENBNENILEtBUm1ELEdBU2hELEVBNUNPLENBWEEsSUFUUSxJQWdFZCxTQTNDTixDQVhZLEtBWVQsT0FyQlUsRUFzQlosSUFaVSxHQWFULElBZWMsSUFkUCxFQXZCZ0MsSUFTN0IsU0FlRixTQTRDNEMsT0EzQzFDLGVBekI4QixHQTBCUCxjQStDc0MsSUFwQm5CLG9CQTFCRCx3SEFBQyIsImZpbGUiOiJyZXMvc3R5bGVzL3VzZXIvbG9naW4uc2NzcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYW5kcmVmZWRvcmVua28vRHJvcGJveC9TdHVkaXVtL21lcnNpL2JhY2hlbG9yL2Zyb250ZW5kIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNzc2AubG9naW4tZm9ybSB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7IH1cblxuLmxvZ2luLXByb2ZpbGUtaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogN2VtO1xuICB3aWR0aDogN2VtO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgYm9yZGVyOiAuNWVtIHNvbGlkICNmMmYyZjI7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJveC1zaGFkb3c6IDZweCA5cHggMTRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpOyB9XG5cbi5wcm9maWxlLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IC0zLjVlbTtcbiAgcGFkZGluZzogNWVtIDEuNWVtIDEuNWVtIDEuNWVtO1xuICBiYWNrZ3JvdW5kOiAjZmJmYmZiO1xuICBtYXgtd2lkdGg6IDM1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87IH1cblxuLmJ1dHRvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtaW4td2lkdGg6IDI0MHB4O1xuICBoZWlnaHQ6IDU1cHg7XG4gIGxpbmUtaGVpZ2h0OiA1NXB4O1xuICBtYXJnaW46IDIwcHg7XG4gIGNvbG9yOiAjRkZGO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjMpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuMzEsIC0wLjEwNSwgMC40MywgMS40KTsgfVxuICAuYnV0dG9uLnZrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDY2OTkxOyB9XG4gIC5idXR0b24uZmIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYjU5OTg7IH1cbiAgLmJ1dHRvbi55ZiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc3NWU1NTtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4zZW07IH1cbiAgLmJ1dHRvbiBzcGFuLFxuICAuYnV0dG9uIC5pY29uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7IH1cbiAgLmJ1dHRvbiBzcGFuIHtcbiAgICB3aWR0aDogNzIlO1xuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxlZnQ6IDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjMxLCAtMC4xMDUsIDAuNDMsIDEuNCk7IH1cbiAgICAuYnV0dG9uIHNwYW46YWZ0ZXIge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICAgICAgd2lkdGg6IDJweDtcbiAgICAgIGhlaWdodDogNzAlO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAxNSU7XG4gICAgICByaWdodDogLTFweDsgfVxuICAuYnV0dG9uIC5pY29uIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIHdpZHRoOiAyOCU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjMxLCAtMC4xMDUsIDAuNDMsIDEuNCk7IH1cbiAgICAuYnV0dG9uIC5pY29uIC5mYSB7XG4gICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjMxLCAtMC4xMDUsIDAuNDMsIDEuNCksIGhlaWdodCAwLjI1cyBlYXNlOyB9XG4gICAgLmJ1dHRvbiAuaWNvbiAuZmEtcmVtb3ZlIHtcbiAgICAgIGhlaWdodDogMzZweDsgfVxuICAuYnV0dG9uOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAuOTsgfVxuICAgIC5idXR0b246aG92ZXIgc3BhbiB7XG4gICAgICBsZWZ0OiAtNzIlO1xuICAgICAgb3BhY2l0eTogMDsgfVxuICAgIC5idXR0b246aG92ZXIgLmljb24ge1xuICAgICAgd2lkdGg6IDEwMCU7IH1cbiAgICAuYnV0dG9uOmhvdmVyIC5pY29uIC5mYS1yZW1vdmUge1xuICAgICAgaGVpZ2h0OiA0NnB4OyB9XG4gIC5idXR0b246YWN0aXZlIHtcbiAgICBvcGFjaXR5OiAxOyB9XG5gOyJdfQ== */\n/*@ sourceURL=res/styles/user/login.scss */");

_defaultExport.__hash = "1347196974";
_defaultExport.__scoped = ".login-form.jsx-1182126223{margin-top:30px;margin-bottom:30px;}.login-profile-img.jsx-1182126223{display:block;height:7em;width:7em;object-fit:cover;margin-right:auto;margin-left:auto;border:.5em solid #f2f2f2;border-radius:100%;box-shadow:6px 9px 14px 0px rgba(0,0,0,0.1);}.profile-container.jsx-1182126223{margin-top:-3.5em;padding:5em 1.5em 1.5em 1.5em;background:#fbfbfb;max-width:350px;text-align:center;margin-right:auto;margin-left:auto;}.button.jsx-1182126223{display:block;min-width:240px;height:55px;line-height:55px;margin:20px;color:#FFF;position:relative;top:0;bottom:0;left:0;right:0;cursor:pointer;overflow:hidden;border-radius:5px;box-shadow:0 0 20px 0 rgba(0,0,0,0.3);-webkit-transition:all 0.25s cubic-bezier(0.31,-0.105,0.43,1.4);transition:all 0.25s cubic-bezier(0.31,-0.105,0.43,1.4);}.button.vk.jsx-1182126223{background-color:#466991;}.button.fb.jsx-1182126223{background-color:#3b5998;}.button.yf.jsx-1182126223{background-color:#775e55;-webkit-letter-spacing:0.3em;-moz-letter-spacing:0.3em;-ms-letter-spacing:0.3em;letter-spacing:0.3em;}.button.jsx-1182126223 span.jsx-1182126223,.button.jsx-1182126223 .icon.jsx-1182126223{display:block;height:100%;text-align:center;position:absolute;top:0;}.button.jsx-1182126223 span.jsx-1182126223{width:72%;line-height:inherit;font-size:15px;text-transform:uppercase;left:0;-webkit-transition:all 0.25s cubic-bezier(0.31,-0.105,0.43,1.4);transition:all 0.25s cubic-bezier(0.31,-0.105,0.43,1.4);}.button.jsx-1182126223 span.jsx-1182126223:after{content:'';background-color:#FFF;width:2px;height:70%;position:absolute;top:15%;right:-1px;}.button.jsx-1182126223 .icon.jsx-1182126223{margin-top:10px;width:28%;right:0;-webkit-transition:all 0.25s cubic-bezier(0.31,-0.105,0.43,1.4);transition:all 0.25s cubic-bezier(0.31,-0.105,0.43,1.4);}.button.jsx-1182126223 .icon.jsx-1182126223 .fa.jsx-1182126223{font-size:30px;vertical-align:middle;-webkit-transition:all 0.25s cubic-bezier(0.31,-0.105,0.43,1.4),height 0.25s ease;transition:all 0.25s cubic-bezier(0.31,-0.105,0.43,1.4),height 0.25s ease;}.button.jsx-1182126223 .icon.jsx-1182126223 .fa-remove.jsx-1182126223{height:36px;}.button.jsx-1182126223:hover{opacity:.9;}.button.jsx-1182126223:hover span.jsx-1182126223{left:-72%;opacity:0;}.button.jsx-1182126223:hover .icon.jsx-1182126223{width:100%;}.button.jsx-1182126223:hover .icon.jsx-1182126223 .fa-remove.jsx-1182126223{height:46px;}.button.jsx-1182126223:active{opacity:1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcy9zdHlsZXMvdXNlci9sb2dpbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVrQixBQUVtQixBQUlGLEFBV0ksQUFTSixBQWtCVyxBQUdBLEFBR0EsQUFLWCxBQU9KLEFBUUMsQUFTSyxBQU1ELEFBS0gsQUFHRCxBQUdELEFBSUMsQUFHQyxBQUdGLFVBM0NVLEFBa0NWLEFBU0MsQ0FuQ1csQUFzQlYsQUFPQSxDQVZDLEFBYUEsRUFoR0YsQUFvQkssQUE2QkosQ0E4QlUsQ0FuRkgsQUE2RVQsRUE5RG9CLEVBK0VuQixLQXpGRCxBQW9DZ0IsQUFHQSxBQUlMLENBTUgsQUF3QlYsSUFyREksQUFvQ0csR0FRTCxDQVVpRCxDQS9FdkMsQUFNSCxFQThFNkQsS0ExRDdELENBNENOLENBZk8sQ0FPTyxHQTlDTixJQVRELEVBZ0VBLEtBNUNOLEdBNkJOLEtBdkNVLENBdUNULEVBaERVLEFBdURWLENBbkNJLENBNENILEtBUm1ELEdBU2hELEVBNUNPLENBWEEsSUFUUSxJQWdFZCxTQTNDTixDQVhZLEtBWVQsT0FyQlUsRUFzQlosSUFaVSxHQWFULElBZWMsSUFkUCxFQXZCZ0MsSUFTN0IsU0FlRixTQTRDNEMsT0EzQzFDLGVBekI4QixHQTBCUCxjQStDc0MsSUFwQm5CLG9CQTFCRCx3SEFBQyIsImZpbGUiOiJyZXMvc3R5bGVzL3VzZXIvbG9naW4uc2NzcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYW5kcmVmZWRvcmVua28vRHJvcGJveC9TdHVkaXVtL21lcnNpL2JhY2hlbG9yL2Zyb250ZW5kIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNzc2AubG9naW4tZm9ybSB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7IH1cblxuLmxvZ2luLXByb2ZpbGUtaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogN2VtO1xuICB3aWR0aDogN2VtO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgYm9yZGVyOiAuNWVtIHNvbGlkICNmMmYyZjI7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJveC1zaGFkb3c6IDZweCA5cHggMTRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpOyB9XG5cbi5wcm9maWxlLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IC0zLjVlbTtcbiAgcGFkZGluZzogNWVtIDEuNWVtIDEuNWVtIDEuNWVtO1xuICBiYWNrZ3JvdW5kOiAjZmJmYmZiO1xuICBtYXgtd2lkdGg6IDM1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87IH1cblxuLmJ1dHRvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtaW4td2lkdGg6IDI0MHB4O1xuICBoZWlnaHQ6IDU1cHg7XG4gIGxpbmUtaGVpZ2h0OiA1NXB4O1xuICBtYXJnaW46IDIwcHg7XG4gIGNvbG9yOiAjRkZGO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjMpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuMzEsIC0wLjEwNSwgMC40MywgMS40KTsgfVxuICAuYnV0dG9uLnZrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDY2OTkxOyB9XG4gIC5idXR0b24uZmIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYjU5OTg7IH1cbiAgLmJ1dHRvbi55ZiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc3NWU1NTtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4zZW07IH1cbiAgLmJ1dHRvbiBzcGFuLFxuICAuYnV0dG9uIC5pY29uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7IH1cbiAgLmJ1dHRvbiBzcGFuIHtcbiAgICB3aWR0aDogNzIlO1xuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxlZnQ6IDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjMxLCAtMC4xMDUsIDAuNDMsIDEuNCk7IH1cbiAgICAuYnV0dG9uIHNwYW46YWZ0ZXIge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICAgICAgd2lkdGg6IDJweDtcbiAgICAgIGhlaWdodDogNzAlO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAxNSU7XG4gICAgICByaWdodDogLTFweDsgfVxuICAuYnV0dG9uIC5pY29uIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIHdpZHRoOiAyOCU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjMxLCAtMC4xMDUsIDAuNDMsIDEuNCk7IH1cbiAgICAuYnV0dG9uIC5pY29uIC5mYSB7XG4gICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjMxLCAtMC4xMDUsIDAuNDMsIDEuNCksIGhlaWdodCAwLjI1cyBlYXNlOyB9XG4gICAgLmJ1dHRvbiAuaWNvbiAuZmEtcmVtb3ZlIHtcbiAgICAgIGhlaWdodDogMzZweDsgfVxuICAuYnV0dG9uOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAuOTsgfVxuICAgIC5idXR0b246aG92ZXIgc3BhbiB7XG4gICAgICBsZWZ0OiAtNzIlO1xuICAgICAgb3BhY2l0eTogMDsgfVxuICAgIC5idXR0b246aG92ZXIgLmljb24ge1xuICAgICAgd2lkdGg6IDEwMCU7IH1cbiAgICAuYnV0dG9uOmhvdmVyIC5pY29uIC5mYS1yZW1vdmUge1xuICAgICAgaGVpZ2h0OiA0NnB4OyB9XG4gIC5idXR0b246YWN0aXZlIHtcbiAgICBvcGFjaXR5OiAxOyB9XG5gOyJdfQ== */\n/*@ sourceURL=res/styles/user/login.scss */";
_defaultExport.__scopedHash = "1182126223";
var _default = _defaultExport;
exports.default = _default;

/***/ }),

/***/ "./routes.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var routes = module.exports = __webpack_require__("next-routes")();

routes.add('index').add('native').add('sets').add('art').add('dashboard').add('post', '/post/:postId');

/***/ }),

/***/ "./src/actions/core/login-logout-actions.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = login;
exports.logout = logout;

function login() {
  return function (dispatch) {
    dispatch({
      type: 'LOGIN'
    });
  };
}

function logout() {
  return function (dispatch) {
    dispatch({
      type: 'LOGOUT'
    });
  };
}

/***/ }),

/***/ "./src/actions/post/post-actions.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchTopSets = fetchTopSets;
exports.searchPosts = exports.fetchTopNative = exports.fetchSetsPosts = exports.fetchArtPosts = exports.fetchNativePosts = void 0;

var _axios = _interopRequireDefault(__webpack_require__("axios"));

var _postRestClient = __webpack_require__("./src/constants/post-rest-client.js");

var _postsConstants = __webpack_require__("./src/constants/post/posts-constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fetchNativePosts = function fetchNativePosts(from, to) {
  return function (dispatch, getState) {
    return _axios.default.get([_postRestClient.FIND_NATIVE_FROM_TO, from, to].join("/")).then(function (res) {
      dispatch({
        type: _postsConstants.FETCH_NATIVE_POSTS_FULFILLED,
        payload: res.data
      });
    }).catch(function (err) {
      dispatch({
        type: _postsConstants.FETCH_NATIVE_POSTS_REJECTED,
        payload: err
      });
    });
  };
};

exports.fetchNativePosts = fetchNativePosts;

var fetchArtPosts = function fetchArtPosts(from, to) {
  return function (dispatch) {
    return _axios.default.get([_postRestClient.FIND_ART_FROM_TO, from, to].join("/")).then(function (res) {
      dispatch({
        type: _postsConstants.FETCH_ART_POSTS_FULFILLED,
        payload: res.data
      });
    }).catch(function (err) {
      dispatch({
        type: _postsConstants.FETCH_ART_POSTS_REJECTED,
        payload: err
      });
    });
  };
};

exports.fetchArtPosts = fetchArtPosts;

var fetchSetsPosts = function fetchSetsPosts(from, to) {
  return function (dispatch, getState) {
    return _axios.default.get([_postRestClient.FIND_SETS_FROM_TO, from, to].join("/")).then(function (res) {
      dispatch({
        type: _postsConstants.FETCH_SETS_POSTS_FULFILLED,
        payload: res.data
      });
    }).catch(function (err) {
      dispatch({
        type: _postsConstants.FETCH_SETS_POSTS_REJECTED,
        payload: err
      });
    });
  };
};

exports.fetchSetsPosts = fetchSetsPosts;

function fetchTopSets(from, to) {
  return function (dispatch) {
    _axios.default.get([_postRestClient.FIND_TOP_SETS_FROM_TO, from, to].join("/")).then(function (res) {
      dispatch({
        type: _postsConstants.FETCH_TOP_SETS_FULFILLED,
        payload: res.data
      });
    }).catch(function (err) {
      dispatch({
        type: _postsConstants.FETCH_TOP_SETS_REJECTED,
        payload: err
      });
    });
  };
}

var fetchTopNative = function fetchTopNative(from, to) {
  return function (dispatch) {
    return _axios.default.get([_postRestClient.FIND_TOP_NATIVE_FROM_TO, from, to].join("/")).then(function (res) {
      dispatch({
        type: _postsConstants.FETCH_TOP_NATIVE_FULFILLED,
        payload: res.data
      });
    }).catch(function (err) {
      dispatch({
        type: _postsConstants.FETCH_TOP_NATIVE_REJECTED,
        payload: err
      });
    });
  };
};

exports.fetchTopNative = fetchTopNative;

var searchPosts = function searchPosts(query) {
  return function (dispatch) {
    return _axios.default.get(_postRestClient.SEARCH_POSTS + "?query=" + query).then(function (res) {
      dispatch({
        type: _postsConstants.SEARCH_POST_FULFILLED,
        payload: res.data
      });
    }).catch(function (err) {
      dispatch({
        type: _postsConstants.SEARCH_POST_REJECTED,
        payload: err
      });
    });
  };
};

exports.searchPosts = searchPosts;

/***/ }),

/***/ "./src/components/charts/VegaChart.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("@babel/runtime/regenerator"));

var _react = _interopRequireDefault(__webpack_require__("react"));

var _reactVega = _interopRequireDefault(__webpack_require__("react-vega"));

var _jsxFileName = "/Users/andrefedorenko/Dropbox/Studium/mersi/bachelor/frontend/src/components/charts/VegaChart.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var spec = {
  "$schema": "https://vega.github.io/schema/vega/v3.0.json",
  "width": 500,
  "height": 200,
  // "padding": {left: 5, right: 5, top: 5, bottom: 5},
  "data": [],
  "signals": [{
    "name": "tooltip",
    "value": {},
    "on": [{
      "events": "rect:mouseover",
      "update": "datum"
    }, {
      "events": "rect:mouseout",
      "update": "{}"
    }]
  }],
  "scales": [{
    "name": "xscale",
    "type": "band",
    "domain": {
      "data": "table",
      "field": "category"
    },
    "range": "width"
  }, {
    "name": "yscale",
    "domain": {
      "data": "table",
      "field": "amount"
    },
    "nice": true,
    "range": "height"
  }],
  "axes": [{
    "orient": "bottom",
    "scale": "xscale"
  }, {
    "orient": "left",
    "scale": "yscale"
  }],
  "marks": [{
    "type": "rect",
    "from": {
      "data": "table"
    },
    "encode": {
      "enter": {
        "x": {
          "scale": "xscale",
          "field": "category",
          "offset": 10
        },
        "width": {
          "scale": "xscale",
          "band": 0.5,
          "offset": -1
        },
        "y": {
          "scale": "yscale",
          "field": "amount"
        },
        "y2": {
          "scale": "yscale",
          "value": 0
        }
      },
      "update": {
        "fill": {
          "value": "green"
        }
      },
      "hover": {
        "fill": {
          "value": "yellow"
        }
      }
    }
  }, {
    "type": "text",
    "encode": {
      "enter": {
        "align": {
          "value": "center"
        },
        "baseline": {
          "value": "bottom"
        },
        "fill": {
          "value": "#333"
        }
      },
      "update": {
        "x": {
          "scale": "xscale",
          "signal": "tooltip.category",
          "band": 0.5
        },
        "y": {
          "scale": "yscale",
          "signal": "tooltip.amount",
          "offset": -2
        },
        "text": {
          "signal": "tooltip.amount"
        },
        "fillOpacity": [{
          "test": "datum === tooltip",
          "value": 0
        }, {
          "value": 1
        }]
      }
    }
  }]
};

var VegaChart =
/*#__PURE__*/
function (_React$Component) {
  _inherits(VegaChart, _React$Component);

  function VegaChart(props) {
    var _this;

    _classCallCheck(this, VegaChart);

    _this = _possibleConstructorReturn(this, (VegaChart.__proto__ || Object.getPrototypeOf(VegaChart)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "generateData", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value = _asyncToGenerator(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee() {
          var possible, table, i;
          return _regenerator.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                  table = [];

                  for (i = 0; i < 20; i++) {
                    table.push({
                      "category": possible.charAt(i),
                      "amount": Math.floor(Math.random() * 100) + 10
                    });
                  }

                  return _context.abrupt("return", [{
                    "name": "table",
                    "values": table
                  }]);

                case 4:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function value() {
          return _value.apply(this, arguments);
        };
      }()
    });
    Object.defineProperty(_assertThisInitialized(_this), "handleHover", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        console.log("aaaaa");

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        console.log(args);
      }
    });
    _this.state = {
      spec: ''
    };
    console.log(spec);
    return _this;
  }

  _createClass(VegaChart, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.generateData().then(function (data) {
        spec.data = data;

        _this2.setState({
          spec: spec
        });
      });
    }
  }, {
    key: "componentWillUpdate",
    value: function componentWillUpdate() {} // console.log(this.props);
    // if(this.props.randomise){
    //     // this.props.changeRandomise(false);
    //     this.generateData().then(data => {
    //         spec.data = data;
    //         this.setState({spec: spec})
    //     });
    // }
    // componentWillReceiveProps(){
    //     console.log(this.props);
    //
    // }

  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        }
      }, this.state.spec && _react.default.createElement(_reactVega.default, {
        spec: this.state.spec,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      }));
    }
  }]);

  return VegaChart;
}(_react.default.Component);

var _default = VegaChart;
exports.default = _default;

/***/ }),

/***/ "./src/components/core/main-menu.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _style = _interopRequireDefault(__webpack_require__("styled-jsx/style"));

var _react = _interopRequireDefault(__webpack_require__("react"));

var _link = _interopRequireDefault(__webpack_require__("next/link"));

var _core = __webpack_require__("./src/messages/core.js");

var _loginLogoutButton = _interopRequireDefault(__webpack_require__("./src/components/core/menu-components/login-logout-button.jsx"));

var _navigation = _interopRequireDefault(__webpack_require__("./res/styles/navigation.scss"));

var _searchPost = _interopRequireDefault(__webpack_require__("./res/styles/search-post.scss"));

var _jsxFileName = "/Users/andrefedorenko/Dropbox/Studium/mersi/bachelor/frontend/src/components/core/main-menu.jsx";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DesktopMenu = function DesktopMenu() {
  return _react.default.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    className: "jsx-".concat(_navigation.default.__scopedHash, " jsx-").concat(_searchPost.default.__scopedHash)
  }, _react.default.createElement(_style.default, {
    styleId: _navigation.default.__scopedHash,
    css: _navigation.default.__scoped
  }), _react.default.createElement(_style.default, {
    styleId: _searchPost.default.__scopedHash,
    css: _searchPost.default.__scoped
  }), _react.default.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    className: "jsx-".concat(_navigation.default.__scopedHash, " jsx-").concat(_searchPost.default.__scopedHash) + " " + "navigation"
  }, _react.default.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    className: "jsx-".concat(_navigation.default.__scopedHash, " jsx-").concat(_searchPost.default.__scopedHash)
  }, _react.default.createElement(_link.default, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, _react.default.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    className: "jsx-".concat(_navigation.default.__scopedHash, " jsx-").concat(_searchPost.default.__scopedHash)
  }, "Zoo"))), _react.default.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    className: "jsx-".concat(_navigation.default.__scopedHash, " jsx-").concat(_searchPost.default.__scopedHash)
  }, _react.default.createElement(_link.default, {
    href: "/native",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, _react.default.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    className: "jsx-".concat(_navigation.default.__scopedHash, " jsx-").concat(_searchPost.default.__scopedHash)
  }, "Vega Demos"))), _react.default.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    className: "jsx-".concat(_navigation.default.__scopedHash, " jsx-").concat(_searchPost.default.__scopedHash)
  }, _react.default.createElement(_link.default, {
    href: "/sets",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, _react.default.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    className: "jsx-".concat(_navigation.default.__scopedHash, " jsx-").concat(_searchPost.default.__scopedHash)
  }, "D3 Demos"))), _react.default.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    className: "jsx-".concat(_navigation.default.__scopedHash, " jsx-").concat(_searchPost.default.__scopedHash)
  })));
};

var _default = DesktopMenu;
exports.default = _default;

/***/ }),

/***/ "./src/components/core/menu-components/login-log-out-mobile.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _style = _interopRequireDefault(__webpack_require__("styled-jsx/style"));

var _react = _interopRequireDefault(__webpack_require__("react"));

var _reactRedux = __webpack_require__("react-redux");

var _link = _interopRequireDefault(__webpack_require__("next/link"));

var _loginLogoutActions = __webpack_require__("./src/actions/core/login-logout-actions.jsx");

var _navigation = _interopRequireDefault(__webpack_require__("./res/styles/navigation.scss"));

var _jsxFileName = "/Users/andrefedorenko/Dropbox/Studium/mersi/bachelor/frontend/src/components/core/menu-components/login-log-out-mobile.jsx";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// @connect((store) => {
// 	return {
// 		loginLogout: store.loginLogout
// 	}
// })
var MobileLoginLogoutButton =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MobileLoginLogoutButton, _React$Component);

  function MobileLoginLogoutButton(props) {
    var _this;

    _classCallCheck(this, MobileLoginLogoutButton);

    _this = _possibleConstructorReturn(this, (MobileLoginLogoutButton.__proto__ || Object.getPrototypeOf(MobileLoginLogoutButton)).call(this, props));
    _this.state = {
      // isUserLoggedIn: localStorage.getItem('user_id') ? true : false,
      showDropDownMenu: false
    };
    return _this;
  }

  _createClass(MobileLoginLogoutButton, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.loginLogout.executed) {
        this.state = {
          isUserLoggedIn: nextProps.loginLogout.isLogin ? true : false
        };
      }
    }
  }, {
    key: "logOut",
    value: function logOut() {
      localStorage.clear();
      this.props.dispatch((0, _loginLogoutActions.logout)());
      this.props.history.push('/login');
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.state.isUserLoggedIn) {
        return _react.default.createElement("li", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          }
        }, this.getLoginButton());
      } else {
        return _react.default.createElement("ul", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          }
        }, this.getLogoutButtonMobile());
      }
    }
  }, {
    key: "getLoginButton",
    value: function getLoginButton() {
      return _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        className: "jsx-".concat(_navigation.default.__scopedHash)
      }, _react.default.createElement(_style.default, {
        styleId: _navigation.default.__scopedHash,
        css: _navigation.default.__scoped
      }), _react.default.createElement(_link.default, {
        href: "/login",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, _react.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        className: "jsx-".concat(_navigation.default.__scopedHash)
      }, "\u0412\u043E\u0439\u0442\u0438")));
    }
  }, {
    key: "getLogoutButtonMobile",
    value: function getLogoutButtonMobile() {
      return _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        className: "jsx-".concat(_navigation.default.__scopedHash)
      }, _react.default.createElement(_style.default, {
        styleId: _navigation.default.__scopedHash,
        css: _navigation.default.__scoped
      }), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        className: "jsx-".concat(_navigation.default.__scopedHash) + " " + "login-menu-container"
      }, _react.default.createElement(_link.default, {
        href: "/dashboard",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, _react.default.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        className: "jsx-".concat(_navigation.default.__scopedHash)
      }, "\u041F\u0440\u043E\u0444\u0430\u0439\u043B")), _react.default.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        className: "jsx-".concat(_navigation.default.__scopedHash)
      }, _react.default.createElement("a", {
        onClick: this.logOut.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        className: "jsx-".concat(_navigation.default.__scopedHash)
      }, "\u0412\u044B\u0439\u0442\u0438"))));
    }
  }]);

  return MobileLoginLogoutButton;
}(_react.default.Component);

var _default = MobileLoginLogoutButton;
exports.default = _default;

/***/ }),

/***/ "./src/components/core/menu-components/login-logout-button.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("react"));

var _routes = __webpack_require__("./routes.js");

var _loginLogoutActions = __webpack_require__("./src/actions/core/login-logout-actions.jsx");

var _reactRedux = __webpack_require__("react-redux");

var _jsxFileName = "/Users/andrefedorenko/Dropbox/Studium/mersi/bachelor/frontend/src/components/core/menu-components/login-logout-button.jsx";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// @connect((store) => {
//   return {
//     loginLogout: store.loginLogout
//   }
// })
var LoginLogoutButton =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LoginLogoutButton, _React$Component);

  function LoginLogoutButton(props) {
    var _this;

    _classCallCheck(this, LoginLogoutButton);

    _this = _possibleConstructorReturn(this, (LoginLogoutButton.__proto__ || Object.getPrototypeOf(LoginLogoutButton)).call(this, props));
    _this.state = {// isUserLoggedIn: localStorage.getItem('user_id') ? true : false,
      // showDropDownMenu: false
    };
    return _this;
  }

  _createClass(LoginLogoutButton, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.loginLogout.executed) {
        this.state = {
          isUserLoggedIn: nextProps.loginLogout.isLogin ? true : false
        };
      }
    }
  }, {
    key: "logOut",
    value: function logOut() {
      localStorage.clear();
      this.props.dispatch((0, _loginLogoutActions.logout)());
      this.props.history.push('/login');
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.state.isUserLoggedIn) {
        return _react.default.createElement("li", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          }
        }, this.getLoginButton());
      } else {
        return _react.default.createElement("li", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          }
        }, this.getLogoutButton());
      }
    }
  }, {
    key: "getLoginButton",
    value: function getLoginButton() {
      return _react.default.createElement(_routes.Link, {
        route: "login",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, _react.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, "\u0412\u043E\u0439\u0442\u0438"));
    }
  }, {
    key: "getLogoutButton",
    value: function getLogoutButton() {
      return _react.default.createElement("div", {
        onMouseOver: this.showDropDownMenu.bind(this),
        onMouseLeave: this.hideDropDownMenu.bind(this),
        className: "login-menu-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _react.default.createElement(_routes.Link, {
        route: "dashboard",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, _react.default.createElement("img", {
        src: localStorage.getItem('user_thumbnail'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      })), this.state.showDropDownMenu ? _react.default.createElement("div", {
        id: "menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, _react.default.createElement("ul", {
        className: "submenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, _react.default.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, _react.default.createElement(_routes.Link, {
        route: "dashboard",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, "\u041F\u0440\u043E\u0444\u0430\u0439\u043B")), _react.default.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, _react.default.createElement("a", {
        onClick: this.logOut.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, "\u0412\u044B\u0439\u0442\u0438")))) : null);
    }
  }, {
    key: "showDropDownMenu",
    value: function showDropDownMenu() {
      this.setState({
        showDropDownMenu: true
      });
    }
  }, {
    key: "hideDropDownMenu",
    value: function hideDropDownMenu() {
      this.setState({
        showDropDownMenu: false
      });
    }
  }]);

  return LoginLogoutButton;
}(_react.default.Component);

function mapStateToProps(state) {
  var topNative = state.topNative,
      native = state.native;
  return native;
}

var _default = (0, _reactRedux.connect)(mapStateToProps)(LoginLogoutButton);

exports.default = _default;

/***/ }),

/***/ "./src/components/core/mobile-menu.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _style = _interopRequireDefault(__webpack_require__("styled-jsx/style"));

var _react = _interopRequireDefault(__webpack_require__("react"));

var _link = _interopRequireDefault(__webpack_require__("next/link"));

var _core = __webpack_require__("./src/messages/core.js");

var _loginLogOutMobile = _interopRequireDefault(__webpack_require__("./src/components/core/menu-components/login-log-out-mobile.jsx"));

var _navigation = _interopRequireDefault(__webpack_require__("./res/styles/navigation.scss"));

var _jsxFileName = "/Users/andrefedorenko/Dropbox/Studium/mersi/bachelor/frontend/src/components/core/mobile-menu.jsx";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MobileMenu =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MobileMenu, _React$Component);

  function MobileMenu(props) {
    var _this;

    _classCallCheck(this, MobileMenu);

    _this = _possibleConstructorReturn(this, (MobileMenu.__proto__ || Object.getPrototypeOf(MobileMenu)).call(this, props));
    _this.state = {
      showMobileMenu: false,
      toggle: 'hamburger'
    };
    return _this;
  }

  _createClass(MobileMenu, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        className: "jsx-".concat(_navigation.default.__scopedHash)
      }, _react.default.createElement(_style.default, {
        styleId: _navigation.default.__scopedHash,
        css: _navigation.default.__scoped
      }), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        className: "jsx-".concat(_navigation.default.__scopedHash) + " " + "mobile-menu"
      }, this.getButton(), this.state.showMobileMenu ? this.getMobileMenu() : null));
    }
  }, {
    key: "getButton",
    value: function getButton() {
      return _react.default.createElement("button", {
        onClick: this.changeToggleState.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        className: "jsx-".concat(_navigation.default.__scopedHash) + " " + (this.state.toggle || "")
      }, _react.default.createElement(_style.default, {
        styleId: _navigation.default.__scopedHash,
        css: _navigation.default.__scoped
      }), _react.default.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        className: "jsx-".concat(_navigation.default.__scopedHash) + " " + "burger"
      }), _react.default.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        className: "jsx-".concat(_navigation.default.__scopedHash) + " " + "burger"
      }), _react.default.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        className: "jsx-".concat(_navigation.default.__scopedHash) + " " + "burger"
      }));
    }
  }, {
    key: "getMobileMenu",
    value: function getMobileMenu() {
      return _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        className: "jsx-".concat(_navigation.default.__scopedHash)
      }, _react.default.createElement(_style.default, {
        styleId: _navigation.default.__scopedHash,
        css: _navigation.default.__scoped
      }), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        className: "jsx-".concat(_navigation.default.__scopedHash) + " " + "menu-expanded"
      }, _react.default.createElement("nav", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        className: "jsx-".concat(_navigation.default.__scopedHash)
      }, _react.default.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        className: "jsx-".concat(_navigation.default.__scopedHash)
      }, _react.default.createElement("li", {
        onClick: this.changeToggleState.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        className: "jsx-".concat(_navigation.default.__scopedHash)
      }, _react.default.createElement(_link.default, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, _react.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        className: "jsx-".concat(_navigation.default.__scopedHash) + " " + "active"
      }, _core.MAIN_PAGE))), _react.default.createElement("li", {
        onClick: this.changeToggleState.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        className: "jsx-".concat(_navigation.default.__scopedHash)
      }, _react.default.createElement(_link.default, {
        href: "/native",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, _react.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        className: "jsx-".concat(_navigation.default.__scopedHash) + " " + "active"
      }, _core.NATIVE_PAGE))), _react.default.createElement("li", {
        onClick: this.changeToggleState.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        className: "jsx-".concat(_navigation.default.__scopedHash)
      }, _react.default.createElement(_link.default, {
        href: "/sets",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, _react.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        className: "jsx-".concat(_navigation.default.__scopedHash) + " " + "active"
      }, _core.SETS_PAGE))), _react.default.createElement("li", {
        onClick: this.changeToggleState.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        className: "jsx-".concat(_navigation.default.__scopedHash)
      }, _react.default.createElement(_link.default, {
        href: "/art",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, _react.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        className: "jsx-".concat(_navigation.default.__scopedHash) + " " + "active"
      }, _core.ART_PAGE))), _react.default.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        className: "jsx-".concat(_navigation.default.__scopedHash)
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        className: "jsx-".concat(_navigation.default.__scopedHash) + " " + "search-icon"
      }, _react.default.createElement(_link.default, {
        href: "/search",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, _react.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        className: "jsx-".concat(_navigation.default.__scopedHash)
      }, _react.default.createElement("img", {
        src: "/static/img/64/search-icon.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        className: "jsx-".concat(_navigation.default.__scopedHash)
      }))))), _react.default.createElement("li", {
        onClick: this.changeToggleState.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        className: "jsx-".concat(_navigation.default.__scopedHash) + " " + "last-li"
      }, _react.default.createElement(_loginLogOutMobile.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }))))));
    }
  }, {
    key: "changeToggleState",
    value: function changeToggleState() {
      this.setState({
        showMobileMenu: !this.state.showMobileMenu,
        toggle: !this.state.showMobileMenu == false ? 'hamburger' : 'hamburger focus'
      });
    }
  }]);

  return MobileMenu;
}(_react.default.Component);

exports.default = MobileMenu;

/***/ }),

/***/ "./src/components/core/navbar.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("react"));

var _mobileMenu = _interopRequireDefault(__webpack_require__("./src/components/core/mobile-menu.jsx"));

var _mainMenu = _interopRequireDefault(__webpack_require__("./src/components/core/main-menu.jsx"));

var _jsxFileName = "/Users/andrefedorenko/Dropbox/Studium/mersi/bachelor/frontend/src/components/core/navbar.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mobileViewSize = 850;

var Navbar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Navbar, _React$Component);

  function Navbar() {
    _classCallCheck(this, Navbar);

    return _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).apply(this, arguments));
  }

  _createClass(Navbar, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, typeof window !== 'undefined' && window.innerWidth <= mobileViewSize ? _react.default.createElement(_mobileMenu.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }) : _react.default.createElement(_mainMenu.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }));
    }
  }]);

  return Navbar;
}(_react.default.Component);

var _default = Navbar;
exports.default = _default;

/***/ }),

/***/ "./src/components/core/sidebars/main-sidebar/components/sidebarheader.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _style = _interopRequireDefault(__webpack_require__("styled-jsx/style"));

var _react = _interopRequireDefault(__webpack_require__("react"));

var _routes = __webpack_require__("./routes.js");

var _router = _interopRequireDefault(__webpack_require__("next/router"));

var _sidebar = _interopRequireDefault(__webpack_require__("./res/styles/sidebar.scss"));

var _login = _interopRequireDefault(__webpack_require__("./res/styles/user/login.scss"));

var _jsxFileName = "/Users/andrefedorenko/Dropbox/Studium/mersi/bachelor/frontend/src/components/core/sidebars/main-sidebar/components/sidebarheader.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SidebarHeader =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SidebarHeader, _React$Component);

  function SidebarHeader(props) {
    _classCallCheck(this, SidebarHeader);

    return _possibleConstructorReturn(this, (SidebarHeader.__proto__ || Object.getPrototypeOf(SidebarHeader)).call(this, props));
  }

  _createClass(SidebarHeader, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        userExist: localStorage.getItem('user_id') ? true : false
      });
    }
  }, {
    key: "getUserThumbnail",
    value: function getUserThumbnail() {
      return localStorage.getItem('user_thumbnail');
    }
  }, {
    key: "getUserName",
    value: function getUserName() {
      return [localStorage.getItem('user_first_name'), localStorage.getItem('user_last_name')].join(" ");
    }
  }, {
    key: "getLoggedInUserData",
    value: function getLoggedInUserData() {
      return _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        className: "jsx-".concat(_sidebar.default.__scopedHash)
      }, _react.default.createElement(_style.default, {
        styleId: _sidebar.default.__scopedHash,
        css: _sidebar.default.__scoped
      }), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        className: "jsx-".concat(_sidebar.default.__scopedHash) + " " + "sidebar-header"
      }, _react.default.createElement(_routes.Link, {
        route: "dashboard",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, _react.default.createElement("img", {
        src: this.getUserThumbnail(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        className: "jsx-".concat(_sidebar.default.__scopedHash) + " " + 'avatar'
      })), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        className: "jsx-".concat(_sidebar.default.__scopedHash) + " " + "sidebar-header-text"
      }, _react.default.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        className: "jsx-".concat(_sidebar.default.__scopedHash) + " " + "no-underscore"
      }, this.getUserName()))), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        className: "jsx-".concat(_sidebar.default.__scopedHash) + " " + 'info'
      }, _react.default.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        className: "jsx-".concat(_sidebar.default.__scopedHash)
      }, _react.default.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        className: "jsx-".concat(_sidebar.default.__scopedHash)
      }, _react.default.createElement(_routes.Link, {
        route: "dashboard",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, _react.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        className: "jsx-".concat(_sidebar.default.__scopedHash)
      }, "\u041F\u0440\u043E\u0444\u0430\u0439\u043B"))), _react.default.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        className: "jsx-".concat(_sidebar.default.__scopedHash)
      }, _react.default.createElement("a", {
        onClick: this.logOut.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        className: "jsx-".concat(_sidebar.default.__scopedHash)
      }, "\u0412\u044B\u0439\u0442\u0438")))));
    }
  }, {
    key: "navigateToLogin",
    value: function navigateToLogin() {
      _router.default.push('/login');
    }
  }, {
    key: "logOut",
    value: function logOut() {
      localStorage.clear();

      _router.default.push('/login');
    }
  }, {
    key: "getButton",
    value: function getButton() {
      return _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        className: "jsx-".concat(_sidebar.default.__scopedHash, " jsx-").concat(_login.default.__scopedHash)
      }, _react.default.createElement(_style.default, {
        styleId: _sidebar.default.__scopedHash,
        css: _sidebar.default.__scoped
      }), _react.default.createElement(_style.default, {
        styleId: _login.default.__scopedHash,
        css: _login.default.__scoped
      }), _react.default.createElement("a", {
        role: "button",
        onClick: this.navigateToLogin.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        className: "jsx-".concat(_sidebar.default.__scopedHash, " jsx-").concat(_login.default.__scopedHash) + " " + "button yf"
      }, _react.default.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        className: "jsx-".concat(_sidebar.default.__scopedHash, " jsx-").concat(_login.default.__scopedHash)
      }, "\u0412\u043E\u0439\u0442\u0438"), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        className: "jsx-".concat(_sidebar.default.__scopedHash, " jsx-").concat(_login.default.__scopedHash) + " " + "icon"
      }, _react.default.createElement("img", {
        src: "/static/img/32/YF-white.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        className: "jsx-".concat(_sidebar.default.__scopedHash, " jsx-").concat(_login.default.__scopedHash)
      }))));
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        className: "jsx-".concat(_sidebar.default.__scopedHash)
      }, _react.default.createElement(_style.default, {
        styleId: _sidebar.default.__scopedHash,
        css: _sidebar.default.__scoped
      }), this.state && this.state.userExist ? this.getLoggedInUserData() : this.getButton());
    }
  }]);

  return SidebarHeader;
}(_react.default.Component);

var _default = SidebarHeader;
exports.default = _default;

/***/ }),

/***/ "./src/components/core/sidebars/main-sidebar/sidebar.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _style = _interopRequireDefault(__webpack_require__("styled-jsx/style"));

var _react = _interopRequireDefault(__webpack_require__("react"));

var _sidebarheader = _interopRequireDefault(__webpack_require__("./src/components/core/sidebars/main-sidebar/components/sidebarheader.js"));

var _sidebar = _interopRequireDefault(__webpack_require__("./res/styles/sidebar.scss"));

var _login = _interopRequireDefault(__webpack_require__("./res/styles/user/login.scss"));

var _jsxFileName = "/Users/andrefedorenko/Dropbox/Studium/mersi/bachelor/frontend/src/components/core/sidebars/main-sidebar/sidebar.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var mobileViewSize = 850;

var Sidebar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Sidebar, _React$Component);

  function Sidebar(props) {
    var _this;

    _classCallCheck(this, Sidebar);

    _this = _possibleConstructorReturn(this, (Sidebar.__proto__ || Object.getPrototypeOf(Sidebar)).call(this, props));
    _this.updateDimensions = _this.updateDimensions.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Sidebar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        width: window.innerWidth
      });
      window.addEventListener("resize", this.updateDimensions);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("resize", this.updateDimensions);
    }
  }, {
    key: "updateDimensions",
    value: function updateDimensions() {
      this.setState({
        width: window.innerWidth
      });
    }
  }, {
    key: "render",
    value: function render() {
      var sidebar = typeof window !== 'undefined' && this.state && this.state.width > mobileViewSize;
      return _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, sidebar ? _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        className: "jsx-".concat(_sidebar.default.__scopedHash, " jsx-").concat(_login.default.__scopedHash)
      }, _react.default.createElement(_style.default, {
        styleId: _sidebar.default.__scopedHash,
        css: _sidebar.default.__scoped
      }), _react.default.createElement(_style.default, {
        styleId: _login.default.__scopedHash,
        css: _login.default.__scoped
      }), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        className: "jsx-".concat(_sidebar.default.__scopedHash, " jsx-").concat(_login.default.__scopedHash) + " " + "sidebar"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        className: "jsx-".concat(_sidebar.default.__scopedHash, " jsx-").concat(_login.default.__scopedHash) + " " + 'profile'
      }, _react.default.createElement(_sidebarheader.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      })))) : null);
    }
  }]);

  return Sidebar;
}(_react.default.Component);

exports.default = Sidebar;
;

/***/ }),

/***/ "./src/components/home/components/grid-pictures.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("react"));

var _nativeGridComponent = _interopRequireDefault(__webpack_require__("./src/components/home/components/native-grid-component.js"));

var _setsGridComponent = _interopRequireDefault(__webpack_require__("./src/components/home/components/sets-grid-component.js"));

var _topNativeSlider = _interopRequireDefault(__webpack_require__("./src/components/posts/lists/top-native-slider.js"));

var _reactRedux = __webpack_require__("react-redux");

var _jsxFileName = "/Users/andrefedorenko/Dropbox/Studium/mersi/bachelor/frontend/src/components/home/components/grid-pictures.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Grid =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Grid, _React$Component);

  function Grid() {
    _classCallCheck(this, Grid);

    return _possibleConstructorReturn(this, (Grid.__proto__ || Object.getPrototypeOf(Grid)).apply(this, arguments));
  }

  _createClass(Grid, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        width: window.innerWidth,
        screen: screen.width
      });
      window.addEventListener("resize", this.updateDimensions);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("resize", this.updateDimensions);
    }
  }, {
    key: "updateDimensions",
    value: function updateDimensions() {
      this.setState({
        width: window.innerWidth,
        screen: screen.width
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, _react.default.createElement(_nativeGridComponent.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }), _react.default.createElement(_setsGridComponent.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }));
    }
  }], [{
    key: "initialAction",
    value: function initialAction() {
      return [].concat(_topNativeSlider.default.initialAction()).concat(_nativeGridComponent.default.initialAction()).concat(_setsGridComponent.default.initialAction());
    }
  }]);

  return Grid;
}(_react.default.Component);

var _default = (0, _reactRedux.connect)()(Grid);

exports.default = _default;

/***/ }),

/***/ "./src/components/home/components/homeMetaGenerator.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _meta = __webpack_require__("./src/messages/meta.js");

var _default = function _default() {
  return {
    title: _meta.TITLE_HOME,
    description: _meta.DESCRIPTION_HOME,
    canonical: _meta.CANONICIAL_HOST,
    charset: _meta.CHARSET,
    keywords: _meta.KEYWORDS_HOME
  };
};

exports.default = _default;

/***/ }),

/***/ "./src/components/home/components/native-grid-component.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _style = _interopRequireDefault(__webpack_require__("styled-jsx/style"));

var _react = _interopRequireDefault(__webpack_require__("react"));

var _postActions = __webpack_require__("./src/actions/post/post-actions.js");

var _reactRedux = __webpack_require__("react-redux");

var _main = _interopRequireDefault(__webpack_require__("./res/styles/main.scss"));

var _loader = _interopRequireDefault(__webpack_require__("./res/styles/loader.scss"));

var _elements = _interopRequireDefault(__webpack_require__("./res/styles/common/elements.scss"));

var _routes = __webpack_require__("./routes.js");

var _sidebar = _interopRequireDefault(__webpack_require__("./src/components/core/sidebars/main-sidebar/sidebar.js"));

var _jsxFileName = "/Users/andrefedorenko/Dropbox/Studium/mersi/bachelor/frontend/src/components/home/components/native-grid-component.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NativeGrid =
/*#__PURE__*/
function (_React$Component) {
  _inherits(NativeGrid, _React$Component);

  _createClass(NativeGrid, null, [{
    key: "initialAction",
    value: function initialAction() {
      return (0, _postActions.fetchNativePosts)(0, 6);
    }
  }]);

  function NativeGrid(props) {
    var _this;

    _classCallCheck(this, NativeGrid);

    _this = _possibleConstructorReturn(this, (NativeGrid.__proto__ || Object.getPrototypeOf(NativeGrid)).call(this, props));
    _this.state = {
      increment_size: 6,
      init_size: 0,
      from: 0,
      to: 6
    };
    return _this;
  }

  _createClass(NativeGrid, [{
    key: "renderPics",
    value: function renderPics(posts) {
      return posts.map(function (post) {
        return _react.default.createElement("div", {
          key: post.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          className: "jsx-".concat(_main.default.__scopedHash, " jsx-").concat(_elements.default.__scopedHash) + " " + "pure-u-1-2 pure-u-sm-1-2 pure-u-md-1-3 grig-img-container hovereffect"
        }, _react.default.createElement(_style.default, {
          styleId: _main.default.__scopedHash,
          css: _main.default.__scoped
        }), _react.default.createElement(_style.default, {
          styleId: _elements.default.__scopedHash,
          css: _elements.default.__scoped
        }), _react.default.createElement("img", {
          src: post.thumbnail,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          className: "jsx-".concat(_main.default.__scopedHash, " jsx-").concat(_elements.default.__scopedHash) + " " + "grig-img"
        }), _react.default.createElement(_routes.Link, {
          route: "post",
          params: {
            postId: post.id
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          }
        }, _react.default.createElement("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          className: "jsx-".concat(_main.default.__scopedHash, " jsx-").concat(_elements.default.__scopedHash)
        }, _react.default.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          className: "jsx-".concat(_main.default.__scopedHash, " jsx-").concat(_elements.default.__scopedHash) + " " + "overlay"
        }, _react.default.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          className: "jsx-".concat(_main.default.__scopedHash, " jsx-").concat(_elements.default.__scopedHash) + " " + "ul-main-list"
        }, post.md ? _react.default.createElement("ul", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          className: "jsx-".concat(_main.default.__scopedHash, " jsx-").concat(_elements.default.__scopedHash) + " " + "md-white"
        }, _react.default.createElement("li", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          className: "jsx-".concat(_main.default.__scopedHash, " jsx-").concat(_elements.default.__scopedHash)
        }, post.md)) : null, post.ph ? _react.default.createElement("ul", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          className: "jsx-".concat(_main.default.__scopedHash, " jsx-").concat(_elements.default.__scopedHash) + " " + "ph-white"
        }, _react.default.createElement("li", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          },
          className: "jsx-".concat(_main.default.__scopedHash, " jsx-").concat(_elements.default.__scopedHash)
        }, post.ph)) : null)))));
      });
    }
  }, {
    key: "fetchMorePosts",
    value: function fetchMorePosts(type) {
      var currentPhotoSize = this.state.to += this.state.increment_size;
      this.setState({
        to: currentPhotoSize
      });
      this.props.dispatch((0, _postActions.fetchNativePosts)(this.state.from, this.state.to));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        className: "jsx-".concat(_main.default.__scopedHash, " jsx-").concat(_loader.default.__scopedHash)
      }, _react.default.createElement(_style.default, {
        styleId: _main.default.__scopedHash,
        css: _main.default.__scoped
      }), _react.default.createElement(_style.default, {
        styleId: _loader.default.__scopedHash,
        css: _loader.default.__scoped
      }), this.props.fetched ? _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        className: "jsx-".concat(_main.default.__scopedHash, " jsx-").concat(_loader.default.__scopedHash) + " " + "wrapper"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        className: "jsx-".concat(_main.default.__scopedHash, " jsx-").concat(_loader.default.__scopedHash) + " " + "content-wrapper"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        className: "jsx-".concat(_main.default.__scopedHash, " jsx-").concat(_loader.default.__scopedHash) + " " + "content"
      }, _react.default.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        className: "jsx-".concat(_main.default.__scopedHash, " jsx-").concat(_loader.default.__scopedHash)
      }, "\u041D\u0430\u0448\u0438"), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        className: "jsx-".concat(_main.default.__scopedHash, " jsx-").concat(_loader.default.__scopedHash) + " " + "pure-g"
      }, this.renderPics(this.props.post)), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        className: "jsx-".concat(_main.default.__scopedHash, " jsx-").concat(_loader.default.__scopedHash) + " " + "under-button"
      }, _react.default.createElement("a", {
        onClick: function onClick() {
          return _this2.fetchMorePosts();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        className: "jsx-".concat(_main.default.__scopedHash, " jsx-").concat(_loader.default.__scopedHash)
      }, " ", _react.default.createElement("img", {
        src: "/static/img/64/load-more.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        className: "jsx-".concat(_main.default.__scopedHash, " jsx-").concat(_loader.default.__scopedHash)
      }))))), _react.default.createElement(_sidebar.default, {
        width: this.props.width,
        mobileViewSize: this.props.mobileViewSize,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      })) : null);
    }
  }]);

  return NativeGrid;
}(_react.default.Component);

function mapStateToProps(state) {
  var native = state.native;
  return native;
}

var _default = (0, _reactRedux.connect)(mapStateToProps)(NativeGrid);

exports.default = _default;

/***/ }),

/***/ "./src/components/home/components/sets-grid-component.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _style = _interopRequireDefault(__webpack_require__("styled-jsx/style"));

var _react = _interopRequireDefault(__webpack_require__("react"));

var _routes = __webpack_require__("./routes.js");

var _reactRedux = __webpack_require__("react-redux");

var _postActions = __webpack_require__("./src/actions/post/post-actions.js");

var _sidebar = _interopRequireDefault(__webpack_require__("./src/components/core/sidebars/main-sidebar/sidebar.js"));

var _main = _interopRequireDefault(__webpack_require__("./res/styles/main.scss"));

var _loader = _interopRequireDefault(__webpack_require__("./res/styles/loader.scss"));

var _elements = _interopRequireDefault(__webpack_require__("./res/styles/common/elements.scss"));

var _jsxFileName = "/Users/andrefedorenko/Dropbox/Studium/mersi/bachelor/frontend/src/components/home/components/sets-grid-component.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SetsGrid =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SetsGrid, _React$Component);

  _createClass(SetsGrid, null, [{
    key: "initialAction",
    value: function initialAction() {
      return (0, _postActions.fetchSetsPosts)(0, 6);
    }
  }]);

  function SetsGrid(props) {
    var _this;

    _classCallCheck(this, SetsGrid);

    _this = _possibleConstructorReturn(this, (SetsGrid.__proto__ || Object.getPrototypeOf(SetsGrid)).call(this, props));
    _this.state = {
      increment_size: 6,
      init_size: 0,
      from: 0,
      to: 6
    };
    return _this;
  }

  _createClass(SetsGrid, [{
    key: "renderPics",
    value: function renderPics(posts) {
      return posts.map(function (post) {
        return _react.default.createElement("div", {
          key: post.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          className: "jsx-".concat(_main.default.__scopedHash, " jsx-").concat(_elements.default.__scopedHash) + " " + "pure-u-1-2 pure-u-sm-1-2 pure-u-md-1-3 grig-img-container hovereffect"
        }, _react.default.createElement(_style.default, {
          styleId: _main.default.__scopedHash,
          css: _main.default.__scoped
        }), _react.default.createElement(_style.default, {
          styleId: _elements.default.__scopedHash,
          css: _elements.default.__scoped
        }), _react.default.createElement("img", {
          src: post.thumbnail,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          className: "jsx-".concat(_main.default.__scopedHash, " jsx-").concat(_elements.default.__scopedHash) + " " + "grig-img"
        }), _react.default.createElement(_routes.Link, {
          route: "post",
          params: {
            postId: post.id
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          }
        }, _react.default.createElement("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          className: "jsx-".concat(_main.default.__scopedHash, " jsx-").concat(_elements.default.__scopedHash)
        }, _react.default.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          className: "jsx-".concat(_main.default.__scopedHash, " jsx-").concat(_elements.default.__scopedHash) + " " + "overlay"
        }, _react.default.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          className: "jsx-".concat(_main.default.__scopedHash, " jsx-").concat(_elements.default.__scopedHash) + " " + "ul-main-list"
        }, post.md ? _react.default.createElement("ul", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          className: "jsx-".concat(_main.default.__scopedHash, " jsx-").concat(_elements.default.__scopedHash) + " " + "md-white"
        }, _react.default.createElement("li", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          className: "jsx-".concat(_main.default.__scopedHash, " jsx-").concat(_elements.default.__scopedHash)
        }, post.md)) : null, post.ph ? _react.default.createElement("ul", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          className: "jsx-".concat(_main.default.__scopedHash, " jsx-").concat(_elements.default.__scopedHash) + " " + "ph-white"
        }, _react.default.createElement("li", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          className: "jsx-".concat(_main.default.__scopedHash, " jsx-").concat(_elements.default.__scopedHash)
        }, post.ph)) : null)))));
      });
    }
  }, {
    key: "fetchMorePosts",
    value: function fetchMorePosts() {
      var currentPhotoSize = this.state.to += this.state.increment_size;
      this.setState({
        to: currentPhotoSize
      });
      this.props.dispatch((0, _postActions.fetchSetsPosts)(this.state.from, this.state.to));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        className: "jsx-".concat(_main.default.__scopedHash, " jsx-").concat(_loader.default.__scopedHash)
      }, _react.default.createElement(_style.default, {
        styleId: _main.default.__scopedHash,
        css: _main.default.__scoped
      }), _react.default.createElement(_style.default, {
        styleId: _loader.default.__scopedHash,
        css: _loader.default.__scoped
      }), this.props.fetched ? _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        className: "jsx-".concat(_main.default.__scopedHash, " jsx-").concat(_loader.default.__scopedHash) + " " + "wrapper"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        className: "jsx-".concat(_main.default.__scopedHash, " jsx-").concat(_loader.default.__scopedHash) + " " + "content-wrapper"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        className: "jsx-".concat(_main.default.__scopedHash, " jsx-").concat(_loader.default.__scopedHash) + " " + "content"
      }, _react.default.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        className: "jsx-".concat(_main.default.__scopedHash, " jsx-").concat(_loader.default.__scopedHash)
      }, "\u0417\u0430\u0440\u0443\u0431\u0435\u0436\u043D\u044B\u0435"), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        className: "jsx-".concat(_main.default.__scopedHash, " jsx-").concat(_loader.default.__scopedHash) + " " + "pure-g"
      }, this.renderPics(this.props.post)), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        className: "jsx-".concat(_main.default.__scopedHash, " jsx-").concat(_loader.default.__scopedHash) + " " + "under-button"
      }, _react.default.createElement("a", {
        onClick: function onClick() {
          return _this2.fetchMorePosts();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        className: "jsx-".concat(_main.default.__scopedHash, " jsx-").concat(_loader.default.__scopedHash)
      }, " ", _react.default.createElement("img", {
        src: "/static/img/64/load-more.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        className: "jsx-".concat(_main.default.__scopedHash, " jsx-").concat(_loader.default.__scopedHash)
      }))))), _react.default.createElement("div", {
        style: {
          opacity: 0
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        className: "jsx-".concat(_main.default.__scopedHash, " jsx-").concat(_loader.default.__scopedHash)
      }, _react.default.createElement(_sidebar.default, {
        width: this.props.width,
        mobileViewSize: this.props.mobileViewSize,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }))) : null);
    }
  }]);

  return SetsGrid;
}(_react.default.Component);

function mapStateToProps(state) {
  var sets = state.sets;
  return sets;
}

var _default = (0, _reactRedux.connect)(mapStateToProps)(SetsGrid);

exports.default = _default;

/***/ }),

/***/ "./src/components/layouts/MainLayoutWithNavigation.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _style = _interopRequireDefault(__webpack_require__("styled-jsx/style"));

var _react = _interopRequireDefault(__webpack_require__("react"));

var _head = _interopRequireDefault(__webpack_require__("next/head"));

var _navbar = _interopRequireDefault(__webpack_require__("./src/components/core/navbar.js"));

var _analytics = __webpack_require__("./src/utils/analytics.js");

var _jsxFileName = "/Users/andrefedorenko/Dropbox/Studium/mersi/bachelor/frontend/src/components/layouts/MainLayoutWithNavigation.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MainLayoutWithNavigation =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MainLayoutWithNavigation, _React$Component);

  function MainLayoutWithNavigation() {
    _classCallCheck(this, MainLayoutWithNavigation);

    return _possibleConstructorReturn(this, (MainLayoutWithNavigation.__proto__ || Object.getPrototypeOf(MainLayoutWithNavigation)).apply(this, arguments));
  }

  _createClass(MainLayoutWithNavigation, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!window.GA_INITIALIZED) {
        (0, _analytics.initGA)();
        window.GA_INITIALIZED = true;
      }

      (0, _analytics.logPageView)();
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        className: "jsx-3805734507"
      }, _react.default.createElement(_style.default, {
        styleId: "3805734507",
        css: "html,body{background:#FFF;margin:0;padding:0;font:100% 'Noto Sans',sans-serif;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:100%;}h1{position:relative;font-weight:600;font-size:0.9em;text-transform:uppercase;-webkit-letter-spacing:0.3em;-moz-letter-spacing:0.3em;-ms-letter-spacing:0.3em;letter-spacing:0.3em;overflow:hidden;}h1:before{content:\"\";position:absolute;left:0;bottom:0;height:2px;width:4em;-webkit-animation:slide-in 1s ease-in both 0.5s;animation:slide-in 1s ease-in both 0.5s;}h1.no-underscore:before{display:none;}.child-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;min-height:100vh;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-top:5px;margin-bottom:5px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.wrapper{max-width:1160px;margin:0 auto;position:relative;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;}.content-wrapper{width:100%;}.content{clear:both;overflow:auto;}.content h1{margin-left:5px;}.grid-list-container{margin-top:20px;margin-bottom:20px;}.swiper-container{z-index:0;}@-webkit-keyframes slide-in{0%{-webkit-transform:translate3d(-180%,0,0);-ms-transform:translate3d(-180%,0,0);transform:translate3d(-180%,0,0);}100%{-webkit-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0);}}@keyframes slide-in{0%{-webkit-transform:translate3d(-180%,0,0);-ms-transform:translate3d(-180%,0,0);transform:translate3d(-180%,0,0);}100%{-webkit-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0);}}@-webkit-keyframes slide-up{0%{opacity:0;-webkit-transform:translate3d(0,100%,0);-ms-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);}90%{opacity:1;}100%{-webkit-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0);}}@keyframes slide-up{0%{opacity:0;-webkit-transform:translate3d(0,100%,0);-ms-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);}90%{opacity:1;}100%{-webkit-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0);}}@-webkit-keyframes fade-in{0%{opacity:0;}100%{opacity:1;}}@keyframes fade-in{0%{opacity:0;}100%{opacity:1;}}.grig-img-container{background-color:transparent;border:0;border-radius:0;}.grig-img-container img{width:100%;height:265px;object-fit:cover;padding-left:5px;padding-bottom:5px;}.hovereffect{overflow:hidden;position:relative;text-align:center;cursor:default;}.hovereffect .overlay{position:absolute;overflow:hidden;cursor:pointer;width:80%;height:80%;left:10%;top:10%;border-bottom:1px solid #FFF;border-top:1px solid #FFF;-webkit-transition:opacity 0.35s,-webkit-transform 0.35s;-webkit-transition:opacity 0.35s,-webkit-transform 0.35s;-webkit-transition:opacity 0.35s,transform 0.35s;transition:opacity 0.35s,transform 0.35s;-webkit-transform:scale(0,1);-ms-transform:scale(0,1);-webkit-transform:scale(0,1);-ms-transform:scale(0,1);transform:scale(0,1);}.hovereffect:hover .overlay{opacity:1;-webkit-filter:alpha(opacity=100);filter:alpha(opacity=100);-webkit-transform:scale(1);-ms-transform:scale(1);-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}.hovereffect img{display:block;position:relative;-webkit-transition:all 0.35s;-webkit-transition:all 0.35s;transition:all 0.35s;}.hovereffect:hover img{-webkit-filter:url('data:image/svg+xml;charset=utf-8,<svg xmlns=\"http://www.w3.org/2000/svg\"><filter id=\"filter\"><feComponentTransfer color-interpolation-filters=\"sRGB\"><feFuncR type=\"linear\" slope=\"0.6\" /><feFuncG type=\"linear\" slope=\"0.6\" /><feFuncB type=\"linear\" slope=\"0.6\" /></feComponentTransfer></filter></svg>#filter');filter:url('data:image/svg+xml;charset=utf-8,<svg xmlns=\"http://www.w3.org/2000/svg\"><filter id=\"filter\"><feComponentTransfer color-interpolation-filters=\"sRGB\"><feFuncR type=\"linear\" slope=\"0.6\" /><feFuncG type=\"linear\" slope=\"0.6\" /><feFuncB type=\"linear\" slope=\"0.6\" /></feComponentTransfer></filter></svg>#filter');-webkit-filter:brightness(0.6);filter:brightness(0.6);-webkit-filter:brightness(0.6);}.hovereffect h2{text-transform:uppercase;text-align:center;position:relative;font-size:17px;background-color:transparent;color:#FFF;padding:1em 0;opacity:0;-webkit-filter:alpha(opacity=0);filter:alpha(opacity=0);-webkit-transition:opacity 0.35s,-webkit-transform 0.35s;-webkit-transition:opacity 0.35s,-webkit-transform 0.35s;-webkit-transition:opacity 0.35s,transform 0.35s;transition:opacity 0.35s,transform 0.35s;-webkit-transform:translate3d(0,-100%,0);-webkit-transform:translate3d(0,-100%,0);-ms-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);}.hovereffect .overlay .hovereffect a,.hovereffect p{color:#FFF;-webkit-filter:alpha(opacity=0);filter:alpha(opacity=0);-webkit-transition:opacity 0.35s,-webkit-transform 0.35s;-webkit-transition:opacity 0.35s,-webkit-transform 0.35s;-webkit-transition:opacity 0.35s,transform 0.35s;transition:opacity 0.35s,transform 0.35s;-webkit-transform:translate3d(0,100%,0);-webkit-transform:translate3d(0,100%,0);-ms-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);}.hovereffect:hover a,.hovereffect:hover p,.hovereffect:hover h2{opacity:1;-webkit-filter:alpha(opacity=100);filter:alpha(opacity=100);-webkit-transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0);}.pure-g{text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL2xheW91dHMvTWFpbkxheW91dFdpdGhOYXZpZ2F0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1CbUMsQUFHbUIsQUFTRSxBQU9MLEFBUUUsQUFHRixBQVFJLEFBTU4sQUFHQSxBQUdPLEFBR0YsQUFJTixBQU8yQixBQUVKLEFBSXJCLEFBR0EsQUFFcUIsQUFJckIsQUFFQSxBQUdpQixBQUtsQixBQVNLLEFBTUUsQUFnQlIsQUFPSSxBQU1pVCxBQUt0UyxBQWdCZCxBQVVELEFBTVEsVUFqSFAsQUFjeUIsQUFFdkIsQUFNQSxBQUVBLEFBd0NhLEFBNENBLENBakpOLEFBd0JSLEFBSUUsQUEwQ0QsQUFtRVcsRUFsSVIsQ0FxR0UsRUE1SFQsQUE4Q1UsQUFJQSxBQTZDRCxDQTVESixDQTFCRSxBQTRGQSxBQWlFRyxNQS9FRixDQXRGUCxBQTJDSyxBQTJGRyxJQXRIVCxBQWdFQSxFQTdDUyxDQXlGVyxFQW5IYixBQXNGRSxBQU1ILENBcEdtQixBQWdEZCxDQWhDVCxFQWdFSyxHQU1DLEVBZ0RDLEVBckhMLElBa0JPLEFBa0VWLENBNUZlLEVBc0ZWLEVBZkUsRUE5REwsRUFxRU8sQ0FlUixFQXNCVSxBQVdOLEtBcEgyQixDQTRFMUIsQUF5RDBDLENBdko3QyxFQXNHSixBQWFrQixBQTRDWSxJQXZJdEIsQ0FmSSxDQThIUSxDQWpEVCxFQWlCWixRQUNxQixJQS9FUCxNQTJGQyxFQXpEVyxBQVNBLE1Bb0V2QixFQXdCb0IsSUF2R08sQUFrRWhCLEtBbEJJLEFBZ0NaLEVBekV1QixFQXFEbEIsSUFtQ3VCLE1BZGhDLFVBQ2MsRUExSUYsQUF5R29DLFNBeEVyQyxHQWhCc0IsZUFRNUIsT0FoQkMsUUFpQkUsS0EwRkUsR0EzR0gsSUFrSXlDLEdBakNoQixHQS9FdkIsSUFvSWEsY0E5SnBCLFlBQUMscUJBMkk2QixrQkFZQSx3QkE3SHRCLGdCQThIYyxtQ0E5Q0osNkJBQ0oseUJBQ0osQUFnQ3FCLG1CQVlSLHNCQVhBLGtDQWpDWiw2RUFpQ2EsOEZBaEJiLHNEQUNRLCtCQUFDIiwiZmlsZSI6InNyYy9jb21wb25lbnRzL2xheW91dHMvTWFpbkxheW91dFdpdGhOYXZpZ2F0aW9uLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hbmRyZWZlZG9yZW5rby9Ecm9wYm94L1N0dWRpdW0vbWVyc2kvYmFjaGVsb3IvZnJvbnRlbmQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvcmUvbmF2YmFyJ1xuaW1wb3J0IHtpbml0R0EsIGxvZ1BhZ2VWaWV3fSBmcm9tICcuLi8uLi91dGlscy9hbmFseXRpY3MnXG5cblxuY2xhc3MgTWFpbkxheW91dFdpdGhOYXZpZ2F0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBpZiAoIXdpbmRvdy5HQV9JTklUSUFMSVpFRCkge1xuICAgICAgICAgICAgaW5pdEdBKCk7XG4gICAgICAgICAgICB3aW5kb3cuR0FfSU5JVElBTElaRUQgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgbG9nUGFnZVZpZXcoKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgaHRtbCxcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI0ZGRjtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBmb250OiAxMDAlICdOb3RvIFNhbnMnLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgaDEge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4zZW07XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuXG5cbiAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIGhlaWdodDogMnB4O1xuICAgICAgICAgICAgd2lkdGg6IDRlbTtcblxuICAgICAgICAgICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmxhY2s7XG4gICAgICAgICAgICBhbmltYXRpb246IHNsaWRlLWluIDFzIGVhc2UtaW4gYm90aCAwLjVzO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICYubm8tdW5kZXJzY29yZXtcbiAgICAgICAgICAgICY6YmVmb3Jle1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuY2hpbGQtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIC53cmFwcGVyIHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDExNjBweDtcbiAgICAgICAgICAvL3dpZHRoOjc1JTtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250ZW50LXdyYXBwZXIge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgIGNsZWFyOiBib3RoO1xuICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICAgICYgaDEge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuZ3JpZC1saXN0LWNvbnRhaW5lcntcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuc3dpcGVyLWNvbnRhaW5lciB7XG4gICAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgfVxuXG5cblxuICAgICAgICAvKipcbiAgICAgICAgICogQW5pbWF0aW9uc1xuICAgICAgICAgKi9cblxuICAgICAgICBAa2V5ZnJhbWVzIHNsaWRlLWluIHtcbiAgICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xODAlLCAwLCAwKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIEBrZXlmcmFtZXMgc2xpZGUtdXAge1xuICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApO1xuICAgICAgICAgIH1cbiAgICAgICAgICA5MCUge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIEBrZXlmcmFtZXMgZmFkZS1pbiB7XG4gICAgICAgICAgMCUge1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5ncmlnLWltZy1jb250YWluZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuXG4gICAgICAgIH1cblxuICAgICAgICAuZ3JpZy1pbWctY29udGFpbmVyIGltZyB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAyNjVweDtcbiAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuXG4gICAgICAgIH1cblxuICAgICAgICAvKkhvdmVyKi9cblxuICAgICAgICAuaG92ZXJlZmZlY3Qge1xuICAgICAgICAgIC8qZmxvYXQ6IGxlZnQ7Ki9cbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgICB9XG5cbiAgICAgICAgLmhvdmVyZWZmZWN0IC5vdmVybGF5IHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICBoZWlnaHQ6IDgwJTtcbiAgICAgICAgICBsZWZ0OiAxMCU7XG4gICAgICAgICAgdG9wOiAxMCU7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNGRkY7XG4gICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNGRkY7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMzVzLCAtd2Via2l0LXRyYW5zZm9ybSAwLjM1cztcbiAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMzVzLCB0cmFuc2Zvcm0gMC4zNXM7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAsIDEpO1xuICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAsIDEpO1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCwgMSk7XG4gICAgICAgIH1cblxuICAgICAgICAuaG92ZXJlZmZlY3Q6aG92ZXIgLm92ZXJsYXkge1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTEwMCk7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgIH1cblxuICAgICAgICAuaG92ZXJlZmZlY3QgaW1nIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zNXM7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMzVzO1xuICAgICAgICB9XG5cbiAgICAgICAgLmhvdmVyZWZmZWN0OmhvdmVyIGltZyB7XG4gICAgICAgICAgZmlsdGVyOiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxmaWx0ZXIgaWQ9XCJmaWx0ZXJcIj48ZmVDb21wb25lbnRUcmFuc2ZlciBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9XCJzUkdCXCI+PGZlRnVuY1IgdHlwZT1cImxpbmVhclwiIHNsb3BlPVwiMC42XCIgLz48ZmVGdW5jRyB0eXBlPVwibGluZWFyXCIgc2xvcGU9XCIwLjZcIiAvPjxmZUZ1bmNCIHR5cGU9XCJsaW5lYXJcIiBzbG9wZT1cIjAuNlwiIC8+PC9mZUNvbXBvbmVudFRyYW5zZmVyPjwvZmlsdGVyPjwvc3ZnPiNmaWx0ZXInKTtcbiAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC42KTtcbiAgICAgICAgICAtd2Via2l0LWZpbHRlcjogYnJpZ2h0bmVzcygwLjYpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmhvdmVyZWZmZWN0IGgyIHtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGNvbG9yOiAjRkZGO1xuICAgICAgICAgIHBhZGRpbmc6IDFlbSAwO1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjM1cywgLXdlYmtpdC10cmFuc2Zvcm0gMC4zNXM7XG4gICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjM1cywgdHJhbnNmb3JtIDAuMzVzO1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XG4gICAgICAgIH0uaG92ZXJlZmZlY3QgLm92ZXJsYXlcblxuICAgICAgICAuaG92ZXJlZmZlY3QgYSwgLmhvdmVyZWZmZWN0IHAge1xuICAgICAgICAgIGNvbG9yOiAjRkZGO1xuICAgICAgICAgIC8qcGFkZGluZzogMWVtIDA7Ki9cbiAgICAgICAgICAvKm9wYWNpdHk6IDA7Ki9cbiAgICAgICAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMzVzLCAtd2Via2l0LXRyYW5zZm9ybSAwLjM1cztcbiAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMzVzLCB0cmFuc2Zvcm0gMC4zNXM7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XG4gICAgICAgIH1cblxuICAgICAgICAuaG92ZXJlZmZlY3Q6aG92ZXIgYSwgLmhvdmVyZWZmZWN0OmhvdmVyIHAsIC5ob3ZlcmVmZmVjdDpob3ZlciBoMiB7XG4gICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MTAwKTtcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vR1JJRFxuICAgICAgICAucHVyZS1ne1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCI1N3g1N1wiIGhyZWY9XCIvc3RhdGljL2ltZy9mL2FwcGxlLWljb24tNTd4NTcucG5nXCIvPlxuICAgICAgICAgICAgICAgICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCI2MHg2MFwiIGhyZWY9XCIvc3RhdGljL2ltZy9mL2FwcGxlLWljb24tNjB4NjAucG5nXCIvPlxuICAgICAgICAgICAgICAgICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCI3Mng3MlwiIGhyZWY9XCIvc3RhdGljL2ltZy9mL2FwcGxlLWljb24tNzJ4NzIucG5nXCIvPlxuICAgICAgICAgICAgICAgICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCI3Nng3NlwiIGhyZWY9XCIvc3RhdGljL2ltZy9mL2FwcGxlLWljb24tNzZ4NzYucG5nXCIvPlxuICAgICAgICAgICAgICAgICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCIxMTR4MTE0XCIgaHJlZj1cIi9zdGF0aWMvaW1nL2YvYXBwbGUtaWNvbi0xMTR4MTE0LnBuZ1wiLz5cbiAgICAgICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiMTIweDEyMFwiIGhyZWY9XCIvc3RhdGljL2ltZy9mL2FwcGxlLWljb24tMTIweDEyMC5wbmdcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjE0NHgxNDRcIiBocmVmPVwiL3N0YXRpYy9pbWcvZi9hcHBsZS1pY29uLTE0NHgxNDQucG5nXCIvPlxuICAgICAgICAgICAgICAgICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCIxNTJ4MTUyXCIgaHJlZj1cIi9zdGF0aWMvaW1nL2YvYXBwbGUtaWNvbi0xNTJ4MTUyLnBuZ1wiLz5cbiAgICAgICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiMTgweDE4MFwiIGhyZWY9XCIvc3RhdGljL2ltZy9mL2FwcGxlLWljb24tMTgweDE4MC5wbmdcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgc2l6ZXM9XCIxOTJ4MTkyXCIgaHJlZj1cIi9zdGF0aWMvaW1nL2YvYW5kcm9pZC1pY29uLTE5MngxOTIucG5nXCIvPlxuICAgICAgICAgICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIHNpemVzPVwiMzJ4MzJcIiBocmVmPVwiL3N0YXRpYy9pbWcvZi9mYXZpY29uLTMyeDMyLnBuZ1wiLz5cbiAgICAgICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiBzaXplcz1cIjk2eDk2XCIgaHJlZj1cIi9zdGF0aWMvaW1nL2YvZmF2aWNvbi05Nng5Ni5wbmdcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgc2l6ZXM9XCIxNngxNlwiIGhyZWY9XCIvc3RhdGljL2ltZy9mL2Zhdmljb24tMTZ4MTYucG5nXCIvPlxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBjaGFyU2V0PXt0aGlzLnByb3BzLm1ldGEuY2hhcnNldH0vPlxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXt0aGlzLnByb3BzLm1ldGEuZGVzY3JpcHRpb259Lz5cbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImtleXdvcmRzXCIgY29udGVudD17dGhpcy5wcm9wcy5tZXRhLmtleXdvcmRzfS8+XG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImNhbm9uaWNhbFwiIGhyZWY9e3RoaXMucHJvcHMubWV0YS5jYW5vbmljYWx9Lz5cbiAgICAgICAgICAgICAgICAgICAgPHRpdGxlPnt0aGlzLnByb3BzLm1ldGEudGl0bGV9PC90aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIvPlxuICAgICAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU5vdG8rU2Fuc1wiIHJlbD1cInN0eWxlc2hlZXRcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvU3dpcGVyLzMuNC4xL2Nzcy9zd2lwZXIubWluLmNzc1wiLz5cbiAgICAgICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL3VucGtnLmNvbS9wdXJlY3NzQDEuMC4wL2J1aWxkL3B1cmUtbWluLmNzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGludGVncml0eT1cInNoYTM4NC1ubjRIUEU4bFRIeVZ0ZkNCaTV5VzlkMjBGalQ4Qkp3VVh5V1pUOUluTFlheDE0UkRqQmo0NkxtU3p0a21OUDl3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIi8+XG4gICAgICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgICAgIDxOYXZiYXIvPlxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgPC9kaXY+KVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpbkxheW91dFdpdGhOYXZpZ2F0aW9uO1xuIl19 */\n/*@ sourceURL=src/components/layouts/MainLayoutWithNavigation.js */"
      }), _react.default.createElement(_head.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        }
      }, _react.default.createElement("link", {
        rel: "apple-touch-icon",
        sizes: "57x57",
        href: "/static/img/f/apple-icon-57x57.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        },
        className: "jsx-3805734507"
      }), _react.default.createElement("link", {
        rel: "apple-touch-icon",
        sizes: "60x60",
        href: "/static/img/f/apple-icon-60x60.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        },
        className: "jsx-3805734507"
      }), _react.default.createElement("link", {
        rel: "apple-touch-icon",
        sizes: "72x72",
        href: "/static/img/f/apple-icon-72x72.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        },
        className: "jsx-3805734507"
      }), _react.default.createElement("link", {
        rel: "apple-touch-icon",
        sizes: "76x76",
        href: "/static/img/f/apple-icon-76x76.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        },
        className: "jsx-3805734507"
      }), _react.default.createElement("link", {
        rel: "apple-touch-icon",
        sizes: "114x114",
        href: "/static/img/f/apple-icon-114x114.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        },
        className: "jsx-3805734507"
      }), _react.default.createElement("link", {
        rel: "apple-touch-icon",
        sizes: "120x120",
        href: "/static/img/f/apple-icon-120x120.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        },
        className: "jsx-3805734507"
      }), _react.default.createElement("link", {
        rel: "apple-touch-icon",
        sizes: "144x144",
        href: "/static/img/f/apple-icon-144x144.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        },
        className: "jsx-3805734507"
      }), _react.default.createElement("link", {
        rel: "apple-touch-icon",
        sizes: "152x152",
        href: "/static/img/f/apple-icon-152x152.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        },
        className: "jsx-3805734507"
      }), _react.default.createElement("link", {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/static/img/f/apple-icon-180x180.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        },
        className: "jsx-3805734507"
      }), _react.default.createElement("link", {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        href: "/static/img/f/android-icon-192x192.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        },
        className: "jsx-3805734507"
      }), _react.default.createElement("link", {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/static/img/f/favicon-32x32.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        },
        className: "jsx-3805734507"
      }), _react.default.createElement("link", {
        rel: "icon",
        type: "image/png",
        sizes: "96x96",
        href: "/static/img/f/favicon-96x96.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        },
        className: "jsx-3805734507"
      }), _react.default.createElement("link", {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/static/img/f/favicon-16x16.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        },
        className: "jsx-3805734507"
      }), _react.default.createElement("meta", {
        charSet: this.props.meta.charset,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        },
        className: "jsx-3805734507"
      }), _react.default.createElement("meta", {
        name: "description",
        content: this.props.meta.description,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        },
        className: "jsx-3805734507"
      }), _react.default.createElement("meta", {
        name: "keywords",
        content: this.props.meta.keywords,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        },
        className: "jsx-3805734507"
      }), _react.default.createElement("link", {
        rel: "canonical",
        href: this.props.meta.canonical,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257
        },
        className: "jsx-3805734507"
      }), _react.default.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        },
        className: "jsx-3805734507"
      }, this.props.meta.title), _react.default.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        },
        className: "jsx-3805734507"
      }), _react.default.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Noto+Sans",
        rel: "stylesheet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260
        },
        className: "jsx-3805734507"
      }), _react.default.createElement("link", {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.4.1/css/swiper.min.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        },
        className: "jsx-3805734507"
      }), _react.default.createElement("link", {
        rel: "stylesheet",
        href: "https://unpkg.com/purecss@1.0.0/build/pure-min.css",
        integrity: "sha384-nn4HPE8lTHyVtfCBi5yW9d20FjT8BJwUXyWZT9InLYax14RDjBj46LmSztkmNP9w",
        crossorigin: "anonymous",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        },
        className: "jsx-3805734507"
      })), _react.default.createElement(_navbar.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        }
      }), this.props.children);
    }
  }]);

  return MainLayoutWithNavigation;
}(_react.default.Component);

var _default = MainLayoutWithNavigation;
exports.default = _default;

/***/ }),

/***/ "./src/components/posts/lists/top-native-slider.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _style = _interopRequireDefault(__webpack_require__("styled-jsx/style"));

var _react = _interopRequireDefault(__webpack_require__("react"));

var _link = _interopRequireDefault(__webpack_require__("next/link"));

var _reactIdSwiper = _interopRequireDefault(__webpack_require__("react-id-swiper"));

var _postActions = __webpack_require__("./src/actions/post/post-actions.js");

var _reactRedux = __webpack_require__("react-redux");

var _index = _interopRequireDefault(__webpack_require__("./res/styles/index.scss"));

var _jsxFileName = "/Users/andrefedorenko/Dropbox/Studium/mersi/bachelor/frontend/src/components/posts/lists/top-native-slider.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TopNativeSlider =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TopNativeSlider, _React$Component);

  _createClass(TopNativeSlider, null, [{
    key: "initialAction",
    value: function initialAction() {
      return (0, _postActions.fetchTopNative)(0, 10);
    }
  }]);

  function TopNativeSlider(props) {
    var _this;

    _classCallCheck(this, TopNativeSlider);

    _this = _possibleConstructorReturn(this, (TopNativeSlider.__proto__ || Object.getPrototypeOf(TopNativeSlider)).call(this, props));
    console.log("AAA");
    console.log(_this.props);
    _this.state = {
      fetched: _this.props.fetched,
      post: _this.props.post
    };
    return _this;
  }

  _createClass(TopNativeSlider, [{
    key: "render",
    value: function render() {
      var params = {
        slidesPerView: 3,
        paginationClickable: true,
        freeMode: true,
        loop: true
      };
      return _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        className: "jsx-".concat(_index.default.__scopedHash)
      }, _react.default.createElement(_style.default, {
        styleId: _index.default.__scopedHash,
        css: _index.default.__scoped
      }), this.state.fetched ? _react.default.createElement(_reactIdSwiper.default, _extends({}, params, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }), this.getSlides(this.state.post)) : null);
    }
  }, {
    key: "getSlides",
    value: function getSlides(posts) {
      return posts.map(function (post) {
        return _react.default.createElement("div", {
          key: post.id,
          className: "hovereffect",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          }
        }, _react.default.createElement("img", {
          className: "slider-img",
          src: post.thumbnail,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          }
        }), _react.default.createElement(_link.default, {
          href: '/post/' + post.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          }
        }, _react.default.createElement("div", {
          className: "overlay",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          }
        }, _react.default.createElement("div", {
          className: "ul-main-list",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          }
        }, post.md ? _react.default.createElement("ul", {
          className: "md-white",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          }
        }, _react.default.createElement("li", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          }
        }, post.md)) : null, post.ph ? _react.default.createElement("ul", {
          className: "ph-white",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          }
        }, _react.default.createElement("li", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          }
        }, post.ph)) : null))));
      });
    }
  }]);

  return TopNativeSlider;
}(_react.default.Component);

function mapStateToProps(state) {
  var topNative = state.topNative;
  return topNative;
}

var _default = (0, _reactRedux.connect)(mapStateToProps)(TopNativeSlider);

exports.default = _default;

/***/ }),

/***/ "./src/constants/abstract-rest-client.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HOST = void 0;

//export const HOST = () =>  'http://localhost:8080/';
// export const HOST = () => {
//     let backend = typeof window === 'undefined' ? 'http://backend:8080/' : window.location.protocol + "//" + window.location.hostname +  "/";
//     return backend;
// };
var HOST = function HOST() {
  return 'https://youngfolks.ru/';
};

exports.HOST = HOST;

/***/ }),

/***/ "./src/constants/post-rest-client.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IS_POST_ALREADY_EXIST_BY_USER = exports.SEARCH_POSTS = exports.FIND_RELATED_POSTS = exports.FIND_TOP_NATIVE_FROM_TO = exports.FIND_TOP_SETS_FROM_TO = exports.FIND_SETS_FROM_TO = exports.FIND_ART_FROM_TO = exports.FIND_NATIVE_FROM_TO = exports.FIND_POST_BY_ID = void 0;

var _abstractRestClient = __webpack_require__("./src/constants/abstract-rest-client.js");

var BACKEND_REST = "yf-services/rest/";
var FIND_POST_BY_ID = (0, _abstractRestClient.HOST)() + BACKEND_REST + 'post/';
exports.FIND_POST_BY_ID = FIND_POST_BY_ID;
var FIND_NATIVE_FROM_TO = (0, _abstractRestClient.HOST)() + BACKEND_REST + 'post/new/yf-photo-native/photo';
exports.FIND_NATIVE_FROM_TO = FIND_NATIVE_FROM_TO;
var FIND_ART_FROM_TO = (0, _abstractRestClient.HOST)() + BACKEND_REST + 'post/new/yf-photo-art/photo';
exports.FIND_ART_FROM_TO = FIND_ART_FROM_TO;
var FIND_SETS_FROM_TO = (0, _abstractRestClient.HOST)() + BACKEND_REST + 'post/new/yf-photo-sets/photo';
exports.FIND_SETS_FROM_TO = FIND_SETS_FROM_TO;
var FIND_TOP_SETS_FROM_TO = (0, _abstractRestClient.HOST)() + BACKEND_REST + 'post/top/yf-sets-top/photo';
exports.FIND_TOP_SETS_FROM_TO = FIND_TOP_SETS_FROM_TO;
var FIND_TOP_NATIVE_FROM_TO = (0, _abstractRestClient.HOST)() + BACKEND_REST + 'post/top/yf-native-top/photo';
exports.FIND_TOP_NATIVE_FROM_TO = FIND_TOP_NATIVE_FROM_TO;
var FIND_RELATED_POSTS = (0, _abstractRestClient.HOST)() + BACKEND_REST + 'post/search/related';
exports.FIND_RELATED_POSTS = FIND_RELATED_POSTS;
var SEARCH_POSTS = (0, _abstractRestClient.HOST)() + BACKEND_REST + 'post/search/';
exports.SEARCH_POSTS = SEARCH_POSTS;
var IS_POST_ALREADY_EXIST_BY_USER = (0, _abstractRestClient.HOST)() + BACKEND_REST + "dashboard/isexist/post";
exports.IS_POST_ALREADY_EXIST_BY_USER = IS_POST_ALREADY_EXIST_BY_USER;

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

/***/ "./src/messages/core.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ART_PAGE = exports.SETS_PAGE = exports.NATIVE_PAGE = exports.MAIN_PAGE = void 0;
// MENU
var MAIN_PAGE = "Главная";
exports.MAIN_PAGE = MAIN_PAGE;
var NATIVE_PAGE = "Наши";
exports.NATIVE_PAGE = NATIVE_PAGE;
var SETS_PAGE = "Зарубежные";
exports.SETS_PAGE = SETS_PAGE;
var ART_PAGE = "Art";
exports.ART_PAGE = ART_PAGE;

/***/ }),

/***/ "./src/messages/meta.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DESCRIPTION_ART_LIST = exports.KEYWORDS_ART_LIST = exports.TITLE_ART_LIST = exports.DESCRIPTION_SETS_LIST = exports.KEYWORDS_SETS_LIST = exports.TITLE_SETS_LIST = exports.DESCRIPTION_NATIVE_LIST = exports.KEYWORDS_NATIVE_LIST = exports.TITLE_NATIVE_LIST = exports.DESCRIPTION_SEARCH = exports.KEYWORDS_SEARCH = exports.KEYWORDS_HOME = exports.DESCRIPTION_HOME = exports.TITLE_HOME = exports.DESCRIPTION_SINGLE = exports.KEYWORDS_SINGLE = exports.BRAND = exports.PHOTOGRAPHER = exports.MODEL = exports.CHARSET = exports.CANONICIAL_HOST = void 0;
var CANONICIAL_HOST = "http://youngfolks.ru/post";
exports.CANONICIAL_HOST = CANONICIAL_HOST;
var CHARSET = "utf-8"; // SINGLE

exports.CHARSET = CHARSET;
var MODEL = "Модель";
exports.MODEL = MODEL;
var PHOTOGRAPHER = "Фотограф";
exports.PHOTOGRAPHER = PHOTOGRAPHER;
var BRAND = "Young Folks";
exports.BRAND = BRAND;
var KEYWORDS_SINGLE = ["Модели", "Фотографы", "Россия", "Украина", "Модельное Агентство"];
exports.KEYWORDS_SINGLE = KEYWORDS_SINGLE;
var DESCRIPTION_SINGLE = "Модельное агентство. Модели и фотографы из Украины, России, Европы, США"; // HOME

exports.DESCRIPTION_SINGLE = DESCRIPTION_SINGLE;
var TITLE_HOME = "Young Folks";
exports.TITLE_HOME = TITLE_HOME;
var DESCRIPTION_HOME = "Young Folks. Модельное агентство. Модели и фотографы из Украины, России, Европы, США";
exports.DESCRIPTION_HOME = DESCRIPTION_HOME;
var KEYWORDS_HOME = ["Модели", "Фотографы", "Россия", "Украина", "Модельное Агентство"]; // SEARCH

exports.KEYWORDS_HOME = KEYWORDS_HOME;
var KEYWORDS_SEARCH = ["Поиск моделей", "Модели", "Фотографы", "Россия", "Украина", "Модельное Агентство"];
exports.KEYWORDS_SEARCH = KEYWORDS_SEARCH;
var DESCRIPTION_SEARCH = "Модельное агентство. Модели и фотографы из Украины, России, Европы, США"; // NATIVE LIST

exports.DESCRIPTION_SEARCH = DESCRIPTION_SEARCH;
var TITLE_NATIVE_LIST = "Модели из стран СНГ - Young Folks";
exports.TITLE_NATIVE_LIST = TITLE_NATIVE_LIST;
var KEYWORDS_NATIVE_LIST = ["Русские модели", "Украинские модели", "Модели из СНГ", "Поиск моделей", "Модели", "Фотографы", "Россия", "Украина", "Модельное Агентство"];
exports.KEYWORDS_NATIVE_LIST = KEYWORDS_NATIVE_LIST;
var DESCRIPTION_NATIVE_LIST = "Модельное агентство. Модели и фотографы из Украины, России, Европы, США"; // SETS LIST

exports.DESCRIPTION_NATIVE_LIST = DESCRIPTION_NATIVE_LIST;
var TITLE_SETS_LIST = "Зарубежные модели - Young Folks";
exports.TITLE_SETS_LIST = TITLE_SETS_LIST;
var KEYWORDS_SETS_LIST = ["Модели из США", "Модели из Европы", "Поиск моделей", "Модели", "Фотографы", "Россия", "Украина", "Модельное Агентство"];
exports.KEYWORDS_SETS_LIST = KEYWORDS_SETS_LIST;
var DESCRIPTION_SETS_LIST = "Модельное агентство. Модели и фотографы из Украины, России, Европы, США"; // ART LIST

exports.DESCRIPTION_SETS_LIST = DESCRIPTION_SETS_LIST;
var TITLE_ART_LIST = "Картины Art - Young Folks";
exports.TITLE_ART_LIST = TITLE_ART_LIST;
var KEYWORDS_ART_LIST = ["Эротические картины", "ART", "Поиск моделей", "Модели", "Фотографы", "Россия", "Украина", "Модельное Агентство"];
exports.KEYWORDS_ART_LIST = KEYWORDS_ART_LIST;
var DESCRIPTION_ART_LIST = "Модельное агентство. Модели и фотографы из Украины, России, Европы, США";
exports.DESCRIPTION_ART_LIST = DESCRIPTION_ART_LIST;

/***/ }),

/***/ "./src/messages/utils.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GOOGLE_ANALYTICS_ID = void 0;
var GOOGLE_ANALYTICS_ID = 'UA-57052631-1';
exports.GOOGLE_ANALYTICS_ID = GOOGLE_ANALYTICS_ID;

/***/ }),

/***/ "./src/utils/analytics.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logException = exports.logEvent = exports.logPageView = exports.initGA = void 0;

var _reactGa = _interopRequireDefault(__webpack_require__("react-ga"));

var _utils = __webpack_require__("./src/messages/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initGA = function initGA() {
  _reactGa.default.initialize(_utils.GOOGLE_ANALYTICS_ID);
};

exports.initGA = initGA;

var logPageView = function logPageView() {
  _reactGa.default.set({
    page: window.location.pathname
  });

  _reactGa.default.pageview(window.location.pathname);
};

exports.logPageView = logPageView;

var logEvent = function logEvent() {
  var category = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (category && action) {
    _reactGa.default.event({
      category: category,
      action: action
    });
  }
};

exports.logEvent = logEvent;

var logException = function logException() {
  var description = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var fatal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (description) {
    _reactGa.default.exception({
      description: description,
      fatal: fatal
    });
  }
};

exports.logException = logException;

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "axios":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next-routes":
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-ga":
/***/ (function(module, exports) {

module.exports = require("react-ga");

/***/ }),

/***/ "react-id-swiper":
/***/ (function(module, exports) {

module.exports = require("react-id-swiper");

/***/ }),

/***/ "react-redux":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-vega":
/***/ (function(module, exports) {

module.exports = require("react-vega");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map