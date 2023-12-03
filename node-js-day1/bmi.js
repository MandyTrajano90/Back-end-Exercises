const weightInKg = 98;
const heightInCm = 160;

function handleBMI(weight, height) {
  const heightInMeter = height / 100;
  const heightSquared = heightInMeter ** 2;
  const bmi = weight / heightSquared;
  return bmi;
}

function main() {
  const bmi = handleBMI(weightInKg, heightInCm);
  console.log( `BMI: ${bmi.toFixed(2)}`);
}

main();