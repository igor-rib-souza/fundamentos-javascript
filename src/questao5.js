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
    const parte1 = cpf.substr(0, 3);
    const parte2 = cpf.substr(3, 3);
    const parte3 = cpf.substr(6, 3);
    const parte4 = cpf.substr(9, 2);
    return `${parte1}.${parte2}.${parte3}-${parte4}`;
}


function getNome(){
    let aux = prompt("Digite seu nome ")
    if (validaNome(aux)){
        return aux;
    }
    console.log("Seu nome deve ter pelo menos 5 caracteres")
    return getNome();
}

function getCPF(){
    let aux = parseInt(prompt("Digite seu CPF "));
    if (validaCPF(aux)){
        return aux;
    }
    console.log("Seu CPF deve ter exatamente 11 números")
    return parseInt(getCPF());
}

function getDate(){
    let aux =  prompt("Digite sua data de nascimento DD/MM/AAAA ");
    if (validarDataNascimento(aux)){
        return format(new Date(aux), "dd/MM/yyyy");
    }
    console.log("A data precisa ser escrita no formato DD/MM/AAAA")
    return format(new Date(getDate()), "dd/MM/yyyy");
}

function getRenda(){
    let aux = parseFloat(prompt("Digite sua renda ")).toFixed(2);
    if (validarRenda(aux)){
        return aux;
    }
    console.log("Sua renda deve ser maior ou igual 0");
    return parseFloat(getRenda()).toFixed(2);
}

function getEstadoCivil(){
    let aux = prompt("Digite seu estado civil: C, S, V ou D ");
    if (validarEstadoCivil(aux)){
        return aux.toUpperCase();
    }
    console.log("Digite apenas uma letra, C, S, V ou D");
    return getEstadoCivil().toUpperCase();
}

//const nome = getNome();
//console.log(nome);
//const cpf = getCPF();
//console.log(cpf);
//const data = getDate();
//console.log(data);
//const renda = getRenda();
//console.log(renda);
const estadoCivil = getEstadoCivil();
console.log(estadoCivil)