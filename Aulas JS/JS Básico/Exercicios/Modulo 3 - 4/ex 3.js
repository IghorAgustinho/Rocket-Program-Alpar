let numero = Math.round(Math.random()*100);
let i = 0;
let adivinhar = Number;

do {
adivinhar = prompt("Insira O Número a ser adivinhado(0 - 100):");
i++;
if (adivinhar == numero) {console.log("Parabéns, você acertou!!!!! Tentativas: " + i);break; }
else if (adivinhar < numero){console.log("O seu chute é menor que o correto!")}
else if (adivinhar > numero){console.log("O seu chute é maior que o correto!")}
} while (adivinhar !== numero)
