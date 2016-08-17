'use strict';

const _multiply = (...nums) => {
  let multiplier = 1000,
    product = 1;

  let numbers = nums.map((num) => {
  	return num * multiplier;
  });

  numbers.forEach((num) => {
  	product *= num;
  });

  product /= Math.pow(multiplier, nums.length);

  return product;
}

export default _multiply;