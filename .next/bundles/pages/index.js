
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


/***/ }),

/***/ 543:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _header = __webpack_require__(541);

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Jobrown/Desktop/OpDash/components/MyLayout.js';


var layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

var Layout = function Layout(props) {
  return _react2.default.createElement('div', { style: layoutStyle, __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement(_header2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), props.children);
};

exports.default = Layout;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/Jobrown/Desktop/OpDash/components/MyLayout.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/Jobrown/Desktop/OpDash/components/MyLayout.js"); } } })();

/***/ })

},[542]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzPzQ1MjllNWEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9oZWFkZXIuanM/NDUyOWU1YSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL015TGF5b3V0LmpzPzQ1MjllNWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0LmpzJ1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuY29uc3QgSW5kZXggPSAocHJvcHMpID0+IChcbiAgPExheW91dD5cbiAgPG1haW4+XG4gICAgPGgxPkhhY2thdG9uIFByb2plY3R6ejwvaDE+XG5cbiAgICA8ZGl2PlxuICAgICAgPGNhbnZhc1xuICAgICAgICBjbGFzc05hbWU9XCJleC1saW5lLWdyYXBoXCJcbiAgICAgICAgd2lkdGg9XCI2MDBcIiBoZWlnaHQ9XCI0MDBcIlxuICAgICAgICBkYXRhLWNoYXJ0PVwiYmFyXCJcbiAgICAgICAgZGF0YS1zY2FsZS1saW5lLWNvbG9yPVwidHJhbnNwYXJlbnRcIlxuICAgICAgICBkYXRhLXNjYWxlLWdyaWQtbGluZS1jb2xvcj1cInJnYmEoMjU1LDI1NSwyNTUsLjA1KVwiXG4gICAgICAgIGRhdGEtc2NhbGUtZm9udC1jb2xvcj1cIiNhMmEyYTJcIlxuICAgICAgICBkYXRhLWxhYmVscz1cIlsnQXVndXN0JywnU2VwdGVtYmVyJywnT2N0b2JlcicsJ05vdmVtYmVyJywnRGVjZW1iZXInLCdKYW51YXJ5JywnRmVicnVhcnknXVwiXG4gICAgICAgIGRhdGEtdmFsdWU9XCJbeyBsYWJlbDogJ0ZpcnN0IGRhdGFzZXQnLCBkYXRhOiBbNjUsIDU5LCA4MCwgODEsIDU2LCA1NSwgNDBdIH0sIHsgbGFiZWw6ICdTZWNvbmQgZGF0YXNldCcsIGRhdGE6IFsyOCwgNDgsIDQwLCAxOSwgODYsIDI3LCA5MF0gfV1cIj5cbiAgICAgIDwvY2FudmFzPlxuICAgIDwvZGl2PlxuXG4gICAgIDxkaXY+XG4gICAgICA8aDE+T3B0aW1pemVseSBFeHBlcmltZW50czwvaDE+XG4gICAgPHVsPlxuICAgICAgPHA+e3R5cGVvZihwcm9wcy5leHBlcmltZW50cyl9PC9wPlxuICAgICAgPHA+e3Byb3BzLmV4cGVyaW1lbnRzLmxlbmd0aH08L3A+XG4gICAgICA8cD57cHJvcHMuZXhwZXJpbWVudHNbNDRdLmlkfTwvcD5cbiAgICAgICAgXG4gICAgICAgey8qIHtwcm9wcy5leHBlcmltZW50cy5tYXAoZnVuY3Rpb24oZXhwLCBpKXtcbiAgICAgICAgcmV0dXJuIDxzcGFuIGtleT17aX0+PGI+Q2F0ZWdvcnkgTmFtZTo8L2I+IHtleHAuZGVzY3JpcHRpb259PC9zcGFuPjtcbiAgICAgIH0pfSAgKi99XG5cbiAgICAgIHtwcm9wcy5leHBlcmltZW50cy5tYXAoZnVuY3Rpb24oZXhwLCBpKXtcbiAgICAgICAgcmV0dXJuIDxsaSBrZXk9e2l9PlxuICAgICAgICAgIDxMaW5rIGFzPXtgL3AvJHtleHAuaWR9YH0gaHJlZj17YC9wb3N0P2lkPSR7ZXhwLmlkfWB9PlxuICAgICAgICAgICAgPGE+e2V4cC5kZXNjcmlwdGlvbn08L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2xpPjtcbiAgICAgIH0pfSBcbiAgICAgIFxuICAgIDwvdWw+XG4gICAgPC9kaXY+XG5cblxuICA8L21haW4+XG4gIDwvTGF5b3V0PlxuKVxuXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbigpIHtcbiAgLy8gY29uc29sZS5sb2coXCJISVQhXCIpO1xuICB2YXIgb2JqID0ge1xuICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnVG9rZW4nOiBcImEzNWM1N2Q1MDMzMzQxMjE0NzZhYTAzZGM2YTFlY2UyZDkyM2MxMWEwZmM4YzcxMTIwOTZlNTA1NTJhOTYxYzg6Z1prVk1xN240XCJcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZXhwZXJpbWVudERhdGEgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly93d3cub3B0aW1pemVseWFwaXMuY29tL2V4cGVyaW1lbnQvdjEvcHJvamVjdHMvMTg0MjE0MDQzOC9leHBlcmltZW50cy8nLCBvYmopO1xuICBjb25zdCBkYXRhID0gYXdhaXQgZXhwZXJpbWVudERhdGEuanNvbigpLnRoZW4oZnVuY3Rpb24gKGV4cCkge1xuICAgIHZhciBjb3VudCA9IDA7XG4gICAgdmFyIGRhdGFBcnJheSA9IFtdO1xuICAgIGV4cC5mb3JFYWNoKGZ1bmN0aW9uIChpbmQpIHtcbiAgICAgIGluZFsnaWQnXSA9IGNvdW50Kys7XG4gICAgICBkYXRhQXJyYXkucHVzaChpbmQpO1xuICAgIH0pXG4gICAgcmV0dXJuIGRhdGFBcnJheTtcbiAgfSlcblxuICBjb25zb2xlLmxvZyhgU2hvdyBkYXRhIGZldGNoZWQuIENvdW50OiAke2RhdGF9YClcblxuICByZXR1cm4ge1xuICAgIGV4cGVyaW1lbnRzOiBkYXRhXG4gIH1cbn1cblxuXG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxoZWFkZXI+XG4gICAgPEhlYWQ+XG4gICAgPG1ldGEgY2hhcnNldD1cInV0Zi04XCIgLz5cbiAgICA8bWV0YSBodHRwLWVxdWl2PVwiWC1VQS1Db21wYXRpYmxlXCIgY29udGVudD1cIklFPWVkZ2VcIiAvPlxuICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgPHRpdGxlPkJvb3RzdHJhcCBUaGVtZSBFeGFtcGxlPC90aXRsZT5cbiAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vYWpheC5nb29nbGVhcGlzLmNvbS9hamF4L2xpYnMvanF1ZXJ5LzIuMS40L2pxdWVyeS5taW4uanNcIj48L3NjcmlwdD5cbiAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL0NoYXJ0LmpzLzEuMC4yL0NoYXJ0Lm1pbi5qc1wiPjwvc2NyaXB0PlxuICAgIDxsaW5rIGhyZWY9XCIvc3RhdGljL2Jvb3RzdHJhcC10aGVtZS9kaXN0L3Rvb2xraXQtaW52ZXJzZS5taW4uY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiLz5cbiAgICA8c2NyaXB0IHNyYz1cIi9zdGF0aWMvYm9vdHN0cmFwLXRoZW1lL2Rpc3QvdG9vbGtpdC5taW4uanNcIj48L3NjcmlwdD5cbiAgICA8L0hlYWQ+XG4gIDwvaGVhZGVyPlxuKVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwiaW1wb3J0IEhlYWRlciBmcm9tICcuL2hlYWRlcidcblxuY29uc3QgbGF5b3V0U3R5bGUgPSB7XG4gIG1hcmdpbjogMjAsXG4gIHBhZGRpbmc6IDIwLFxuICBib3JkZXI6ICcxcHggc29saWQgI0RERCdcbn1cblxuY29uc3QgTGF5b3V0ID0gKHByb3BzKSA9PiAoXG4gIDxkaXYgc3R5bGU9e2xheW91dFN0eWxlfT5cbiAgICA8SGVhZGVyIC8+XG4gICAge3Byb3BzLmNoaWxkcmVufVxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9NeUxheW91dC5qcyJdLCJtYXBwaW5ncyI6IjtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7QUFDQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQVJBO0FBWUE7QUFaQTtBQUNBOztBQVdBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUE3QkE7QUFDQTtBQTRDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7O0FBQ0E7QUFBQTtBQUZBO0FBSEE7QUFTQTtBQUNBO0FBREE7QUFUQTtBQUFBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQVJBO0FBQ0E7QUFEQTtBQVZBO0FBQ0E7QUFtQkE7QUFDQTs7QUFFQTtBQUFBO0FBQ0E7QUF4QkE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUE2QkE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9FQTtBQUNBOzs7QUFDQTtBQUNBOzs7Ozs7O0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFWQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUNBOzs7Ozs7OztBQUNBO0FBRUE7QUFDQTtBQUFBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUtBO0FBQ0E7QUFEQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        