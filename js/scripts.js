function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
  this.price = 10;
}

// Pizza.prototype.toppingCost = function() {
//   return 0.5 * this.toppings.length;
// }

Pizza.prototype.sizeCost = function() {
  if (this.size === "small") {
    this.price += 2; //12, 13
    return this.price;
  } else if (this.size === "medium") {
    this.price += 4; //14, 15
    return this.price; 
  } else if (this.size === "large") {
    this.price += 6; //16, 17
    return this.price; 
  } else {
    this.price += 8; //18, 19
    return this.price; 
  }
}

Pizza.prototype.totalCost = function() {
  return 1 + this.sizeCost();
}

window.addEventListener("load", function() {
  let form = document.querySelector("form")
  form.addEventListener("submit", handleFormSubmission)
});

function handleFormSubmission(event) {
  event.preventDefault();
  
  const toppingSelection = document.querySelector("input[name='toppings-1']:checked").value;
  const sizeSelection = document.querySelector("input[name='size']:checked").value;

  let myPizza = new Pizza(toppingSelection, sizeSelection);
  const pizzaTotalPrice = myPizza.totalCost();

  document.querySelector("span.pizza-size").innerText = sizeSelection;
  document.querySelector("span.toppings-list").innerText = toppingSelection;
  document.querySelector("span.total-cost").innerText = "$" + pizzaTotalPrice;
}