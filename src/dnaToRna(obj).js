const dnaToRna = (dna) => {
  const rna = {
    G: C,
    C: G,
    T: A,
    A: U,
  }
  const result = [];
  for (const elem of dna) {
    if (_.has(rna, elem)) result.push(rna[elem]);
    else return null;
  }
  return result.join();
}