'use strict';

module.exports = (string) => {
  // initial solution, good for short strings
  // return string.split('').reverse().join('');

  // optimized solution for speed, better for longer strings
    let result = '';
    for (let i = string.length - 1; i >= 0; i--) {
      result += string[i];
    }
    return result;
};
