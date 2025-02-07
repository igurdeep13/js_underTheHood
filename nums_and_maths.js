const score = 400;
console.log(score);

// Here we are creating an instance of the Number object rather than a primitive number. This means that balance is an object rather than a primitive value.
const balance = new Number(400);
// console.log(balance);
// console.log(typeof balance);

// IMPORTANT METHOD OF NUMBER DATATYPE

// 1. toString() => convert number to string
// console.log(typeof balance.toString());

// 2. toPrecision()
const otherNumber = 123.67;
// console.log(otherNumber.toPrecision(4));

// 3. toLocaleString() => The toLocaleString() method in JavaScript is used to convert a Number or Date object into a string, formatted according to a specific locale (language & region settings). It helps in formatting numbers, dates, and currencies based on the user's location.

const hundreds = 100000000;
const time = new Date();
// console.log(time.toLocaleString("en-IN"));

// ++++++++++++++++++++ Maths +++++++++++++++++++++
// Maths : JavaScript provides a built-in Math object for performing mathematical operations.

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));

// // RoundOff to larger-Value
// console.log(Math.ceil(4.2));

// // RoundOff to Smaller-Value
// console.log(Math.floor(4.2));

// Random() =>  to get random number(0 - 1)

// To get random number between given range
const min = 20;
const max = 30;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
