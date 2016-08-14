'use strict';

const _factorial = (x) => {
  if (x < 0) {
    return Infinity;
  } else if (x === 0) {
    return 1;
  }

  let f = x;

  for (let i = x - 1; i > 1; i--) {
    f *= i;
  }

  return f;
}

export default _factorial;