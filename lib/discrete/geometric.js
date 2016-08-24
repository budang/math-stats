import Big from 'big-js';

/** Class representing a Geometric distribution. **/
class Geometric {
  /**
   * @param {Number} p - The probability of success.
   */
  constructor(p) {
    this.p = new Big(p);
    this.q = new Big(1 - p);

    this.mean = this._mean();
    this.variance = this._variance();
  }

  /**
   * @param {Number} y - The Number of successes.
   * @returns {Number} The probability distribution.
   */
  probability(y) {
    if (y < 1)
      throw new Error("Invalid value for y");

    return parseFloat(
      (this.p)
        .times(
          parseFloat(
            (this.q)
              .pow(y - 1)
          )
        )
    );
  }

  /**
   * @returns {Number} The mean.
   */
  _mean() {
    return parseFloat(
      (new Big(1))
        .div(this.p)
    );
  }

  /**
   * @returns {Number} The variance.
   */
  _variance() {
    return parseFloat(
      (this.q)
        .div(
          parseFloat(
            (this.p)
              .pow(2)
          )
        )
    );
  }
}

export { Geometric };