const multiply = (matrixA, matrixB) => {
  const rowsCountA = matrixA.length;
  const rowsCountB = matrixB.length;
  const [firstRowB] = matrixB;
  const columnsCountB = firstRowB.length;
  const matrixC = [];

  for (let row = 0; row < rowsCountA; row += 1) {
    matrixC[row] = [];
    for (let column = 0; column < columnsCountB; column += 1) {
      let sum = 0;
      for (let i = 0; i < rowsCountB; i += 1) {
        sum += matrixA[row][i] * matrixB[i][column];
      }
      matrixC[row][column] = sum;
    }
  }

  return matrixC;
};
