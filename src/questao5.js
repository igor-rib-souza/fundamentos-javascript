import PromptSync from 'prompt-sync';

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

function formatarData(data) {
    const dia = data.getDate().toString().padStart(2, '0');
    const mes = (data.getMonth() + 1).toString().padStart(2, '0');
    const ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
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

//const nome = getNome();
//console.log(nome);
//const cpf = getCPF();
//console.log(cpf);