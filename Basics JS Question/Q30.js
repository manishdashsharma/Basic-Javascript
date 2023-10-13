// Create a simple calculator program in JavaScript which can perform the addition, substraction, multiplication and division on given numbers.

function calculator(operatorvalue,num1,num2){
    if (operatorvalue == '+') {
        return (num1 + num2);
    }
    else if (operatorvalue == '-') {
        return (num1 - num2);
    }
    else if (operatorvalue == '*') {
        return (num1 * num2);
    }
    else if (operatorvalue == '/') {
        return (num1 / num2);
    }
    else{
        return "Toodles!"
    }
}

let result = calculator("-",2,3);
console.log(result);