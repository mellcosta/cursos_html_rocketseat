/*
            for

        para:
        for(inicialização da variável; condição; expressão final){

        }
*/

//crescente
for(let  i = 0; i < 6; i++){
    console.log(i)
}

//decrescente
for(let  i = 15; i > 9; i--){
    console.log(i)
}

//parar
for(let  i = 0; i < 10; i++){
    if(i == 3){
       break;  
    }
 console.log(i)
}

//saltar
for(let  i = 15; i > 9; i--){
    if(i == 13){
       continue;  
    }
 console.log(i)
}

/*
            while

        enquanto:
        while(condição){

        }
 */

let w = 0
while(w < 5){
    console.log(w)

    w++;
}

            /*for...of*/

let nome = 'Mel'
let nomes = ['Mona', 'Lisa']

for(let caracteres of nome){
    console.log(caracteres)
}

for(let elementos of nomes){
    console.log(elementos)
}

            /*for in*/
let person= {
    name: 'Hall',
    age: 30,
}           

for(let properties in person) {
    console.log(properties)
}