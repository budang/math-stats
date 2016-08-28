'use strict';

const
  assert = require('assert'),
  _factorial = require('../../dist/internal/_factorial').default;

/**
 * _factorial function
 */
describe('_factorial()', () => {
  const n = [10, 0, -5];

  it(`calculates factorial of n = ${n[0]}`, () => {
    const factorial = _factorial(n[0]);
    assert.equal(factorial, 3628800);
  });

  it(`calculates factorial of n = ${n[1]}`, () => {
    const factorial = _factorial(n[1]);
    assert.equal(factorial, 1);
  });

  it(`calculates factorial of n = ${n[2]}`, () => {
    const factorial = _factorial(n[2]);
    assert.equal(factorial, Infinity);
  });
});