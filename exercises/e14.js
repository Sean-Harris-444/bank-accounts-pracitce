// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    let withdrawals = 0;
    let deposits = 0;
    if (array[i].withdrawals) {
      for (let x = 0; x < array[i].withdrawals.length; x++) {
        withdrawals += array[i].withdrawals[x];
      }
    }
    if (array[i].deposits) {
      for (let y = 0; y < array[i].deposits.length; y++) {
        deposits += array[i].deposits[y];
      }
    }
    if (deposits - withdrawals !== array[i].balance) {
      newArr.push(array[i]);
    }
    // console.log(deposits);
    // console.log(withdrawals);
  }
  return newArr;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
