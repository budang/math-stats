'use strict';

const _multiply = (...nums) => {
  const multiplier = 1000;
  let product = 1;

  const numbers = nums.map((num) => {
    return num * multiplier;
  });

  numbers.forEach((num) => {
    product *= num;
  });

  product /= Math.pow(multiplier, nums.length);

  return product;
}

export default _multiply;