const lista = [
    1, 2, 3, 4, 5, 6, 7, 8, 9,
    10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30
];

function contarParesEImpares(lista) {
    let pares = 0;
    let impares = 0;

    for (let i = 0; i < lista.length; i++) {
        if (lista[i] % 2 === 0) {
            pares++;
        } else {
            impares++;
        }
    }

    return { pares, impares };
}

console.log("Quantidade de pares:", lista.pares);
console.log("Quantidade de ímpares:", lista.impares);