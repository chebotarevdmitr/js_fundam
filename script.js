/*const hasDriversLicense = true; // есть удостоверение водителя
const hasGoodVision = true;    //  хорошее зрение

console.log(hasDriversLicense && hasGoodVision); // true
console.log(hasDriversLicense || hasGoodVision); // true
console.log(!hasDriversLicense);                 // false

// if (hasDriversLicense && hasGoodVision) {
//   console.log("можно сесть за руль");
// } else {
//   console.log("за руль сядет кто-то другой");
// }

const isTirad = true;  //устал
console.log(hasDriversLicense && hasGoodVision && isTirad);

 if (hasDriversLicense && hasGoodVision && !isTirad) {
  console.log("можно сесть за руль");
 } else {
  console.log("за руль сядет кто-то другой");
 }
*/

// const scoreDolphins = (96 + 108 + 89) / 3; // оценка дельфинов
// const scoreKoalas = (88 + 91 + 110) / 3; //оценка коалы
// console.log(scoreDolphins, scoreKoalas ,"😁")

// if(scoreDolphins>scoreKoalas){
//   console.log(`Dolphins win the trophey 🏆` )
// }else if(scoreDolphins<scoreKoalas){
//   console.log(` Koalas win the trophey 🏆`)
// }else if(scoreDolphins=scoreKoalas){
// console.log(`Both win the tropy!`)
// }

// const scoreDolphins = (97 + 112 + 80) / 3; // оценка дельфинов
// const scoreKoalas = (109 + 95 + 50) / 3; //оценка коалы
// console.log(scoreDolphins, scoreKoalas, "😁");

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//   console.log(`Dolphins win the trophey 🏆`);
// } else if (scoreDolphins < scoreKoalas && scoreKoalas >= 100) {
//   console.log(` Koalas win the trophey 🏆`);
// } else if ((scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >=100)) {
//   console.log(`Both win the tropy!`);
// }else {
//   console.log(`No one wins the  trophy`)
// }

// const day = "monday";

// switch (day) {
//   case "monday":
//     console.log(`plan structure`);
//     console.log(`go to coding meetup`);
//     break;
//   case "tuesday":
//     console.log(`prepare theory videos`);
//     break;
//   case "wenesday":
//   case "thursay":
//     console.log(`write code examples`);
//     break;
//   case "friday":
//     console.log("record videos");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("enjoy the weekend :D");
//     break;
//   default:
//     console.log("Not a valid day!");
// }
//const age = 15;
//age >= 18 ? console.log(`i like drink berr`): console.log(`i like drink vine`)

// const age = 12;
// const drink = age >= 18 ? `wine 🍷 ` : `beer 🍺  `;
// console.log(drink);

// let drink2;
// if (age >= 18) {
//   drink2 = `wine 🍷 `;
// } else {
//   drink2 = `beer 🍺  `;
// }
// console.log(drink2);

// console.log(`I like to drink  ${age >= 18 ? `wine 🍷 ` : `beer 🍺  `}`);

const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(tip);
console.log(
  `The bill was ${bill},the tip was ${tip} ,and the total value ${bill + tip}`,
);

