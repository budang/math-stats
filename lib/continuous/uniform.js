import Big from 'big.js';

class Uniform {
  constructor(theta1, theta2) {
    this.theta1 = new Big(theta1);
    this.theta2 = new Big(theta2);

    this.mean = this._mean();
    this.variance = this._variance();
  }

  probability(y) {
    if (y < this.theta1 || y > this.theta2)
      throw new Error("Invalid value for y");

    return parseFloat(
      (new Big(1))
        .div(
          (this.theta2).minus(theta1)
        )
    );
  }

  _mean() {
    return parseFloat(
      (this.theta1)
        .plus(this.theta2)
        .div(2)
    );
  }

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