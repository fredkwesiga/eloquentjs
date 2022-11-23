// Use the reduce method in combination with the concat method to
// “flatten” an array of arrays into a single array that has all
// the elements of the original arrays.

// My original "solution":

let arrays = [[1, 2, 3], [4, 5], [6]];
let joinedArray = arrays.reduce((previousValue, currentValue)=> previousValue.concat(currentValue))
console.log(joinedArray);

//joining nessted arrays.
let nestedArray = [[1, 1,[1, 2], 3, [4,[5, 6]]]]

function flatten(nestedArray) {
    return nestedArray.reduce((acc,item) => {
        if(Array.isArray(item)){ //The Array.isArray() static method determines whether the passed value is an Array.
          acc = acc.concat(flatten(item));
        } else {
            acc.push(item);
        }
        return acc;
    }, [])
}
console.log(flatten(nestedArray));