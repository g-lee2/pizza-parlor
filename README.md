Describe: Pizza()

Test: "It should return a Pizza object with two properties for toppings and size"
Code: const myPizza = new Pizza(["onion", "pepperoni"], "medium");
Expected Output: Pizza { toppings: ["onion", "pepperoni"], "medium" }

Test: "It should return a Pizza object with three properties for toppings, size, and base price"
Code: const myPizza = new Pizza(["onion", "pepperoni"], "medium", 10);
Expected Output: Pizza { toppings: ["onion", "pepperoni"], "medium", 10}

Describe: Pizza.prototype.toppingCost = function()
Test: "It should return the new price of the pizza when different toppings are added"
Code: const myPizza.toppingCost();
Expected Output: 11