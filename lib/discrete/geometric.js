import _multiply from '../internal/_multiply';
import _pow from '../internal/_pow';

/** Class representing a Geometric distribution. **/
class Geometric {
  /**
   * @param {Number} p - The probability of success.
   */
  constructor(p) {
    this.p = p;
    this.q = 1 - p;

    this.mean = this._mean();
    this.variance = this._variance();
  }

  /**
   * @param {Number} y - The Number of successes.
   * @returns {Number} The probability distribution.
   */
  probability(y) {
    if (y < 1) throw new Error("Invalid value for y");

    return _multiply(this.p, _pow(this.q, y - 1));
  }

  /**
   * @returns {Number} The mean.
   */
  _mean() {
    return 1 / this.p;
  }

  /**
   * @returns {Number} The variance.
   */
  _variance() {
    return this.q / _pow(this.p, 2);
  }
}

export { Geometric };