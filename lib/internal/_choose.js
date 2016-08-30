'use strict';

import Big from 'big.js';
import _factorial from './_factorial';

/**
 * Computes the binomial coefficient for n and k, e.g. n choose k.
 * @param {Number} n - The number of elements in the set.
 * @param {Number} k - The number of elements in the combination.
 * @returns {Number} The number of ways to choose k elements from a set of n elements.
 */
const _choose = (n, k) => {
  if (_factorial(n) === Infinity) {
    return Infinity;
  }
  else if (_factorial(k) === Infinity || n < k) {
    return 0;
  }
  
  return parseFloat(
    new Big(_factorial(n))
      .div(
        new Big(_factorial(k))
          .times(new Big(_factorial(n - k)))
      )
  );
}

export default _choose;