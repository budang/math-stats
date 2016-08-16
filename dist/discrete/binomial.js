"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Binomial = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _choose2 = require("../internal/_choose");

var _choose3 = _interopRequireDefault(_choose2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Binomial = function () {
  function Binomial(p, n) {
    _classCallCheck(this, Binomial);

    this.p = p;
    this.q = p - 1;
    this.n = n;

    this.mean = this._mean();
    this.variance = this._variance();
  }

  _createClass(Binomial, [{
    key: "probability",
    value: function probability(y) {
      if (y < 0 || y > this.n) throw new Error("Invalid value for y");

      return (0, _choose3.default)(this.n, y) * Math.pow(this.p, y) * Math.pow(this.q, this.n - y);
    }
  }, {
    key: "_mean",
    value: function _mean() {
      return this.n * this.p;
    }
  }, {
    key: "_variance",
    value: function _variance() {
      return this.n * this.p * this.q;
    }
  }]);

  return Binomial;
}();

exports.Binomial = Binomial;