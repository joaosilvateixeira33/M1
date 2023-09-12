const pessoa = {
    nome: '',
    anoNasc: '',
    cidade: '',
    estado: '',
    logradouro: '',
}

const escola = {
    nome: '',
    cnpj: '',
    areaAtuacao: '',
    cidade: '',
    estado: '',
    logradouro: '',
    curso: '',
}

const curso = {
    nome: '',
    duracao: '',
    turma: '',
    modulos: ''
}

const endereco = {
    cidade: '',
    estado: '',
    logradouro: '',
    cep: ''
}

const carro = {
    placa: "ABC123",
    classes: ["sedan"],
    luxo: true,
    potencia: 200,
    estacionado: true
}

function obterPlaca(){
    return carro.placa
}

function verificarClasses(){
    if(carro.classes.length === 1){
        return carro.classes[0]
    }else{
        return carro.classes
    }
}

function potenciaReal(){
    if(carro.luxo === true){
        return carro.potencia ** 2
    }

    return carro.potencia
}

function adicionarNovaClasse(novaClasse){
    const classesPermitidas = ["sedan", "hatchback", "suv", "crossover", "cupê"]
    if(carro.classes.length >= 3){
        return "Este carro não pode ter mais classes"
    }

    if (classesPermitidas.includes(novaClasse.toLowerCase())) {
        if (carro.classes.includes(novaClasse)) {
            return `O carro já possui a classe ${novaClasse}.`;
        }

        carro.classes.push(novaClasse.toLowerCase());
        return `Classe ${novaClasse} adicionada com sucesso.`;
    }

    return "Classe inválida. As classes permitidas são: sedan, hatchback, suv, crossover e cupê";
}

function naoMaisLuxo(){
    if (!carro.estacionado){
        return `O carro ${carro.placa} não está estacionado.`;
    }else if(!carro.luxo){
        return `O carro ${carro.placa} não é luxuoso.`;
    }
    carro.luxo = false;
    return `O carro ${carro.placa} não é mais considerado um carro de luxo.`;
}

console.log(obterPlaca());
console.log(verificarClasses());
console.log(potenciaReal());
console.log(adicionarNovaClasse('Lamburguini'));
console.log(adicionarNovaClasse('suv'));
console.log(naoMaisLuxo());