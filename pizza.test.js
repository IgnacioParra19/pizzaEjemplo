const PizzaBuilder = require('./PizzaBuilder');
const Pizza = require('./pizza');

describe('PizzaBuilder', () => {
  test('builds a pizza with specified options', () => {
    const myPizza = new PizzaBuilder('Medium')
                      .addCheese()
                      .addPepperoni()
                      .addTomato()
                      .build();

    expect(myPizza.size).toBe('Medium');
    expect(myPizza.cheese).toBe(true);
    expect(myPizza.pepperoni).toBe(true);
    expect(myPizza.tomato).toBe(true);
  });

  test('sets size correctly', () => {
    const myPizza = new PizzaBuilder('Large').build();
    expect(myPizza.size).toBe('Large');
  });

  test('adds cheese correctly', () => {
    const myPizza = new PizzaBuilder('Small').addCheese().build();
    expect(myPizza.cheese).toBe(true);
  });

  test('adds pepperoni correctly', () => {
    const myPizza = new PizzaBuilder('Small').addPepperoni().build();
    expect(myPizza.pepperoni).toBe(true);
  });

  test('adds tomato correctly', () => {
    const myPizza = new PizzaBuilder('Small').addTomato().build();
    expect(myPizza.tomato).toBe(true);
  });

});

describe('pizza', () => {
  test('describes pizza correctly', () => {
    const pizza = new Pizza({ size: 'Medium', cheese: true, pepperoni: true, tomato: false });
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

    pizza.describe();

    expect(consoleSpy).toHaveBeenCalledWith('Pizza - Size: Medium, Cheese: true, Pepperoni: true, Tomato: false');

    consoleSpy.mockRestore();
  });

});
