/*
            *Sistema de notas escolares*
            
        Criar um algoritmo que transforme as notas do sistema numérico para sistema de notas em caracteres tipo A B C:

        > Acima de 90    = A
        > Entre 80 - 89  = B
        > Entre 70 - 79  = C
        > Entre 60 - 69  = D
        > Abaixo de 60   = E

 */

        // My Way 
let nota = 100

if(nota >= 90 && nota <=100){
    console.log('A')

}else if( nota >= 80 && nota < 90){
    console.log('B')

}else if( nota >= 70 && nota < 80){
    console.log('C')

}else if( nota >= 60 && nota < 70){
    console.log('D')

}else if(nota < 60 && nota >= 0){
    console.log('E')

}else{
    console.log('Erro')
}



        //Model


function getScore(score){
    let scoreA = score >= 90 && score <= 100
    let scoreB = score >= 80 && score <= 89
    let scoreC = score >= 70 && score <= 79
    let scoreD = score >= 60 && score <= 69
    let scoreE = score <  60 && score >= 0

    let scoreFinal;

    if(scoreA) {
        scoreFinal = 'A'
    
    } else if(scoreB) {
        scoreFinal = 'B'
    
    } else if(scoreC){
        scoreFinal ='C'
    
    } else if( scoreD){
        scoreFinal = 'D'
    
    } else if(scoreE){
        scoreFinal = 'E'
    
    }else{
        scoreFinal = 'Nota inválida'
    }

    return scoreFinal
}

console.log(getScore(0))
console.log(getScore(67))
console.log(getScore(5487))
console.log(getScore(89))
console.log(getScore(76))
