const Builder = require('./Builder');

class ConcreteBuilder2 extends Builder {
    constructor() {
        super();
        this.reset();
    }

    reset() {
        this.result2 = '';
    }

    buildStepA() {
        this.result2 += 'Step A for Product 2\n';
    }

    buildStepB() {
        this.result2 += 'Step B for Product 2\n';
    }

    buildStepC() {
        this.result2 += 'Step C for Product 2\n';
    }

    getProduct() {
        return this.result2;
    }
}

module.exports = ConcreteBuilder2;