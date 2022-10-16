// ???????????
const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  // throw new NotImplementedError('Not implemented');
  if (date === 'winter' || date === 'spring' || date === 'summer' || date === 'autumn') {
    return date;
  }
  const month = date.getMonth();
  var seasоns = ['winter', 'spring', 'summer', 'autumn'];

  if (month === NaN) {
    return 'Unable to determine the time of year!';
  }
  return seasоns[Math.floor(month / 3)];
}

// console.log(getSeason(new Date(2020, 1, 12)));
// console.log(getSeason(new Date(2020, 2, 12)));
// console.log(getSeason(new Date(2020, 3, 12)));
// console.log(getSeason(new Date(2020, 4, 12)));
// console.log(getSeason(new Date(2020, 5, 12)));
// console.log(getSeason(new Date(2020, 6, 12)));
// console.log(getSeason(new Date(2020, 7, 12)));
// console.log(getSeason(new Date(2020, 8, 12)));
// console.log(getSeason(new Date(2020, 9, 12)));
// console.log(getSeason(new Date(2020, 10, 12)));
// console.log(getSeason(new Date(2020, 11, 12)));
// console.log(getSeason(new Date(2020, 12, 12)));

module.exports = {
  getSeason,
};
