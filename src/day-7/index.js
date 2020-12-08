import { read, log } from '../utils/io.js';

export function formatInput(input) {
  return input.reduce((rules, rule) => {
    const [primaryBag, contentsOfPrimaryBag] = rule.split(' bags contain ');
    rules[primaryBag] = contentsOfPrimaryBag
      .trim()
      .split(', ')
      .reduce((bags, bagStr) => {
        const bagAndCount = bagStr.split(' ');
        if (bagAndCount[0] != 'no') {
          bags[`${bagAndCount[1]} ${bagAndCount[2]}`] = parseInt(
            bagAndCount[0]
          );
        }
        return bags;
      }, {});

    return rules;
  }, {});
}

export function numberOfBagsContainingMyBagType(bags) {
  const containsGoldBag = new Set();

  function addContainsGoldBag(bag) {
    Object.keys(bags).forEach((key) => {
      if (Object.keys(bags[key]).includes(bag)) {
        containsGoldBag.add(key);
      }
    });
  }

  addContainsGoldBag('shiny gold');

  containsGoldBag.forEach((bag) => {
    addContainsGoldBag(bag);
  });

  return containsGoldBag.size;
}

export function numberOfBagsInMyBagType(input) {
  function bagsInBag(bag) {
    return Object.keys(input[bag]).reduce((count, key) => {
      const num = input[bag][key];
      count += num + num * bagsInBag(key);
      return count;
    }, 0);
  }

  return bagsInBag('shiny gold');
}

export default function handyHaversacks() {
  try {
    const input = read('src/day-7/INPUT.txt').trim().split('\n');
    const formattedInput = formatInput(input);
    log(
      7,
      numberOfBagsContainingMyBagType(formattedInput),
      numberOfBagsInMyBagType(formattedInput)
    );
  } catch (err) {
    console.error(err);
  }
}
