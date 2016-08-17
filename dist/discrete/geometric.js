"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Geometric = function () {
  function Geometric(p) {
    _classCallCheck(this, Geometric);

    this.p = p;
    this.q = p - 1;

    this.mean = this._mean();
    this.variance = this._variance();
  }

  _createClass(Geometric, [{
    key: "probability",
    value: function probability(y) {
      if (y < 1) throw new Error("Invalid value for y");

      return this.p * Math.pow(this.q, y - 1);
    }
  }, {
    key: "_mean",
    value: function _mean() {
      return 1 / this.p;
    }
  }, {
    key: "_variance",
    value: function _variance() {
      return this.q / Math.pow(this.p, 2);
    }
  }]);

  return Geometric;
}();

exports.Geometric = Geometric;