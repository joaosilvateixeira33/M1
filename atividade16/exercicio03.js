function numeroMaior(){
    let numero1 = 20;
    let numero2 = 50;
    let numero3 = 10;

    if(numero1 > numero2 && numero1 > numero3){
        console.log("O numero 1 é o maior");
    }else if(numero2 > numero1 && numero2 > numero3){
        console.log("O numero 2 é o maior");
    }else if(numero3 > numero1 && numero3 > numero2){
        console.log("O numero 3 é o maior");
    }
}

numeroMaior()