const shoppinglist = [];

shoppinglist.push("Apple");
console.log(shoppinglist);
console.log(shoppinglist[0]);

shoppinglist[0] = "Watermelon";
console.log(shoppinglist);

function itemShoping(arr) {
  return `I want: ${arr}`;
}
console.log(itemShoping(shoppinglist));

shoppinglist.unshift("Coconut");
console.log(itemShoping(shoppinglist));

shoppinglist.pop();
console.log(itemShoping(shoppinglist));

shoppinglist.push("Apple", "Mango", "Lemon");
console.log(itemShoping(shoppinglist));
console.log(shoppinglist[3]);

shoppinglist.shift();
console.log(itemShoping(shoppinglist));
console.log(shoppinglist);
