import { ContinuousRandVar } from '../';

class Uniform extends ContinuousRandVar {
  constructor(t1, t2) {
    super();
    this.t1 = t1;
    this.t2 = t2;
  }

  probability(y) {
    if (y < this.t1 || y > this.t2) throw this.invalidValueError;

    return 1 / (this.t2 - this.t1);
  }

  mean() {
    return (this.t1 + this.t2) / 2;
  }

  variance() {
    return Math.pow(this.t2 - this.t1, 2) / 12;
  }
}

export { Uniform }