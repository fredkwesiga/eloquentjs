
//Write a range function that takes two arguments, start and end,
// and returns an array containing all the numbers from start up to (and including) end.

const range = (start, end, increment) => {
  // create the result array
  var result = [];
  if (increment == undefined) {
    increment = 1;
    // test to see if we have an increment, otherwise set it to 1
    // up or down with your increment.
    numLoops = Math.abs((end - start) / increment) + 1;

    // loop that many times
    for (var i = 0; i<numLoops; i++){
      // add (push) the value of start to the array
      result.push(start);
      // increment the value of start
      start += increment;
    }
    //return the array with all the things in it
  return result;
  }
};

function sum(numArray) {
  // set a variable to hold the sum
  var arrayTotal = 0;

  // see how many numbers are in the array
  numLoops = numArray.length;

  // loop that many times
  for (var i = 0; i < numLoops; i++) {
    // add the number at that index to the sum
    arrayTotal += numArray[i];
  }
  // return the sum
  return arrayTotal;
}

console.log(range(1, 10));
//test to see if it returns sum of the numbers
 console.log(sum(range(1, 10)));