/**
 * Counts the occurrences of each string in QUERY in the array INPUT.
 *
 * @example
 * countQuery(["xc", "dz", "bbb", "dz"], ["bbb", "ac", "dz"])
 * // [1, 0, 2]
 *
 * @param INPUT - The array of strings to search in.
 * @param QUERY - The array of strings to search for.
 * @returns An array of counts, where each index corresponds to the index of the
 *          string in QUERY.
 */
export function countQuery(INPUT: string[], QUERY: string[]): number[] {
    return QUERY.map((query) => INPUT.filter((input) => input === query).length);
}

console.log(countQuery(["xc", "dz", "bbb", "dz"], ["bbb", "ac", "dz"])); // [1, 0, 2]