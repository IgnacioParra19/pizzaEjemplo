// PizzaBuilder.js
const IPizzaBuilder = require('./IPizzaBuilder');
const Pizza = require('./pizza');

class PizzaBuilder {
  constructor(size) {
    this.size = size;
  }
  
  setSize(size) {
    this.size = size;
    return this;
  }

  addCheese() {
    this.cheese = true;
    return this;
  }

  addPepperoni() {
    this.pepperoni = true;
    return this;
  }

  addTomato() {
    this.tomato = true;
    return this;
  }

  build() {
    return new Pizza(this);
  }
}

module.exports = PizzaBuilder;

