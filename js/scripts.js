function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
  this.price = 10;
}

Pizza.prototype.toppingCost = function() {
  return 0.5 * Pizza.toppings.length;
}

Pizza.prototype.totalCost = function() {
  if (this.size === "small") {
    this.price += 2;
    return this.price;
  } else if (this.size === "medium") {
    this.price += 4;
    return this.price; 
  } else if (this.size === "large") {
    this.price += 6;
    return this.price; 
  } else {
    this.price += 8;
    return this.price; 
  }
}

Pizza.prototype.totalCost = function() {
  const total = Pizza.toppingCost() + Pizza.sizeCost();
  return total;
}

window.addEventListener("load", function() {
  let form = document.querySelector("form")
  form.addEventListener("submit", handleFormSubmission)
});

function handleFormSubmission(event) {
  event.preventDefault();
  
  let toppingSelectionOne = document.querySelector("input[name='toppings-1']:checked").value;
  const sizeSelection = document.getElementById("size").value;

  let myPizza = new Pizza(toppingSelectionOne, sizeSelection);
  const pizzaTotalPrice = myPizza.totalCost();

  document.getElementsByClassName("pizza-size").innerText = sizeSelection;
  document.getElementsByClassName("toppings-list").innerText = toppingSelectionOne;
  document.getElementsByClassName("total-cost").innerText = "$" + pizzaTotalPrice;
}