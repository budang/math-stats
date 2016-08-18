import _multiply from '../internal/_multiply';

class Geometric {
  constructor(p) {
    this.p = p;
    this.q = 1 - p;

    this.mean = this._mean();
    this.variance = this._variance();
  }

  probability(y) {
    if (y < 1) throw new Error("Invalid value for y");

    return _multiply(this.p, Math.pow(this.q, y - 1));
  }

  _mean() {
    return 1 / this.p;
  }

  _variance() {
    return this.q / Math.pow(this.p, 2);
  }
}

export { Geometric };