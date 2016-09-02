import Big from 'big.js';
import _gamma from '../internal/_gamma';

class Gamma {
  constructor(alpha, beta) {
    this.alpha = new Big(alpha);
    this.beta = new Big(beta);

    this.mean = this._mean();
    this.variance = this._variance();
  }

  probability(y) {
    if (y <= 0 || y >= Infinity)
      throw new Error("Invalid value for y");

    return _multiply(
      (1 / (_gamma(this.alpha)),
      Math.pow(this.beta, this.alpha)),
      Math.pow(y, this.alpha - 1),
      Math.E(-y / this.beta));
  
    return parseFloat(
      (new Big(1))
        .div(_gamma(this.alpha))
        .times(
          (this.beta).pow(this.alpha)
        )
        .times(
          (new Big(y))
            .pow(
              (this.alpha).minus(1)
            )
        )
        .times(
          Math.E(
            parseFloat(
              (new Big(-y)).div(this.beta)
            )
          )
        )
    );
  }

  _mean() {
    return parseFloat(
      (this.alpha)
        .times(this.beta)
    );
  }

  _variance() {
    return parseFloat(
      (this.alpha)
        .times(
          (this.beta).pow(2)
        )
    );
  }
}

export { Gamma };