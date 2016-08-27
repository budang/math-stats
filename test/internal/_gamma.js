'use strict';

const assert = require('assert'),
  _gamma = require('../../dist/internal/_gamma').default;

/**
 * _gamma function
 */
describe('_gamma()', () => {
  const n = 5;

  it(`calculates gamma of n = ${n}`, () => {
    const gamma = _gamma(n);
    assert.equal(gamma, 24);
  });
});