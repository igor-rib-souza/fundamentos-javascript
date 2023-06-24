
import PromptSync from 'prompt-sync';
class Vertice {

    // # para atributos privados
    #x;
    #y;

    constructor(x, y) {
        this.#x = x;
        this.#y = y;
    }

    // leitura pública do atributo x
    get x() {
        return this.#x;
    }

    // leitura pública do atributo y
    get y() {
        return this.#y
    }

    distancia(otherVertice) {
        const outroX = otherVertice.#x;
        const outroY = otherVertice.#y;

        return (((outroX - this.#x) ** 2) + ((outroY - this.#y) ** 2)) ** 0.5;
    }

    move(x, y) {
        this.#x = x;
        this.#y = y;
    }

    equals(otherVertice) {
        // === para evitar type coercion
        return this.#x === otherVertice.x && this.#y === otherVertice.y;
    }
}

export default Vertice;

//Previne o código de executar quando a classe vértice é importada
const prompt = PromptSync({ sigint: true });

const x1 = prompt("Digite o x do primeiro vértice ");
const y1 = prompt("Digite o y do primeiro vértice");
const vertice1 = new Vertice(x1, y1)

const x2 = prompt("Digite o x do segundo vértice ");
const y2 = prompt("Digite o y do segundo vértice ");
const vertice2 = new Vertice(x2, y2);

const x3 = prompt("Digite o x do terceiro vértice ");
const y3 = prompt("Digite o y do terceio vértice ");
const vertice3 = new Vertice(x3, y3);

// getter x
console.log(vertice1.x);
console.log(vertice2.x);
console.log(vertice3.x);

// getter y
console.log(vertice1.y);
console.log(vertice2.y);
console.log(vertice3.y);

// distancia
console.log(vertice1.distancia(vertice2));
console.log(vertice1.distancia(vertice3));
console.log(vertice2.distancia(vertice3));

// move
console.log(vertice1.x);
console.log(vertice1.y);
console.log("Os valores acima são antes do move, os abaixo são após");
vertice1.move(vertice2.x, vertice2.y);
console.log(vertice1.x);
console.log(vertice1.y);

// equals
console.log(vertice1.equals(vertice2));
console.log(vertice1.equals(vertice3));
console.log(vertice2.equals(vertice3))

