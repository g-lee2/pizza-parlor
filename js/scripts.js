function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
  this.price = 10;
}

Pizza.prototype.totalCost = function() {
  if (this.toppings === true) {
    this.price += 1;
  }
  if (this.size === "small") {
    this.price += 2;
  } else if (this.size === "medium") {
    this.price += 4; 
  } else if (this.size === "large") {
    this.price += 6;
  } else if (this.size === "x-large") {
    this.price += 8;
  }
  return this.price;
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

  document.getElementsByClassName("pizza-size").innerText = sizeSelection;
  document.getElementsByClassName("toppings-list").innerText = toppingSelection;
  document.getElementsByClassName("total-cost").innerText = "$" + pizzaTotalPrice;
}