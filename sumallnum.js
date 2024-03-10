const arr = [1, 2, 3, 4, 5];

(function (arr) {
  let sum = 0;
  for (let i in arr) {
    sum += arr[i];
  }

  console.log(sum);
})(arr);
