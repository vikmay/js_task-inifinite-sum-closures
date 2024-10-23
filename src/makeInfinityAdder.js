'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0; // Initialize the sum to store the result

  function adder(num) {
    if (num === undefined) {
      const result = sum;

      sum = 0;

      return result;
    }
    sum += num;

    return adder;
  }

  return adder; // Return the adder function
}

module.exports = makeInfinityAdder;
