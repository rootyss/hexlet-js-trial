const isPalindrome = (str) => {
  if (str.length < 2) return true;
  if (str[0] === str[str.length - 1]) return isPalindrome(str.substring(1, str.length - 1));
  return false;
};

export default isPalindrome;