import { read, log } from '../utils/io.js';

function formatRow(str) {
  let min = 0;
  let max = 127;

  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === 'F') {
      // lower half
      max = Math.floor((max + min) / 2);
    } else {
      // upper half
      min = Math.ceil((max + min) / 2);
    }
  }

  return str[str.length - 1] === 'F' ? min : max;
}

function formatColumn(str) {
  let min = 0;
  let max = 7;

  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === 'L') {
      // lower half
      max = Math.floor((max + min) / 2);
    } else {
      // upper half
      min = Math.ceil((max + min) / 2);
    }
  }

  return str[str.length - 1] === 'L' ? min : max;
}

export function formatInput(tickets) {
  return tickets.map((ticket) => {
    const row = formatRow(ticket.slice(0, -3));
    const column = formatColumn(ticket.slice(-3));
    return {
      row,
      column,
      seatId: row * 8 + column,
    };
  });
}

export function findHighestSeatId(seats) {
  return Math.max(...seats.map(({ seatId }) => seatId));
}

export function findMySeatId(seats) {
  const seatIds = seats
    .map(({ seatId }) => seatId)
    .sort(function (a, b) {
      return a - b;
    });

  for (let i = 0; i < seatIds.length; i++) {
    if (seatIds[i] + 1 != seatIds[i + 1]) {
      return seatIds[i] + 1;
    }
  }
}

export default function binaryBoarding() {
  try {
    const input = read('src/day-5/INPUT.txt').trim().split('\n');
    const formattedInput = formatInput(input);
    log(5, findHighestSeatId(formattedInput), findMySeatId(formattedInput));
  } catch (err) {
    console.error(err);
  }
}
