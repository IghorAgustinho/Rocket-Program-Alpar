const prompt = require("prompt-sync")();
class Pessoa {
    constructor (nome, idade, email){

        this.nome = nome;
        this.idade = idade;
        this.email = email;
    }}

  let cadastro = [];

    function adicionarPessoa(objetoP) {
    const jaExiste = cadastro.some(p => p.email === objetoP.email);

if (jaExiste) {
        console.log("Erro: Já existe um usuário cadastrado com este e-mail.");
    } 
    else {
    cadastro.push(objetoP);
    console.log("Cadastro Concluido!");
    }
}
function removerPessoa(emailP) {

    let i = cadastro.findIndex(p => p.email === emailP);

    if (i !== -1) { 
        let remover = cadastro.splice(i, 1);
        console.log(`Pessoa com e-mail ${emailP} removida.`);
    }
    else {
        console.log("Pessoa Inexistente");
    }
}

function exibirLista() {
    console.log("\n  Pessoas:  ");
    cadastro.forEach((pessoa, index) => {
       console.log(`${index}) Nome: ${pessoa.nome} | Email: ${pessoa.email} | Idade: ${pessoa.idade}`);

    });
}


let Email;
let Idade;
let Nome;
let k;
let l = true;


while(l == true){
    console.log("\n\nBem vindo ao sistema de cadastro de pessoas: \n")
    console.log("Digite 1 para Adicionar uma Pessoa");
    console.log("Digite 2 para Removar uma Pessoa");
    console.log("Digite 3 para Ver a Lista");
    console.log("Digite 4 para Sair");

    let j = prompt("");

    switch(j){
   
        case "1": 
        console.log("Digite o Nome da Pessoa:\n");
        Nome = prompt();
        console.log("Digite a Idade da Pessoa:\n");
        Idade = prompt();
        console.log("Digite o Email da Pessoa:\n");
        Email = prompt();

        let pessoaNova = new Pessoa(Nome, Idade, Email);
        adicionarPessoa(pessoaNova);

        console.log("\n\nDigite Enter para retornar...:\n");
        k = prompt();
        break;
        
        case "2":
        console.log("Digite o Email da Pessoa:\n");
        Email = prompt();

        removerPessoa(Email)
        console.log("\n\nDigite Enter para retornar...:\n");
        k = prompt();
        break;

        case "3":
            exibirLista();
             console.log("\n\nDigite Enter para retornar...:\n");
             k = prompt();
             break;

        case "4": 
        l = false;
        break;
             
        default:
            console.log("Opção inválida");

        }
}