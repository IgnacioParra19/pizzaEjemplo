const PizzaBuilder = require('./PizzaBuilder');

const myPizza = new PizzaBuilder('Medium')
                .addCheese()
                .addPepperoni()
                .addTomato()
                .build();

myPizza.describe();