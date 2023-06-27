import PromptSync from 'prompt-sync';

class Aluno {
    #matricula;
    #nome;
    #P1;
    #P2;

    constructor(matricula, nome) {
        this.#matricula = matricula;
        this.#nome = nome;
        this.#P1 = null;
        this.#P2 = null;
    }

    get matricula() {
        return this.#matricula;
    }

    get nome() {
        return this.#nome;
    }

    get P1() {
        return this.#P1;
    }

    get P2() {
        return this.#P2;
    }

    set P1(nota) {
        this.#P1 = nota;
    }

    set P2(nota) {
        this.#P2 = nota;
    }

    notaFinal(){
        const nota1 = this.#P1? this.#P1 : parseFloat(0);
        const nota2 = this.#P2? this.#P2 : parseFloat(0);

        return (nota1+nota2)/2
    }
}

class Turma {
    #alunos;

    constructor() {
        this.#alunos = [];
    }

    addAluno(aluno) {
        for (const a of this.#alunos) {
            if (a.matricula === aluno.matricula) {
                return;
            }
        }
        this.#alunos.push(aluno);
    }

    findAluno(matricula) {
        const aluno = this.#alunos.find((a) => a.matricula === matricula);
        if (aluno) {
            return aluno;
        } else {
            return null;
        }
    }

    removeAluno(matricula) {
        const index = this.#alunos.findIndex((a) => a.matricula === matricula);
        if (index !== -1) {
            const aluno = this.#alunos.splice(index, 1)[0];
            console.log(`Aluno ${aluno.nome} removido da turma.`);
        } else {
            console.log(`Não foi encontrado nenhum aluno com a matrícula ${matricula}.`);
        }
    }

    lancaNota(matricula, prova, nota) {
        const aluno = this.findAluno(matricula);
        if (!aluno){
            return
        }
        switch (prova) {
            case "P1":
                aluno.P1 = parseFloat(nota);
                break;
            case "P2":
                aluno.P2 = parseFloat(nota);
                break;
            default:
                 break;
        }
    }

    printAlunos(){
        console.log("—---------------------------------------\nMatricula Nome  P1 P2 NF\n—---------------------------------------")
        for (const a of this.#alunos){
            console.log(`${a.matricula}  ${a.nome}  ${a.P1? a.P1 : '-'} ${a.P2? a.P2 : '-'} ${a.notaFinal()}`);
        }
    }

}

//
const prompt = PromptSync({ sigint: true });


const turma = new Turma;
const nome1 = prompt("Digite o nome do primeiro aluno ");
const matricula1 = prompt("Digite a matrícula do primeiro aluno ");


const nome2 = prompt("Digite o nome do segundo aluno ");
const matricula2 = prompt("Digite a matrícula do segundo aluno ");


const aluno1 = new Aluno(matricula1,nome1);
const aluno2 = new Aluno(matricula2,nome2);


turma.addAluno(aluno1);
turma.addAluno(aluno2);

const matricula = prompt("Digite a matricula do aluno para lançar a nota ");
const nota = prompt("Digite a primeira nota ");
const prova = prompt("Digite a prova, se é P1 ou P2 ");

turma.lancaNota(matricula,prova,nota)

turma.printAlunos();