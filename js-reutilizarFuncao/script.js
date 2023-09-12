function nomesPares(etiqueta) {
    if (par(etiqueta.length)) {
      return "Verde";
    }
    return "Vermelha";
  }
  
  console.log(nomesPares("Sabonete"));
  // Saída: "Verde"