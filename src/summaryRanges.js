const summaryRanges = (arrayNumbers) => {
  const sequences = [];
  const len = arrayNumbers.length;
  let gap = [];
  if (len <= 1) return sequences;

  for (let i = 0; i < len; i += 1) {
    if (arrayNumbers[i] + 1 === arrayNumbers[i + 1]) {
      gap.push(arrayNumbers[i]);
      if (arrayNumbers[i + 1] + 1 !== arrayNumbers[i + 2]) {
        gap.push(arrayNumbers[i + 1]);
        sequences.push(`${gap[0]}->${gap[gap.length - 1]}`);
        gap = [];
      }
    }
  }
  return sequences;
};
