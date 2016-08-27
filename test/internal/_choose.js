'use strict';

const
  assert = require('assert'),
  _choose = require('../../dist/internal/_choose').default;

/**
 * _choose function
 */
describe('_choose()', () => {
  const
    n = 52,
    k = 5;

  it(`calculates nCk for n = ${n}, k = ${k}`, () => {
    const choose = _choose(n, k);
    assert.equal(choose, 2598960);
  });
});