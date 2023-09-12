function algarismosEmUmNumero(n) {
    let str = `${n}`;
    let contagem = str.length;

    if (n != parseInt(n)) {
        contagem = contagem - 1;
    }

    return contagem;
}

console.log(algarismosEmUmNumero(3.14159265));