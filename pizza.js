class Pizza {
  constructor(builder) {
    this.size = builder.size;
    this.cheese = builder.cheese || false;
    this.pepperoni = builder.pepperoni || false;
    this.tomato = builder.tomato || false;
  }
  
  describe() {
    console.log(`Pizza - Size: ${this.size}, Cheese: ${this.cheese}, Pepperoni: ${this.pepperoni}, Tomato: ${this.tomato}`);
  }
}
module.exports = Pizza;
