let caixaDeSuprimentos = []
let alimentacao = ['Pão de forma', 'Pão de Sal', 'Salsicha', 'Água', 'Molho de Tomate']
let higiene = ['Pasta de dente', 'Escova', 'Sabonete', 'Desodorante', 'Perfume']
let farmacia = ['Xarope', 'Curativo', 'Comprimido', 'Atadura', 'Seringas']
let lazer = ['Uno', 'xadrez', ' Twister', 'Cama', 'Pote']

// inserir valores na caixa de suprimentos
caixaDeSuprimentos.push(alimentacao)
caixaDeSuprimentos.push(higiene)
caixaDeSuprimentos.push(farmacia)
caixaDeSuprimentos.push(lazer)

if (caixaDeSuprimentos.length === 4) {
    let todasAsSecoesPossuemTamanho5 = true;

    for (let i = 0; i < caixaDeSuprimentos.length; i++) {
        if (caixaDeSuprimentos[i].length !== 5) {
            todasAsSecoesPossuemTamanho5 = false;
            break;
        }

        return 'podemos acampar'
    }

    if (todasAsSecoesPossuemTamanho5) {
        console.log("Todas as seções possuem tamanho 5.");
    } else {
        console.log("Alguma(s) seção(ões) não possui(em) tamanho 5.");
    }
} else {
    console.log("A caixa de suprimentos não possui as 4 seções.");
}

console.log(caixaDeSuprimentos);