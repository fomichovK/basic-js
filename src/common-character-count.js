// ?????????????????????????/

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  throw new NotImplementedError('Not implemented');
  let sub2 = s2.split('');

  let count = 0;
  for (let a = 0; a < s1.length; a++) {
    for (let j = 0; j < sub2.length; j++) {
      // console.log(sub2);
      if (s1[a] == sub2[j]) {
        count++;
        delete sub2[j];
      } else {
        delete sub2[j];
      }
    }
  }
  return count;
}

// getCommonCharacterCount('aabcc', 'adcaa');
// getCommonCharacterCount('zzzz', 'zzzzzzz');

module.exports = {
  getCommonCharacterCount,
};
