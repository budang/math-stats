'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Beta = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _gamma2 = require('../internal/_gamma');

var _gamma3 = _interopRequireDefault(_gamma2);

var _multiply2 = require('../internal/_multiply');

var _multiply3 = _interopRequireDefault(_multiply2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Beta = function () {
  function Beta(alpha, beta) {
    _classCallCheck(this, Beta);

    this.alpha = alpha;
    this.beta = beta;

    this.mean = this._mean();
    this.variance = this._variance();
  }

  _createClass(Beta, [{
    key: 'probability',
    value: function probability(y) {
      if (y <= 0 || y >= 1) throw new Error("Invalid value for y");

      return (0, _multiply3.default)((0, _gamma3.default)(this.alpha + this.beta) / ((0, _gamma3.default)(this.alpha), (0, _gamma3.default)(this.beta)), Math.pow(y, this.alpha - 1), Math.pow(1 - y, this.beta - 1));
    }
  }, {
    key: '_mean',
    value: function _mean() {
      return this.alpha / (this.alpha + this.beta);
    }
  }, {
    key: '_variance',
    value: function _variance() {
      return (0, _multiply3.default)(this.alpha, this.beta) / (0, _multiply3.default)((Math.pow(this.alpha + this.beta, 2), this.alpha + this.beta + 1));
    }
  }]);

  return Beta;
}();

exports.Beta = Beta;