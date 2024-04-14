
const PizzaBuilder = require('./pizzaBuilder');

const myPizza = new PizzaBuilder('Medium')
                  .addCheese()
                  .addPepperoni()
                  .addTomato()
                  .build();

myPizza.describe(); // Output: Pizza - Size: Medium, Cheese: true, Pepperoni: true, Tomato: true
