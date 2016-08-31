'use strict';

const
  assert = require('assert'),
  _gamma = require('../../dist/internal/_gamma').default;

/**
 * _gamma function
 */
describe('_gamma()', () => {
  const n = [5, 1, 0];

  it(`calculates gamma of n = ${n[0]}`, () => {
    const gamma = _gamma(n[0]);
    assert.equal(gamma, 24);
  });

  it(`calculates gamma of n = ${n[1]}`, () => {
    const gamma = _gamma(n[1]);
    assert.equal(gamma, 1);
  });

  it(`calculates gamma of n = ${n[2]}`, () => {
    const gamma = _gamma(n[2]);
    assert.equal(gamma, Infinity);
  });
});