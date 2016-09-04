"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Normal = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _big = require("big.js");

var _big2 = _interopRequireDefault(_big);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Normal = function () {
  function Normal(mu, sigma) {
    _classCallCheck(this, Normal);

    this.mu = new _big2.default(mu);
    this.sigma = new _big2.default(sigma);

    this.mean = this._mean();
    this.variance = this._variance();
  }

  _createClass(Normal, [{
    key: "probability",
    value: function probability(y) {
      if (y <= -Infinity || y >= Infinity) throw new Error("Invalid value for y");

      return parseFloat(new _big2.default(1).div(this.sigma.times(Math.sqrt(2 * Math.pi))).times(Math.E(new _big2.default(-1).div(new _big2.default(2).times(this.sigma.pow(2))).times(new _big2.default(y).minus(this.mu).pow(2)))));
    }
  }, {
    key: "_mean",
    value: function _mean() {
      return parseFloat(this.mu);
    }
  }, {
    key: "_variance",
    value: function _variance() {
      return parseFloat(this.sigma.pow(2));
    }
  }]);

  return Normal;
}();

exports.Normal = Normal;