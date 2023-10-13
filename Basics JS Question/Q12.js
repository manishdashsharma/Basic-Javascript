// Create a human readable time format using the Date time object
//     - YYYY-MM-DD HH:mm
//     - DD-MM-YYYY HH:mm
//     - DD/MM/YYYY HH:mm


const variableDate = new Date();

// YYYY-MM-DD HH:mm
console.log(variableDate);
// DD-MM-YYYY HH:mm
console.log(variableDate.toLocaleString());
// DD/MM/YYYY HH:mm
console.log(variableDate.toLocaleString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' }));