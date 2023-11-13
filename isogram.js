/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
Implement a function that determines whether a string that contains only letters is an isogram.
Assume the empty string is an isogram. Ignore letter case.
*/

function isIsogram(str){
  let arr = [];
  str = str.toLowerCase().split('');
  if (str === "") {
    return true;
  }
  
  for (let i = 0; i < str.length; i++) {
    if (arr.includes(str[i])) {
      return false;
    } else {
      arr.push(str[i]);
    }
  }
  if (arr.length === str.length) {
    return true;
  }
