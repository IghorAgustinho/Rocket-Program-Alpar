const prompt = require("prompt-sync")();
class Peca{
    
    constructor (nome, preco){
        this.nome = nome;
        this.preco = preco;
    }

}

function adicionarPeca(nomed, precod)
{

    console.log("nome da peca:");
    nomed = prompt();
    console.log("preco:");
    precod = prompt();
    const estoque2 = new Peca(nomed, precod);
    estoque.push(estoque2);


}

function removerPeca(nomed) {
console.log("nome da peca p remover :");
    nomed = prompt();
    const valor =  estoque.findIndex(p => p.nome === nomed);
    if (valor == -1)
    {
       console.log("Peca nao encontrada");

    }

    else { estoque.splice(nomed , 1)}
}


function filtro(preco){

   estoqueCaro = estoque.filter(z => Number(z.preco) >= 100);

}
let estoque = [];
let estoqueCaro = []
let j = 2;

do{
adicionarPeca();
console.log("quer sair? (1 s, 2 n)")
j = prompt();

} while(j == 2)


filtro();

console.log("\n--- TODO O ESTOQUE ---");
estoque.forEach((p) => console.log(`${p.nome} , ${p.preco}`));

console.log("\n--- (>= 100) ---");
estoqueCaro.forEach((p) => console.log(`${p.nome} , ${p.preco}`));



