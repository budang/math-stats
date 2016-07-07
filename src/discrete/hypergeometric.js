import { DiscreteRandVar } from '../';

class Hypergeometric extends DiscreteRandVar {
  constructor(n, N, r) {
    super(null);
    this.n = n;
    this.N = N;
    this.r = r;
  }

  probability(y) {
    if (this.n <= this.r && (y < 0 || y > this.n) || this.n > this.r && (y < 0 || y > this.r)) throw this.invalidValueError;

    return this.stats.choose(this.r, y) * this.stats.choose(this.N - this.r, this.n - y) / this.stats.choose(this.N, this.n);
  }

  mean() {
    return this.n * this.r / this.N;
  }

  variance() {
    return this.n * (this.r / this.N) * ((this.N - this.r) / this.N) - (this.N - this.n) / (this.N - 1);
  }
}

export { Hypergeometric };