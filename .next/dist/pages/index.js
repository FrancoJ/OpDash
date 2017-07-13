'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MyLayout = require('../components/MyLayout.js');

var _MyLayout2 = _interopRequireDefault(_MyLayout);

var _isomorphicUnfetch = require('isomorphic-unfetch');

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