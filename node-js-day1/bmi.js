const readline = require('readline-sync');

function handleBMI(weight, height) {
  const heightInMeter = height / 100;
  const heightSquared = heightInMeter ** 2;
  const bmi = weight / heightSquared;
  return bmi;
}

function main() {
  const weight = readline.questionInt('Weight in kg: ');
  const height = readline.questionInt('Height in cm: ');
  const bmi = handleBMI(weight, height);
  console.log( `BMI: ${bmi.toFixed(2)}`);
}

main();