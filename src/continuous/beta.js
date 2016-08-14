import _gamma from '../internal/_gamma';

class Beta {
  constructor(alpha, beta) {
    this.alpha = alpha;
    this.beta = beta;

    this.mean = this._mean();
    this.variance = this._variance();
  }

  probability(y) {
    if (y <= 0 || y >= 1) throw new Error("Invalid value for y");

    return _gamma(this.alpha + this.beta) / (_gamma(this.alpha) * _gamma(this.beta)) * Math.pow(y, this.alpha - 1) * Math.pow(1 - y, this.beta - 1);
  }

  _mean() {
    return this.alpha / (this.alpha + this.beta);
  }

  _variance() {
    return this.alpha * this.beta / (Math.pow(this.alpha + this.beta, 2) * (this.alpha + this.beta + 1));
  }
}

export { Beta };