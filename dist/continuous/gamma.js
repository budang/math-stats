'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Gamma = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _gamma2 = require('../internal/_gamma');

var _gamma3 = _interopRequireDefault(_gamma2);

var _multiply2 = require('../internal/_multiply');

var _multiply3 = _interopRequireDefault(_multiply2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Gamma = function () {
  function Gamma(alpha, beta) {
    _classCallCheck(this, Gamma);

    this.alpha = alpha;
    this.beta = beta;

    this.mean = this._mean();
    this.variance = this._variance();
  }

  _createClass(Gamma, [{
    key: 'probability',
    value: function probability(y) {
      if (y <= 0 || y >= Infinity) throw new Error("Invalid value for y");

      return (0, _multiply3.default)((1 / (0, _gamma3.default)(this.alpha), Math.pow(this.beta, this.alpha)), Math.pow(y, this.alpha - 1), Math.E(-y / this.beta));
    }
  }, {
    key: '_mean',
    value: function _mean() {
      return (0, _multiply3.default)(this.alpha, this.beta);
    }
  }, {
    key: '_variance',
    value: function _variance() {
      return (0, _multiply3.default)(this.alpha, Math.pow(this.beta, 2));
    }
  }]);

  return Gamma;
}();

exports.Gamma = Gamma;