import _choose from '../internal/_choose';

class Hypergeometric {
  constructor(n, N, r) {
    this.n = n;
    this.N = N;
    this.r = r;

    this.mean = this._mean();
    this.variance = this._variance();
  }

  probability(y) {
    if (this.n <= this.r && (y < 0 || y > this.n) || this.n > this.r && (y < 0 || y > this.r)) throw new Error("Invalid value for y");

    return _choose(this.r, y) * _choose(this.N - this.r, this.n - y) / _choose(this.N, this.n);
  }

  _mean() {
    return this.n * this.r / this.N;
  }

  _variance() {
    return this.n * (this.r / this.N) * ((this.N - this.r) / this.N) - (this.N - this.n) / (this.N - 1);
  }
}

export { Hypergeometric };