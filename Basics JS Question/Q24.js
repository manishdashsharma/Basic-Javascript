// Write a program to create two array "even" and "odd" having even and odd number between the 0 to 100 (0 and 100 included).


let evenArray = [];
let oddArray = [];

function pushToArray() {
    for(var i=1; i<=100 ; i++){
        if (i%2 == 0) {
            evenArray.push(i);
        }
        else if (i%2 != 0){
            oddArray.push(i);
        }
    }
}
pushToArray();
let arrayObjectOutput = {
    evenArrayOutput : evenArray,
    oddArrayOutput : oddArray
}
console.log(arrayObjectOutput);