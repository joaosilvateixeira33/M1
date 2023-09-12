function podeSerMonitor(){
    let entregas = 90;
    let entrevitaTecnica = 90;
    let preseca = 90;

    if(entregas == 100 && entrevitaTecnica == 100 && preseca == 100){
        console.log("Possível monitor(a).");
    }else{
        console.log("Selecionar outro(a) aluno(a).");
    }
}

podeSerMonitor()