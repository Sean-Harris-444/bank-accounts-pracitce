
// EXERCISE 8
// Return an array with a bank account object with the greatest balance value
// Array example: bankAccounts in /data/data.js
// getClientWithGreatestBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithGreatestBalance(array) {
  // Your code goes here...
  const newArr = [];
  let max = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i].balance > max.balance) {
      max = array[i];
    }
  }
  newArr.push(max);
  return newArr;
}

// #1 
// newArr []
// i = 0
// max = 1100
// max = object 
// newArr = [ object ]

// #2
// newArr [ object ]
// i = 1
// max = 1100
// max = object 
// newArr = [ object ]




// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
