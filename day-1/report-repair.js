const read = require('../utils/read');

function findTwoNumbersThatSumAndMultiply(input, sum) {
  const map = input.reduce((acc, num, i) => {
    acc[num] = i + 1;
    return acc;
  }, {});

  let product;

  input.forEach((value, i) => {
    let num = parseInt(value);
    let remainder = sum - num;
    if (map[remainder] && map[remainder] != i) {
      product = num * remainder;
      return;
    }
  });

  return product;
}

function findThreeNumbersThatSumAndMultiply(input, sum) {
  const map = input.reduce((acc, num, i) => {
    acc[num] = i + 1;
    return acc;
  }, {});

  let product;

  input.forEach((value, i) => {
    let num = parseInt(value);
    let remainder = sum - num;
    if (map[remainder] && map[remainder] != i) {
      product = num * remainder;
      return;
    }
  });

  return product;
}

module.exports = function reportRepair(sum = 2020) {
  try {
    const input = read('day-1/INPUT.md').trim().split('\n');
    return {
      part1: findTwoNumbersThatSumAndMultiply(input, sum),
      part2: findThreeNumbersThatSumAndMultiply(input, sum),
    };
  } catch (err) {
    console.error(err);
  }
};
