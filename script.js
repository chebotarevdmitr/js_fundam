const hasDriversLicense = true; // есть удостоверение водителя
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