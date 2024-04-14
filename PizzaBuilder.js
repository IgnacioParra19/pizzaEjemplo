
const Pizza = require('./pizza');

class PizzaBuilder {
  constructor(size) {
    this.pizza = new Pizza();
    this.pizza.size = size;
  }
  
  addCheese() {
    this.pizza.cheese = true;
    return this;
  }
  
  addPepperoni() {
    this.pizza.pepperoni = true;
    return this;
  }
  
  addTomato() {
    this.pizza.tomato = true;
    return this;
  }
  
  build() {
    return this.pizza;
  }
}

module.exports = PizzaBuilder;
