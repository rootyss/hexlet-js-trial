const substr = (str, start = 0, length = str.length) =>{
  if (length < 0) length = 1;
  if (start < 0) start = 0;
  if (length === 0) return '';
  const lastIndex = start + length - 1;
  if (lastIndex > str.length) {
  	length = str.length;
  }  
  if (start >= str.length) {
  	return '';
  }
  const result = [];
  for (let i = start; i <= lastIndex; i += 1) {
  	result.push(str[i]);
  }
  return result.join('');
};
