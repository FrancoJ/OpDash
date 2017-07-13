
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 540:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _header = __webpack_require__(541);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/Jobrown/Desktop/OpDash/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/Jobrown/Desktop/OpDash/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(85)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

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
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 541:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _head = __webpack_require__(194);

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Jobrown/Desktop/OpDash/components/header.js';

exports.default = function () {
  return _react2.default.createElement('header', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement('meta', { charset: 'utf-8', __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }), _react2.default.createElement('meta', { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge', __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }), _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1', __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }), _react2.default.createElement('title', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, 'Bootstrap Theme Example'), _react2.default.createElement('script', { src: 'https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js', __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), _react2.default.createElement('script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/1.0.2/Chart.min.js', __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), _react2.default.createElement('link', { href: '/static/bootstrap-theme/dist/toolkit-inverse.min.css', rel: 'stylesheet', __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), _react2.default.createElement('script', { src: '/static/bootstrap-theme/dist/toolkit.min.js', __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  })));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/Jobrown/Desktop/OpDash/components/header.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/Jobrown/Desktop/OpDash/components/header.js"); } } })();

/***/ }),

/***/ 542:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(540);


/***/ })

},[542]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzPzdlZDI5ZjUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9oZWFkZXIuanM/N2VkMjlmNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJztcblxuXG5jb25zdCBJbmRleCA9ICgpID0+IChcbiAgPG1haW4+XG4gIFx0PEhlYWRlciAvPlxuICAgIDxoMT5IYWNrYXRvbiBQcm9qZWN0eno8L2gxPlxuXG4gICAgPGRpdj5cbiAgICAgIDxjYW52YXNcbiAgICAgICAgY2xhc3NOYW1lPVwiZXgtbGluZS1ncmFwaFwiXG4gICAgICAgIHdpZHRoPVwiNjAwXCIgaGVpZ2h0PVwiNDAwXCJcbiAgICAgICAgZGF0YS1jaGFydD1cImJhclwiXG4gICAgICAgIGRhdGEtc2NhbGUtbGluZS1jb2xvcj1cInRyYW5zcGFyZW50XCJcbiAgICAgICAgZGF0YS1zY2FsZS1ncmlkLWxpbmUtY29sb3I9XCJyZ2JhKDI1NSwyNTUsMjU1LC4wNSlcIlxuICAgICAgICBkYXRhLXNjYWxlLWZvbnQtY29sb3I9XCIjYTJhMmEyXCJcbiAgICAgICAgZGF0YS1sYWJlbHM9XCJbJ0F1Z3VzdCcsJ1NlcHRlbWJlcicsJ09jdG9iZXInLCdOb3ZlbWJlcicsJ0RlY2VtYmVyJywnSmFudWFyeScsJ0ZlYnJ1YXJ5J11cIlxuICAgICAgICBkYXRhLXZhbHVlPVwiW3sgbGFiZWw6ICdGaXJzdCBkYXRhc2V0JywgZGF0YTogWzY1LCA1OSwgODAsIDgxLCA1NiwgNTUsIDQwXSB9LCB7IGxhYmVsOiAnU2Vjb25kIGRhdGFzZXQnLCBkYXRhOiBbMjgsIDQ4LCA0MCwgMTksIDg2LCAyNywgOTBdIH1dXCI+XG4gICAgICA8L2NhbnZhcz5cbiAgICA8L2Rpdj5cblxuXG4gIDwvbWFpbj5cbilcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgPGhlYWRlcj5cbiAgICA8SGVhZD5cbiAgICA8bWV0YSBjaGFyc2V0PVwidXRmLThcIiAvPlxuICAgIDxtZXRhIGh0dHAtZXF1aXY9XCJYLVVBLUNvbXBhdGlibGVcIiBjb250ZW50PVwiSUU9ZWRnZVwiIC8+XG4gICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICA8dGl0bGU+Qm9vdHN0cmFwIFRoZW1lIEV4YW1wbGU8L3RpdGxlPlxuICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9hamF4Lmdvb2dsZWFwaXMuY29tL2FqYXgvbGlicy9qcXVlcnkvMi4xLjQvanF1ZXJ5Lm1pbi5qc1wiPjwvc2NyaXB0PlxuICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvQ2hhcnQuanMvMS4wLjIvQ2hhcnQubWluLmpzXCI+PC9zY3JpcHQ+XG4gICAgPGxpbmsgaHJlZj1cIi9zdGF0aWMvYm9vdHN0cmFwLXRoZW1lL2Rpc3QvdG9vbGtpdC1pbnZlcnNlLm1pbi5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIvPlxuICAgIDxzY3JpcHQgc3JjPVwiL3N0YXRpYy9ib290c3RyYXAtdGhlbWUvZGlzdC90b29sa2l0Lm1pbi5qc1wiPjwvc2NyaXB0PlxuICAgIDwvSGVhZD5cbiAgPC9oZWFkZXI+XG4pXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9oZWFkZXIuanMiXSwibWFwcGluZ3MiOiI7QTs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBRUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFSQTtBQUFBO0FBQUE7QUFDQTtBQWVBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7OztBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBVkE7QUFDQTs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        