"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Exponential = function () {
  function Exponential(beta) {
    _classCallCheck(this, Exponential);

    if (beta <= 0) throw new Error("Invalid value for beta");

    this.beta = beta;

    this.mean = this._mean();
    this.variance = this._variance();
  }

  _createClass(Exponential, [{
    key: "probability",
    value: function probability(y) {
      if (y <= 0 || y >= Infinity) throw new Error("Invalid value for y");

      return 1 / this.beta * Math.E(-y / this.beta);
    }
  }, {
    key: "_mean",
    value: function _mean() {
      return this.beta;
    }
  }, {
    key: "_variance",
    value: function _variance() {
      return Math.pow(this.beta, 2);
    }
  }]);

  return Exponential;
}();

exports.Exponential = Exponential;