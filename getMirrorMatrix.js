const getMirrorMatrix = (matrix) => {
  const resultMatrix = [];
  for (const line of matrix) {
  	for (let i = 0; i <= line.length / 2; i += 1) {
  		line[line.length - 1 - i] = line[i];
  	}
  	resultMatrix.push(line);
  }
  return resultMatrix;
};
