`use strict`; //enabling strict mode  -включение строгого режима

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if(hasDriversLicense) console.log(`If you have a driver's license, you can drive.`); //если у тебя есть водительские права можешь вести машину

// function logger() {
//   console.log(`My name is Dmitry.`);
// }

// logger();

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const applesJuice = fruitProcessor(5, 10);
// console.log (applesJuice);
// console.log(fruitProcessor(3,4))

// const  number = Number('23'); //string-to-number conversion function функция преобразования строки в число
// function calcAge1(brithYear) {
//   return 2026 - brithYear;
// }

// console.log(calcAge1(1978));
// const age1 = calcAge1(1987);
// console.log(age1);

// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };

// const age2 = calcAge2(1978);
// console.log(age2);
 function calcAge1(brithYear) {
  return 2026 - brithYear;
 }

 const age1 = calcAge1(1978);
 console.log(age1);

  const calcAge2 = function(brithYear) {
  return 2026 - brithYear;
 }

 const age2= calcAge2(1987);
 console.log(age1, age2);