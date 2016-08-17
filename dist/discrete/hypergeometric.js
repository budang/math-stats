'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Hypergeometric = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _choose2 = require('../internal/_choose');

var _choose3 = _interopRequireDefault(_choose2);

var _multiply2 = require('../internal/_multiply');

var _multiply3 = _interopRequireDefault(_multiply2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Hypergeometric = function () {
  function Hypergeometric(n, N, r) {
    _classCallCheck(this, Hypergeometric);

    this.n = n;
    this.N = N;
    this.r = r;

    this.mean = this._mean();
    this.variance = this._variance();
  }

  _createClass(Hypergeometric, [{
    key: 'probability',
    value: function probability(y) {
      if (this.n <= this.r && (y < 0 || y > this.n) || this.n > this.r && (y < 0 || y > this.r)) throw new Error("Invalid value for y");

      return (0, _multiply3.default)((0, _choose3.default)(this.r, y), (0, _choose3.default)(this.N - this.r, this.n - y)) / (0, _choose3.default)(this.N, this.n);
    }
  }, {
    key: '_mean',
    value: function _mean() {
      return (0, _multiply3.default)(this.n, this.r) / this.N;
    }
  }, {
    key: '_variance',
    value: function _variance() {
      return (0, _multiply3.default)(this.n, this.r / this.N, (this.N - this.r) / this.N, (this.N - this.n) / (this.N - 1));
    }
  }]);

  return Hypergeometric;
}();

exports.Hypergeometric = Hypergeometric;