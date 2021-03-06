'use strict';

const
  assert = require('assert'),
  stats = require('../../dist/math-stats');

/**
 * Negative Binomial random variable
 */
describe('NegativeBinomial', () => {
  const
    p = 0.2,
    r = 3,
    y = 5;

  const negativeBinomial = stats.negativeBinomial(p, r);

  describe('#_mean()', () => {
    it(`calculates the mean for p = ${p}, r = ${r}`, () => {
      const mean = negativeBinomial._mean();
      assert.equal(mean, 15);
    });
  });

  describe('#_variance()', () => {
    it(`calculates the variance for p = ${p}, r = ${r}`, () => {
      const variance = negativeBinomial._variance();
      assert.equal(variance, 60);
    });
  });

  describe('#probability(y)', () => {
    it(`calculates the probability distribution for y = ${y}`, () => {
      const probability = negativeBinomial.probability(y);
      assert.equal(probability.toFixed((4)), '0.0307');
    });
  });
});