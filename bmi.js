//Create your function below this line.
//The first parameter should be the weight and the second should be the height.

function bmiCalculator (weight, height){
    var bmi = weight/Math.pow(height, 2);
    if (bmi < 18.5){
        return "Your BMI is" + bmi +", UNDERWEIGHT";
    }

    if (bmi >= 18.5 && bmi < 24.9){
        return "Your BMI is" + bmi +", NORMAL";
    }

    if (bmi >= 25 && bmi < 29.9){
        return "Your BMI is" + bmi +", OVERWEIGHT";
    }
    if (bmi >= 30 && bmi < 34.9){
        return "Your BMI is" + bmi +", OBESE";
    }
    if (bmi > 35){
        return "Your BMI is" + bmi +", EXTREMELY OBESE";
    }
}


