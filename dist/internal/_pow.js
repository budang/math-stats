'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _multiply2 = require('./_multiply');

var _multiply3 = _interopRequireDefault(_multiply2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _pow = function _pow(base, exponent) {
  if (exponent === 0) {
    return 1;
  }

  /* TODO: fractional exponents */
  if (exponent % 1) {
    return Math.pow(base, exponent);
  }

  var product = 1;
  for (var i = 0; i < Math.abs(exponent); i++) {
    product = (0, _multiply3.default)(product, base);
  }

  if (exponent < 0) {
    product = 1 / product;
  }

  return product;
};

exports.default = _pow;