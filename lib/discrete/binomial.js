import _choose from '../internal/_choose';
import _multiply from '../internal/_multiply';
import _pow from '../internal/_pow';

/** Class representing a Binomial distribution. **/
class Binomial {
  /**
   * @param {Number} p - The probability of success.
   * @param {Number} n - The Number of identical trials.
   */
  constructor(p, n) {
    this.p = p;
    this.q = 1 - p;
    this.n = n;

    this.mean = this._mean();
    this.variance = this._variance();
  }

  /**
   * @param {Number} y - The Number of successes.
   * @returns {Number} The probability distribution.
   */
  probability(y) {
    if (y < 0 || y > this.n) throw new Error("Invalid value for y");

    return _multiply(_choose(this.n, y), _pow(this.p, y), _pow(this.q, this.n - y));
  }

  /**
   * @returns {Number} The mean.
   */
  _mean() {
    return _multiply(this.n, this.p);
  }

  /**
   * @returns {Number} The variance.
   */
  _variance() {
    return _multiply(this.n, this.p, this.q);
  }
}

export { Binomial };