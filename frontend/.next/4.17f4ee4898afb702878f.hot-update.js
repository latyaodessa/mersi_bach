webpackHotUpdate(4,{

/***/ "./pages/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _gridPictures = _interopRequireDefault(__webpack_require__("./src/components/home/components/grid-pictures.js"));

var _MainLayoutWithNavigation = _interopRequireDefault(__webpack_require__("./src/components/layouts/MainLayoutWithNavigation.js"));

var _homeMetaGenerator = _interopRequireDefault(__webpack_require__("./src/components/home/components/homeMetaGenerator.js"));

var _VegaChart = _interopRequireDefault(__webpack_require__("./src/components/charts/VegaChart.js"));

var _jsxFileName = "/Users/andrefedorenko/Dropbox/Studium/mersi/bachelor/frontend/pages/index.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

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
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
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

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Index, "Index", "/Users/andrefedorenko/Dropbox/Studium/mersi/bachelor/frontend/pages/index.js");
  reactHotLoader.register(styles, "styles", "/Users/andrefedorenko/Dropbox/Studium/mersi/bachelor/frontend/pages/index.js");
  reactHotLoader.register(_default, "default", "/Users/andrefedorenko/Dropbox/Studium/mersi/bachelor/frontend/pages/index.js");
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.17f4ee4898afb702878f.hot-update.js.map