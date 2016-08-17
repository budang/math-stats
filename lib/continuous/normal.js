import _multiply from '../internal/_multiply';

class Normal {
  constructor(mu, sigma) {
    this.mu = mu;
    this.sigma = sigma;

    this.mean = this._mean();
    this.variance = this._variance();
  }

  probability(y) {
    if (y <= -Infinity || y >= Infinity) throw new Error("Invalid value for y");

    return _multiply((1 / (this.sigma * Math.sqrt(2 * Math.pi))), Math.E(_multiply(-(1 / (2 * Math.pow(this.sigma, 2))) * Math.pow(y - this.mu, 2))));
  }

  _mean() {
    return this.mu;
  }

  _variance() {
    return Math.pow(this.sigma, 2);
  }
}

export { Normal };