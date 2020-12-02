const read = require('../utils/read');

function formatInput(input) {
  const formattedInput = input;
  return formattedInput;
}

function p1(input) {
  return input;
}

function p2(input) {
  return input;
}

module.exports = function something() {
  try {
    const input = read('src/day-3/INPUT.md').trim().split('\n');
    const formattedInput = formatInput(input);
    return {
      'part-1': p1(formattedInput),
      'part-2': p2(formattedInput),
    };
  } catch (err) {
    console.error(err);
  }
};
