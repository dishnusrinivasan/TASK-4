const str = "this is a string";

var titleString = (str) => {
  var arrStr = str.split(" ");
  var newArr = [];
  for (let i in arrStr) {
    newArr[i] = arrStr[i][0].toUpperCase() + arrStr[i].substr(1);
  }
  return newArr.join(" ");
};

console.log(titleString(str));