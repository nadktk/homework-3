// create a function which returns all possible combinations from the phone digits

const layout = {
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z'],
  0: [' ']
};

// function that returns all combinations of two arrays
const combineArrays = (array1, array2) =>
  array2
    .map(l2 => array1.map(l1 => l1 + l2))
    .reduce((result, arr) => [...result, ...arr], []);

const letterCombinations = digits => {
  // input string validation
  if (typeof digits !== 'string' || /\D|1/.test(digits))
    return console.log(
      'Only digits 2, 3, 4, 5, 6, 7, 8, 9, 0 are allowed in the input string'
    );

  return digits.split``.reduce(
    (result, key) =>
      result.length ? combineArrays(result, layout[key]) : layout[key],
    []
  );
};

console.log(letterCombinations('23')); // [ 'ad', 'bd', 'cd', 'ae', 'be', 'ce', 'af', 'bf', 'cf' ]
