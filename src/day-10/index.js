import { read, log } from '../utils/io.js';

export function formatInput(input) {
  return input.map(str => parseInt(str)).sort((a, b) => a - b);
}

export function numberOfOneJoltTimesThreeJoltAdapters(adapters) {
  let jolt = 0;
  const ones = [];
  const threes = [];
  for (let i = 0; i < adapters.length; i++) {
    if (adapters[i] - jolt === 1) {
      ones.push(adapters[i]);
      jolt = adapters[i];
      continue;
    }
    if (adapters[i] - jolt === 2) {
      jolt = adapters[i];
      continue;
    }
    if (adapters[i] - jolt === 3) {
      threes.push(adapters);
      jolt = adapters[i];
      continue;
    }
  }

  return ones.length * (threes.length + 1);
}

export function distinctArrangements(adapters) {
  adapters.push(adapters[adapters.length - 1] + 3);
  adapters.unshift(0);
  adapters = adapters.reverse();

  let count = 0;

  return count;
}

export default function adapterArray() {
  try {
    const input = read('src/day-10/INPUT.txt').trim().split('\n');
    const formattedInput = formatInput(input);
    log(10, numberOfOneJoltTimesThreeJoltAdapters(formattedInput), distinctArrangements(formattedInput));
  } catch (err) {
    console.error(err);
  }
}
