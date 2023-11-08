/*
THIS ONE WAS PRETTY DIFFICULT, TRY TO REDO AND IMPLEMENT A SHORTER SOLUTION
You will be given an array of numbers. 
You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
*/

function sortArray(array) {
  if (array.length === 1) {
    return array;
  }
  let newArr = [];
  let oddArr = [];
  for (let i = 0; i < array.length; i++) {
    array[i] % 2 === 0 ? newArr[i] = array[i]
    : oddArr.push(array[i])
    newArr.push(null);
    
  }
  newArr.pop();
  oddArr.sort(function(a, b) { return  a - b });
  for (let i = 0; i < newArr.length; i++) {
    newArr[i] === null ? newArr[i] = oddArr.shift() 
    : console.log()
  }
  
  return newArr;
}
