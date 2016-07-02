class BasicStats {
  constructor() {
    this.factorials = [1, 1];
  }

  factorial(x) {
    if (this.factorials[x]) return this.factorials[x];

    if (x < 0) throw new error();

    let factorial = x;
    for (let i = x - 1; i > 1; i--) {
      if (this.factorials[i]) {
        factorial *= factorials[i];
        break;
      }
      factorial *= i;
    }

    this.factorials[x] = factorial;
    return factorial;
  }

  choose(n, k) {
    return this.factorial(n) / (factorial(k) * factorial(n - k));
  }

  gamma(n) {
    return this.stats.factorial(n - 1);
  }
}

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

/*require("babel-core").transform("code", {
  plugins: ["transform-class-properties"]
});

export default class {BasicStats}
export default class {DiscreteRandVar}
export default class {Binomial}
export default class {Geometric}
export default class {Hypergeometric}
export default class {Poisson}
export default class {NegativeBinomial}
export default class {ContinuousRandVar}
export default class {Uniform}
export default class {Normal}
export default class {Exponential}
export default class {Gamma}
export default class {ChiSquare}
export default class {Beta}
*/