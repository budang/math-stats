import { ContinuousRandVar } from '../';

class Normal extends ContinuousRandVar {
  constructor(u, s) {
    super();
    this.u = u;
    this.s = s;
  }

  probability(y) {
    if (y <= -Infinity || y >= Infinity) throw this.invalidValueError;

    return 1 / (this.s * Math.sqrt(2 * Math.pi)) * Math.E(-(1 / (2 * Math.pow(this.s, 2))) * Math.pow(y - this.u, 2));
  }

  mean() {
    return this.u;
  }

  variance() {
    return Math.pow(this.s, 2);
  }
}

export { Normal };