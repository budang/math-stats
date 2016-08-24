import _factorial from '../internal/_factorial';

class Poisson {
  constructor(lambda) {
    this.lambda = new Big(lambda);

    this.mean = this._mean();
    this.variance = this._variance();
  }

  probability(y) {
    if (y < 0)
      throw new Error("Invalid value for y");

    return parseFloat(
      (this.lambda)
        .pow(y)
        .times(
          parseFloat(
            (new Big(Math.exp(-this.lambda)))
              .div(_factorial(y))
          )
        )
    );
  }

  _mean() {
    return this.lambda;
  }

  _variance() {
    return this.lambda;
  }
}

export { Poisson };