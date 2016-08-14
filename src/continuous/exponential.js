class Exponential {
  constructor(beta) {
    if (beta <= 0) throw new Error("Invalid value for beta");

    this.beta = beta;

    this.mean = this._mean();
    this.variance = this._variance();
  }

  probability(y) {
    if (y <= 0 || y >= Infinity) throw new Error("Invalid value for y");

    return 1 / this.beta * Math.E(-y / this.beta);
  }

  _mean() {
    return this.beta;
  }

  _variance() {
    return Math.pow(this.beta, 2);
  }
}

export { Exponential };