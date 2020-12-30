const factorial = (n) => {
  if (n === 0) return 1;
  return n * factorial(n - 1);
};
const generate = (n) => {
  const nLine = [];
  for (let i = 0; i < n + 1; i += 1) {
    nLine[i] = factorial(n) / (factorial(i) * factorial(n - i));
  }
  return nLine;
};
