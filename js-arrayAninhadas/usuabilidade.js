// Array aninhado
const arrayAninhado = [
    [1, 2, 3], // Indice 0
    [4, 5, 6], // Indice 1
    [7, 8, 9], // Indice 2
];

// Acessando o terceiro sub-array (indice 2 do arrayAninhado)
const terceiroSubArray = arrayAninhado[2];
console.log(terceiroSubArray);
// Saída: [7, 8, 9]

/*
  Acessando o primeiro elemento do terceiro sub-array
  (indice 0 do terceiroSubArray)
*/
const valorSete = terceiroSubArray[0];
console.log(valorSete); // Saída: 7

// Array aninhado
const arrayAninhado = [
    [1, 2, 3], // Indice 0
    [4, 5, 6], // Indice 1
    [7, 8, 9], // Indice 2
  ];
  
  /*
    Acessando o terceiro sub-array (indice 2 do arrayAninhado)
    em seu primeiro elemento (indice 0 do sub-array) 
  */
  const valorSete= arrayAninhado[2][0];
  console.log(valorSete); // Saída: 7