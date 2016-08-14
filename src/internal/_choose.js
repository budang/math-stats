'use strict';

import _factorial from './_factorial';

const _choose = (n, k) => {
  return _factorial(n) / _factorial(k) * _factorial(n - k);
}

export default _choose;