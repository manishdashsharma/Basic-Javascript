// Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript? Create a program which checks that the given number is even or odd.


function evenORodd(theNumber) {
    if (theNumber % 2 === 0){
        console.log(`
            ${theNumber} is an even number !
        `);
    }else{
        console.log(`
            ${theNumber} is an odd number !
        `);
    }  
}
console.log(evenORodd(4));