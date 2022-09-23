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
  return 1 + this.sizeCost();
}



window.addEventListener("load", function() {
  let form = document.querySelector("form")
  form.addEventListener("submit", handleFormSubmission)
});

function handleFormSubmission(event) {
  event.preventDefault();

  const toppingArray = []
  const toppingSelection = document.getElementsByName("topping");
  for (let i = 0; i < toppingSelection.length; i++) {
    if (toppingSelection[i].checked === true) {
      toppingArray.push(toppingSelection[i].value);
    }
  }
  const sizeSelection = document.querySelector("input[name='size']:checked").value;

  let myPizza = new Pizza(toppingSelection, sizeSelection);
  const pizzaTotalPrice = myPizza.totalCost();
  console.log(myPizza.toppings)
  console.log(myPizza.size)

  document.querySelector("span.pizza-size").innerText = sizeSelection;
  document.querySelector("span.toppings-list").innerText = toppingArray.join(", ");
  document.querySelector("span.total-cost").innerText = "$" + pizzaTotalPrice;
}