// EXERCISE 11
// Return an array of withdrawal sums of each bank account.
// If the account doesn't have withdrawals, it's sum is 0.
// Array example: bankAccounts in /data/data.js
// getAllWithdrawals(bankAccounts) => [3432, 0, 43242.34, 0, 23432]

export function getAllWithdrawals(array) {
  // Your code goes here...
  const newArr = [];
  for (let i = 0; i < array.length; i ++) {
    let add = 0; 
    if(array[i].withdrawals) {
      for (let x = 0; x < array[i].withdrawals.length; x++) {
        add += array[i].withdrawals[x];
      }
    } else if (array[i].withdrawals <= 0) {
      newArr.push(0)
    }
    newArr.push(add);
  }
  return newArr;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-11"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
