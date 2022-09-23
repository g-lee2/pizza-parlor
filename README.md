# _Pizza-Parlor_

#### By _**Grace Lee**_

#### _A simple website that allows user to order pizza with different sizes and toppings._

## Technologies Used

* _HTML_
* _CSS_
* _Javascript_

## Description

_It is a website where a user chooses the size of pizza and the toppings they would like on their pizza. It uses an object called pizza with toppings, size, and base price as properties. It uses a prototype method to determine the cost of the pizza. The cost of the pizza order changes depending on the size the user chooses. In addition, the price also changes depending on how many toppings they choose to add to the pizza._

## Setup/Installation Requirements

* _Clone this repository to your desktop._
* _Go into this project's directory on your desktop._
* _Find and open the index.html in your browser._

## Known Bugs

* _No known bugs as of now_

## License

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

Copyright (c) _2022_ _Grace Lee_

## Test-driven Development
Describe: Pizza()

Test: "It should return a Pizza object with two properties for toppings and size"
Code: const myPizza = new Pizza(["onion", "pepperoni"], "medium");
Expected Output: Pizza { toppings: ["onion", "pepperoni"], "medium" }

Test: "It should return a Pizza object with three properties for toppings, size, and base price"
Code: const myPizza = new Pizza(["onion", "pepperoni"], "medium", 10);
Expected Output: Pizza { toppings: ["onion", "pepperoni"], "medium", 10}

Describe: Pizza.prototype.toppingCost = function()

Test: "It should return the new price of the pizza when different toppings are added"
Code: 
const myPizza = new Pizza(["onion", "pepperoni"], "medium");
const myPizza.toppingCost();
Expected Output: 11

Describe: Pizza.prototype.sizeCost = function()

Test: "It should return the new price of the pizza depending on the size"
Code: 
const myPizza = new Pizza(["onion", "pepperoni"], "medium");
const myPizza.sizeCost();
Expected Output: 14

Describe: Pizza.prototype.totalCost = function()

Test: "It should return the new price of the pizza depending on the toppings selected and the size"
Code: 
const myPizza = new Pizza(["onion", "pepperoni"], "medium");
const myPizza.totalCost();
Expected Output: 15
