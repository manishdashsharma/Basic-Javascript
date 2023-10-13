// Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
//     - The same groups apply to both men and women.
//     - Underweight: BMI is less than 18.5
//     - Normal weight: BMI is 18.5 to 24.9
//     - Overweight: BMI is 25 to 29.9
//     - Obese: BMI is 30 or more

function checkBMI (height, weight){
    let bodyMassIndex = (weight/(height*height))
    if (bodyMassIndex < 18.5){
        console.log(`Your are underweight according to bodyMassIndex Index i.e ${bodyMassIndex}.`);
    }else if(bodyMassIndex >= 18.5 && bodyMassIndex <= 24.9){
        console.log(`Your weight is normal according to bodyMassIndex Index i.e ${bodyMassIndex}.`);
    }else if(bodyMassIndex >= 25 && bodyMassIndex <= 29.9){
        console.log(`Your are overweight according to bodyMassIndex Index i.e ${bodyMassIndex}.`);
    }else if(bodyMassIndex > 30){
        console.log(`Your are obese according to bodyMassIndex Index i.e ${bodyMassIndex}.`);
    }
}

// height should be in meter and weight should be in kg
console.log(checkBMI(100,60));