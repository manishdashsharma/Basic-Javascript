var countries = ["india","USA","Japan","Russia"];

var states = new Array("Odisha","Delhi","Mumbai","Asam");

console.log(states[1]);

console.log(states.length);

states[0]="Punjab";

console.log(states);

var user = ["Manish","manish@dowellresearch.in",3,34,true];

console.log(user);

//delete last element
user.pop();

console.log(user);


user.unshift("New Value")

console.log(user);

console.log(user.indexOf("Manish"));


console.log(Array.from("Manish"));