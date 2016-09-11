'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Gamma = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _big = require('big.js');

var _big2 = _interopRequireDefault(_big);

var _gamma2 = require('../internal/_gamma');

var _gamma3 = _interopRequireDefault(_gamma2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Gamma = function () {
  function Gamma(alpha, beta) {
    _classCallCheck(this, Gamma);

    this.alpha = new _big2.default(alpha);
    this.beta = new _big2.default(beta);

    this.mean = this._mean();
    this.variance = this._variance();
  }

  _createClass(Gamma, [{
    key: 'probability',
    value: function probability(y) {
      if (y <= 0 || y >= Infinity) throw new Error("Invalid value for y");

      return parseFloat(new _big2.default(1).div((0, _gamma3.default)(this.alpha)).times(this.beta.pow(this.alpha)).times(new _big2.default(y).pow(this.alpha.minus(1))).times(Math.E(parseFloat(new _big2.default(-y).div(this.beta)))));
    }
  }, {
    key: '_mean',
    value: function _mean() {
      return parseFloat(this.alpha.times(this.beta));
    }
  }, {
    key: '_variance',
    value: function _variance() {
      return parseFloat(this.alpha.times(this.beta.pow(2)));
    }
  }]);

  return Gamma;
}();

exports.Gamma = Gamma;