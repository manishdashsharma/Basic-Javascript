// Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
// - 4 > 3
// - 4 >= 3
// - 4 < 3
// - 4 <= 3
// - 4 == 4
// - 4 === 4
// - 4 != 4
// - 4 !== 4
// - 4 != '4'
// - 4 == '4'
// - 4 === '4'
// - Find the length of python and jargon and make a falsy comparison statement.

4 > 3 //true
4 >= 3 //true
4 < 3 //false
4 <= 3 //false
4 == 4 //true
4 === 4 //true
4 != 4 //false
4 !== 4 //false
4 != '4' //false
4 == '4' //true
4 === '4' //false

// to define variable
var conditionArray = [
    "4 > 3","4 >= 3","4 < 3","4 <= 3",
    "4 == 4","4 === 4","4 != 4",
    "4 !== 4","4 != '4'","4 == '4'",
    "4 === '4'"]
for (let i=0 ; i<=10 ; i++){
    console.log(`
    var condition${i} = ${conditionArray[i]};
    console.log(condition${i});
    `);
};


var condition0 = 4 > 3;
console.log(condition0);


var condition1 = 4 >= 3;
console.log(condition1);


var condition2 = 4 < 3;
console.log(condition2);


var condition3 = 4 <= 3;
console.log(condition3);


var condition4 = 4 == 4;
console.log(condition4);


var condition5 = 4 === 4;
console.log(condition5);


var condition6 = 4 != 4;
console.log(condition6);


var condition7 = 4 !== 4;
console.log(condition7);


var condition8 = 4 != '4';
console.log(condition8);


var condition9 = 4 == '4';
console.log(condition9);


var condition10 = 4 === '4';
console.log(condition10);


let python = "python";
let jargon = "jargon";

console.log(python.length);
console.log(jargon.length); 

if(python.length !== jargon.length){
    console.log("the length of python is not equal to the length of jargon")
}