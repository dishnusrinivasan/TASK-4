const a = [1, 6, 7, 4, 5];

const odd = (a) => {
  for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 === 1) {
      console.log(a[i]);
    }
  }
};

console.log(odd(a));
