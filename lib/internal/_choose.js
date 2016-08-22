'use strict';

import _factorial from './_factorial';

const Big = require('big-js');

const _choose = (n, k) => {
  return parseFloat(
    new Big(_factorial(n))
      .div(
      	new Big(_factorial(k))
      	  .times(new Big(_factorial(n - k)))
      )
  );
}

export default _choose;