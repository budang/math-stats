'use strict';

const should = require('chai').should(),
  _gamma = require('../../dist/internal/_gamma').default;

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