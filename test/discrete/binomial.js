'use strict';

const
  assert = require('assert'),
  stats = require('../../dist/math-stats');

/**
 * Binomial random variable
 */
describe('Binomial', () => {
  const
    p = 0.3,
    n = 10;

  const binomial = stats.binomial(p, n);

  describe('#_mean()', () => {
    it(`calculates the mean for p = ${p}, n = ${n}`, () => {
      const mean = binomial._mean();
      assert.equal(mean, 3);
    });
  });

  describe('#_variance()', () => {
    it(`calculates the variance for p = ${p}, n = ${n}`, () => {
      const variance = binomial._variance();
      assert.equal(variance, 2.1);
    });
  });

  describe('#probability(y)', () => {
    const y = 9;
    it(`calculates the probability distribution for y = ${y}`, () => {
      const probability = binomial.probability(y);
      assert.equal(probability.toFixed((6)), '0.000138');
    });
  });

  describe('#probability(y)', () => {
    const y = -1;
    it(`calculates the probability distribution for y = ${y}`, () => {
      assert.throws(() => {
        binomial.probability(y);
      }, Error, "Invalid value for y");
    });
  });
});