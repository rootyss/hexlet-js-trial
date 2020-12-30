const bqs = (param) => {
  const keys = Object.keys(param).sort();
  const par = [];
  for (const key of keys) {
    par.push(`${key}=${param[key]}`);
  }
  return par.join('&');
};