class Vertice{

    // # para atributos privados
    #x;
    #y;

    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    // leitura pública do atributo x
    get x(){
        return this.#x;
    }

    // leitura pública do atributo y
    get y(){
        return this.#y
    }

    distancia(otherVertice){
        outroX = otherVertice.x;
        outroY = otherVertice.y;

        distance = (((outroX - this.#x)**2) + ((outroY - this.#y)**2))**0.5;
    }

    move(x,y){
        this.#x = x;
        this.#y = y;
    }

    equals(otherVertice){
        // === para evitar type coercion
        return this.#x === otherVertice.x && this.#y === otherVertice.y;
    }
}