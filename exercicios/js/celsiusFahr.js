/*
            *Celcius em fahrenheit*
        Criar uma função que receba uma string em celsius ou fahrenheit e faça a transformação de uma unidade para outra:

        C = (F - 32) * 5/9

        F = C * 9/5 + 32
 */

            //My Way

let c= 3
let f= 5

function convert(){

    const celsius = (f - 32) * 5/9
    const fahrenheit= c * 9/5 + 32

    const value = c

    if(value == f){
        console.log(`${celsius} C`)

    } else if(value == c) {
        console.log(`${fahrenheit} F`)

    }else{
        console.log('[ERROR]')
    }

    return value

}

convert()

        //Model


//transformDegree('50F')
function transformDegree(degree) {
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')

    // fluxo de erro
    if(!celsiusExists && !fahrenheitExists) {
        throw new Error ('Grau não identificado')
    }

    //fluxo ideal, F -> C
    let updatedDegree = Number(degree.toUpperCase().replace("F", ""));
    let formula  = (fahrenheit) => (fahrenheit - 32) * 5/9              //função arrow=>
    let degreeSign = 'C'

    //fluxo alternativo, C -> F
    if(celsiusExists){
        updatedDegree = Number(degree.toUpperCase().replace("C", ""));
        formula  = (celsius) => celsius * 9/5 + 32                          //função arrow=>
        degreeSign = 'F'  
    }

    return formula(updatedDegree) + degreeSign
}

try{
    console.log(transformDegree('50F'))
    console.log(transformDegree('10C'))
    transformDegree('50Z')
    
} catch(error) {
    console.log(error.message)
}


