//And we can have functions that change other functions.

function noisy(f) {
  return (...args) => {
    console.log('calling with', args);
    let result = f(...args);
    console.log('called with', args, ', returned', result);
    return result;
  };
}
noisy(Math.min)(3, 2, 1);
// → calling with [3, 2, 1]
// → called with [3, 2, 1] , returned 1

//We can even write functions that provide new types of control flow.

 function unless(test, then) {
   if (!test) then();
}
repeat(3, n => {
   unless(n % 2 == 1, () => {
console.log(n, "is even"); });
});
// → 0 is even
// → 2 is even

