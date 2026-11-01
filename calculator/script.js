function addition(num1, num2) {
  return num1 + num2;
}

console.log(addition(22, 33));
console.log(addition(2, 1));

function substraction(num1, num2) {
  return num1 - num2;
}
console.log(substraction(22, 22));

function multiplication(num1, num2) {
  if (num1 >= 0) {
    return "Not possible";
  }
}
console.log(multiplication(0, 3));
