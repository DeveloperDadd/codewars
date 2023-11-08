/*
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. 
No floats or non-positive integers will be passed.
*/

function sumTwoSmallestNumbers(numbers) {  
  numbers.sort(function (a,b) { return a - b});
  let sum = numbers.splice(0,2).reduce((x,y) => x + y, 0)
  return sum;
}
