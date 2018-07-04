webpackHotUpdate(4,{

/***/ "./src/components/charts/VegaChart.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _reactVega = _interopRequireDefault(__webpack_require__("./node_modules/react-vega/dist/react-vega.min.js"));

var _jsxFileName = "/Users/andrefedorenko/Dropbox/Studium/mersi/bachelor/frontend/src/components/charts/VegaChart.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

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
      spec: false
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
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }, this.state.spec && _react.default.createElement(_reactVega.default, {
        spec: this.state.spec,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return VegaChart;
}(_react.default.Component);

var _default = VegaChart;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(spec, "spec", "/Users/andrefedorenko/Dropbox/Studium/mersi/bachelor/frontend/src/components/charts/VegaChart.js");
  reactHotLoader.register(VegaChart, "VegaChart", "/Users/andrefedorenko/Dropbox/Studium/mersi/bachelor/frontend/src/components/charts/VegaChart.js");
  reactHotLoader.register(_default, "default", "/Users/andrefedorenko/Dropbox/Studium/mersi/bachelor/frontend/src/components/charts/VegaChart.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.c7015171cd2217f92c90.hot-update.js.map