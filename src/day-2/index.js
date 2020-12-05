import { read, log } from '../utils/io.js';

export function formatInput(input) {
  const arrInput = input.reduce((acc, curr) => {
    const [num, val, pass] = curr.split(' ');
    const [min, max] = num.split('-');
    const [minimum, maximum] = [parseInt(min), parseInt(max)];
    const value = val.charAt(0);
    const password = pass.split('');

    const count = password.reduce((acc, curr) => {
      if (curr === value) acc++;
      return acc;
    }, 0);

    const p1Valid = count >= minimum && count <= maximum;

    const atOnePosition =
      password[minimum - 1] === value || password[maximum - 1] === value;
    const atBothPositions =
      password[minimum - 1] === value && password[maximum - 1] === value;
    const p2Valid = atOnePosition && !atBothPositions;

    return [
      ...acc,
      {
        minimum,
        maximum,
        password,
        value,
        password,
        count,
        p1Valid,
        p2Valid,
      },
    ];
  }, []);

  return arrInput;
}

export function numberOfValidPasswordsWithCount(input) {
  return input.reduce((count, { p1Valid }) => {
    if (p1Valid) count++;
    return count;
  }, 0);
}

export function numberOfValidPasswordsAtPosition(input) {
  return input.reduce((count, { p2Valid }) => {
    if (p2Valid) count++;
    return count;
  }, 0);
}

export default function passwordPhilosophy() {
  try {
    const input = read('src/day-2/INPUT.txt').trim().split('\n');
    const formattedInput = formatInput(input);
    log(
      2,
      numberOfValidPasswordsWithCount(formattedInput),
      numberOfValidPasswordsAtPosition(formattedInput)
    );
  } catch (err) {
    console.error(err);
  }
}
