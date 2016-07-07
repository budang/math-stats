import { DiscreteRandVar } from '../';

class NegativeBinomial extends DiscreteRandVar {
  constructor(p, r) {
    super(p);
    this.r = r;
  }

  probability(y) {
    if (y < this.r) throw this.invalidValueError;

    return this.stats.choose(y - 1, this.r - 1) * Math.pow(this.p, this.r) * Math.pow(this.q, y - this.r);
  }

  mean() {
    return this.r / this.p;
  }

  variance() {
    return this.r * this.q / Math.pow(this.p, 2);
  }
}

export { NegativeBinomial };