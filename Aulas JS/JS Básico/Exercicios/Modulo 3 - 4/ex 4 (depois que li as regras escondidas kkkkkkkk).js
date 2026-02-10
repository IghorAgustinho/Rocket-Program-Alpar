const prompt = require("prompt-sync")();
let listaDeCompras = [];

function adicionarItem(item) {
    listaDeCompras.push(item);
    console.log("Item Adicionado!");
}

function removerItem(i) {
    if (i !== "" && listaDeCompras[i] !== undefined){
        let removido = listaDeCompras.splice(i, 1);
        console.log(`"${removido}" removido.`);
    } 
    else {
        console.log("Item inválido");
    }
}

function exibirLista() {
    console.log("\n  Itens:  ");
    listaDeCompras.forEach((item, index) => {
        console.log(`${index}) ${item}`);

    });
}

let nome = prompt("Digite seu nome: ");
let z = 1;
while (z == 1) {
    console.log(`Olá, ${nome}!, Bem vindo ao gerenciador de compras!\n`);
    console.log("Digite 1 para Adicionar Itens\nDigite 2 para Remover Itens\nDigite 3 para Ver Itens\nDigite 4 para Finalizar");
    
    let x = prompt();

    switch (x) {
        case "1":
            let addItem = prompt("Digite o item + quantidade (ex: 4 batatas): ");
            adicionarItem(addItem);
            prompt("\nAperte ENTER para voltar");
            break;

        case "2":
            exibirLista();
            let i = prompt("Digite o número do item a ser removido: ");
            removerItem(i);
            prompt("\nAperte ENTER para voltar");
            break;

        case "3":
            exibirLista();
            prompt("\nAperte ENTER para voltar");
            break;

        case "4":
            z = 0;
            break;
            
        default:
            console.log("Opção inválida");
    }
}