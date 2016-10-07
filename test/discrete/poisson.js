'use strict';

const
  assert = require('assert'),
  stats = require('../../dist/math-stats');

/**
 * Poisson random variable
 */
describe('Poisson', () => {
  const
    lambda = 5;

  const poisson = stats.poisson(lambda);

  describe('#_mean()', () => {
    it(`calculates the mean for lambda = ${lambda}`, () => {
      const mean = poisson._mean();
      assert.equal(mean, 5);
    });
  });

  describe('#_variance()', () => {
    it(`calculates the variance for lambda = ${lambda}`, () => {
      const variance = poisson._variance();
      assert.equal(variance, 5);
    });
  });

  describe('#probability(y)', () => {
    const y = 0;
    it(`calculates the probability distribution for y = ${y}`, () => {
      const probability = poisson.probability(y);
      assert.equal(probability.toFixed((6)), '0.006738');
    });
  });

  describe('#probability(y)', () => {
    const y = -1;
    it(`calculates the probability distribution for y = ${y}`, () => {
      assert.throws(() => {
        poisson.probability(y);
      }, Error, "Invalid value for y");
    });
  });
});