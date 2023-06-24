import Vertice from "./questao1";

class Triangulo {

    #verticeA;
    #verticeB;
    #verticeC;

    constructor(verticeA, verticeB, verticeC) {
        if (!this.isTriangle(verticeA, verticeB, verticeC)) {
            throw new Error('Os vértices fornecidos não formam um triângulo válido.');
        }

        this.#verticeA = verticeA;
        this.#verticeB = verticeB;
        this.#verticeC = verticeC;

    }

    isTriangle(verticeA, verticeB, verticeC) {

        const distanciaAB = verticeA.distancia(verticeB);
        const distanciaBC = verticeB.distancia(verticeC);
        const distanciaCA = verticeC.distancia(verticeA);

        return (
            distanciaAB + distanciaBC > distanciaCA &&
            distanciaBC + distanciaCA > distanciaAB &&
            distanciaCA + distanciaAB > distanciaBC
        );
    }

    get verticeA() {
        return this.#verticeA;
    }

    get verticeB() {
        return this.#verticeB;
    }

    get verticeC() {
        return this.#verticeC;
    }

    equals(verticeA, verticeB, verticeC) {
        return (
            this.#verticeA === verticeA || this.#verticeA === verticeB || this.#verticeA === verticeC
            && this.#verticeB === verticeA || this.#verticeB === verticeB || this.#verticeB === verticeC
            && this.#verticeC === verticeA || this.#verticeC === verticeB || this.#verticeC === verticeC
        );
    }

    perimetro() {
        const distanciaAB = this.#verticeA.distancia(this.#verticeB);
        const distanciaCB = this.#verticeB.distancia(this.#verticeC);
        const distanciaCA = this.#verticeC.distancia(this.#verticeA);

        return distanciaAB + distanciaCB + distanciaCA;
    }

    tipo() {
        const distanciaAB = this.#verticeA.distancia(this.#verticeB);
        const distanciaBC = this.#verticeB.distancia(this.#verticeC);
        const distanciaCA = this.#verticeC.distancia(this.#verticeA);

        if (distanciaAB === distanciaBC && distanciaBC === distanciaCA) {
            return "Equilátero";
        } else if (distanciaAB === distanciaBC || distanciaBC === distanciaCA || distanciaCA === distanciaAB) {
            return "Isósceles";
        } else {
            return "Escaleno";
        }
    }

    clone() {
        const novoVerticeA = new Vertice(this.#verticeA.x, this.#verticeA.y);
        const novoVerticeB = new Vertice(this.#verticeB.x, this.#verticeB.y);
        const novoVerticeC = new Vertice(this.#verticeC.x, this.#verticeC.y);

        return new Triangulo(novoVerticeA, novoVerticeB, novoVerticeC);
    }

    area() {
        const ladoA = this.#verticeA.distancia(this.#verticeB);
        const ladoB = this.#verticeB.distancia(this.#verticeC);
        const ladoC = this.#verticeC.distancia(this.#verticeA);

        const s = this.perimetro() / 2;

        return Math.sqrt(s * (semiperimetro - ladoA) * (s - ladoB) * (s - ladoC));
    }
}