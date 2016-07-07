import { ContinuousRandVar } from './';

class Gamma extends ContinuousRandVar {
  constructor(a, b) {
    super();
    this.a = a;
    this.b = b;
  }

  probability(y) {
    if (y <= 0 || y >= Infinity) throw this.invalidValueError;

    return 1 / (this.stats.gamma(this.a) * Math.pow(this.b, this.a)) * Math.pow(y, this.a - 1) * Math.E(-y / this.b);
  }

  mean() {
    return this.a * this.b;
  }

  variance() {
    return this.a * Math.pow(this.b, 2);
  }
}

export { Gamma };