/*
Write a function `tripler(nums)` that takes in an array as an arg. The function
should return a new array containing three times every number of the original
array.

Solve this using Array's `map()` method.

Examples:

console.log(tripler([2, 7, 4])); // [ 6, 21, 12 ]
console.log(tripler([-5, 10, 0, 11])); // [ -15, 30, 0, 33 ]
*/

let tripler = function(nums) {
    // use map function to loop nums arr
    let mapped = nums.map((num) => {
      return num * 3;
    })
    // inside function mult each num by 3
    // return map function var
    return mapped;
};

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = tripler;
} catch (e) {
  module.exports = null;
}
