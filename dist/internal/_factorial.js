'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _factorial = function _factorial(x) {
  if (x < 0) {
    return Infinity;
  } else if (x === 0) {
    return 1;
  }

  var f = x;

  for (var i = x - 1; i > 1; i--) {
    f *= i;
  }

  return f;
};

exports.default = _factorial;