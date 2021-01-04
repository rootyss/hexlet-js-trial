const convertDate = (...arr) => {
  const result = [];
  for (const elem of arr) {
  	result.push(new Date(...elem).toDateString());
  }
  return result;
};