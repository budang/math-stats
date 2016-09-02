'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Beta = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _big = require('big.js');

var _big2 = _interopRequireDefault(_big);

var _gamma2 = require('../internal/_gamma');

var _gamma3 = _interopRequireDefault(_gamma2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Beta = function () {
  function Beta(alpha, beta) {
    _classCallCheck(this, Beta);

    this.alpha = new _big2.default(alpha);
    this.beta = new _big2.default(beta);

    this.mean = this._mean();
    this.variance = this._variance();
  }

  _createClass(Beta, [{
    key: 'probability',
    value: function probability(y) {
      if (y <= 0 || y >= 1) throw new Error("Invalid value for y");

      return parseFloat(new _big2.default((0, _gamma3.default)(this.alpha.plus(this.beta))).div((0, _gamma3.default)(this.alpha)).times((0, _gamma3.default)(this.beta)).times(new _big2.default(y).pow(this.alpha.minus(1))).times(new _big2.default(1 - y).pow(this.beta.minus(1))));
    }
  }, {
    key: '_mean',
    value: function _mean() {
      return parseFloat(this.alpha.div(this.alpha.plus(this.beta)));
    }
  }, {
    key: '_variance',
    value: function _variance() {
      return parseFloat(this.alpha.times(this.beta).div(this.alpha.plus(this.beta).pow(2).times(this.alpha.plus(this.beta).plus(1))));
    }
  }]);

  return Beta;
}();

exports.Beta = Beta;