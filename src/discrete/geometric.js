import { DiscreteRandVar } from '../';

class Geometric extends DiscreteRandVar {
  constructor(p) {
    super(p);
  }

  probability(y) {
    if (y < 1) throw this.invalidValueError;

    return this.p * Math.pow(this.q, y - 1);
  }

  mean() {
    return 1 / this.p;
  }

  variance() {
    return this.q / Math.pow(this.p, 2);
  }
}

export { Geometric };