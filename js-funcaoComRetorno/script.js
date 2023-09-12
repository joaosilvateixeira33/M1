// Parametros: base e altura
function calculaAreaTriangulo(base, altura) {
    console.log(`base é igual a: ${base}`);
    console.log(`altura é igual a: ${altura}`);

    const areaTriangulo = (base * altura) / 2;

    return areaTriangulo;
}

// Argumentos: 5 e 10
const resultado = calculaAreaTriangulo(5, 10);
console.log(`Area do circulo é de ${resultado}m`);