import Big from 'big.js';

/** Class representing a Geometric distribution. **/
class Geometric {
  /**
   * Creates a Geometric random variable.
   * @param {Number} p - The probability of success.
   */
  constructor(p) {
    this.p = new Big(p);
    this.q = new Big(1 - p);

    this.mean = this._mean();
    this.variance = this._variance();
  }

  /**
   * Calculates some probability distribution.
   * @param {Number} y - The number of successes.
   * @returns {Number} The probability distribution.
   */
  probability(y) {
    if (y < 1)
      throw new Error("Invalid value for y");

    return parseFloat(
      (this.p)
        .times(
          (this.q)
            .pow(y - 1)
        )
    );
  }

  /**
   * Computes the mean.
   * @returns {Number} The mean.
   */
  _mean() {
    return parseFloat(
      (new Big(1))
        .div(this.p)
    );
  }

  /**
   * Computes the variance.
   * @returns {Number} The variance.
   */
  _variance() {
    return parseFloat(
      (this.q)
        .div(
          (this.p)
            .pow(2)
        )
    );
  }
}

export { Geometric };