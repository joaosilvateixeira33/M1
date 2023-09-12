let ganhador = {
    nome: 'Adamastor',
    nascimento: '16/09/1986',
    cpf: '123.321.789-98',
    estadoCivil: 'Casado'
}

function verificarCpf(nome, supostoGanhadorCpf){
    const nomeFormatado = nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();
    if(ganhador.cpf === supostoGanhadorCpf){
        return `${nomeFormatado}, é o ganhador`
    }
    return `${nomeFormatado}, não é o ganhador`
}

console.log(verificarCpf('joao silva', 16755694797));