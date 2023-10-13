// Write a program which tells the number of days in a month

function getDaysInMonth (month , year) { 
    return new Date(year, month, 0).getDate();
}

console.log(getDaysInMonth(1,2023));