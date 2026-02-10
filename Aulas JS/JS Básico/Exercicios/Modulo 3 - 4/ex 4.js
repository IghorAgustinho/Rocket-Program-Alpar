const prompt = require("prompt-sync")();
let lista = [];
let item;

function compras(x){
    if(x == 1) { 
    item = prompt("Digite o item + quantidade (ex: 4 batatas): ");
    lista.push(item);
    console.log("Item Adicionado!")
    prompt("\nAperte ENTER para voltar");
    }

    else if (x == 2) {
    
        console.log("\n  Itens:  ");
        lista.forEach((item, index) => {
            console.log(`${index}) ${item}`);});

        let i = prompt("Digite o número do item a ser removido: ");  
        if (i !== "" && lista[i] !== undefined) {

            let removido = lista.splice(i, 1);
            console.log(`"${removido}" removido.`);

        }
        
        else {
            console.log("Item inválido");

        
        }
        prompt("\nAperte ENTER para voltar");
    }
    else if (x == 3) { 

    console.log("\n  Itens:  ");
        lista.forEach((item, index) => {
            console.log(`${index}) ${item}`);
        });

    prompt("\nAperte ENTER para voltar");
    }
   
}

let nome = prompt("Digite seu nome: ");

let z = 1;
while(z == 1){
console.log(`Olá, ${nome}!, Bem vindo ao gerenciador de compras!\n`);
console.log("Digite 1 para Adicionar Itens\nDigite 2 para Remover Itens\nDigite 3 para Ver Itens\nDigite 4 para Finalizar");
let x = prompt();
compras(x);


if (x == 4){z = 0;}
}