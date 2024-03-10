function rotateArray(arr, k) {
  const rotations = k % arr.length;
  const rotatedPart = arr.slice(-rotations);
  const remainingPart = arr.slice(0, arr.length - rotations);
  
  return rotatedPart.concat(remainingPart);
}

const array = [1, 2, 3, 4, 5];
const k = 2; 

const rotatedArray = rotateArray(array, k);
console.log(rotatedArray); 
