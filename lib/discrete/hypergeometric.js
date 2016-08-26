import Big from 'big.js';
import _choose from '../internal/_choose';

/** Class representing a Hypergeometric distribution. **/
class Hypergeometric {
  constructor(n, N, r) {
    this.n = new Big(n);
    this.N = new Big(N);
    this.r = new Big(r);

    this.mean = this._mean();
    this.variance = this._variance();
  }

  /** 
   * @param {Number} y - The number of successes.
   * @returns {Number} The probability distribution.
   */
  probability(y) {
    if ((this.n).lte(this.r) && (y < 0 || y > parseFloat(this.n)) ||
      (this.n.gt(this.r) && (y < 0 || y > parseFloat(this.r))))
      throw new Error("Invalid value for y");

    return parseFloat(
      (new Big(_choose(this.r, y)))
        .times(
          (new Big(_choose((this.N).minus(this.r), (this.n).minus(y))))
            .div(_choose(this.N, this.n))
        )
    );
  }

  /**
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