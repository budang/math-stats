import _gamma from '../internal/_gamma';
import _multiply from '../internal/_multiply';

class Gamma {
  constructor(alpha, beta) {
    this.alpha = alpha;
    this.beta = beta;

    this.mean = this._mean();
    this.variance = this._variance();
  }

  probability(y) {
    if (y <= 0 || y >= Infinity) throw new Error("Invalid value for y");

    return _multiply((1 / (_gamma(this.alpha)), Math.pow(this.beta, this.alpha)), Math.pow(y, this.alpha - 1), Math.E(-y / this.beta));
  }

  _mean() {
    return _multiply(this.alpha, this.beta);
  }

  _variance() {
    return _multiply(this.alpha, Math.pow(this.beta, 2));
  }
}

export { Gamma };