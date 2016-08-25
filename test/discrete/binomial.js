'use strict';

const should = require('chai').should(),
  stats = require('../../dist/math-stats');

/**
 * Binomial random variable
 */
describe('Binomial', () => {
  const p = 0.3,
    n = 10,
    y = 9;

  const binomial = stats.binomial(p, n);

  describe('#_mean()', () => {
    it(`calculates the mean for p = ${p}, n = ${n}`, () => {
    	const mean = binomial._mean();
    	mean.should.equal(3);
    });
  });

  describe('#_variance()', () => {
    it(`calculates the variance for p = ${p}, n = ${n}`, () => {
    	const variance = binomial._variance();
    	variance.should.equal(2.1);
    });
  });

  describe('#probability(y)', () => {
    it(`calculates the probability distribution for y = ${y}`, () => {
    	const probability = binomial.probability(y);
    	(probability.toFixed((6))).should.equal('0.000138');
    });
  });
});