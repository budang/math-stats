"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Geometric = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _multiply2 = require("../internal/_multiply");

var _multiply3 = _interopRequireDefault(_multiply2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** Class representing a Geometric distribution. **/

var Geometric = function () {
  /**
   * @param {Number} p - The probability of success.
   */

  function Geometric(p) {
    _classCallCheck(this, Geometric);

    this.p = p;
    this.q = 1 - p;

    this.mean = this._mean();
    this.variance = this._variance();
  }

  /**
   * @param {Number} y - The Number of successes.
   * @returns {Number} The probability distribution.
   */


  _createClass(Geometric, [{
    key: "probability",
    value: function probability(y) {
      if (y < 1) throw new Error("Invalid value for y");

      return (0, _multiply3.default)(this.p, Math.pow(this.q, y - 1));
    }

    /**
     * @returns {Number} The mean.
     */

  }, {
    key: "_mean",
    value: function _mean() {
      return 1 / this.p;
    }

    /**
     * @returns {Number} The variance.
     */

  }, {
    key: "_variance",
    value: function _variance() {
      return this.q / Math.pow(this.p, 2);
    }
  }]);

  return Geometric;
}();

exports.Geometric = Geometric;