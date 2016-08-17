class Geometric {
  constructor(p) {
    this.p = p;
    this.q = p - 1;

    this.mean = this._mean();
    this.variance = this._variance();
  }

  probability(y) {
    if (y < 1) throw new Error("Invalid value for y");

    return this.p * Math.pow(this.q, y - 1);
  }

  _mean() {
    return 1 / this.p;
  }

  _variance() {
    return this.q / Math.pow(this.p, 2);
  }
}

export { Geometric };