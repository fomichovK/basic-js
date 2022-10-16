//???????????????????

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(arr) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let obj = {};
  arr.forEach((element) => {
    let s = element.split('.');
    for (let a = 0; a < s.length; a++) {
      let item = `.${s[a]}`;
      if (obj[item]) {
        obj[item] += 1;
      } else {
        obj[item] = 1;
      }
    }
  });
  return obj;
}

// console.log(getDNSStats(['code.yandex.ru', 'music.yandex.ru', 'yandex.ru']));

module.exports = {
  getDNSStats,
};
