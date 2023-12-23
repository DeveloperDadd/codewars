/*
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. 
Return the resulting string.
*/

function fakeBin(x){
  let result = '';
    for (let i = 0; i < x.length; i++) {
        const digit = parseInt(x[i]);
        result += (digit < 5) ? '0' : '1';
    }
    return result;
}
