var a = [1, 2, 3, 4, 5];
var b = [7, 8, 9, 10];

function mergearray(a, b) {
  let i = 0;
  let j = 0;
  let mix = [];
  while (i < a.length && j < b.length) {
    if (a[i] <= b[j]) {
      mix.push(a[i]);
      i++;
    } else {
      mix.push(b[j]);
      j++;
    }

    while (i < a.length) {
      mix.push(a[i]);
      i++;
    }

    while (j < b.length) {
      mix.push(b[j]);
      j++;
    }
    return mix;
  }
}

// console.log(mergearray(a, b));
let arr = mergearray(a,b);
let arrLen = arr.length;
if(arrLen%2 === 0){
  const mid = arrLen/2;
  console.log((arr[mid-1]+arr[mid])/2);
}else{
  console.log(arr[(Math.floor(arrLen/2))]);
}

