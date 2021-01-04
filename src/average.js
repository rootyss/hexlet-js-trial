const average = (...nums) => {
  if (nums.length === 0) return null;
  let sum = 0;
  for (const num of nums) {
  	sum += num;
  }
  return sum / nums.length;
};