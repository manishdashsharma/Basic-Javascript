// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list

function checkInArray(countryName,countryArray) {
    if (countryArray.includes(countryName)) {
        console.log(`
            ${countryName.toUpperCase()}
        `);
    } else {
        countryArray.push("Ethiopia");
        console.log(countryArray);
    }
}


console.log(checkInArray("Ethiopia",["Australia", "New Zealand"]));