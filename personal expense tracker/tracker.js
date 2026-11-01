let budget = 400;

let food = 100;
let drinks = 100;
let clothes = 100;

function calculateTotalExpenses(food, drinks, clothes) {
  return food + drinks + clothes;
}

function calculateBalance(food, drinks, clothes) {
  return budget - calculateTotalExpenses(food, drinks, clothes);
}
function checkBudget(food, drinks, clothes) {
  if (calculateBalance(food, drinks, clothes) >= 0) {
    return true;
  } else {
    return false;
  }
}

console.log(calculateTotalExpenses(food, drinks, clothes));
console.log(calculateBalance(food, drinks, clothes));
console.log(checkBudget(food, drinks, clothes));

budget = 300;

food = 100;
drinks = 100;
clothes = 100;

console.log(calculateTotalExpenses(food, drinks, clothes));
console.log(calculateBalance(food, drinks, clothes));
console.log(checkBudget(food, drinks, clothes));

budget = 200;
food = 100;
drinks = 100;
clothes = 100;
console.log(calculateTotalExpenses(food, drinks, clothes));
console.log(calculateBalance(food, drinks, clothes));
console.log(checkBudget(food, drinks, clothes));
