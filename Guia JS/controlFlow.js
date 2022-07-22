/* 

            if...else 
        if (true){

        }else {

        }

*/

let cha = 'verde'

if(cha  == 'verde'){
    console.log('Pronto')
}else{
    console.log('Ainda não')
}


let agua = 11
let quente = agua > 10
let morna = agua == 10 && agua > 5

if(agua > 10){
    console.log('Cuidado, está quente')
}else if(morna){
    console.log('Morninha')
}else{
    console.log('Ai que fria')
}

/* 
            switch 
    switch(expression){
        case 1 :
            code
            break

        case 2 : 
            code
            break

        default:
            code)
            break

    }

*/

let color = 'a'
switch(color){
    case 1 :
        console.log('blue')
        break

    case 'a' : 
        console.log('red')
        break

    default:
        console.log('rainbow')
        break

}

     /*
                throw
            try...catch
    
     try {
        throw "myException"; // gera uma exceção
     }
     catch (e) {
        // declarações para manipular quaisquer exceções
        
        logMyErrors(e); // passa o objeto de exceção para o manipulador de erro
     } 
     */