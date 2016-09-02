import Big from 'big.js';
import _gamma from '../internal/_gamma';

class ChiSquare {
  constructor(v) {
    this.v = new Big(v);

    this.mean = this._mean();
    this.variance = this._variance();
  }

  probability(y) {
    if (Math.pow(y, 2) <= 0)
      throw new Error("Invalid value for y");
  
    return parseFloat(
      (new Big(y))
        .pow(
          (this.v).div(2)
        )
        .times(
          Math.E(-y / 2)
        )
        .div(
          (new Big(2))
            .pow(
              (this.v).div(2)
            )
            .times(
              _gamma(
                (this.v).div(2)
              )
            )
        )
    )

  }

  _mean() {
    return parseFloat(
      (this.v)
    );
  }

  _variance() {
    return parseFloat(
      (this.v).times(2)
    );
  }
}

export { ChiSquare };