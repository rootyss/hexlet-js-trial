const reverse = (str) => {
  const iter = (indexSymbol, acc) => {
    if(indexSymbol >= str.length) { 
      return acc;
    } else {
     return iter(indexSymbol + 1, `${str[index]}${acc}`);
    }
  }
  return iter(0, '');
};
