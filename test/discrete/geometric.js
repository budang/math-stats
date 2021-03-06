'use strict';

const
  assert = require('assert'),
  stats = require('../../dist/math-stats');

/**
 * Geometric random variable
 */
describe('Geometric', () => {
  const
    p = 0.02,
    y = 2;

  const geometric = stats.geometric(p);

  describe('#_mean()', () => {
    it(`calculates the mean for p = ${p}`, () => {
      const mean = geometric._mean();
      assert.equal(mean, 50);
    });
  });

  describe('#_variance()', () => {
    it(`calculates the variance for p = ${p}`, () => {
      const variance = geometric._variance();
      assert.equal(variance, 2450);
    });
  });

  describe('#probability(y)', () => {
    it(`calculates the probability distribution for y = ${y}`, () => {
      const probability = geometric.probability(y);
      assert.equal(probability, 0.0196);
    });
  });
});