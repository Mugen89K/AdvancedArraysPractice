/*

Write a function `maxWithReduce(nums)` that takes in an array of numbers.
The function should return the largest number of the array.

You can assume that the array will not be empty.

Solve this using Array's `reduce()` method.

Examples:

console.log(maxWithReduce( [4,6, 3, 5, 42, 4])); // 42
console.log(maxWithReduce([-2, -3, -7, 3])); // 3

*/

let maxWithReduce = function(nums) {

  //set max variable to -inf
  let max = -Infinity;

  //set acc to 0
  //let initialValue = 0;

  //set variable to reduce method on arr
  let reduced = nums.reduce((acc, currentValue) => {

 //set condition if acc > max, then max = ac

    if(currentValue > max) {

      max = currentValue;
    }


  })

  //return max
  return max;

};

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = maxWithReduce;
} catch (e) {
  module.exports = null;
}
