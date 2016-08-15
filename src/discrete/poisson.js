import _factorial from '../internal/_factorial';

class Poisson {
  constructor(lambda) {
    this.lambda = lambda;

    this.mean = this._mean();
    this.variance = this._variance();
  }

  probability(y) {
    if (y < 0) throw new Error("Invalid value for y");

    return Math.pow(this.lambda, y) * Math.exp(-this.lambda) / _factorial(y);
  }

  _mean() {
    return this.lambda;
  }

  _variance() {
    return this.lambda;
  }
}

export { Poisson };