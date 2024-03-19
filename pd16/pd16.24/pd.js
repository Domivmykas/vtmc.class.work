function calculateBMI(weight, height) {
    return weight / (height * height);
}

function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi < 25) {
        return "Normal weight";
    } else if (bmi < 30) {
        return "Overweight";
    } else {
        return "Obese";
    }
}

// Example usage
const weight = 70; // in kilograms
const height = 1.75; // in meters
const bmi = calculateBMI(weight, height);
const category = getBMICategory(bmi);
console.log("BMI:", bmi.toFixed(2), "Category:", category);