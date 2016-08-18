'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _multiply = function _multiply() {
  for (var _len = arguments.length, nums = Array(_len), _key = 0; _key < _len; _key++) {
    nums[_key] = arguments[_key];
  }

  var multiplier = 1000,
      product = 1;

  var numbers = nums.map(function (num) {
    return num * multiplier;
  });

  numbers.forEach(function (num) {
    product *= num;
  });

  product /= Math.pow(multiplier, nums.length);

  return product;
};

exports.default = _multiply;