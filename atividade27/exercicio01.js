const minhaLista = [];

function inseriElemento(lista, elemento){
    if (lista.length >= 10 || elemento.length > 7) {
        return "Não foi possível inserir este valor";
    } else {
        lista.push(elemento);
        return "Elemento inserido com sucesso, a lista agora é: " + lista;
    }
}

function gerarPalavraAleatoria(tamanho) {
    const caracteres = 'abcdefghijklmnopqrstuvwxyz'; // conjunto de caracteres permitidos
    let palavra = '';

    for (let i = 0; i < tamanho; i++) {
        const indice = Math.floor(Math.random() * caracteres.length);
        palavra += caracteres[indice];
    }

  return palavra;
}

console.log(inseriElemento(minhaLista, gerarPalavraAleatoria(5)));