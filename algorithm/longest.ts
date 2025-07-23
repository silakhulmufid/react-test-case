/**
 * Get the longest word in a sentence.
 *
 * @example
 * longest("Saya sangat senang mengerjakan soal algoritma")
 * // result "mengerjakan: 11 character"
 *
 * @param {string} sentence A sentence to find the longest word.
 * @returns {string} The longest word and character length.
 */
export const longest = (sentence: string): string => {
  const longest = sentence
    .split(" ")
    .reduce((longest, word) => (word.length > longest.length ? word : longest))
    .toString()

  return `${longest}: ${longest.length} character`
}

console.log(longest("Saya sangat senang mengerjakan soal algoritma")) // mengerjakan: 11 character
