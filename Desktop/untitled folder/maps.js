

// let ages = {
//   Boris: 39,
//   Liang: 22,
//   Júlia: 62,
// };

// console.log(`Júlia is ${ages['Júlia']}`);

let ages = new Map()
//set adds a new elemet to Map with specified key and value
ages.set('Boris', 39);
ages.set('Liang', 22);
ages.set('Júlia', 62);

console.log(`Júlia is ${ages.get('Júlia')}`);