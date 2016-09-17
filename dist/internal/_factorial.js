'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _big = require('big.js');

var _big2 = _interopRequireDefault(_big);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Computes the factorial of n.
 * @param {Number} n - The number to be evaluated.
 * @returns {Number} The factorial of n.
 */
var _factorial = function _factorial(x) {
  x = parseInt(new _big2.default(x).toString());

  if (x < 0 || x === Infinity) return Infinity;else if (x === 0) return 1;

  var factorial = x;
  for (var i = x - 1; i > 1; i--) {
    factorial *= i;
  }return factorial;
};

exports.default = _factorial;