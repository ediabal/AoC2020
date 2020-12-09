import { read, log } from '../utils/io.js';

export function formatInput(input) {
  return input.map((num) => parseInt(num));
}

export function findNumNotInSum(nums) {
  for (let i = 25; i < nums.length; i++) {
    let prev25 = nums.slice(i - 25, i);
    let sum = nums[i];
    let notInSum = true;
    for (let j = 0; j < prev25.length; j++) {
      let comp = sum - prev25[j];
      if (prev25.indexOf(comp) !== -1) {
        notInSum = false;
      }
    }
    if (notInSum) return sum;
  }
}

export function findEncryptionWeakness(nums) {
  let errorNum = findNumNotInSum(nums);
  let index = nums.indexOf(errorNum);
  let newNums = nums.slice(0, index);
  let start = 0;
  let end = 1;
  let found = false;

  while (end < newNums.length && !found) {
    let sum = newNums.slice(start, end).reduce((acc, num) => {
      acc += num;
      return acc;
    }, 0);

    if (sum < errorNum) {
      end += 1;
    } else if (sum > errorNum) {
      start = start + 1;
      end = start + 1;
    } else {
      found = true;
    }
  }

  return (
    Math.min(...newNums.slice(start, end)) +
    Math.max(...newNums.slice(start, end))
  );
}

export default function encodingError() {
  try {
    const input = read('src/day-9/INPUT.txt').trim().split('\n');
    const formattedInput = formatInput(input);
    log(
      9,
      findNumNotInSum(formattedInput),
      findEncryptionWeakness(formattedInput)
    );
  } catch (err) {
    console.error(err);
  }
}
