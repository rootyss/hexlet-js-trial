const summaryRanges = (arrayNumbers) => {
  const sequences = [];
  if (arrayNumbers.length <= 1) return sequences;
  let start = arrayNumbers[0];
  for (let i = 1; i < arrayNumbers.length; i += 1) {
  	if (arrayNumbers[i] + 1 !== arrayNumbers[i + 1]) {
  		if (arrayNumbers[i] !== start) {
  		sequences.push(`${start}->${arrayNumbers[i]}`);
  		start = arrayNumbers[i + 1];
  		}
  	}
  }
  return sequences;
};

summaryRanges([110, 111, 112, 111, -5, -4, -2, -3, -4, -5]);

// ['110->112', '-5->-4']
