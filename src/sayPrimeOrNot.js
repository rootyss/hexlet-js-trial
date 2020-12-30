const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2, lastDividing = Math.sqrt(num); i <= lastDividing; i += 1) {
    if (num % i === 0 || num === 1) {
      return false;
    }
  }
  return true;
};

const sayPrimeOrNot = (num) => {
  console.log(isPrime(num) ? 'yes' : 'no');
};


