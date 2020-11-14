function isMagicSquare(matrix) {
  var sumRow;
  var sumCol;
  var sumDiagnols = { main: 0, second: 0 },
    matrixLength = matrix.length;
  var transposeMatrix = matrix[0].map(function (col, c) {
    return matrix.map(function (row, r) {
      return matrix[r][c];
    });
  });
  for (let i = 0; i < matrixLength; i++) {
    sumDiagnols.main += matrix[i][i];
    sumDiagnols.second += matrix[i][matrixLength - i - 1];
    sumRow = matrix[i].reduce((a, b) => a + b, 0);
    sumCol = transposeMatrix[i].reduce((a, b) => a + b, 0);
    if (
      sumRow - sumCol != 0 &&
      sumRow - sumDiagnols.main != 0 &&
      sumRow - sumDiagnols.second != 0 &&
      sumCol - sumDiagnols.main != 0 &&
      sumCol - sumDiagnols.second &&
      sumDiagnols.main - sumDiagnols.second != 0
    ) {
      return false;
    }
  }
  return true;
}

console.log(
  isMagicSquare([
    [8, 1, 6],
    [3, 5, 7],
    [4, 9, 2],
  ])
);

console.log(
  isMagicSquare([
    [16, 3, 2, 13],
    [5, 10, 11, 8],
    [9, 6, 7, 12],
    [4, 15, 14, 1],
  ])
);
console.log(
  isMagicSquare([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
