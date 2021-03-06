'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChiSquare = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _big = require('big.js');

var _big2 = _interopRequireDefault(_big);

var _gamma2 = require('../internal/_gamma');

var _gamma3 = _interopRequireDefault(_gamma2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ChiSquare = function () {
  function ChiSquare(v) {
    _classCallCheck(this, ChiSquare);

    this.v = new _big2.default(v);

    this.mean = this._mean();
    this.variance = this._variance();
  }

  _createClass(ChiSquare, [{
    key: 'probability',
    value: function probability(y) {
      if (Math.pow(y, 2) <= 0) throw new Error("Invalid value for y");

      return parseFloat(new _big2.default(y).pow(this.v.div(2)).times(Math.E(-y / 2)).div(new _big2.default(2).pow(this.v.div(2)).times((0, _gamma3.default)(this.v.div(2)))));
    }
  }, {
    key: '_mean',
    value: function _mean() {
      return parseFloat(this.v);
    }
  }, {
    key: '_variance',
    value: function _variance() {
      return parseFloat(this.v.times(2));
    }
  }]);

  return ChiSquare;
}();

exports.ChiSquare = ChiSquare;