'use strict';

const should = require('chai').should(),
  _choose = require('../dist/internal/_choose').default,
  _factorial = require('../dist/internal/_factorial').default,
  _gamma = require('../dist/internal/_gamma').default,
  _multiply = require('../dist/internal/_multiply').default,
  stats = require('../dist/math-stats');

/**
 * _choose function
 */
describe('_choose()', () => {
  let n = 52,
    k = 5;

  it(`calculates nCk for n = ${n}, k = ${k}`, () => {
    const result = _choose(n, k);
    result.should.equal(2598960);
  });
});

/**
 * _factorial function
 */
describe('_factorial()', () => {
  let n = 10;

  it(`calculates factorial of n = ${n}`, () => {
    const result = _factorial(n);
    result.should.equal(3628800);
  });
});

/**
 * _gamma function
 */
describe('_gamma()', () => {
  let n = 5;

  it(`calculates gamma of n = ${n}`, () => {
    const result = _gamma(n);
    result.should.equal(24);
  });
});

/**
 * _multiply function
 */
describe('_multiply()', () => {
  let a = 0.1,
    b = 0.2,
    c = 0.3;

  it(`calculates FP-safe product of a = ${a}, b = ${b}, c = ${c}`, () => {
    const result = _multiply(a, b, c);
    result.should.equal(0.006);
  });
});

/**
 * Binomial random variable
 */
describe('Binomial', () => {
  let p = 0.3,
    n = 10,
    y = 9;

  let binomial = stats.binomial(p, n);

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

/**
 * Geometric random variable
 */
describe('Geometric', () => {
  let p = 0.02,
    y = 2;

  let geometric = stats.geometric(p);

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

/**
 * Negative Binomial random variable
 */
describe('NegativeBinomial', () => {
  let p = 0.2,
    r = 3,
    y = 5;

  let negativeBinomial = stats.negativeBinomial(p, r);

  describe('#_mean()', () => {
    it(`calculates the mean for p = ${p}, r = ${r}`, () => {
      const mean = negativeBinomial._mean();
      mean.should.equal(15);
    });
  });

  describe('#_variance()', () => {
    it(`calculates the variance for p = ${p}, r = ${r}`, () => {
      const variance = negativeBinomial._variance();
      variance.should.equal(60);
    });
  });

  describe('#probability(y)', () => {
    it(`calculates the probability distribution for y = ${y}`, () => {
      const probability = negativeBinomial.probability(y);
      (probability.toFixed((4))).should.equal('0.0307');
    });
  });
});