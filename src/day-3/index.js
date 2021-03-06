import { read, log } from '../utils/io.js';

export function numberOfTreesEncounteredR3D1(input) {
  let position = 0;
  let count = 0;
  input.forEach((row) => {
    if (row[position % row.length] === '#') count++;
    position = position + 3;
  });
  return count;
}

export function numberOfTreesEncounteredForMultipleSlopes(input) {
  // Right 1, down 1.
  // Right 3, down 1. (This is the slope you already checked.)
  // Right 5, down 1.
  // Right 7, down 1.
  // Right 1, down 2
  const trajectories = [
    [1, 1],
    [3, 1],
    [5, 1],
    [7, 1],
    [1, 2],
  ];

  let product = 0;

  trajectories.forEach(([r, d]) => {
    let count = 0;
    let position = 0;
    for (let i = 0; i < input.length; i += d) {
      if (input[i][position % input[i].length] === '#') count++;
      position = position + r;
    }
    product = product > 0 ? product * count : count;
  });

  return product;
}

export default function tobogganTrajectory() {
  try {
    const input = read('src/day-3/INPUT.txt').trim().split('\n');
    log(
      3,
      numberOfTreesEncounteredR3D1(input),
      numberOfTreesEncounteredForMultipleSlopes(input)
    );
  } catch (err) {
    console.error(err);
  }
}
