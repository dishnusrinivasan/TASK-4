const arr = [1, 2, 3, 4, 5];

const Primes = (arr) => {
  let prime = [];
  for( i=0; i<arr.length; i++) {
    if (isPrime(arr[i])) {
      prime.push(arr[i]);
    }
  }
  return prime;
};

console.log(Primes(arr));

function isPrime(num) {
  if (num <= 1) {
    return false; // Numbers less than or equal to 1 are not prime
  }
  x = Math.sqrt(num);
  for (var i = 2; i <= x; i++) {
    if (num % i === 0) {
      return false; // If the number is divisible by any number other than 1 and itself, it's not prime
    }
  }
  return true; // If no divisors were found, the number is prime
}

