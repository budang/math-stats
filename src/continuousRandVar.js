import { BasicStats } from './';

class ContinuousRandVar {
  constructor() {
    if (new.target === ContinuousRandVar) throw new Error("Cannot construct abstract instances directly.");

    this.stats = new BasicStats();
    this.invalidValueError = new Error("Invalid value for y input.");
  }

  probability(y) {}

  mean() {}

  variance() {}
}

export { ContinuousRandVar };