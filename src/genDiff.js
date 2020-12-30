const genDiff = (obj1, obj2) => {
  const result = {};
  for (const key in obj1) {
    if (_.has(obj2, key) && obj1[key] === obj2[key]) result[key] = 'unchanged';
    if (_.has(obj2, key) && obj1[key] !== obj2[key]) result[key] = 'changed';
    if (!_.has(obj2, key)) result[key] = 'deleted';
  }
  for (const key in obj2) {
    if (!_.has(obj1, key)) result[key] = 'added';
  }
  return result;
};