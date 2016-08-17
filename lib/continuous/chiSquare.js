import _gamma from '../internal/_gamma';
import _multiply from '../internal/_multiply';

class ChiSquare {
  constructor(v) {
    this.v = v;

    this.mean = this._mean();
    this.variance = this._variance();
  }

  probability(y) {
    if (Math.pow(y, 2) <= 0) throw new Error("Invalid value for y");

    return _multiply(Math.pow(y, this.v / 2), Math.E(-y / 2)) / _multiply((Math.pow(2, this.v / 2), _gamma(this.v / 2)));
  }

  _mean() {
    return this.v;
  }

  _variance() {
    return 2 * this.v;
  }
}

export { ChiSquare };