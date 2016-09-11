import Big from 'big.js';

/** Class representing a Uniform distribution. **/
class Uniform {
  /**
   * Creates a Binomial random variable.
   * @param {Number} theta1 - The start of the interval.
   * @param {Number} theta2 - The end of the interval.
   */
  constructor(theta1, theta2) {
    this.theta1 = new Big(theta1);
    this.theta2 = new Big(theta2);

    this.mean = this._mean();
    this.variance = this._variance();
  }

  /**
   * Calculates some probability distribution.
   * @param {Number} y - A number within the interval.
   * @returns {Number} The probability distribution.
   */
  probability(y) {
    if (y < this.theta1 || y > this.theta2)
      throw new Error("Invalid value for y");

    return parseFloat(
      (new Big(1))
        .div(
          (this.theta2).minus(this.theta1)
        )
    );
  }

  /**
   * Computes the mean.
   * @returns {Number} The mean.
   */
  _mean() {
    return parseFloat(
      (this.theta1)
        .plus(this.theta2)
        .div(2)
    );
  }

  /**
   * Computes the variance.
   * @returns {Number} The variance.
   */
  _variance() {
    return parseFloat(
      (this.theta2)
        .minus(this.theta1)
        .pow(2)
        .div(12)
    );
  }
}

export { Uniform };