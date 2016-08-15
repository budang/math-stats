import _choose from '../internal/_choose';

class Binomial {
  constructor(p, n) {
    this.p = p;
    this.q = p - 1;
    this.n = n;

    this.mean = this._mean();
    this.variance = this._variance();
  }

  probability(y) {
    if (y < 0 || y > this.n) throw new Error("Invalid value for y");

    return _choose(this.n, y) * Math.pow(this.p, y) * Math.pow(this.q, this.n - y);
  }

  _mean() {
    return this.n * this.p;
  }

  _variance() {
    return this.n * this.p * this.q;
  }
}

export { Binomial };