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

export { BasicStats };