import Big from 'big.js';

class Exponential {
  constructor(beta) {
    if (beta <= 0)
      throw new Error("Invalid value for beta");

    this.beta = new Big(beta);

    this.mean = this._mean();
    this.variance = this._variance();
  }

  probability(y) {
    if (y <= 0 || y >= Infinity)
      throw new Error("Invalid value for y");

    return parseFloat(
      (new Big(1))
        .div(this.beta)
        .times(
          Math.E(
            parseFloat(
              (new Big(-y))
                .div(this.beta)
            )
          )
        )
    );
  }

  _mean() {
    return parseFloat(
      (this.beta)
    );
  }

  _variance() {
    return parseFloat(
      (this.beta)
        .pow(2)
    );
  }
}

export { Exponential };