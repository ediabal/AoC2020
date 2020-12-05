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

export default function day() {
  try {
    const input = read('src/day-*/INPUT.txt').trim().split('\n');
    const formattedInput = formatInput(input);
    log('day', p1(formattedInput), p2(formattedInput));
  } catch (err) {
    console.error(err);
  }
}
