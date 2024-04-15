const PizzaBuilder = require('./PizzaBuilder');
const Pizza = require('./pizza');


const myPizza = new PizzaBuilder('Medium')
                .addCheese()
                .addPepperoni()
                .addTomato()
                .build();

myPizza.describe(); 
