// Write a program to print all the prime number between 0 to 100 (0 and 100 included)

let primeNumber = [];
let notPrimeNumber = [];
let isPrime = true;


for (let i = 0; i<= 100; i++){
    if (i > 1) {
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                notPrimeNumber.push(i);
            }else {
                primeNumber.push(i);
            }
            break
        }
        
    }
}

console.log(primeNumber);
console.log(notPrimeNumber);
