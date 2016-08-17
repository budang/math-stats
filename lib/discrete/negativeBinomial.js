import _choose from '../internal/_choose';
import _multiply from '../internal/_multiply';

class NegativeBinomial {
  constructor(p, r) {
    this.p = p;
    this.q = p - 1;
    this.r = r;

    this.mean = this._mean();
    this.variance = this._variance();
  }

  probability(y) {
    if (y < this.r) throw new Error("Invalid value for y");

    return _multiply(_choose(y - 1, this.r - 1), Math.pow(this.p, this.r), Math.pow(this.q, y - this.r));
  }

  _mean() {
    return this.r / this.p;
  }

  _variance() {
    return _multiply(this.r, this.q) / Math.pow(this.p, 2);
  }
}

export { NegativeBinomial };