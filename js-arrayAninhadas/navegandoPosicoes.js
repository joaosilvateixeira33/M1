const instrumentos = [
    ["Bateria", "Pandeiro", "Repinique"], // Percussão
    ["Violão", "Guitarra", "Baixo"], // Corda
    ["Flauta", "Saxofone", "Trompete"], // Sopro
];

for(let categorias = 0; categorias < instrumentos.length; categorias++){
    for(let instrumento = 0; instrumento < instrumentos.length; instrumento++){
        console.log(instrumentos[categorias][instrumento]);
    }
}