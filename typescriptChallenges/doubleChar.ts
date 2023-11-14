// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

export function doubleChar(str: string): string{
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    newStr += str[i] + str[i];
  }
  return newStr;
}
