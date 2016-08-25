'use strict';

const should = require('chai').should(),
  _choose = require('../../dist/internal/_choose').default;

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