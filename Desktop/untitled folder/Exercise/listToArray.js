//Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument. Also write a listToArray function that produces an array from a list.

function arrayToList(array) {
  var list = null;

  //for loop through the array
  for (i = array.length - 1; i >= 0; i--)
    list = { value: array[i], rest: list };

  return list;
}

function listToArray(list) {
  var array = [];

  for (var j = list; j; j = j.rest) array.push(j.value);

  return array;
}

function prepend(value, rest) {
  return { value: value, rest: rest };
}


function nth(list, n) {
  // Simpler solution
  //
  // return listToArray( list )[n];

  // Recursive solution
  if (n === 0) return list.value;
  else return nth(list.rest, n - 1);
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20

