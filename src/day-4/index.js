const read = require('../utils/read');

function formatInput(input) {
  return input;
}

function p1(input) {
  return input;
}

function p2(input) {
  return input;
}

module.exports = function day4() {
  try {
    const input = read('src/day-4/INPUT.md').trim().split('\n');
    const formattedInput = formatInput(input);
    return {
      'part-1': p1(formattedInput),
      'part-2': p2(formattedInput),
    };
  } catch (err) {
    console.error(err);
  }
};
