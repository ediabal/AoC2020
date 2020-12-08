import _ from 'lodash';
import { read, log } from '../utils/io.js';

export function formatInput(input) {
  const groups = input.map((g) => g.split('\n'));
  return groups;
}

export function findSumOfUnionsInGroups(groups) {
  return groups.reduce((sum, group) => {
    return sum + _.union(...group.map((g) => g.split(''))).length;
  }, 0);
}

export function findSumOfIntersectionInGroups(groups) {
  return groups.reduce((sum, group) => {
    return sum + _.intersection(...group.map((g) => g.split(''))).length;
  }, 0);
}

export default function customCustoms() {
  try {
    const input = read('src/day-6/INPUT.txt').trim().split('\n\n');
    const formattedInput = formatInput(input);
    log(
      6,
      findSumOfUnionsInGroups(formattedInput),
      findSumOfIntersectionInGroups(formattedInput)
    );
  } catch (err) {
    console.error(err);
  }
}
