`use strict`; //enabling strict mode  -включение строгого режима

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if(hasDriversLicense) console.log(`If you have a driver's license, you can drive.`); //если у тебя есть водительские права можешь вести машину

function logger() {
  console.log(`My name is Dmitry.`);
}

logger();

function fruitProcessor(apples, oranges) {
 // console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const applesJuice = fruitProcessor(5, 10);
console.log (applesJuice);
console.log(fruitProcessor(3,4))