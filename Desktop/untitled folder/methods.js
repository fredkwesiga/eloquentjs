//creating a simple method.
let rabbit = {}

rabbit.speak = function(line){
    console.log(`The rabbit says '${line}'`);
}
rabbit.speak("I'm alive.");

//prototypes
let empty = {};
console.log(empty.toString);