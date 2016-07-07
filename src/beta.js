import { ContinuousRandVar } from './';

class Beta extends ContinuousRandVar {
  constructor(a, b) {
    super();
    this.a = a;
    this.b = b;
  }

  probability(y) {
    if (y <= 0 || y >= 1) throw this.invalidValueError;

    return this.stats.gamma(this.a + this.b) / (this.stats.gamma(this.a) * this.stats.gamma(this.b)) * Math.pow(y, this.a - 1) * Math.pow(1 - y, this.b - 1);
  }

  mean() {
    return this.a / (this.a + this.b);
  }

  variance() {
    return this.a * this.b / (Math.pow(this.a + this.b, 2) * (this.a + this.b + 1));
  }
}

export { Beta };