// !!!!
const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String} //'2a3bc'
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let s = '';
  let count = 1;
  for (let a = 0; a < str.length; a++) {
    if (str[a] !== str[a + 1]) {
      s += count + str[a];
      count = 1;
    } else {
      count++;
    }
  }
  let res = '';
  for (let a = 0; a < s.length; a++) {
    if (s[a] !== '1') {
      res += s[a];
    }
  }
  return res;
}

// console.log(encodeLine('aabbbc'));
module.exports = {
  encodeLine,
};
