// Write a program to check that the number given by the user is a prime number or not

let isPrime = true;
function checkPrimeNumber(userInputNumber) {
    if (userInputNumber == 1) {
        console.log(`
            ${userInputNumber} is neither prime nor composite !
        `);
    }
    else if (userInputNumber > 1) {
        for (let i = 2; i < userInputNumber; i++) {
            if (userInputNumber % i == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(`${userInputNumber} is a prime number`);
        } else {
            console.log(`${userInputNumber} is a not prime number`);
        }
    }
    else {
        console.log("The number is not a prime number.");
    }
}

console.log(checkPrimeNumber(6));