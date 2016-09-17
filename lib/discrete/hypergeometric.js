import Big from 'big.js';
import _choose from '../internal/_choose';

/** Class representing a Hypergeometric distribution. **/
class Hypergeometric {
  /**
   * Creates a Hypergeometric random variable.
   * @param {Number} n - The number of draws.
   * @param {Number} N - The population size.
   * @param {Number} r - The number of classified successes.
   */
  constructor(n, N, r) {
    this.n = new Big(n);
    this.N = new Big(N);
    this.r = new Big(r);

    this.mean = this._mean();
    this.variance = this._variance();
  }

  /**
   * Calculates some probability distribution.
   * @param {Number} y - The number of successes.
   * @returns {Number} The probability distribution.
   */
  probability(y) {
    if ((this.n).lte(this.r) && (y < 0 || y > parseFloat(this.n)) ||
      (this.n.gt(this.r) && (y < 0 || y > parseFloat(this.r))))
      throw new Error("Invalid value for y");

    console.log('***************************')
    console.log(_choose(20, 5))
    console.log(_choose(this.N, this.n))
    console.log('***************************')

    return parseFloat(
      (new Big(
        _choose(this.r, y)
      ))
        .times(
          (new Big(
            _choose(
              (this.N).minus(this.r), (this.n).minus(y)
            )
          ))
            .div(
              (new Big(_choose(this.N, this.n)))
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
        .times(this.r)
        .div(this.N)
    );
  }

  /**
   * Computes the variance.
   * @returns {Number} The variance.
   */
  _variance() {
    return parseFloat(
      (this.n)
        .times(
          (this.r)
            .div(this.N)
        )
        .times(
          (this.N)
            .minus(this.r)
            .div(this.N)
        )
        .times(
          (this.N)
            .minus(this.n)
            .div(
              (this.N)
                .minus(1)
            )
        )
    )
  }
}

export { Hypergeometric };