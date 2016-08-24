'use strict';

const should = require('chai').should(),
  _choose = require('../dist/internal/_choose').default,
  _factorial = require('../dist/internal/_factorial').default,
  _gamma = require('../dist/internal/_gamma').default,
  stats = require('../dist/math-stats');

/**
 * _choose function
 */
describe('_choose()', () => {
  const n = 52,
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
  const n = 10;

  it(`calculates factorial of n = ${n}`, () => {
    const result = _factorial(n);
    result.should.equal(3628800);
  });
});

/**
 * _gamma function
 */
describe('_gamma()', () => {
  const n = 5;

  it(`calculates gamma of n = ${n}`, () => {
    const result = _gamma(n);
    result.should.equal(24);
  });
});

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

/**
 * Negative Binomial random variable
 */
describe('NegativeBinomial', () => {
  const p = 0.2,
    r = 3,
    y = 5;

  const negativeBinomial = stats.negativeBinomial(p, r);

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
