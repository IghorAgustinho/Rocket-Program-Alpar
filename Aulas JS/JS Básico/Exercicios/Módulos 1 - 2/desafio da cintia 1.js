let Preço = 1000.00;
let desconto;
let imposto;

function randDesconto(min,max) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;}

imposto = (Math.random() * (25 - 12) + 12);
imposto = imposto / 100;


desconto = randDesconto(0, 1); 

if(desconto == 1)
{ 
console.log("Preço Original: " + Preço)
Preço = Preço - (Preço*0.1);
console.log("Preço c/ Desconto: " + Preço)
Preço = Preço + (Preço*imposto);
console.log("Preço c/ Imposto/Final: " + Preço)
}

else if(desconto == 0){
console.log("Preço Original: " + Preço)
Preço = Preço + (Preço*imposto);
console.log("Preço c/ Imposto/Final: " + Preço)
}
