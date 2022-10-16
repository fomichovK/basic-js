const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    let level = 1;

    arr.forEach((el) => {
      if (Array.isArray(el)) {
        level += 1;
        // calculateDepth(arr);
      }
      return;
    });
    return level;

    // let i = 0;
    // while (arr.length) {
    //   i++;
    //   arr = arr.reduce((level, el) => {
    //     if (Array.isArray(el)) level.push(...el);
    //     return level;
    //   }, []);
    // }
    // return i;
  }
}

// console.log(calculateDepth([1, 2, 3, 4, 5]));

module.exports = {
  DepthCalculator,
};
