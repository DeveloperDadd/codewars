// Write a function which calculates the average of the numbers in a given list.

function findAverage(array) {
  let average = 0;
  if (array.length === 0) {
    return 0;
  } else {
    average = array.reduce((sum, currentValue) => sum + currentValue, 0) / array.length; 
  }
  return average;
}
