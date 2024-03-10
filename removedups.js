var a = [1, 2, 3, 1, 2, 3, 4];

for (let i = 0; i < a.length - 1; i++) {
  let sub = a.slice(i + 1);
  if (sub.includes(a[i])) {
    a.splice(sub.indexOf(a[i]) + i+1,1);
  }
}

console.log(a);
