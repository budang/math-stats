import { ContinuousRandVar } from '../';

class ChiSquare extends ContinuousRandVar {
  constructor(v) {
    super();
    this.v = v;
  }

  probability(y) {
    if (Math.pow(y, 2) <= 0) throw this.invalidValueError;

    return Math.pow(y, this.v / 2) * Math.E(-y / 2) / (Math.pow(2, this.v / 2) * this.stats.gamma(this.v / 2));
  }

  mean() {
    return this.v;
  }

  variance() {
    return 2 * this.v;
  }
}

export { ChiSquare };