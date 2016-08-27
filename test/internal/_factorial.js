'use strict';

const
  assert = require('assert'),
  _factorial = require('../../dist/internal/_factorial').default;

/**
 * _factorial function
 */
describe('_factorial()', () => {
  const n = 10;

  it(`calculates factorial of n = ${n}`, () => {
    const factorial = _factorial(n);
    assert.equal(factorial, 3628800);
  });
});