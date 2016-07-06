import { BasicStats } from './';

class DiscreteRandVar {
  constructor(p) {
    if (new.target === DiscreteRandVar) throw new Error("Cannot construct abstract instances directly.");

    this.p = p;
    this.q = p - 1;

    this.stats = new BasicStats();
    this.invalidValueError = new Error("Invalid value for y input.");
  }

  probability(y) {}

  mean() {}

  variance() {}
}

class Binomial extends DiscreteRandVar {
  constructor(n, p) {
    super(p);
    this.n = n;
  }

  probability(y) {
    if (y < 0 || y > this.n) throw this.invalidValueError;

    return this.stats.choose(this.n, y) * Math.pow(this.p, y) * Math.pow(this.q, this.n - y);
  }

  mean() {
    return this.n * this.p;
  }

  variance() {
    return this.n * this.p * this.q;
  }
}

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

class Hypergeometric extends DiscreteRandVar {
  constructor(n, N, r) {
    super(null);
    this.n = n;
    this.N = N;
    this.r = r;
  }

  probability(y) {
    if (this.n <= this.r && (y < 0 || y > this.n) || this.n > this.r && (y < 0 || y > this.r)) throw this.invalidValueError;

    return this.stats.choose(this.r, y) * this.stats.choose(this.N - this.r, this.n - y) / this.stats.choose(this.N, this.n);
  }

  mean() {
    return this.n * this.r / this.N;
  }

  variance() {
    return this.n * (this.r / this.N) * ((this.N - this.r) / this.N) - (this.N - this.n) / (this.N - 1);
  }
}

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

export { Binomial, Geometric, Hypergeometric, Poisson, NegativeBinomial };