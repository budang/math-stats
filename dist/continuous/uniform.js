"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Uniform = function () {
  function Uniform(theta1, theta2) {
    _classCallCheck(this, Uniform);

    this.theta1 = theta1;
    this.theta2 = theta2;

    this.mean = this._mean();
    this.variance = this._variance();
  }

  _createClass(Uniform, [{
    key: "probability",
    value: function probability(y) {
      if (y < this.theta1 || y > this.theta2) throw new Error("Invalid value for y");

      return 1 / (this.theta2 - this.theta1);
    }
  }, {
    key: "_mean",
    value: function _mean() {
      return (this.theta1 + this.theta2) / 2;
    }
  }, {
    key: "_variance",
    value: function _variance() {
      return Math.pow(this.theta2 - this.theta1, 2) / 12;
    }
  }]);

  return Uniform;
}();

exports.Uniform = Uniform;