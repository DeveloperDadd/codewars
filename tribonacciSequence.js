// Link to the problem (long instructions):
// https://www.codewars.com/kata/556deca17c58da83c00002db/train/javascript

function tribonacci(signature,n){
  let sequence = [...signature];
  return n === 0 ? []
  : n < 3 ? signature.splice(0,n)
  : tribonacci();
  
  function tribonacci() {
    while (sequence.length < n) {
      let sum = 0
      for (let i = 0; i < signature.length; i++) {
        sum += signature[i];
    }
      sequence.push(sum);
      signature.push(sum);
      signature.shift();
    }
    return sequence;
  }
}
