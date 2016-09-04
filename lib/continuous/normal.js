import Big from 'big.js';

class Normal {
  constructor(mu, sigma) {
    this.mu = new Big(mu);
    this.sigma = new Big(sigma);

    this.mean = this._mean();
    this.variance = this._variance();
  }

  probability(y) {
    if (y <= -Infinity || y >= Infinity)
      throw new Error("Invalid value for y");
  
    return parseFloat(
      (new Big(1))
        .div(
          (this.sigma)
            .times(
              Math.sqrt(2 * Math.pi)
            )
        )
        .times(
          Math.E(
            (new Big(-1))
              .div(
                (new Big(2))
                  .times(
                    (this.sigma).pow(2)
                  )
              )
              .times(
                (new Big(y))
                  .minus(this.mu)
                  .pow(2)
              )
          )
        )
    );
  }

  _mean() {
    return parseFloat(
      (this.mu)
    );
  }

  _variance() {
    return parseFloat(
      (this.sigma)
        .pow(2)
    );
  }
}

export { Normal };