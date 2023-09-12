// declarando objeto
const dadosPessoa ={
    nome: 'Ino',
    idade: 25,
    cidade: 'Curitiba',
}

// acessando objeto
console.log(dadosPessoa.nome);
console.log(dadosPessoa['idade']);

// Maipular propriedades
dadosPessoa.nome = 'Hinata'
console.log(dadosPessoa.nome);
dadosPessoa['cidade'] = 'China'
console.log(dadosPessoa['cidade']);

// adicionar propriedade
dadosPessoa.cla = 'Yamanaka'
console.log(dadosPessoa);

// remover propriedades
delete dadosPessoa.cidade
console.log(dadosPessoa);

// Objetos e Arrays
const meuObjetoPessoa = 
{
  nome: "João",
  idade: 30,
  enderecos:
  [ 
    {
      logradouro: "A1",
      cidade: "Brasilia",
      numero: 120,
    },
    {
      logradouro: "A2",
      cidade: "Brasilia",
      numero: 10,
    },
    {
      logradouro: "B1",
      cidade: "Brasilia",
      numero: 5,
    }
  ]
}

console.log(enderecos[0].logradouro) 