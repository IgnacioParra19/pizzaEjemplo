const Director = require('./Director'); // Importa la clase Director
const ConcreteBuilder1 = require('./ConcreteBuilder1'); // Importa la clase ConcreteBuilder1
const ConcreteBuilder2 = require('./ConcreteBuilder2'); // Importa la clase ConcreteBuilder2

describe('Director', () => {
    test('should create Product 1 with ConcreteBuilder1', () => {
        const director = new Director(new ConcreteBuilder1());
        const product = director.make(1);
        expect(product).toEqual('Step A for Product 1\nStep B for Product 1\n');
    });

    test('should create Product 2 with ConcreteBuilder2', () => {
        const director = new Director(new ConcreteBuilder2());
        const product = director.make(2);
        expect(product).toEqual('Step B for Product 2\nStep C for Product 2\n');
    });
});
