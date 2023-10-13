// Declare variables to store your first name, last name, marital status, country and age and display them using interploation method.

const firstName = "Manish";
const lastName = "Dash";
const maritalStatus = false;
const age = 27;
const country = "India";

if (maritalStatus == false) {
    console.log(`
    My name is ${firstName} ${lastName} and i am from ${country} . My marital status is Not married . My age is ${age} 
    `);
} else {
    console.log(`
    My name is ${firstName} ${lastName} and i am from ${country}  . My marital status is married and my age is ${age}
    `);  
}


const personDetail = {
    firstName : 'Manish',
    lastName : 'Dash',
    maritalStatus : true,
    country : 'India',
};

if (personDetail.maritalStatus == false) {
    console.log(`
    My name is ${firstName} ${lastName} and i am from ${country} . My marital status is Not married . My age is ${age}
    `);
}else {
    console.log(`
    My name is ${firstName} ${lastName} and i am from ${country}  . My marital status is married and my age is ${age}
    `); 
}