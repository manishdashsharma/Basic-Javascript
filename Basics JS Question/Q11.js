// Use the Date object to do the following activities
//     - What is the year today?
//     - What is the month today as a number?
//     - What is the date today?
//     - What is the day today as a number?
//     - What is the hours now?
//     - What is the minutes now?
//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.


// What is the year today?
const currentDate = new Date();
console.log(currentDate.getFullYear());
// result : 2023

// What is the month today as a number?
console.log(currentDate.getMonth());
// reuslt 0

// What is the date today?
console.log(currentDate.getDate());
// result 13

// What is the day today as a number?
console.log(currentDate.getDay());
// result 5

// What is the hours now?
console.log(currentDate.getHours());
// result 2

// What is the minutes now?
console.log(currentDate.getMinutes());
// result 26

// Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(Date.now());
// result 1673556977493