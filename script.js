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

const scoreDolphins = (96 + 108 + 89) / 3; // оценка дельфинов
const scoreKoalas = (88 + 91 + 110) / 3; //оценка коалы
console.log(scoreDolphins, scoreKoalas ,"😁")

if(scoreDolphins>scoreKoalas){
  console.log(`Dolphins win the trophey 🏆` )
}else if(scoreDolphins<scoreKoalas){
  console.log(` Koalas win the trophey 🏆`)
}else if(scoreDolphins=scoreKoalas){
console.log(`Both win the tropy!`)
}