const apply = (countUse, func, arg) => {
  let result = arg;
  if (countUse === 0) return result;
  for (let i = 1; i <= countUse; i += 1) {
    result = func(result);
  }
  return result;
};
