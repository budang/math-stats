'use strict';

import _factorial from './_factorial';

const _gamma = (n) => {
  return _factorial(n - 1);
}

export default _gamma;