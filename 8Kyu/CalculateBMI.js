/*

https://www.codewars.com/kata/57a429e253ba3381850000fb/javascript


Write function bmi that calculates body mass index (bmi = weight / height squared).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"
*/

function bmi(weight, height) {
    bmiCalc = weight / (height*height)
    if(bmiCalc <= 18.5){
        return "Underweight";
    } else if (bmiCalc <= 25.0){
        return "Normal";
    } else if (bmiCalc <= 30.0){
        return "Overweight";
    }
    return "Obese";
}