
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

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _MyLayout = __webpack_require__(543);

var _MyLayout2 = _interopRequireDefault(_MyLayout);

var _isomorphicUnfetch = __webpack_require__(545);

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

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
  }, props.experiments.map(function (_ref) {
    var experiment = _ref.experiment;
    return _react2.default.createElement('li', { key: experiment.id, __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      }
    }, _react2.default.createElement('p', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      }
    }, experiment.description));
  })))));
};

Index.getInitialProps = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
  var res, data;
  return _regenerator2.default.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _isomorphicUnfetch2.default)('https://api.tvmaze.com/search/shows?q=batman');

        case 2:
          res = _context.sent;
          _context.next = 5;
          return res.json();

        case 5:
          data = _context.sent;

          console.log('Show data fetched. Count: ' + data);

          return _context.abrupt('return', {
            shows: data
          });

        case 8:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzP2FkMzVmOTkiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9oZWFkZXIuanM/YWQzNWY5OSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL015TGF5b3V0LmpzP2FkMzVmOTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0LmpzJ1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcblxuXG5jb25zdCBJbmRleCA9IChwcm9wcykgPT4gKFxuICA8TGF5b3V0PlxuICA8bWFpbj5cbiAgICA8aDE+SGFja2F0b24gUHJvamVjdHp6PC9oMT5cblxuICAgIDxkaXY+XG4gICAgICA8Y2FudmFzXG4gICAgICAgIGNsYXNzTmFtZT1cImV4LWxpbmUtZ3JhcGhcIlxuICAgICAgICB3aWR0aD1cIjYwMFwiIGhlaWdodD1cIjQwMFwiXG4gICAgICAgIGRhdGEtY2hhcnQ9XCJiYXJcIlxuICAgICAgICBkYXRhLXNjYWxlLWxpbmUtY29sb3I9XCJ0cmFuc3BhcmVudFwiXG4gICAgICAgIGRhdGEtc2NhbGUtZ3JpZC1saW5lLWNvbG9yPVwicmdiYSgyNTUsMjU1LDI1NSwuMDUpXCJcbiAgICAgICAgZGF0YS1zY2FsZS1mb250LWNvbG9yPVwiI2EyYTJhMlwiXG4gICAgICAgIGRhdGEtbGFiZWxzPVwiWydBdWd1c3QnLCdTZXB0ZW1iZXInLCdPY3RvYmVyJywnTm92ZW1iZXInLCdEZWNlbWJlcicsJ0phbnVhcnknLCdGZWJydWFyeSddXCJcbiAgICAgICAgZGF0YS12YWx1ZT1cIlt7IGxhYmVsOiAnRmlyc3QgZGF0YXNldCcsIGRhdGE6IFs2NSwgNTksIDgwLCA4MSwgNTYsIDU1LCA0MF0gfSwgeyBsYWJlbDogJ1NlY29uZCBkYXRhc2V0JywgZGF0YTogWzI4LCA0OCwgNDAsIDE5LCA4NiwgMjcsIDkwXSB9XVwiPlxuICAgICAgPC9jYW52YXM+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2PlxuICAgICAgPGgxPk9wdGltaXplbHkgRXhwZXJpbWVudHM8L2gxPlxuICAgIDx1bD5cbiAgICAgIHtwcm9wcy5leHBlcmltZW50cy5tYXAoKHtleHBlcmltZW50fSkgPT4gKFxuICAgICAgICA8bGkga2V5PXtleHBlcmltZW50LmlkfT5cbiAgICAgICAgICB7LyogPExpbmsgYXM9e2AvcC8ke3Nob3cuaWR9YH0gaHJlZj17YC9wb3N0P2lkPSR7c2hvdy5pZH1gfT5cbiAgICAgICAgICAgIDxhPntzaG93Lm5hbWV9PC9hPlxuICAgICAgICAgIDwvTGluaz4gKi99XG4gICAgICAgICAgPHA+e2V4cGVyaW1lbnQuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICA8L2xpPlxuICAgICAgKSl9XG4gICAgPC91bD5cbiAgICA8L2Rpdj5cblxuXG4gIDwvbWFpbj5cbiAgPC9MYXlvdXQ+XG4pXG5cbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKCkge1xuICAvLyBjb25zb2xlLmxvZyhcIkhJVCFcIik7XG4gIC8vIHZhciBvYmogPSB7XG4gIC8vICAgbWV0aG9kOiBcIkdFVFwiLFxuICAvLyAgIGhlYWRlcnM6IHtcbiAgLy8gICAgICdUb2tlbic6IFwiYTM1YzU3ZDUwMzMzNDEyMTQ3NmFhMDNkYzZhMWVjZTJkOTIzYzExYTBmYzhjNzExMjA5NmU1MDU1MmE5NjFjODpnWmtWTXE3bjRcIlxuICAvLyAgIH1cbiAgLy8gfTtcblxuICAvLyBjb25zdCBleHBlcmltZW50RGF0YSA9IGF3YWl0IGZldGNoKCdodHRwczovL3d3dy5vcHRpbWl6ZWx5YXBpcy5jb20vZXhwZXJpbWVudC92MS9wcm9qZWN0cy8xODQyMTQwNDM4L2V4cGVyaW1lbnRzLycsIG9iaik7XG5cbiAgLy8gLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuICAvLyAgIGNvbnNvbGUubG9nKFwiSEVZIVwiLCBkYXRhWzFdKTtcbiAgLy8gICByZXR1cm4gZGF0YTtcbiAgLy8gfSkuY2F0Y2goZnVuY3Rpb24oZXJyKSB7XG4gIC8vICAgY29uc29sZS5sb2coXCJFcnJvciBnZXR0aW5nIGRhdGE6IFwiLCBlcnIpO1xuICAvLyB9KVxuXG4gIC8vIGNvbnN0IGRhdGEgPSBhd2FpdCBleHBlcmltZW50RGF0YS5qc29uKCk7XG5cbiAgLy8gdmFyIGV4cGVyaW1lbnREYXRhID0gZGF0YS50aGVuKGZ1bmN0aW9uIChleHBEYXRhKSB7XG4gIC8vICAgcmV0dXJuIGV4cERhdGE7XG4gIC8vIH0pO1xuICAvLyB2YXIgc3RyaW5nRGF0YSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAvLyBjb25zb2xlLmxvZyhgU2hvdyBkYXRhIGZldGNoZWQuICR7ZGF0YX1gKTtcbiAgLy8gY29uc29sZS5sb2coXCJIVFRUSUlUVElUSUlUSVRJVElUVElcIik7XG4gIC8vIHJldHVybiB7XG4gIC8vICAgZXhwZXJpbWVudHM6IEpTT04ucGFyc2Uoc3RyaW5nRGF0YSlcbiAgLy8gfVxuXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS50dm1hemUuY29tL3NlYXJjaC9zaG93cz9xPWJhdG1hbicpXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG5cbiAgY29uc29sZS5sb2coYFNob3cgZGF0YSBmZXRjaGVkLiBDb3VudDogJHtkYXRhfWApXG5cbiAgcmV0dXJuIHtcbiAgICBzaG93czogZGF0YVxuICB9XG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8aGVhZGVyPlxuICAgIDxIZWFkPlxuICAgIDxtZXRhIGNoYXJzZXQ9XCJ1dGYtOFwiIC8+XG4gICAgPG1ldGEgaHR0cC1lcXVpdj1cIlgtVUEtQ29tcGF0aWJsZVwiIGNvbnRlbnQ9XCJJRT1lZGdlXCIgLz5cbiAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgIDx0aXRsZT5Cb290c3RyYXAgVGhlbWUgRXhhbXBsZTwvdGl0bGU+XG4gICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2FqYXguZ29vZ2xlYXBpcy5jb20vYWpheC9saWJzL2pxdWVyeS8yLjEuNC9qcXVlcnkubWluLmpzXCI+PC9zY3JpcHQ+XG4gICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9DaGFydC5qcy8xLjAuMi9DaGFydC5taW4uanNcIj48L3NjcmlwdD5cbiAgICA8bGluayBocmVmPVwiL3N0YXRpYy9ib290c3RyYXAtdGhlbWUvZGlzdC90b29sa2l0LWludmVyc2UubWluLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIi8+XG4gICAgPHNjcmlwdCBzcmM9XCIvc3RhdGljL2Jvb3RzdHJhcC10aGVtZS9kaXN0L3Rvb2xraXQubWluLmpzXCI+PC9zY3JpcHQ+XG4gICAgPC9IZWFkPlxuICA8L2hlYWRlcj5cbilcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2hlYWRlci5qcyIsImltcG9ydCBIZWFkZXIgZnJvbSAnLi9oZWFkZXInXG5cbmNvbnN0IGxheW91dFN0eWxlID0ge1xuICBtYXJnaW46IDIwLFxuICBwYWRkaW5nOiAyMCxcbiAgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnXG59XG5cbmNvbnN0IExheW91dCA9IChwcm9wcykgPT4gKFxuICA8ZGl2IHN0eWxlPXtsYXlvdXRTdHlsZX0+XG4gICAgPEhlYWRlciAvPlxuICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IExheW91dFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvTXlMYXlvdXQuanMiXSwibWFwcGluZ3MiOiI7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7QUFFQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQVJBO0FBWUE7QUFaQTtBQUNBOztBQVdBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFKQTtBQUFBOztBQUlBO0FBQUE7QUFBQTtBQUFBO0FBTEE7QUFyQkE7QUFDQTtBQW9DQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQThCQTtBQUNBO0FBREE7QUE5QkE7QUFBQTtBQStCQTtBQUNBO0FBREE7QUEvQkE7QUFDQTtBQWdDQTtBQUNBOztBQUVBO0FBQUE7QUFDQTtBQXJDQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQTBDQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEZBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7Ozs7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBOztBQVZBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBS0E7QUFDQTtBQURBO0FBQ0E7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        