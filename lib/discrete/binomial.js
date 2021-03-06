import Big from 'big.js';
import _choose from '../internal/_choose';

/** Class representing a Binomial distribution. **/
class Binomial {
  /**
   * Creates a Binomial random variable.
   * @param {Number} p - The probability of success.
   * @param {Number} n - The number of identical trials.
   */
  constructor(p, n) {
    this.p = new Big(p);
    this.q = new Big(1 - p);
    this.n = new Big(n);

    this.mean = this._mean();
    this.variance = this._variance();
  }

  /**
   * Calculates some probability distribution.
   * @param {Number} y - The number of successes.
   * @returns {Number} The probability distribution.
   */
  probability(y) {
    if (y < 0 || y > parseFloat(this.n))
      throw new Error("Invalid value for y");

    return parseFloat(
      (new Big(_choose(this.n, y)))
        .times(
          (this.p)
            .pow(y)
        )
        .times(
          (this.q).pow(
            parseFloat(
              (this.n)
                .minus(y)
            )
          )
        )
    );
  }

  /**
   * Computes the mean.
   * @returns {Number} The mean.
   */
  _mean() {
    return parseFloat(
      (this.n)
        .times(this.p)
    );
  }

  /**
   * Computes the variance.
   * @returns {Number} The variance.
   */
  _variance() {
    return parseFloat(
      (this.n)
        .times(this.p)
        .times(this.q)
    );
  }
}

export { Binomial };