import Big from 'big.js';
import _factorial from '../internal/_factorial';

/** Class representing a Poisson distribution. **/
class Poisson {
  /**
   * @param {Number} lambda - The average number of events over some time.
   */
  constructor(lambda) {
    this.lambda = new Big(lambda);

    this.mean = this._mean();
    this.variance = this._variance();
  }

  /**
   * @param {Number} y - The number of successes.
   * @returns {Number} The probability distribution.
   */
  probability(y) {
    if (y < 0)
      throw new Error("Invalid value for y");

    return parseFloat(
      (this.lambda)
        .pow(y)
        .times(
          (new Big(Math.exp(-this.lambda)))
            .div(_factorial(y))
        )
    );
  }

  /**
   * @returns {Number} The mean.
   */
  _mean() {
    return parseFloat(this.lambda);
  }

  /**
   * @returns {Number} The variance.
   */
  _variance() {
    return parseFloat(this.lambda);
  }
}

export { Poisson };