'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChiSquare = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _gamma2 = require('../internal/_gamma');

var _gamma3 = _interopRequireDefault(_gamma2);

var _multiply2 = require('../internal/_multiply');

var _multiply3 = _interopRequireDefault(_multiply2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ChiSquare = function () {
  function ChiSquare(v) {
    _classCallCheck(this, ChiSquare);

    this.v = v;

    this.mean = this._mean();
    this.variance = this._variance();
  }

  _createClass(ChiSquare, [{
    key: 'probability',
    value: function probability(y) {
      if (Math.pow(y, 2) <= 0) throw new Error("Invalid value for y");

      return (0, _multiply3.default)(Math.pow(y, this.v / 2), Math.E(-y / 2)) / (0, _multiply3.default)((Math.pow(2, this.v / 2), (0, _gamma3.default)(this.v / 2)));
    }
  }, {
    key: '_mean',
    value: function _mean() {
      return this.v;
    }
  }, {
    key: '_variance',
    value: function _variance() {
      return 2 * this.v;
    }
  }]);

  return ChiSquare;
}();

exports.ChiSquare = ChiSquare;