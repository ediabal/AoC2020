import { read, log } from '../utils/io.js';

export function formatInput(input) {
  return input;
}

export function p1(input) {
  return input;
}

export function p2(input) {
  return input;
}

export default function day4() {
  try {
    const input = read('src/day-4/INPUT.txt').trim().split('\n');
    const formattedInput = formatInput(input);
    log(4, p1(formattedInput), p2(formattedInput));
  } catch (err) {
    console.error(err);
  }
}
