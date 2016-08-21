'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NegativeBinomial = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _choose2 = require('../internal/_choose');

var _choose3 = _interopRequireDefault(_choose2);

var _multiply2 = require('../internal/_multiply');

var _multiply3 = _interopRequireDefault(_multiply2);

var _pow2 = require('../internal/_pow');

var _pow3 = _interopRequireDefault(_pow2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** Class representing a Negative Binomial distribution. **/

var NegativeBinomial = function () {
  /**
   * @param {Number} p - The probability of success.
   * @param {Number} r - The rth trial resulting in success.
   */

  function NegativeBinomial(p, r) {
    _classCallCheck(this, NegativeBinomial);

    this.p = p;
    this.q = 1 - p;
    this.r = r;

    this.mean = this._mean();
    this.variance = this._variance();
  }

  /**
   * @param {Number} y - The Number of successes.
   * @returns {Number} The probability distribution.
   */


  _createClass(NegativeBinomial, [{
    key: 'probability',
    value: function probability(y) {
      if (y < this.r) throw new Error("Invalid value for y");

      return (0, _multiply3.default)((0, _choose3.default)(y - 1, this.r - 1), (0, _pow3.default)(this.p, this.r), (0, _pow3.default)(this.q, y - this.r));
    }

    /**
     * @returns {Number} The mean.
     */

  }, {
    key: '_mean',
    value: function _mean() {
      return this.r / this.p;
    }

    /**
     * @returns {Number} The variance.
     */

  }, {
    key: '_variance',
    value: function _variance() {
      return (0, _multiply3.default)(this.r, this.q) / (0, _pow3.default)(this.p, 2);
    }
  }]);

  return NegativeBinomial;
}();

exports.NegativeBinomial = NegativeBinomial;