function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
  this.price = 10;
}

Pizza.prototype.sizeCost = function() {
  if (this.size === "small") {
    this.price += 1; 
  } else if (this.size === "medium") {
    this.price += 3; 
  } else if (this.size === "large") {
    this.price += 5; 
  } else {
    this.price += 7; 
  }
  return this.price; 
}

window.addEventListener("load", function() {
  document.getElementById("order-form").removeAttribute("class");
  const form = document.querySelector("form");
  form.addEventListener("submit", handleFormSubmission);
});

function handleFormSubmission(event) {
  event.preventDefault();
  const toppingArray = []
  const toppingSelection = document.getElementsByName("topping");
    for (let i = 0; i < toppingSelection.length; i++) {
      if (toppingSelection[i].checked === true) {
        toppingArray.push(toppingSelection[i].value);
      }
    };
  const sizeSelection = document.querySelector("input[name='size']:checked").value;
  const myPizza = new Pizza(toppingSelection, sizeSelection);
  const pizzaTotalPrice = myPizza.sizeCost() + (toppingArray.length * 0.5);
  document.querySelector("span.pizza-size").innerText = sizeSelection.toUpperCase();
  document.querySelector("span.toppings-list").innerText = toppingArray.join(", ").toUpperCase();
  document.querySelector("span.total-cost").innerText = "$" + pizzaTotalPrice;
  document.getElementById("order-form").setAttribute("class", "hidden");
  document.getElementById("final-order").removeAttribute("class");
}