import Vertice from './questao1.js';
import PromptSync from 'prompt-sync';

class Poligono{
    #vertices;

    constructor(vertices){
        if (vertices.length < 3){
            throw new Error("O polígono deve ter pelo menos 3 vértices");
        }
        this.#vertices = vertices;
    }
}

export default Poligono;