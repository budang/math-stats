import Big from 'big-js';
import _choose from '../internal/_choose';

/** Class representing a Negative Binomial distribution. **/
class NegativeBinomial {
  /**
   * @param {Number} p - The probability of success.
   * @param {Number} r - The rth trial resulting in success.
   */
  constructor(p, r) {
    this.p = new Big(p);
    this.q = new Big(1 - p);
    this.r = new Big(r);

    this.mean = this._mean();
    this.variance = this._variance();
  }

  /**
   * @param {Number} y - The Number of successes.
   * @returns {Number} The probability distribution.
   */
  probability(y) {
    if (y < parseFloat(this.r))
      throw new Error("Invalid value for y");

    return parseFloat(
      (new Big(_choose(y - 1, this.r - 1)))
        .times(
          parseFloat(
            (this.p)
              .pow(this.r)
          )
        )
        .times(
          parseFloat(
            (this.q)
              .pow(y - this.r)
          )
        )
    );
  }

  /**
   * @returns {Number} The mean.
   */
  _mean() {
    return parseFloat(
      (this.r)
        .div(this.p)
    );
  }

  /**
   * @returns {Number} The variance.
   */
  _variance() {
    return  parseFloat(
      (this.r)
        .times(this.q)
        .div(
          parseFloat(
            (this.p)
              .pow(2)
          )
        )
    );
  }
}

export { NegativeBinomial };