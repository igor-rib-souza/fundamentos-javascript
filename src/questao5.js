import PromptSync from 'prompt-sync';
import format from 'date-fns/format/index.js'

const prompt = PromptSync({ sigint: true });

function validaNome(nome) {
    return nome.length >= 5;
}

function validaCPF(cpf) {
    return /^\d{11}$/.test(cpf);
}

function validarDataNascimento(dataNascimento) {
    const dataAtual = new Date();
    const partesData = dataNascimento.split('/');
    const dia = parseInt(partesData[0]);
    const mes = parseInt(partesData[1]) - 1;
    const ano = parseInt(partesData[2]);
    const dataFornecida = new Date(ano, mes, dia);
    return (dataAtual - dataFornecida) / (1000 * 60 * 60 * 24 * 365) >= 18;
}

function validarRenda(renda) {
    return parseFloat(renda) >= 0;
}

function validarEstadoCivil(estadoCivil) {
    const estadosValidos = ['C', 'S', 'V', 'D'];
    return estadosValidos.includes(estadoCivil.toUpperCase());
}

function validarDependentes(dependentes) {
    return dependentes >= 0 && dependentes <= 10;
}

function formatarCPF(cpf) {
    const cpfString = cpf.toString();
    const parte1 = cpfString.substring(0, 3);
    const parte2 = cpfString.substring(3, 6);
    const parte3 = cpfString.substring(6, 9);
    const parte4 = cpfString.substring(9, 11);
    return `${parte1}.${parte2}.${parte3}-${parte4}`;
}


function getNome(){
    const aux = prompt("Digite seu nome ")
    if (validaNome(aux)){
        return aux;
    }
    console.log("Seu nome deve ter pelo menos 5 caracteres")
    return getNome();
}

function getCPF(){
    const aux = parseInt(prompt("Digite seu CPF "));
    if (validaCPF(aux)){
        return aux;
    }
    console.log("Seu CPF deve ter exatamente 11 números")
    return parseInt(getCPF());
}

function getDate(){
    const aux =  prompt("Digite sua data de nascimento DD/MM/AAAA ");
    if (validarDataNascimento(aux)){
        return format(new Date(aux), "dd/MM/yyyy");
    }
    console.log("A data precisa ser escrita no formato DD/MM/AAAA")
    return format(new Date(getDate()), "dd/MM/yyyy");
}

function getRenda(){
    const aux = parseFloat(prompt("Digite sua renda ")).toFixed(2);
    if (validarRenda(aux)){
        return aux;
    }
    console.log("Sua renda deve ser maior ou igual 0");
    return parseFloat(getRenda()).toFixed(2);
}

function getEstadoCivil(){
    const aux = prompt("Digite seu estado civil: C, S, V ou D ");
    if (validarEstadoCivil(aux)){
        return aux.toUpperCase();
    }
    console.log("Digite apenas uma letra, C, S, V ou D");
    return getEstadoCivil().toUpperCase();
}

function getDependentes(){
    const aux = parseInt(prompt("Digite o número de dependentes "));
    if (validarDependentes(aux)){
        return aux;
    }
    console.log("Digite um número inteiro de 0 a 10");
    return parseInt(getDependentes());
}

const nome = getNome();
const cpf = getCPF();
const data = getDate();
const renda = getRenda();
const estadoCivil = getEstadoCivil();
const dependentes = getDependentes();

console.log(nome);
console.log(formatarCPF(cpf));
console.log(data);
console.log(renda);
console.log(estadoCivil)
console.log(dependentes);