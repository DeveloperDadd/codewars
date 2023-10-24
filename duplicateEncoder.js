/*
The goal of this exercise is to convert a string to a new string where each character in the new string is "("
if that character appears only once in the original string, or ")" if that character appears more than once
in the original string. Ignore capitalization when determining if a character is a duplicate.
*/

function duplicateEncode(word){
  word = word.toLowerCase().split("");
  let response = ""
  for (let i = 0; i < word.length; i++) {
    let count = word.filter((item) => item === word[i]);
    if (count.length > 1) {
      response += ")";
    } else {
      response += "(";
    }
  }
  return response;
}
