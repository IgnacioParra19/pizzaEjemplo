
class Pizza {
  constructor() {
    this.size = '';
    this.cheese = false;
    this.pepperoni = false;
    this.tomato = false;
  }
  
  describe() {
    console.log(`Pizza - Size: ${this.size}, Cheese: ${this.cheese}, Pepperoni: ${this.pepperoni}, Tomato: ${this.tomato}`);
  }
}

module.exports = Pizza;
