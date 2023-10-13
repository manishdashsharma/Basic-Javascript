// Get user input using prompt(“Enter your age:”). If user is 18 or older , 
// give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.


// let userInput = prompt("Enter your age to check your driving eligibility.");
let userInput = 16;

function drivingPermission(userInput) {
    if (userInput >= 18) {
        console.log(`
            You are old enough to drive
        `);
    }else {
        console.log(`
            You will have to wait ${18-userInput} year to drive!
        `);
    }
}

console.log(drivingPermission(8));