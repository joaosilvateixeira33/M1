const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

function calcularAoQuadrado(a){
    let b = []

    for(let i = 0; i < a.length; i++){
        b.push(a[i]**2)
    }

    return b
}

const listB = calcularAoQuadrado(a)

console.log(listB);