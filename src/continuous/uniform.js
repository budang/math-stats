class Uniform {
  constructor(theta1, theta2) {
    this.theta1 = theta1;
    this.theta2 = theta2;

    this.mean = this._mean();
    this.variance = this._variance();
  }

  probability(y) {
    if (y < this.theta1 || y > this.theta2) throw new Error("Invalid value for y");

    return 1 / (this.theta2 - this.theta1);
  }

  _mean() {
    return (this.theta1 + this.theta2) / 2;
  }

  _variance() {
    return Math.pow(this.theta2 - this.theta1, 2) / 12;
  }
}

export { Uniform };