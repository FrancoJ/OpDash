'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MyLayout = require('../components/MyLayout.js');

var _MyLayout2 = _interopRequireDefault(_MyLayout);

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _link = require('next/dist/lib/link.js');

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