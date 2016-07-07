import { DiscreteRandVar } from '../';

class Poisson extends DiscreteRandVar {
  constructor(l) {
    super(null);
    this.l = l;
  }

  probability(y) {
    if (y < 0) throw this.invalidValueError;

    return Math.pow(this.l, y) * Math.exp(-this.l) / this.stats.factorial(y);
  }

  mean() {
    return this.l;
  }

  variance() {
    return this.l;
  }
}

export { Poisson };