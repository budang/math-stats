'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factorial2 = require('./_factorial');

var _factorial3 = _interopRequireDefault(_factorial2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Big = require('big.js');

var _choose = function _choose(n, k) {
  return parseFloat(new Big((0, _factorial3.default)(n)).div(new Big((0, _factorial3.default)(k)).times(new Big((0, _factorial3.default)(n - k)))));
};

exports.default = _choose;