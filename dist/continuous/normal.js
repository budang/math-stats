"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Normal = function () {
  function Normal(mu, sigma) {
    _classCallCheck(this, Normal);

    this.mu = mu;
    this.sigma = sigma;

    this.mean = this._mean();
    this.variance = this._variance();
  }

  _createClass(Normal, [{
    key: "probability",
    value: function probability(y) {
      if (y <= -Infinity || y >= Infinity) throw new Error("Invalid value for y");

      return 1 / (this.sigma * Math.sqrt(2 * Math.pi)) * Math.E(-(1 / (2 * Math.pow(this.sigma, 2))) * Math.pow(y - this.mu, 2));
    }
  }, {
    key: "_mean",
    value: function _mean() {
      return this.mu;
    }
  }, {
    key: "_variance",
    value: function _variance() {
      return Math.pow(this.sigma, 2);
    }
  }]);

  return Normal;
}();

exports.Normal = Normal;