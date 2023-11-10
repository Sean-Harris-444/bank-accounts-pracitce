// return a number form an array that is greater than 10
// or return 0
// test([3, 6, 10, 4, 11, 7, 19, 3])

// function test(arr){
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 10) {
//             return arr[i];
//         }
//     }
//     return 0;
// }

// console.log(test([3, 6, 10, 4, 11, 7, 19, 3]))

// function lessThan3(arr, num){
//     for (let i = 0; i < arr.length; i++){
//         if (i < num) {
//             console.log(less)
//         } else if (i > num) {
//             console.log(greater)
//         }
//     }
// }

// lessThan3([1, 2, 3, 4, 5, 6, 7, 8], 3)

// const arr = [
//     { id: 1, name: 'Andrei', age: 18, grades: ['A', 'B', 'B', 'A'] },
//     { id: 2, name: 'Jon', age: 21, grades: ['B', 'B', 'C']},
//     { id: 3, name: 'Michael', age: 19, grades: ['B', 'A', 'B', 'A']},
//   ];

//   function getPeopleOlderEighteen(arr) {
//     // return an array of objects with persons older 18
//     const newArr = [];
//     for ( let i = 0; i < arr.length; i++) {
//         if (arr[i].age > 18) {
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
//   }

//   console.log(getPeopleOlderEighteen(arr));

const bankAccounts = [
  {
    id: 1,
    name: "Susan",
    balance: 100.32,
    deposits: [150, 30, 221],
    withdrawals: [110, 70.68, 120],
  },
  { id: 2, name: "Morgan", balance: 1100.0, deposits: [1100] },
  {
    id: 3,
    name: "Joshua",
    balance: 18456.57,
    deposits: [4000, 5000, 6000, 9200, 256.57],
    withdrawals: [1500, 1400, 1500, 1500],
  },
  { id: 4, name: "Candy", balance: 0.0 },
  { id: 5, name: "Phil", balance: 18, deposits: [100, 18], withdrawals: [100] },
];

// function getClientWithLeastPositiveBalance(array) {
//     // Your code goes here...
//     const newArr = [];
//     let min ;
//     for (let i = 0;  i < array.length; i++){
//       if (array[i].balance > 0 && min !== undefined && array[i].balance < min.balance) {
//         min = array[i];
//       } else if (min === undefined && array[i].balance > 0) {
//         min = array[i];
//       }
//     }
//     console.log(newArr);
//     newArr.push(min)
//     return newArr;
//   }

//   console.log(getClientWithLeastPositiveBalance(bankAccounts))

// function findMinValueInArray(array) {
//     // Your code goes here...
//     let min = array[0];
//     for (let i = 0; i < array.length; i++) {
//       if (array[i] < min) {
//         min = array[i];
//       }
//     }
//     return min;
//   }

//   console.log(findMinValueInArray([3, 4, 5, 6, 2, 7]));

// function getClientWithGreatestBalance(array) {
//   // Your code goes here...
//   const newArr = [];
//   for (let i = 0; i < array.length; i++) {
//     let max = array[1].balance;
//     if (array[i].balance > max) {
//       max = array[i];
//       newArr.push(max);
//     }
//   }
//   return newArr;
// }

// console.log(getClientWithGreatestBalance(bankAccounts));

/*

Consider the traffic light system un the USA.

Create a function that:
* takes an argument that is an object of 3 properties
* * currentColor: 'green', 'red' or 'yellow'
* * isEmergencyVehicle: true or false
* * isIntersection: true or false
* returns a message with a direction for the driver:
* * The light is 'green' -> “You can drive”
* * The light is 'red' -> “Do not drive”
* * The light is 'yellow' -> 'Prepare to stop'
* * If isIntersection is true print “You can drive” regardless if there is an  emergency vehicle or not (You should never stop in an intersection in  traffic laws in the USA).
* * If emergencyVehicle is true print “Do not drive” regardless of what color the light is.
**/

// const trafficData = {
//   currentColor: 'red',
//   isEmergencyVehicle: true,
//   isIntersection: true,
// };

// function getDriverDirection(data) {
//   // Your code goes here
//     if (data.currentColor === 'green' && data.isEmergencyVehicle === false && data.isIntersection === true) {
//       return 'You can drive';
//     } else {
//       return 'Do not drive'
//     }
// }

// console.log(getDriverDirection(trafficData));

// function getAllWithdrawals(array) {
//   // Your code goes here...
//   const newArr = [];
//   let add = 0;
//   for (let i = 0; i < array.length; i ++) {
//     if (array[i].withdrawals > 0) {
//       for (let x = 0; x < array[i].withdrawals.length; x++) {
//         array[i].withdrawals[x] += add;
//       }
//     } else if (array[i].withdrawals === undefined) {
//       newArr.push(0);
//     }
//     newArr.push(array[i].withdrawals);
//   }
//   return newArr;
// }

// console.log(getAllWithdrawals(bankAccounts));

// const arr = [
//   { id: 1, name: "Andrei", age: 18, grades: [10, 7, 7, 10] },
//   { id: 2, name: "Jon", age: 21, grades: [7, 7, 3] },
//   { id: 3, name: "Michael", age: 19, grades: [7, 10, 7, 10] },
//   { id: 4, name: "Sam", age: 18, grades: [7, 10, 7, 10, 10] },
//   { id: 5, name: "Tyson", age: 23, grades: [3] },
// ];

// function getPersonGreatesScoreSum(arr) {
//   // return an array of an object with the highest total grade value
//   const newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     let add = 0;
//     if (arr[i].grades) {
//       for (let x = 0; x < arr[i].grades.length; x++) {
//         add += arr[i].grades[x];
//       }
//     }
//     newArr.push(add);
//   }
//   return newArr;
// }

// console.log(getPersonGreatesScoreSum(arr));

// function getAllWithdrawals(array) {
//   // Your code goes here...
//   const newArr = [];
//   for (let i = 0; i < array.length; i ++) {
//     let add = 0;
//     if(array[i].withdrawals) {
//       for (let x = 0; x < array[i].withdrawals.length; x++) {
//         add += array[i].withdrawals[x];
//       }
//     } else if (array[i].withdrawals <= 0) {
//       newArr.push(0)
//     }
//     newArr.push(add);
//   }
//   return newArr;
// }

// console.log(getAllWithdrawals(bankAccounts));

// function getAllDepositsGreaterThanOneHundred(array) {
//   // Your code goes here...
//   const newArr = [];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i].deposits) {
//       for (let x = 0; x < array[i].deposits.length; x++) {
//         if (array[i].deposits[x] >= 100) {
//           newArr.push(array[i].deposits[x]);
//         }
//       }
//     }
//   }
//   return newArr;
// }

// console.log(getAllDepositsGreaterThanOneHundred(bankAccounts));
// const exampleClient = {
//   balance: 200,
//   withdrawals: [100],
//   deposits: [100, 100, 100],
// };

// this will be correct if the deposits - withdrawals equals balance

// function getClientsWithWrongBalance(array) {
//   // Your code goes here...
//   const newArr = [];
//   for (let i = 0; i < array.length; i++) {
//     let withdrawals = 0;
//     let deposits = 0;
//     if (array[i].withdrawals) {
//       for (let x = 0; x < array[i].withdrawals.length; x++) {
//         withdrawals += array[i].withdrawals[x];
//       }
//     }
//     if (array[i].deposits) {
//       for (let y = 0; y < array[i].deposits.length; y++) {
//         deposits += array[i].deposits[y];
//       }
//     }
//     if (deposits - withdrawals !== array[i].balance) {
//       newArr.push(array[i]);
//     }
//     // console.log(deposits);
//     // console.log(withdrawals);
//   }
//   return newArr;
// }

// console.log(getClientsWithWrongBalance(bankAccounts));

// function concatArrays(arr1, arr2) {
//   // Your code goes here...
//   const newArr = [];
//   for (let i = 0; i < arr1.length; i++) {
//     newArr.push(arr1[i]);
//   }
//   for (let x = 0; x < arr2.length; x++) {
//     newArr.push(arr2[x]);
//   }
//   return newArr;
// }

// const arr7 = [1, [2, [3, [4]]]];

// const res = arr7.flat(2);

// console.log(concatArrays([1, 2, 3], [1, 2, 3]));
// console.log("poo");

// function flatArrays(array) {
//   // Your code goes here...
//   const newArr = [];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i].length) {
//       for (let x = 0; x < array[i].length; x++) {
//         newArr.push(array[i][x]);
//       }
//     }
//   }
//   return newArr;
// }

// console.log(flatArrays(flatArraysData));

// const array = [1, 2, 3, 4];

// for (let index = 0; index < array.length; index++) {
//   if (array.length - 1 !== index) {
//     console.log(array[index] + " is NOT the last element");
//   } else {
//     console.log(array[index] + " is the last element");
//   }
// }

// const reverseMe = [1, 2, 3, 4];
// // console.log(reverseMe.length);

// function reverseArray(array) {
//   // Your code goes here...
//   const newArr = [];
//   for (let i = 0; i <= array.length; i++) {
//     let carrier = array.pop(i);
//     // newArr.push(carrier);
//     // console.log(array.length);
//     console.log(carrier);
//   }
//   return newArr;
// }

// console.log(reverseArray(reverseMe));

// const reverseMe = [1, 2, 3, 4];

// function reverseArray(array) {
//   // Your code goes here...
//   const newArr = [];
//   for (let i = array.length - 1; i >= 0; i--) {
//     console.log(array[i]);
//     newArr.push(array[i]);
//   }
//   return newArr;
// }

// console.log(reverseArray(reverseMe));

// for (x = 1; x <= 100; x++) {
//   if (x % 3 != 0 && x % 5 != 0) {
//     console.log(x);
//   }
//   if (x % 3 == 0 && x % 5 == 0) {
//     console.log("FizzBuzz");
//   }
//   if (x % 3 == 0 && x % 5 != 0) {
//     console.log("Fizz");
//   }
//   if (x % 5 == 0 && x % 3 != 0) {
//     console.log("Buzz");
//   }
// }

// function getClientsWithLetterInName(array, letter) {
//   // Your code goes here...
//   const newArr = [];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i].name) {
//       for (let x = 0; x < array[i].name.length; x++) {
//         // console.log(array[i].name[x]);
//         if (array[i].name[x] === letter) {
//           newArr.push(array[i]);
//         }
//       }
//     }
//   }
//   return newArr;
// }

// console.log(getClientsWithLetterInName(bankAccounts, "C"));

const classSeatsFlattened = [
  "Ben",
  "Emma",
  "Sophia",
  "William",
  "Elijah",
  "James",
  "Lucas",
  "Mason",
  "Mia",
  "Liam",
  "Noah",
  "Oliver",
  "Ethan",
  "Harper",
  "Evelyn",
];

// function separateNamesWithAFromRest(array) {
//   // Your code goes here...
//   const newArr = [];
//   const namesWithA = [];
//   const namesWithOutA = [];
//   for (let i = 0; i < array.length; i++) {
//     for (let x = 0; x < array[i].length; x++) {
//       if (array[i][x] === "a") {
//         namesWithA.push(array[i]);
//         break;
//       } else {
//         namesWithOutA.push(array[i]);
//         break;
//       }
//     }
//   }
//   newArr.push(namesWithA);
//   newArr.push(namesWithOutA);
//   return newArr;
// }

// console.log(separateNamesWithAFromRest(classSeatsFlattened));

// for (let name of names) {
//   if (nameHasA) {
//     namesWithA.push(name);
//   } else {
//     namesWithoutA.push(name);
//   }
// }

// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j < 5; j++) {
//     if (j > 3) {
//       break;
//     }
//     console.log("j is: ", j);
//   }
//   console.log("i is: ", i);
// }

const names = ["sean", "shupermonkey", "latoya", "tyson"];

// write a function that will console log each letter for each name using a nested for loop

const letterLogger = array => {
  //your code here
  for (let i = 0; i < array.length; i++) {
    for (let x = 0; x < array[i].length; x++) {
      if (array[i].length < 5) {
        console.log(array[i][x]);
      }
    }
  }
  return "correct";
};

console.log(letterLogger(names));
