// for(let contador =0; contador < 10; contador++){
//     console.log(`contador = ${contador}`);
// }

for (let contador = 10; contador < 20; contador++) {
    // Esse trecho só será executado caso contador < 20 
    if (contador % 2 == 0) {
        // Esse trecho só será executado caso o contador seja par

        console.log(`O numero ${contador} é par!!`)
    }
}