//return true if an array has no triples

let newObject = {};

function noTriples(arr) {
  for (let i = 0; i < arr.length; i++) {
  if (newObject[(arr[i])]) {
    newObject[(arr[i])]++;
      if (newObject[(arr[i])] >= 3) {
        return true;
      }
  } else {
    newObject[(arr[i])] = 1;
      }
  }
}

noTriples([1,1,2,2,1]);
// noTriples([1,2,4,1]);
