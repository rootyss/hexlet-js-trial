const isContinuousSequence = (sequence) => {
  if (sequence.length < 2) return false;
  for (let i = 0; i < sequence.length - 1; i += 1) {
    if (Math.abs(sequence[i + 1] - sequence[i] !== 1)) return false;
  }
  return true;
};
