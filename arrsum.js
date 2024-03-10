const a = [1, 6, 7, 4, 5];

const arrsum = () => {
  sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += a[i];
  }
  return sum;
};

console.log(arrsum(a));
