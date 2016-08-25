'use strict';

const should = require('chai').should(),
  stats = require('../../dist/math-stats');

/**
 * Geometric random variable
 */
describe('Geometric', () => {
  const p = 0.02,
    y = 2;

  const geometric = stats.geometric(p);

  describe('#_mean()', () => {
    it(`calculates the mean for p = ${p}`, () => {
      const mean = geometric._mean();
      mean.should.equal(50);
    });
  });

  describe('#_variance()', () => {
    it(`calculates the variance for p = ${p}`, () => {
      const variance = geometric._variance();
      variance.should.equal(2450);
    });
  });

  describe('#probability(y)', () => {
    it(`calculates the probability distribution for y = ${y}`, () => {
      const probability = geometric.probability(y);
      probability.should.equal(0.0196);
    });
  });
});
