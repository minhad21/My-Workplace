//challenge1 part2 (arrow function)

// const calcAvg = (p1, p2, p3) => {
//   let avg = (p1 + p2 + p3) / 3;
//   return avg;
// };

// let avgDolphins = calcAvg(86, 54, 41);
// console.log(avgDolphins);

// let avgKoalas = calcAvg(27, 34, 23);
// console.log(avgKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins > 2 * avgKoalas) {
//     console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//     return;
//   } else if (avgKoalas > 2 * avgDolphins) {
//     console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//     return;
//   } else {
//     console.log("No one winner");
//   }
// };

// checkWinner(avgDolphins, avgKoalas);

//part 2 challenge 2 (using function and array)

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// const calcTip = function (bills) {
//   let tip;
//   const tips = [];
//   const totals = [];
//   for (let i = 0; i < bills.length; i++) {
//     if (bills[i] > 50 && bills[i] < 300) {
//       tip = bills[i] * (15 / 100);
//       tips.push(tip);
//     } else {
//       tip = bills[i] * (20 / 100);
//       tips.push(tip);
//     }
//     total = bills[i] + tip;
//     totals.push(total);
//   }
//   console.log(totals);
// };

// calcTip(bills);

// array
// const age = [2, 4, 6];
// // for (let i = 0; i < age.length; i++) {
// //   console.log(age[i]);
// // }

// challenge 3 part 2 (object and function)
// "use strict";
// const human = {
//   fullname: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.BMI = this.mass / (this.height * this.height);
//     return this.BMI;
//   },
// };

// human.calcBMI();
// console.log(human);
