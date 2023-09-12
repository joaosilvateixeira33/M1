function calculaImc(peso, altura){
    let alturaAoQuadrado = altura * altura;
    let imc = peso / alturaAoQuadrado;

    return imc;
}

const retorno = calculaImc(80, 1.80)
console.log(retorno);