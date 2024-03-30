/*
Write a function `avgVal(arr)` that accepts an array as an arg. The function
should return the average of all values in the array. If the array is empty,
it should return `null`.

Solve this using Array's `forEach()` method.

Examples:

console.log(avgVal([5, 10])); // 7.5
console.log(avgVal([3, 7, 2, 1, 2])); // 3
console.log(avgVal([])); // null

*/

let avgVal = function(arr) {

  //set condition if arr empty return null
  if(arr.length === 0) {

    return null;

  }

  //set sum variable to 0
  let sum = 0;

  //create forech to iter arr
  arr.forEach((num) => {

    sum += num;

  });

  //divide sum of arr by  arr length and set to avg variable
  let avg = sum / arr.length;
  
  //return avg
  return avg;
};

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = avgVal;
} catch (e) {
  module.exports = null;
}
