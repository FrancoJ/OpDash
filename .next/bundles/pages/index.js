
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

var _regenerator = __webpack_require__(64);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(63);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _typeof2 = __webpack_require__(98);

var _typeof3 = _interopRequireDefault(_typeof2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _MyLayout = __webpack_require__(543);

var _MyLayout2 = _interopRequireDefault(_MyLayout);

var _isomorphicUnfetch = __webpack_require__(545);

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _link = __webpack_require__(548);

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Jobrown/Desktop/OpDash/pages/index.js?entry';


var Index = function Index(props) {
  return _react2.default.createElement(_MyLayout2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement('main', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement('h1', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, 'Hackaton Projectzz'), _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement('canvas', {
    className: 'ex-line-graph',
    width: '600', height: '400',
    'data-chart': 'bar',
    'data-scale-line-color': 'transparent',
    'data-scale-grid-line-color': 'rgba(255,255,255,.05)',
    'data-scale-font-color': '#a2a2a2',
    'data-labels': '[\'August\',\'September\',\'October\',\'November\',\'December\',\'January\',\'February\']',
    'data-value': '[{ label: \'First dataset\', data: [65, 59, 80, 81, 56, 55, 40] }, { label: \'Second dataset\', data: [28, 48, 40, 19, 86, 27, 90] }]', __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  })), _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, _react2.default.createElement('h1', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, 'Optimizely Experiments'), _react2.default.createElement('ul', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, (0, _typeof3.default)(props.experiments)), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, props.experiments.length), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, props.experiments[44].id), props.experiments.map(function (exp, i) {
    return _react2.default.createElement('li', { key: i, __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      }
    }, _react2.default.createElement(_link2.default, { as: '/p/' + exp.id, href: '/post?id=' + exp.id, __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      }
    }, _react2.default.createElement('a', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      }
    }, exp.description)));
  })))));
};

Index.getInitialProps = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
  var obj, experimentData, data;
  return _regenerator2.default.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          // console.log("HIT!");
          obj = {
            method: "GET",
            headers: {
              'Token': "a35c57d503334121476aa03dc6a1ece2d923c11a0fc8c7112096e50552a961c8:gZkVMq7n4"
            }
          };
          _context.next = 3;
          return (0, _isomorphicUnfetch2.default)('https://www.optimizelyapis.com/experiment/v1/projects/1842140438/experiments/', obj);

        case 3:
          experimentData = _context.sent;
          _context.next = 6;
          return experimentData.json().then(function (exp) {
            var count = 0;
            var dataArray = [];
            exp.forEach(function (ind) {
              ind['id'] = count++;
              dataArray.push(ind);
            });
            return dataArray;
          });

        case 6:
          data = _context.sent;

          console.log('Show data fetched. Count: ' + data);

          return _context.abrupt('return', {
            experiments: data
          });

        case 9:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, this);
}));

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

/***/ 542:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(540);


/***/ }),

/***/ 543:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./Header\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/Jobrown/Desktop/OpDash/components/MyLayout.js";


var Layout = function Layout(props) {
  return _react2.default.createElement("main", { className: "container", __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement(_Header2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }), props.children);
};

exports.default = Layout;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/Jobrown/Desktop/OpDash/components/MyLayout.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/Jobrown/Desktop/OpDash/components/MyLayout.js"); } } })();

/***/ })

},[542]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzPzkxZjFhMDMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NeUxheW91dC5qcz85MWYxYTAzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dC5qcydcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmNvbnN0IEluZGV4ID0gKHByb3BzKSA9PiAoXG4gIDxMYXlvdXQ+XG4gIDxtYWluPlxuICAgIDxoMT5IYWNrYXRvbiBQcm9qZWN0eno8L2gxPlxuXG4gICAgPGRpdj5cbiAgICAgIDxjYW52YXNcbiAgICAgICAgY2xhc3NOYW1lPVwiZXgtbGluZS1ncmFwaFwiXG4gICAgICAgIHdpZHRoPVwiNjAwXCIgaGVpZ2h0PVwiNDAwXCJcbiAgICAgICAgZGF0YS1jaGFydD1cImJhclwiXG4gICAgICAgIGRhdGEtc2NhbGUtbGluZS1jb2xvcj1cInRyYW5zcGFyZW50XCJcbiAgICAgICAgZGF0YS1zY2FsZS1ncmlkLWxpbmUtY29sb3I9XCJyZ2JhKDI1NSwyNTUsMjU1LC4wNSlcIlxuICAgICAgICBkYXRhLXNjYWxlLWZvbnQtY29sb3I9XCIjYTJhMmEyXCJcbiAgICAgICAgZGF0YS1sYWJlbHM9XCJbJ0F1Z3VzdCcsJ1NlcHRlbWJlcicsJ09jdG9iZXInLCdOb3ZlbWJlcicsJ0RlY2VtYmVyJywnSmFudWFyeScsJ0ZlYnJ1YXJ5J11cIlxuICAgICAgICBkYXRhLXZhbHVlPVwiW3sgbGFiZWw6ICdGaXJzdCBkYXRhc2V0JywgZGF0YTogWzY1LCA1OSwgODAsIDgxLCA1NiwgNTUsIDQwXSB9LCB7IGxhYmVsOiAnU2Vjb25kIGRhdGFzZXQnLCBkYXRhOiBbMjgsIDQ4LCA0MCwgMTksIDg2LCAyNywgOTBdIH1dXCI+XG4gICAgICA8L2NhbnZhcz5cbiAgICA8L2Rpdj5cblxuICAgICA8ZGl2PlxuICAgICAgPGgxPk9wdGltaXplbHkgRXhwZXJpbWVudHM8L2gxPlxuICAgIDx1bD5cbiAgICAgIDxwPnt0eXBlb2YocHJvcHMuZXhwZXJpbWVudHMpfTwvcD5cbiAgICAgIDxwPntwcm9wcy5leHBlcmltZW50cy5sZW5ndGh9PC9wPlxuICAgICAgPHA+e3Byb3BzLmV4cGVyaW1lbnRzWzQ0XS5pZH08L3A+XG4gICAgICAgIFxuICAgICAgIHsvKiB7cHJvcHMuZXhwZXJpbWVudHMubWFwKGZ1bmN0aW9uKGV4cCwgaSl7XG4gICAgICAgIHJldHVybiA8c3BhbiBrZXk9e2l9PjxiPkNhdGVnb3J5IE5hbWU6PC9iPiB7ZXhwLmRlc2NyaXB0aW9ufTwvc3Bhbj47XG4gICAgICB9KX0gICovfVxuXG4gICAgICB7cHJvcHMuZXhwZXJpbWVudHMubWFwKGZ1bmN0aW9uKGV4cCwgaSl7XG4gICAgICAgIHJldHVybiA8bGkga2V5PXtpfT5cbiAgICAgICAgICA8TGluayBhcz17YC9wLyR7ZXhwLmlkfWB9IGhyZWY9e2AvcG9zdD9pZD0ke2V4cC5pZH1gfT5cbiAgICAgICAgICAgIDxhPntleHAuZGVzY3JpcHRpb259PC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9saT47XG4gICAgICB9KX0gXG4gICAgICBcbiAgICA8L3VsPlxuICAgIDwvZGl2PlxuXG5cbiAgPC9tYWluPlxuICA8L0xheW91dD5cbilcblxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oKSB7XG4gIC8vIGNvbnNvbGUubG9nKFwiSElUIVwiKTtcbiAgdmFyIG9iaiA9IHtcbiAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ1Rva2VuJzogXCJhMzVjNTdkNTAzMzM0MTIxNDc2YWEwM2RjNmExZWNlMmQ5MjNjMTFhMGZjOGM3MTEyMDk2ZTUwNTUyYTk2MWM4Omdaa1ZNcTduNFwiXG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGV4cGVyaW1lbnREYXRhID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vd3d3Lm9wdGltaXplbHlhcGlzLmNvbS9leHBlcmltZW50L3YxL3Byb2plY3RzLzE4NDIxNDA0MzgvZXhwZXJpbWVudHMvJywgb2JqKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGV4cGVyaW1lbnREYXRhLmpzb24oKS50aGVuKGZ1bmN0aW9uIChleHApIHtcbiAgICB2YXIgY291bnQgPSAwO1xuICAgIHZhciBkYXRhQXJyYXkgPSBbXTtcbiAgICBleHAuZm9yRWFjaChmdW5jdGlvbiAoaW5kKSB7XG4gICAgICBpbmRbJ2lkJ10gPSBjb3VudCsrO1xuICAgICAgZGF0YUFycmF5LnB1c2goaW5kKTtcbiAgICB9KVxuICAgIHJldHVybiBkYXRhQXJyYXk7XG4gIH0pXG5cbiAgY29uc29sZS5sb2coYFNob3cgZGF0YSBmZXRjaGVkLiBDb3VudDogJHtkYXRhfWApXG5cbiAgcmV0dXJuIHtcbiAgICBleHBlcmltZW50czogZGF0YVxuICB9XG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5IiwiaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcidcblxuXG5jb25zdCBMYXlvdXQgPSAocHJvcHMpID0+IChcbiAgPG1haW4gY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgPEhlYWRlciAvPlxuICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgPC9tYWluPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL015TGF5b3V0LmpzIl0sIm1hcHBpbmdzIjoiO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBUkE7QUFZQTtBQVpBO0FBQ0E7O0FBV0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQTdCQTtBQUNBO0FBNENBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTs7QUFDQTtBQUFBO0FBRkE7QUFIQTtBQVNBO0FBQ0E7QUFEQTtBQVRBO0FBQUE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBUkE7QUFDQTtBQURBO0FBVkE7QUFDQTtBQW1CQTtBQUNBOztBQUVBO0FBQUE7QUFDQTtBQXhCQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQTZCQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0VBO0FBQ0E7Ozs7Ozs7O0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBS0E7QUFDQTtBQURBO0FBQ0E7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        