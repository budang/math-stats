'use strict';

const should = require('chai').should(),
  _factorial = require('../../dist/internal/_factorial').default;

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