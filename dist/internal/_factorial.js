'use strict';

/**
 * @description Computes the factorial of n.
 * @param {Number} n - The number to be evaluated.
 * @returns {Number} The factorial of n.
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _factorial = function _factorial(x) {
  if (x < 0) {
    return Infinity;
  } else if (x === 0) {
    return 1;
  }

  var factorial = x;

  for (var i = x - 1; i > 1; i--) {
    factorial *= i;
  }

  return factorial;
};

exports.default = _factorial;