/**
 * Reverses a given string but keeps numbers in their original position.
 * @param str The string to reverse.
 * @returns The reversed string.
 * @example reverseString("NEGIE1") // "EIGEN1"
 */
export function reverseString(str: string): string {
  const regexNum = /[0-9]+/g
  const numbers = str.match(regexNum)
  const string = str.replace(regexNum, "").split("").reverse().join("")
  const numberString = numbers?.join("")

  return string + numberString
}

console.log(reverseString("NEGIE1")) // EIGEN1
console.log(reverseString("NEGIE21")) // EIGEN21
console.log(reverseString("NE3GIE21")) // EIGEN321
console.log(reverseString("N4E3GIE21")) // EIGEN4321
console.log(reverseString("5N4E3GIE21")) // EIGEN54321

