const findWhere = (arr, obj) => {
  for (const value of arr) {
    const res = true;
    for (const vol in obj) {
      if (obj[vol] !== value[vol]) res = false;
    }
    if (res) return value;
  }
  return null;
};