// Write a program to print the given patterns using the loops-
// 	a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
// 	   *
// 	   **
// 	   ***
	
// 	b. Print a square pattern, if the input is 3 then the output should be similar to the given output
// 	   ***
// 	   ***
// 	   ***

// 	c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
// 	     *
// 	    ***
//     *****


//  Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
// *
// **
// ***

function triangleStar(userInputNumber){
    for (let i = 1; i <= userInputNumber; i++) {
        console.log("*".repeat(i));
    }
}
console.log(triangleStar(3));
// Print a square pattern, if the input is 3 then the output should be similar to the given output
// ***
// ***
// ***
function squareStar(userInputNumber){
    for (let i = 1; i <= userInputNumber; i++) {
        console.log("*".repeat(userInputNumber));
    }
}
console.log(squareStar(3));
// Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
//   *
//  ***
// *****	     
function pyramidStar(userInputNumber){
    for (let i = 1; i <= userInputNumber; i++) {
        console.log(' '.repeat(userInputNumber-i) , '*'. repeat(i*2 -1) , ' '.repeat(userInputNumber-i));  
    }
}
console.log(pyramidStar(3));