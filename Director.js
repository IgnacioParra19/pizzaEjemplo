class Director {
    constructor(builder) {
        this.builder = builder;
    }

    changeBuilder(builder) {
        this.builder = builder;
    }

    make(type) {
        this.builder.reset();
        switch (type) {
            case 1:
                this.builder.buildStepA();
                this.builder.buildStepB();
                break;
            case 2:
                this.builder.buildStepB();
                this.builder.buildStepC();
                break;
            default:
                this.builder.buildStepA();
                this.builder.buildStepB();
                this.builder.buildStepC();
        }
        return this.builder.getProduct();
    }
}

module.exports = Director;
