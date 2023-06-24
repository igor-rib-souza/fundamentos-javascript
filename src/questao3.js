import Vertice from './questao1.js';
import PromptSync from 'prompt-sync';

class Poligono {
    #vertices;

    constructor(vertices) {
        if (vertices.length < 3) {
            throw new Error("O polígono deve ter pelo menos 3 vértices");
        }
        this.#vertices = vertices;
    }

    addVertice(vertice) {
        for (const edge of this.#vertices) {
            if (edge.equals(vertice)) {
                return false
            }
        }
        this.#vertices.push(vertice);
        return true;
    }

    perimetro() {
        let perimetro = 0;

        for (let i = 0; i < this.#vertices.length - 2; i++) {
            const verticeAtual = this.#vertices[i];
            const proximoVertice = this.#vertices[i + 1];
            perimetro += verticeAtual.distancia(proximoVertice);
        }
        perimetro += this.#vertices[this.#vertices.length - 2].distancia(this.#vertices[0]);

        return perimetro;
    }

    qtdVertices() {
        return this.#vertices.length;
    }
}

export default Poligono;

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

const edges = [vertice1, vertice2, vertice3]

const polígono = new Poligono(edges);

//addvertice 
const x4 = prompt("Digite o x do quarto vértice ");
const y4 = prompt("Digite o y do quarto vértice ");
console.log(polígono.addVertice(x4,y4));

//perimetro
console.log(polígono.perimetro());

//qtdvertices
console.log(polígono.qtdVertices());