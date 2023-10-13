//ice-cream story


var name = "manish";

console.log("line number 3", name);

function sayName() {
    var name = "Mr M";
    console.log("line number 7",name);
    
    sayNameTwo();

    function sayNameTwo() {
        console.log("line number 11", name);
    }
}


sayName();


