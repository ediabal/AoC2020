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
  let product;

  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length; j++) {
      if (j != i) {
        for (let k = 0; k < input.length; k++) {
          if (k != j && k != i) {
            let [a, b, c] = [
              parseInt(input[i]),
              parseInt(input[j]),
              parseInt(input[k]),
            ];
            if (a + b + c === sum) {
              product = a * b * c;
              break;
            }
          }
        }
      }
    }
  }

  return product;
}

module.exports = function reportRepair(sum = 2020) {
  try {
    const input = read('day-1/INPUT.md').trim().split('\n');
    return {
      'part-1': findTwoNumbersThatSumAndMultiply(input, sum),
      'part-2': findThreeNumbersThatSumAndMultiply(input, sum),
    };
  } catch (err) {
    console.error(err);
  }
};
