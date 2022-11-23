//The .forEach() method executes a callback
//function on each of the elements in an array in order.

const numbers = [28, 77, 45, 99, 27];

numbers.forEach((number) => {
  console.log(number);
});

//.filter() method executes a callback function on each element in an array.
//The callback function for each of the elements must return either true or false. The returned array is a new array with any elements for which the callback function returns true.

const randomNumbers = [4, 11, 42, 14, 39];
const filterArray = randomNumbers.filter((x) => {
  return x % 2 == 0;
});
console.log(filterArray);

//map method

const finalParticipants = ['Taylor', 'Donald', 'Don', 'Natasha', 'Bobby'];
// add string after each final participant
const announcements = finalParticipants.map((member) => {
  return member + ' joined the contest.';
});

console.log(announcements);

//simple implementation forEach Method
let food = ['mango', 'rice', 'pepper', 'pear'];
food.forEach(function (foodItem) {
  console.log('I want to eat ' + foodItem);
});
