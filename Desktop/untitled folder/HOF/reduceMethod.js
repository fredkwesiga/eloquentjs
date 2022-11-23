//.reduce() method will sum up all the elements of the array.

const arrayOfNumbers = [1,2,3,4]

const sum = arrayOfNumbers.reduce((accumulator, currentValue)=>{
    console.log(`Previous: ${accumulator}`);
    console.log(`Current: ${currentValue}`);
    return accumulator + currentValue
}, 0)
console.log(sum)

const people = [
    {
        name: "Fred Kwesiga",
        age: 35
    },
    {
        name: "Pauline Nankya",
        age: 100
    },
    {
        name: "Paul Walker",
        age: 59
    }
];

const oldestAge = people.reduce((previous, current) => {
    if(current.age > previous){
        return current.age
    }
    return previous
}, 0);
console.log(oldestAge)

const outPut = people.reduce((p, c, i, a)=>{
    const split = c.name.split(" ");
    let part = `${split[0][0]}${split[1][0]}`;

    if(i === a.length -1){
        part += ".";      
    } else {
        part += ','; 
    }
    return p + part;
}, "")
console.log(outPut);