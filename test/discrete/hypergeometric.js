'use strict';

const should = require('chai').should(),
  stats = require('../dist/math-stats');

/**
 * Hypergeometric random variable
 */
describe('Hypergeometric', () => {
  const n = 5,
    N = 20,
    r = 4,
    y = 1;

  const hypergeomtric = stats.hypergeometric(n, N, r);

  describe('#_mean()', () => {
    it(`calculates the mean for n = ${n}, N = ${N}, r = ${r}`, () => {
      const mean = hypergeomtric._mean();
      mean.should.equal(1);
    });
  });

  describe('#_variance()', () => {
    it(`calculates the variance for n = ${n}, N = ${N}, r = ${r}`, () => {
      const variance = hypergeomtric._variance();
      (variance.toFixed(3)).should.equal('0.632');
    });
  });

  describe('#probability(y)', () => {
    it(`calculates the probability distribution for y = ${y}`, () => {
      const probability = hypergeomtric.probability(y);
      (probability.toFixed((4))).should.equal('0.4696');
    });
  });
});
