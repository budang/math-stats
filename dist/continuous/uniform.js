"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Uniform = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _big = require("big.js");

var _big2 = _interopRequireDefault(_big);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** Class representing a Uniform distribution. **/

var Uniform = function () {
  /**
   * Creates a Binomial random variable.
   * @param {Number} theta1 - The start of the interval.
   * @param {Number} theta2 - The end of the interval.
   */

  function Uniform(theta1, theta2) {
    _classCallCheck(this, Uniform);

    this.theta1 = new _big2.default(theta1);
    this.theta2 = new _big2.default(theta2);

    this.mean = this._mean();
    this.variance = this._variance();
  }

  /**
   * Calculates some probability distribution.
   * @param {Number} y - A number within the interval.
   * @returns {Number} The probability distribution.
   */


  _createClass(Uniform, [{
    key: "probability",
    value: function probability(y) {
      if (y < this.theta1 || y > this.theta2) throw new Error("Invalid value for y");

      return parseFloat(new _big2.default(1).div(this.theta2.minus(this.theta1)));
    }

    /**
     * Computes the mean.
     * @returns {Number} The mean.
     */

  }, {
    key: "_mean",
    value: function _mean() {
      return parseFloat(this.theta1.plus(this.theta2).div(2));
    }

    /**
     * Computes the variance.
     * @returns {Number} The variance.
     */

  }, {
    key: "_variance",
    value: function _variance() {
      return parseFloat(this.theta2.minus(this.theta1).pow(2).div(12));
    }
  }]);

  return Uniform;
}();

exports.Uniform = Uniform;