let a = 1
let b = -5
let c = 6



let delta = b**2 - 4*a * c;
if (delta >= 0) {
    
let delta2 = delta ** 0.5;
let x1 = (-b + delta2) / 2*a;
let x2 = (-b - delta2) / 2*a;

console.log("x1: " + x1)
console.log("x2: " + x2)
}

else {console.log("delta negativo")}

