"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _header = require("../components/header");

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/Jobrown/Desktop/OpDash/pages/index.js?entry";


var Index = function Index() {
  return _react2.default.createElement("main", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement(_header2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }), _react2.default.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, "Hackaton Projectzz"), _react2.default.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement("canvas", {
    className: "ex-line-graph",
    width: "600", height: "400",
    "data-chart": "bar",
    "data-scale-line-color": "transparent",
    "data-scale-grid-line-color": "rgba(255,255,255,.05)",
    "data-scale-font-color": "#a2a2a2",
    "data-labels": "['August','September','October','November','December','January','February']",
    "data-value": "[{ label: 'First dataset', data: [65, 59, 80, 81, 56, 55, 40] }, { label: 'Second dataset', data: [28, 48, 40, 19, 86, 27, 90] }]", __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  })));
};

exports.default = Index;