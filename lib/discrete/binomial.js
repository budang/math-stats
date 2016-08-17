import _choose from '../internal/_choose';

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

    return _choose(this.n, y) * Math.pow(this.p, y) * Math.pow(this.q, this.n - y);
  }

  /**
   * @returns {Number} The mean.
   */
  _mean() {
    return this.n * this.p;
  }

  /**
   * @returns {Number} The variance.
   */
  _variance() {
    return this.n * this.p * this.q;
  }
}

export { Binomial };