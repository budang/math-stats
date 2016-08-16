"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Poisson = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _factorial2 = require("../internal/_factorial");

var _factorial3 = _interopRequireDefault(_factorial2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Poisson = function () {
  function Poisson(lambda) {
    _classCallCheck(this, Poisson);

    this.lambda = lambda;

    this.mean = this._mean();
    this.variance = this._variance();
  }

  _createClass(Poisson, [{
    key: "probability",
    value: function probability(y) {
      if (y < 0) throw new Error("Invalid value for y");

      return Math.pow(this.lambda, y) * Math.exp(-this.lambda) / (0, _factorial3.default)(y);
    }
  }, {
    key: "_mean",
    value: function _mean() {
      return this.lambda;
    }
  }, {
    key: "_variance",
    value: function _variance() {
      return this.lambda;
    }
  }]);

  return Poisson;
}();

exports.Poisson = Poisson;