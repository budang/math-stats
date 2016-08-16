"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NegativeBinomial = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _choose2 = require("../internal/_choose");

var _choose3 = _interopRequireDefault(_choose2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NegativeBinomial = function () {
  function NegativeBinomial(p, r) {
    _classCallCheck(this, NegativeBinomial);

    this.p = p;
    this.q = p - 1;
    this.r = r;

    this.mean = this._mean();
    this.variance = this._variance();
  }

  _createClass(NegativeBinomial, [{
    key: "probability",
    value: function probability(y) {
      if (y < this.r) throw new Error("Invalid value for y");

      return (0, _choose3.default)(y - 1, this.r - 1) * Math.pow(this.p, this.r) * Math.pow(this.q, y - this.r);
    }
  }, {
    key: "_mean",
    value: function _mean() {
      return this.r / this.p;
    }
  }, {
    key: "_variance",
    value: function _variance() {
      return this.r * this.q / Math.pow(this.p, 2);
    }
  }]);

  return NegativeBinomial;
}();

exports.NegativeBinomial = NegativeBinomial;