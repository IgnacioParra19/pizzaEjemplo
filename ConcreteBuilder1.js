const Builder = require('./Builder');

class ConcreteBuilder1 extends Builder {
    constructor() {
        super();
        this.reset();
    }

    reset() {
        this.result1 = '';
    }

    buildStepA() {
        this.result1 += 'Step A for Product 1\n';
    }

    buildStepB() {
        this.result1 += 'Step B for Product 1\n';
    }

    buildStepC() {
        this.result1 += 'Step C for Product 1\n';
    }

    getProduct() {
        return this.result1;
    }
}

module.exports = ConcreteBuilder1;