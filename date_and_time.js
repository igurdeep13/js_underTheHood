// JavaScript Date Object: JavaScript provides the Date object to work with dates and times.

// let myDate = new Date();
// console.log(myDate);

// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());

// Date.now() => The Date.now() method returns the number of milliseconds elapsed since January 1, 1970, 00:00:00 UTC (Unix Epoch time).

// let newDate = new Date();
// console.log(newDate.getDay());
// console.log(newDate.getMonth() + 1);
// console.log(
//   newDate.toLocaleString("default", {
//     weekday: "short",
//   })
// );

// +++++++++++++++++++++++++++++++++++++++++++++++++++
// Projects for Practice Date object

//1. Displays the current date and time in a readable format.

// function showDateTime() {
//   let dateTime = new Date();
//   let formattedDateTime = dateTime.toLocaleTimeString("default", {
//     timeStyle: "short",
//   });
//   console.log(formattedDateTime);
// }

// showDateTime();

// 2 Display the Day of the Week
// 🔹 Features:

// Shows today's weekday (e.g., "Monday").

// function displayDayOfWeek() {
//   const weekDays = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
//   let today = new Date();
//   let day = weekDays[today.getDay() - 1];
//   console.log(day);
// }

// displayDayOfWeek();

// 3. Simple Countdown (Seconds Remaining Today)
// Features: Shows how many seconds are left until midnight.

// console.log(Date.now());

// function countdown() {
//   let now = Date.now();
//   let midnight = new Date();
//   midnight.setHours();

//   const secondsLeft = Math.floor((midnight - now) / 1000);
//   console.log(`Second left until midnight: ${secondsLeft}`);
// }

// countdown();
// const date = new Date();
// console.log(
//   date.toLocaleDateString("default", {
//     timeStyle: "short",
//   })
// );

console.log(Date.now());
