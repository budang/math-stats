"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Exponential = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _big = require("big.js");

var _big2 = _interopRequireDefault(_big);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Exponential = function () {
  function Exponential(beta) {
    _classCallCheck(this, Exponential);

    if (beta <= 0) throw new Error("Invalid value for beta");

    this.beta = new _big2.default(beta);

    this.mean = this._mean();
    this.variance = this._variance();
  }

  _createClass(Exponential, [{
    key: "probability",
    value: function probability(y) {
      if (y <= 0 || y >= Infinity) throw new Error("Invalid value for y");

      return parseFloat(new _big2.default(1).div(this.beta).times(Math.E(parseFloat(new _big2.default(-y).div(this.beta)))));
    }
  }, {
    key: "_mean",
    value: function _mean() {
      return parseFloat(this.beta);
    }
  }, {
    key: "_variance",
    value: function _variance() {
      return parseFloat(this.beta.pow(2));
    }
  }]);

  return Exponential;
}();

exports.Exponential = Exponential;