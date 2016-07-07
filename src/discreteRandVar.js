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

export { DiscreteRandVar };