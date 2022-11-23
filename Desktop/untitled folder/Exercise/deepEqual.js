function deepEqual(v1, v2) {
  //check if the types and values are the same
  if (v1 === v2) return true;

  //check if the types of both arguments are object and are not null
  if (
    v1 == null ||
    v2 == null ||
    typeof v1 != 'object' ||
    typeof v2 != 'object'
  )
    return false;

  let v1keys = Object.keys(v1);
  let v2keys = Object.keys(v2);

  if (v1keys.length != v2keys.length) return false;

  for (let key in v1keys) {
    if (!v1keys.includes(key) || !deepEqual(v1[key], v2[key])) {
      return false;
    } else return true;
  }
}
var v1 = { here: { is: 'an' }, object: 2 };
console.log(deepEqual(v1, v1));
// → true
