import { DiscreteRandVar } from '../';

class Binomial extends DiscreteRandVar {
  constructor(n, p) {
    super(p);
    this.n = n;
  }

  probability(y) {
    if (y < 0 || y > this.n) throw this.invalidValueError;

    return this.stats.choose(this.n, y) * Math.pow(this.p, y) * Math.pow(this.q, this.n - y);
  }

  mean() {
    return this.n * this.p;
  }

  variance() {
    return this.n * this.p * this.q;
  }
}

export { Binomial };