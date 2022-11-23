//Math.max --> computes max for all numbers were given
function max (...numbers){
    let result = -Infinity;
    for ( let number of numbers){
        if (number > result) result = number;
    }
    return result
}
console.log(max(4, 1, 9, -2));

//using three dot notation to call similar function
let numbers = [5, 1, 7];
console.log(max(...numbers));

 function randomPointOnCircle(radius) {
   let angle = Math.random() * 2 * Math.PI;
   return { x: radius * Math.cos(angle), y: radius * Math.sin(angle) };
 }
 console.log(randomPointOnCircle(2));