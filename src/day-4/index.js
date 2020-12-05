import { read, log } from '../utils/io.js';

export function formatInput(input) {
  const passports = input.split('\n\n').map((data) => {
    const dataArr = data.replace(/\n/g, ' ').split(' ');
    const passport = dataArr.reduce((pass, keyvalue) => {
      const [key, value] = keyvalue.split(':');
      pass[key] = value;
      return pass;
    }, {});
    return passport;
  });
  return passports;
}

const fields = [
  'byr',
  'iyr',
  'eyr',
  'hgt',
  'hcl',
  'ecl',
  'pid',
  // 'cid',
];

export function p1(input) {
  const validPassports = input.reduce((acc, curr) => {
    if (
      fields.every((field) => curr[field] != null || curr[field] != undefined)
    )
      acc++;
    return acc;
  }, 0);

  return validPassports;
}

export function p2(input) {
  const validPassports = input.reduce((acc, curr) => {
    const baseValid = fields.every(
      (field) => curr[field] != null || curr[field] != undefined
    );
    if (baseValid) {
      let valid = true;
      fields.forEach((field) => {
        switch (field) {
          case 'byr':
            if (curr.byr.length != 4) {
              valid = false;
            } else {
              const year = parseInt(curr.byr);
              if (year < 1920 || year > 2002) {
                valid = false;
              }
            }
            break;
          case 'iyr':
            if (curr.iyr.length != 4) {
              valid = false;
            } else {
              const year = parseInt(curr.iyr);
              if (year < 2010 || year > 2020) {
                valid = false;
              }
            }
            break;
          case 'eyr':
            if (curr.eyr.length != 4) {
              valid = false;
            } else {
              const year = parseInt(curr.eyr);
              if (year < 2020 || year > 2030) {
                valid = false;
              }
            }
            break;
          case 'hgt':
            const unit = curr.hgt.slice(-2);
            if (!['in', 'cm'].includes(unit)) {
              valid = false;
            } else {
              const height = curr.hgt.slice(0, -2);
              if (unit === 'cm') {
                if (height < 150 || height > 193) valid = false;
              } else {
                if (height < 59 || height > 76) valid = false;
              }
            }
            break;
          case 'hcl':
            if (curr.hcl.length != 7 || !/#[a-z0-9]+/.test(curr.hcl)) {
              valid = false;
            }
            break;
          case 'ecl':
            if (
              ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].indexOf(
                curr.ecl
              ) === -1
            )
              valid = false;
            break;
          case 'pid':
            if (curr.pid.length != 9) valid = false;
            break;
        }
      });

      if (valid) acc++;
    }

    return acc;
  }, 0);

  return validPassports;
}

export default function passportProcessing() {
  try {
    const input = read('src/day-4/INPUT.txt').trim();
    const formattedInput = formatInput(input);
    log(4, p1(formattedInput), p2(formattedInput));
  } catch (err) {
    console.error(err);
  }
}
