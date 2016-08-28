'use strict';

const
  assert = require('assert'),
  _choose = require('../../dist/internal/_choose').default;

/**
 * _choose function
 */
describe('_choose()', () => {
  const
    n = [52, 5, 1],
    k = 5;

  it(`calculates nCk for n = ${n[0]}, k = ${k}`, () => {
    const choose = _choose(n[0], k);
    assert.equal(choose, 2598960);
  });

  it(`calculates nCk for n = ${n[1]}, k = ${k}`, () => {
    const choose = _choose(n[1], k);
    assert.equal(choose, 1);
  });

  it(`calculates nCk for n = ${n[3]}, k = ${k}`, () => {
    const choose = _choose(n[3], k);
    assert.equal(choose, 0);
  });
});