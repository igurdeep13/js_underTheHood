// +++++++++++FUNCTIONS+++++++++

// function addTwoNum(num1, num2) {
//   return num1 + num2;
// }

// const result = addTwoNum(1, 2);
// console.log("Result:", result);

// function person(name = "garrie") {
//   if (!name) {
//     console.log("Enter your name");
//     return;
//   }
//   return `Hello world from ${name}`;
// }

// console.log(person("Gurdeep"));
// function addOne(num) {
//   return num + 1;
// }
// console.log(addOne(2));

// const addTwo = function (num) {
//   return num + 2;
// };
// console.log(addTwo(2));

// this refers to current context

// const user = {
//   username: "Gurdeep",
//   price: 999,

//   welcomeMessage: function () {
//     console.log(`${this.username}, welcome to website`);

//     // console.log(this);
//   },
// };

// user.username = "Lovepreet";
// user.welcomeMessage();
// console.log(this);

// function chai() {
//   console.log(this);
// }

// chai();

// const coffee = () => {
//   console.log(this);
// };
// coffee();

//Explict return where we use curly braces and return keyword
// const add = (a, b) => {
//   return a + b;
// };

// console.log(add(1, 2));

// const sub = (a, b) => a - b;
// console.log(sub(2, 1));

// ++++++++++++++++++++++++++++++++++++++++++

// const user = {
//   username: "Gurdeep",
//   price: 999,
//   welcomeMessage: function () {
//     console.log(`Welcome back, ${this.username}`); //this refers to current context
//   },
// };

// // user.username = "Lovepreet";
// user.welcomeMessage();

// function chai() {
//   const username = "Gurdeep";
//   console.log(this);
// }

// const coffee = () => {
//   const username = "Gurdeep";
//   console.log(this);
// };

// coffee();

// const addTwo = (a, b) => {
//   return a + b;
// };

// console.log(addTwo(1, 2));

// (function IIFE() {
//   console.log("Nothing is permanent!");
// })();

// let count = 10;
// (function () {
//     count = 20;
//   console.log("This is IIFI");
// })();
// console.log(count);t
