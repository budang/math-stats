'use strict';

import _factorial from './_factorial';

/**
 * @description Computes the gamma function of n.
 * @param {Number} n - The number to be evaluated.
 * @returns {Number} The gamma function of n.
 */
const _gamma = (n) => {
  return _factorial(n - 1);
}

export default _gamma;