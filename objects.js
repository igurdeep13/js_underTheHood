// a.singleton is created when we use constructor.

// b. object literals

const mySym = Symbol("key1");

const employee = {
  name: "Gurdeep",
  [mySym]: "Key1Value",
  "Full Name": "Gurdeep Singh",
  city: "Cambridge",
  Age: 25,
  greeting: function () {
    console.log(`Hello world. This is ${this.name}`);
  },
};

// console.log(employee["Full Name"]);
// console.log(employee.name);
// console.log(employee[mySym]);

// "=" is used to override the value of any key in the object.
// employee.city = "Vancouver";

// console.log(employee.greeting());

// const client = new Object();
// console.log(client);

// const obj1 = { 1: "a", 2: "b" };
// const obj2 = { 3: "a", 4: "b" };

// // We can use combine two objects using spread operator

// // console.log({ ...obj1, ...obj2 });

// const arr = [{ fs: "Gurdeep", ls: "Singh" }, { email: "g@apple.com" }];

// console.log(arr[0].ls);

// const myobj1 = new Object(); //First Way | singleton object

// const tinderUser = {};
// myobj2.id = 1;
// myobj3.name = "Sammy";

// nested objects:

// const myObj1 = {
//   email: "abc@google.com",
//   fullName: {
//     firstName: "Gurdeep",
//     lastName: "Singh",
//   },
// };
// console.log(myObj1.fullName.firstName);

// const obj1 = { a: "1", b: "2" };
// const obj2 = { b: "3", c: "4" };

// const obj3 = Object.assign({}, obj1, obj2);
// const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

// console.log(Object.values(obj2));

// console.log(obj1.hasOwnProperty("b"));

const person = {
  fname: "Gurdeep",
  location: "Canadian",
  Profession: "CEO",
};

// deconstruction
const { fname: firstName } = person;
console.log(firstName);
