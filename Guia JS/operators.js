/*
        Unary
        
    Operador unário:contém apenas 1 elemento na operação

*/
const cake = {
    flavour: 'Chocolate',
    size: 35,
}

//typeof
console.log(cake)
console.log(typeof cake)

//delete
delete cake.size
console.log(cake)


        /*Operadores Aritméticos*/

//Multiplicação *
console.log(9 * 2)

//Divisão /
console.log(15 / 5)

//Adição +
console.log(19 + 20)

//Subtração -
console.log(20-19)

//Resto da divisão %
let reminder
reminder = 15 % 5
console.log(reminder)

//Incremento ++ => +1
let increment = 0
++increment
increment ++
console.log(increment)

//Decremento -- => -1
let decrement = 5
console.log(--decrement) //decrementar antes

console.log(decrement--)//ecrementar depois
console.log(decrement)

//Exponencial **
console.log(2 ** 3)


        /* Grouping Operator ( ) */

let total = 2 + 3 * 5
console.log(total)

//agrupando
total= (2 + 3) * 5
console.log(total)

        /*Operadores de Comparação */

    let one = 1
    let two = 2

//==   igual a
console.log(two == 1)
console.log(one == '1')

// !=   diferente de
console.log(one != 1)
console.log(two != 2)
console.log(one != 2)

// ===   Estritamente igual a
console.log(one === '1')
console.log(one === 1)

//!==   Estritamente diferente de 
console.log(two !== "2")
console.log(two !==  2)

//  >   Maior do que
console.log ( one > two)

// >=   Maior ou igual
console.log( one >= 1)
console.log(one >= two)

// <    Menor
console.log(one < 2)

// <=   Menor ou igual
console.log(1 <= one)


        /*Operadores de atribuição */

let x

//simple assignament
x = 1
console.log('x é igual a ' + x)

//addtion assignament
//x = x + 2
x += 2
console.log('adcionando 2, x é igual a ' + x)

//subtraction assignament
//x = x - 1
x -= 1
console.log('subtraindo 1, x é igual a ' + x)

//multiplication assignament
//x = x * 3
x *= 3
console.log('multiplicado por 3, x é igual a ' + x)

//division assignament
//x = x / 2
x /= 2
console.log('dividido por 2, x é igual a ' + x)

// remainder
//x = x % 2
x %= 2
console.log('o resto de x / 2 é igual a ' + x)

//exponentiation
//x = x ** 2
x **= 2
console.log('x elevado a 2 é igual a ' + x)

/*      Operadores lógicos 

    -2 valores booleanos que quando verificados resultam em true ou false

*/

let pao = true
let ovo = false
let queijo = true
let leite = false

/*
        AND &&
  = true se todos forem true
  = false se ao menos 1 for false
*/
console.log(pao && queijo)
console.log(ovo && leite)

/*
        OR ||
  = true se ao menos 1 for true
  = false se todos forem false
*/
console.log(pao ||ovo)
console.log(ovo || leite)

/*
        NOT !
    = true se for false
    = false se for true
*/
console.log(!pao)
console.log(!ovo)

/*
       Operador Condicional (Ternário)

    Condição, então valor1, se não valor2
    condition ? value1 : value2
 */

let bolo = pao && queijo ? 'Não consta' : 'Faz parte'
console.log(bolo)

bolo = ovo && leite ? 'Não consta' : 'Faz parte'
console.log(bolo)

let age = 18
const canDrive = age >= 18 ? 'can drive' : "can't drive"
console.log(canDrive)

            /* Operador de String */
// comparison (comparação)
console.log ('a' == 'b')

// concatenation
let al = 'al'
al +=  'fa'
console.log(al + 'be' + 'to')

            /*Type  conversion vs coersion*/

/*
            *FALSY* 

        Quando um valor é considerado _false_ em contextos onde o boolean é obrigatório
        (condicionais e loops):

        false
        0
        -0
        ""
        null
        undefined
        NaN
 */
console.log(null ? 'TRUTHY' : 'FALSY')

/*
            *TRUTHY* 

        Quando um valor é considerado _true_ em contextos onde o boolean é obrigatório
        (condicionais e loops):

        true
        {}
        []
        1
        3.23 (qualquer número)
        "0"
        "false"
        -1
        Infinity
        -Infinity
 */
console.log([] ? 'TRUTHY' : 'FALSY')

/*
            *Operator precedence* 
        
       1-  ( ) 
       2-   !    ++   --
       3-   *   /
       4-   +   -
       5-   <  <=  >  >=
       6-   ==  !=   ===  !==
       7-   &&
       8-   ||
       9-   ?:
       10-   =  +=   -=  *=
 */