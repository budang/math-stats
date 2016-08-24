'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Hypergeometric = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _bigJs = require('big-js');

var _bigJs2 = _interopRequireDefault(_bigJs);

var _choose2 = require('../internal/_choose');

var _choose3 = _interopRequireDefault(_choose2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** Class representing a Hypergeometric distribution. **/
var Hypergeometric = function () {
  function Hypergeometric(n, N, r) {
    _classCallCheck(this, Hypergeometric);

    this.n = new _bigJs2.default(n);
    this.N = new _bigJs2.default(N);
    this.r = new _bigJs2.default(r);

    this.mean = this._mean();
    this.variance = this._variance();
  }

  /** 
   * @param {Number} y - The Number of successes.
   * @returns {Number} The probability distribution.
   */


  _createClass(Hypergeometric, [{
    key: 'probability',
    value: function probability(y) {
      if (this.n.lte(this.r) && (y < 0 || y > parseFloat(this.n)) || this.n.gt(this.r) && (y < 0 || y > parseFloat(this.r))) throw new Error("Invalid value for y");

      return parseFloat(new _bigJs2.default((0, _choose3.default)(this.r, y)).times(new _bigJs2.default((0, _choose3.default)(this.N.minus(this.r), this.n.minus(y))).div((0, _choose3.default)(this.N, this.n))));
    }

    /**
     * @returns {Number} The mean.
     */

  }, {
    key: '_mean',
    value: function _mean() {
      return parseFloat(this.n.times(this.r).div(this.N));
    }

    /**
     * @returns {Number} The variance.
     */

  }, {
    key: '_variance',
    value: function _variance() {
      return parseFloat(this.n.times(this.r.div(this.N)).times(this.N.minus(this.r).div(this.N)).times(this.N.minus(this.n).div(this.N.minus(1))));
    }
  }]);

  return Hypergeometric;
}();

exports.Hypergeometric = Hypergeometric;