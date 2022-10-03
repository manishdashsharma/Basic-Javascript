// Note : 
// 1. functions declarations are scanned and made available 
// 2. Varible declaration are scanned and made undefined 


tipper("5");

function tipper(a) {
    var bill = parseInt(a);
    console.log(bill + 5);
}


var bigTipper = function (a) {
    var bill = parseInt(a);
    console.log(bill + 20);
}

bigTipper("5");


console.log(name);
var name = "Manish";

function sayName() {
    var name = "Mr M";
    console.log(name);
}

sayName();

console.log(name);

