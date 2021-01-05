const enlargeArrayImage = (image) => {
  const cb = (acc, line) => {
    const resultLine = line.reduce((res, col) => {
      res.push(col, col);
      return res;
    }, []);
    acc.push(resultLine, resultLine);
    return acc;
  };
  return image.reduce(cb, []);
};

/*const duplicateValues = (items) => items.flatMap((item) => [item, item]);

const enlargeArrayImage = (items) => {
  const horizontallyStretched = items.map(duplicateValues);
  return duplicateValues(horizontallyStretched);
};*/