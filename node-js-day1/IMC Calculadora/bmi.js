const readline = require('readline-sync');

function handleBMI(weight, height) {
  const heightInMeter = height / 100;
  const heightSquared = heightInMeter ** 2;
  const bmi = weight / heightSquared;
  return bmi;
}

const BMI_MAX_AND_MIN = {
  'Underweight': {
    'min': 0,
    'max': 18.4,
  },
  'Normal Weight': {
    'min': 18.5,
    'max': 24.9,
  },
  'Overweight': {
    'min': 25,
    'max': 29.9,
  },
  'Obesity Class I': {
    'min': 30,
    'max': 34.9,
  },
  'Obesity Class II': {
    'min': 35,
    'max': 39.9,
  },
  'Obesity Class III': {
    'min': 40,
    'max': 100,
  },
};

function handleBMIResult(bmi) {
  const status = Object.keys(BMI_MAX_AND_MIN);
  const resultFind = status.find((status) => {
    const { min, max } = BMI_MAX_AND_MIN[status];
    return bmi >= min && bmi <= max;
  });
  return resultFind;
};

function main() {
  const weight = readline.questionFloat('Weight in kg: ');
  const height = readline.questionInt('Height in cm: ');
  const bmi = handleBMI(weight, height);
  const result = handleBMIResult(bmi);
  console.log( `BMI: ${bmi.toFixed(2)}`);
  console.log(result);
}

main();