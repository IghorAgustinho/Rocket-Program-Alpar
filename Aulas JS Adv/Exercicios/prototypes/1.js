
Array.prototype.meuMap = function (callback) {
    const mapArray = [];
    for (let i = 0; i < this.length; i++) {
        const resultado = callback(this[i]);
        mapArray.push(resultado);
    }

    return mapArray;
};


Array.prototype.meuFilter = function (callback) {
    const filterArray = [];

    for (let i = 0; i < this.length; i++) {

        if (callback(this[i])) {
            filterArray.push(this[i]);
        }
    }
    return filterArray;
}

Array.prototype.meuReduce = function (callback) {
    let acumulador = 0;

    for (let i = 0; i < this.length; i++) {
        acumulador = callback(acumulador, this[i]);
    }
    return acumulador;
}

Array.prototype.meuFind = function (callback) {
    for (let i = 0; i < this.length; i++) {

        if (callback(this[i], i, this)) {
            return this[i];
        }
    }
    return undefined;


}




const meuArray = [1, 2, 3, 4, 5];
const dobrados = meuArray.meuMap(numero => numero * 2);
const impares = meuArray.meuFilter(numero => numero % 2 === 1);
const reduce = meuArray.meuReduce(numero => numero);
const soma = meuArray.meuReduce((acumulador, numero) => {
    return acumulador + numero;
});

const find = meuArray.meuFilter(numero => numero === 5);


console.log(meuArray);
console.log(dobrados);
console.log(impares);
console.log(soma);
console.log(find);