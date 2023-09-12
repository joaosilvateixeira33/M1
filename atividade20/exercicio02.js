function calcularIdade(nome, anoNascimento, anoFuturo){
    let idade = anoFuturo - anoNascimento;
    return `Em ${anoFuturo} ${nome} terá ${idade} anos de idade`;
}

console.log(calcularIdade("Pedro", 2002, 2030));