import { ContinuousRandVar } from './';

class Exponential extends ContinuousRandVar {
  constructor(b) {
    super();
    if (b <= 0) throw this.invalidValueError;
    this.b = b;
  }

  probability(y) {
    if (y <= 0 || y >= Infinity) throw this.invalidValueError;

    return 1 / this.b * Math.E(-y / this.b);
  }

  mean() {
    return this.b;
  }

  variance() {
    return Math.pow(this.b, 2);
  }
}

export { Exponential };