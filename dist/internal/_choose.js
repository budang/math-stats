'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _big = require('big.js');

var _big2 = _interopRequireDefault(_big);

var _factorial2 = require('./_factorial');

var _factorial3 = _interopRequireDefault(_factorial2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Computes the binomial coefficient for n and k, e.g. n choose k.
 * @param {Number} n - The number of elements in the set.
 * @param {Number} k - The number of elements in the combination.
 * @returns {Number} The number of ways to choose k elements from a set of n elements.
 */
var _choose = function _choose(n, k) {
  if ((0, _factorial3.default)(n) === Infinity) return Infinity;else if ((0, _factorial3.default)(k) === Infinity || n < k) return 0;

  return parseFloat(new _big2.default((0, _factorial3.default)(n)).div(new _big2.default((0, _factorial3.default)(k)).times(new _big2.default((0, _factorial3.default)(n - k)))));
};

exports.default = _choose;