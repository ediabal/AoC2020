import fs from 'fs';
import '../config.js';

export function read(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    return data;
  } catch (err) {
    console.error(err);
  }
}

export function log(day, p1, p2) {
  console.table([
    ['Day', day],
    ['Part 1', p1],
    ['Part 2', p2],
  ]);
}
