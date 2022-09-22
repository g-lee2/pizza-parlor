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

Pizza.prototype.sizeCost = function() {
  if (this.size === "small") {
    this.price += 2;
    return this.price;
  } else if (this.size === "medium") {
    this.price += 4;
    return this.price; 
  } else {
    this.price += 6;
    return this.price; 
  } 
}