'use strict';

import _multiply from './_multiply';

const _pow = (base, exponent) => {
  if (exponent === 0) {
    return 1;
  }

  /* TODO: fractional exponents */
  if (exponent % 1) {
    return Math.pow(base, exponent);
  }

  let product = 1;
  for (let i = 0; i < Math.abs(exponent); i++) {
    product = _multiply(product, base);
  }

  if (exponent < 0) {
    product = 1 / product;
  }

  return product;
}

export default _pow;