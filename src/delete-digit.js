// !!!!!!
const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const string = [...(n + '')];

  let number = string.map((s) => Number(s));

  let res = number.splice(0, number.length - 1).join('');
  number = string.map((s) => Number(s));

  number.map((item, index) => {
    delete number[index];
    console.log(number);

    if (res < number.join('')) {
      res = number.join('');
      number = string.map((s) => Number(s));
    } else {
      number = string.map((s) => Number(s));
    }
  });

  return +res;
}

// console.log(deleteDigit(1001));

module.exports = {
  deleteDigit,
};
