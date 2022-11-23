// function filter(array, test) {
//   let passed = [];
//   for (let element of array) {
//     if (test(element)) {
//       passed.push(element);
//     }
//   }
//   return passed;
// }
// console.log(filter(SCRIPTS, (script) => script.living)); // → [{name: "Adlam", ...}, ...]

//.filter():
//.filter() checks every element in an array to see if it meets a certain criteria and returns a new array with the elements that return truthy for the criteria.

//Example:
//In the example below we would use .filter to return values that are less than 200.
let cost = [100, 400, 50, 40, 700];
let smallCost = cost.filter(function (costItem) {
  return costItem < 200;
});
console.log(smallCost);
