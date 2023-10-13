// Write a program which tells the number of days in a month, now consider leap year.


function getDaysInMonth (month , year) { 
    return new Date(year, month, 0).getDate();
}


// February in a non-leap year.
console.log(getDaysInMonth(2, 2023));

// February in a leap year.
console.log(getDaysInMonth(2, 2000));