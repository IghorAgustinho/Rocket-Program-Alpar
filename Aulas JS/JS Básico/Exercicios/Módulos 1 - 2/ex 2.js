//1

//let a = 0
//let b = 2
//let c = 3

//2

//let a = 1
//let b = 4
//let c = 4

//3

//let a = 1
//let b = 2
//let c = 5

//4

let a = 1
let b = 2
let c = 5

if (a <= 0) {console.log("a negativo, erro")}

let delta = b**2 - 4*a * c;

if (delta < 0) {console.log("não existem raizes reais")}

else if (delta === 0) {  let x = -b / (2*a);

console.log("só existe uma raiz real: " + x)}

else if (delta >= 0) {
    
let delta2 = delta ** 0.5;
let x1 = (-b + delta2) / 2*a;
let x2 = (-b - delta2) / 2*a;

console.log("existem duas raizes reais: ")
console.log("x1: " + x1)
console.log("x2: " + x2)
}

else {console.log("delta negativo")}


