const hammingWeight = (number) => {
  const numBin = (number).toString(2);
  let weight = 0;
  for (let i = 0; i < numBin.length; i += 1) {
    weight += Number(numBin[i]);
  }
  return weight;
};
