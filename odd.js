const a = [1, 6, 7, 4, 5];

(function (a) {
  for (let i in a) {
    if (a[i] % 2 === 1) {
      console.log(a[i]);
    }
  }
})(a);
