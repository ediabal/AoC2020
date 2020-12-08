import { read, log } from '../utils/io.js';

export function formatInput(input) {
  return input.map((instruction) => {
    const [operation, arg] = instruction.split(' ');
    const [direction, ...argument] = arg.split('');
    return {
      operation,
      argument: parseInt(argument.join('')),
      direction,
    };
  });
}

export function findAccValueOnFirstIteration(instructions) {
  let accumulator = 0;

  function perform({ operation, argument, direction }, currentPosition) {
    let position = currentPosition;
    if (operation === 'acc') {
      if (direction === '+') {
        accumulator += argument;
      } else {
        accumulator -= argument;
      }
      position++;
    }

    if (operation === 'jmp') {
      if (direction === '+') {
        position += argument;
      } else {
        position -= argument;
      }
    }

    if (operation === 'nop') {
      position++;
    }

    return position;
  }

  const set = new Set();
  let position = 0;

  while (!set.has(position)) {
    set.add(position);
    position = perform(instructions[position], position);
  }

  return accumulator;
}

export function terminateProgram(instructions) {
  let accumulator = 0;

  function perform({ operation, argument, direction }, currentPosition) {
    let position = currentPosition;
    if (operation === 'acc') {
      if (direction === '+') {
        accumulator += argument;
      } else {
        accumulator -= argument;
      }
      position++;
    }

    if (operation === 'jmp') {
      if (direction === '+') {
        position += argument;
      } else {
        position -= argument;
      }
    }

    if (operation === 'nop') {
      position++;
    }

    return position;
  }

  for (let i = 0; i < instructions.length; i++) {
    const instruction = instructions[i];
    accumulator = 0;
    let position = 0;

    if (instruction.operation === 'nop' || instruction.operation === 'jmp') {
      instruction.operation = instruction.operation === 'nop' ? 'jmp' : 'nop';

      const set = new Set();

      while (!set.has(position)) {
        set.add(position);
        position = perform(instructions[position], position);
        if (position === instructions.length) return accumulator;
      }

      instruction.operation = instruction.operation === 'nop' ? 'jmp' : 'nop';
    }
  }
}

export default function handheldHalting() {
  try {
    const input = read('src/day-8/INPUT.txt').trim().split('\n');
    const formattedInput = formatInput(input);
    log(
      8,
      findAccValueOnFirstIteration(formattedInput),
      terminateProgram(formattedInput)
    );
  } catch (err) {
    console.error(err);
  }
}
