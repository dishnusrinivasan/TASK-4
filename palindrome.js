var paul = ["hello", "madam", "level"];
//11 - 2332
for (let i = 0; i < paul.length; i++) {
  let a = paul[i].toLowerCase();
  let b = paul[i].toLowerCase().split("").reverse().join("");
  if (a === b) {
    console.log(paul[i]);
  }
}
