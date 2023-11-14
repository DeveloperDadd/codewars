// You get an array of numbers, return the sum of all of the positives ones.

export function positiveSum(arr:number[]):number {
  return arr.filter(number => number > 0).reduce((a, b) => a + b, 0);
}
