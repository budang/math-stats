import Big from 'big.js';
import _gamma from '../internal/_gamma';

class Beta {
  constructor(alpha, beta) {
    this.alpha = new Big(alpha);
    this.beta = new Big(beta);

    this.mean = this._mean();
    this.variance = this._variance();
  }

  probability(y) {
    if (y <= 0 || y >= 1)
      throw new Error("Invalid value for y");

    return parseFloat(
      (new Big(_gamma(
        (this.alpha).plus(this.beta)
      )))
        .div(
          _gamma(this.alpha)
        )
        .times(
          _gamma(this.beta)
        )
        .times(
          (new Big(y))
            .pow(
              (this.alpha).minus(1)
            )
        )
        .times(
          (new Big(1 - y))
            .pow(
              (this.beta).minus(1)
            )
        )
    );
  }

  _mean() {
    return parseFloat(
      (this.alpha)
        .div(
          (this.alpha).plus(this.beta)
        )
    );
  }

  _variance() {
    return parseFloat(
      (this.alpha)
        .times(this.beta)
        .div(
          (this.alpha)
            .plus(this.beta)
            .pow(2)
            .times(
              (this.alpha)
                .plus(this.beta)
                .plus(1)
            )
        )
    );
  }
}

export { Beta };