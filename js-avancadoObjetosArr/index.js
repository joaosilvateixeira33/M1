// function gerarPessoa(nome, idade, cidade) {
//     const pessoa = {
//         nome: nome,
//         idade: idade,
//         cidade: cidade,
//     };
//     return pessoa
// }

// function alterarNome(novoNome, pessoa) {
//     pessoa.nome = novoNome
// }

// function alterarIdade(novaIdade, pessoa) {
//     pessoa.idade = novaIdade;
// }

// function alterarCidade(novaCidade, pessoa) {
//     pessoa.cidade = novaCidade;
// }

const calculadora = {
    somar: function(valueA, valueB) {
      return valueA + valueB;
    },
    subtrair: function(valueA, valueB) {
      if (valueA > valueB) {
        return valueA - valueB;
      } else {
        return valueB - valueA
      }
    },
    multiplicar: function(valueA, valueB) {
      return valueA * valueB;
    }
}

console.log(calculadora.multiplicar(2,3));