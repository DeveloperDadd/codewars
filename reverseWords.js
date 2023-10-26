/*Complete the function that accepts a string parameter, 
and reverses each word in the string. 
All spaces in the string should be retained. 
*/

function reverseWords(str) {
  str = str.split(" ")
  let result = "";
  for (let i = 0; i < str.length; i++) {
    // if last word don't add a space, any other words concat with a space
    i === str.length - 1 ? result += str[i].split("").reverse().join("") :
    result += str[i].split("").reverse().join("") + " ";
  }
  return result
}
