function exibirMensagem(frase, palavraAntiga, palavraNova){
    const fraseNova = frase.replaceAll(palavraAntiga, palavraNova);
    return fraseNova;
}

console.log(exibirMensagem("eu gosto de Python", "Python", "JavaScript"));