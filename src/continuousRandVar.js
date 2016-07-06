import { BasicStats } from './';

class ContinuousRandVar {
  constructor() {
    if (new.target === DiscreteRandVar) throw new Error("Cannot construct abstract instances directly.");

    this.stats = new BasicStats();
    this.invalidValueError = new Error("Invalid value for y input.");
  }

  probability(y) {}

  mean() {}

  variance() {}
}

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

class Normal extends ContinuousRandVar {
  constructor(u, s) {
    super();
    this.u = u;
    this.s = s;
  }

  probability(y) {
    if (y <= -Infinity || y >= Infinity) throw this.invalidValueError;

    return 1 / (s * Math.sqrt(2 * Math.pi)) * Math.E(-(1 / (2 * Math.pow(this.s, 2))) * Math.pow(y - this.u, 2));
  }

  mean() {
    return this.u;
  }

  variance() {
    return Math.pow(this.s, 2);
  }
}

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

export { Uniform, Normal, Exponential, Gamma, ChiSquare, Beta };