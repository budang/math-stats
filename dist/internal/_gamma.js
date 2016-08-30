'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factorial2 = require('./_factorial');

var _factorial3 = _interopRequireDefault(_factorial2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Computes the gamma function of n.
 * @param {Number} n - The number to be evaluated.
 * @returns {Number} The gamma function of n.
 */
var _gamma = function _gamma(n) {
  return (0, _factorial3.default)(n - 1);
};

exports.default = _gamma;