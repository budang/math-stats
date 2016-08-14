'use strict';

const _factorial = (x) => {
  let f = x;

  if (x === 0) {
    return 1;
  }

  for (let i = x - 1; i > 1; i--) {
    f *= i;
  }

  return f;
}

export default _factorial;