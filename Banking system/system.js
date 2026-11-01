let balance = 1000;
let accountActive = true;
let transactionAmount = 300;

function deposit(balance, transactionAmount) {
  return balance + transactionAmount;
}

function withdraw(balance) {
  if (transactionAmount <= 0) {
    return "Transaction is invalid";
  } else if (balance >= transactionAmount) {
    return "The withdraw can proceed";
  }
}

function checkAccount(accountActive) {
  if (!accountActive) {
    return "Account is not active";
  } else {
    return "Account is active";
  }
}

console.log(deposit(balance, transactionAmount));
console.log(withdraw(balance));
console.log(checkAccount(accountActive));
