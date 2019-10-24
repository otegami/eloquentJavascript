"use strict";

// let x = 30;
// console.log(" the value of x is ", x );
// function multiplier(factor) {
//     return number => number * factor
// }
// let twice = multiplier(2);
// console.log(twice(5));
// function power(base, exponent) {
//     if ( exponent == 0 ) {
//         return 1;
//     } else {
//         return base * power(base, exponent -1 );
//     }
// }
// console.log(power(2, 3));
// function find(current, history) {
//     function findSolution(target) {
//         if (current == target) {
//             return history;
//         } else if (current > target) {
//             return null;
//         } else {
//             return find(current + 5, `(${history} + 5)`) || 
//                    find (current * 3, `(${history} * 3 )`);
//         }
//     }
//     return find(1, "1");
// }
// console.log(findSolution(24));
// function printFarmInventory(cows, chickens) {
//     let cowString = String(cows);
//     while (cowString.length < 3) {
//         cowString = "0" + cowString;
//     }
//     console.log(`${cowString} Cows`);
//     let chickenString = String(chickens);
//     while (chickenString.length < 3) {
//         chickenString = "0" + chickenString;
//     }
//     console.log(`${chickenString} Chickens`);
// }
// printFarmInventory(7, 11);
// function printZeroPaddedWithLabel(number, label) {
//     let numberString = String(number);
//     while (numberString.length < 3) {
//         numberString = "0" + numberString;
//     }
//     console.log(`${numberString} ${label}`);
// }
// function printFarmInventory(cows, chickens, pigs) {
//     printZeroPaddedWithLabel(cows, "Cows");
//     printZeroPaddedWithLabel(chickens, "Chickens");
//     printZeroPaddedWithLabel(pigs, "Pigs");
// }
// printFarmInventory(7, 11, 3);
// function printZeroPaddedWithLabel(number, label) {
//     let numberString = String(number);
//     while (numberString.length < 3) {
//       numberString = "0" + numberString;
//     }
//     console.log(`${numberString} ${label}`);
//   }
//   function printFarmInventory(cows, chickens, pigs) {
//     printZeroPaddedWithLabel(cows, "Cows");
//     printZeroPaddedWithLabel(chickens, "Chickens");
//     printZeroPaddedWithLabel(pigs, "Pigs");
//   }
//   printFarmInventory(7, 11, 3);
function zeroPad(number, width) {
  var string = String(number);

  while (string.length < width) {
    string = "0" + string;
  }

  return string;
}

function printFarmInventory(cows, chickens, pigs) {
  console.log("".concat(zeroPad(cows, 3), " Cows"));
  console.log("".concat(zeroPad(chickens, 3), " Chickens"));
  console.log("".concat(zeroPad(pigs, 3), " Pigs"));
}

printFarmInventory(7, 11, 3);