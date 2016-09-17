'use strict';

import Big from 'big.js';

/**
 * Computes the factorial of n.
 * @param {Number} n - The number to be evaluated.
 * @returns {Number} The factorial of n.
 */
const _factorial = (x) => {
  x = parseInt((new Big(x)).toString())

  if (x < 0 || x === Infinity)
    return Infinity;
  else if (x === 0)
    return 1;
  
  let factorial = x;
  for (let i = x - 1; i > 1; i--)
    factorial *= i;

  return factorial;
}

export default _factorial;