const read = require('../utils/read');

function p1(input) {}

function p2(input) {}

module.exports = function something() {
  try {
    const input = read('src/day-2/INPUT.md').trim().split('\n');
    return {
      'part-1': p1(input),
      'part-2': p2(input),
    };
  } catch (err) {
    console.error(err);
  }
};
