let myPizza = new Pizza();
function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
  this.price = 10;
}

Pizza.prototype.toppingCost = function() {
  this.price += (0.5 * myPizza.toppings.length);
  return this.price;
}