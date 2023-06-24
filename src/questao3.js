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

        for (let i = 0; i < this.#vertices.length - 1; i++) {
            const verticeAtual = this.#vertices[i];
            const proximoVertice = this.#vertices[i + 1];
            perimetro += verticeAtual.distancia(proximoVertice);
        }

        perimetro += this.#vertices[this.#vertices.length - 1].distancia(this.#vertices[0]);

        return perimetro;
    }

    qtdVertices() {
        return this.#vertices.length;
    }
}

export default Poligono;