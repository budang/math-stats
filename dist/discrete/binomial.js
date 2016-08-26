'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Binomial = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _big = require('big.js');

var _big2 = _interopRequireDefault(_big);

var _choose2 = require('../internal/_choose');

var _choose3 = _interopRequireDefault(_choose2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** Class representing a Binomial distribution. **/

var Binomial = function () {
  /**
   * @param {Number} p - The probability of success.
   * @param {Number} n - The Number of identical trials.
   */

  function Binomial(p, n) {
    _classCallCheck(this, Binomial);

    this.p = new _big2.default(p);
    this.q = new _big2.default(1 - p);
    this.n = new _big2.default(n);

    this.mean = this._mean();
    this.variance = this._variance();
  }

  /**
   * @param {Number} y - The number of successes.
   * @returns {Number} The probability distribution.
   */


  _createClass(Binomial, [{
    key: 'probability',
    value: function probability(y) {
      if (y < 0 || y > parseFloat(this.n)) throw new Error("Invalid value for y");

      return parseFloat(new _big2.default((0, _choose3.default)(this.n, y)).times(this.p.pow(y)).times(this.q.pow(parseFloat(this.n.minus(y)))));
    }

    /**
     * @returns {Number} The mean.
     */

  }, {
    key: '_mean',
    value: function _mean() {
      return parseFloat(this.n.times(this.p));
    }

    /**
     * @returns {Number} The variance.
     */

  }, {
    key: '_variance',
    value: function _variance() {
      return parseFloat(this.n.times(this.p).times(this.q));
    }
  }]);

  return Binomial;
}();

exports.Binomial = Binomial;