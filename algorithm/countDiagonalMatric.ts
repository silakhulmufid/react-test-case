/**
 * Counts the difference between the sum of the primary diagonal and
 * the secondary diagonal of a square matrix.
 *
 * @example
 * countDiagonalMatrix([[1, 2, 0], [4, 5, 6], [7, 8, 9]])
 * // 15 - 12 = 3
 * @param {number[][]} matrix - A square matrix
 * @returns {number} The difference of the sum of the two diagonals
 */
export function countDiagonalMatrix(matrix: number[][]): number {
    return matrix.reduce((acc, row, i) => acc + row[i] - row[row.length - 1 - i], 0);
}

console.log(countDiagonalMatrix([[6, 2, 0], [4, 10, 6], [10, 8, 9]])) // 5

