//Criar um aplicativo de frases motivacionais

//Objectivo: repetir as frases motivacionais

/*manualmente:
console.log('Estudar é muito bom')
console.log('Mantenha a cabeça fria')
console.log('Ellon Musk')

console.log('Estudar é muito bom')
console.log('Mantenha a cabeça fria')
console.log('Ellon Musk')

console.log('Estudar é muito bom')
console.log('Mantenha a cabeça fria')
console.log('Ellon Musk')*/

//Função explica o que o código faz e permite reutilizá-lo

//funcion statement(declaração)
function createPhrases() {
    console.log('Estudar é muito bom')
    console.log('Mantenha a cabeça fria')
    console.log('Ellon Musk')
}

//run function(execução)
createPhrases()
console.log('Repete')

createPhrases()
console.log('fim do programa')

//Funções em variáveis
const sum = function(num1, num2 ){//parameters
    console.log(num1 + num2)
}

sum(2, 3)//arguments
sum(1, 1)

//Return

let total=0

const subt = function(num3, num4) {
    let total = num3 - num4
    return total
}

let num3 = 20
let num4 = 15

console.log(`o numero 1 é ${num3}`)
console.log(`o numero 2 é ${num4}`)
console.log(`subtraindo: ${subt(num3, num4)}`)//dentro do escopo
console.log(total)//fora do escopo

function fazerSumo(fruta1, fruta2){
    return 'sumo de:' + fruta1 + fruta2
}

const copo = fazerSumo('abacate', 'uva')

console.log(copo)

//function scope
let sub = 'video'

function createThing (sub) {
    sub = 'study'
    return sub
}
console.log(sub)
console.log(createThing (sub))

//function hoisting (elevação)
sayMyName ()

function sayMyName () {
    console.log('Mel')
}

//arrow function
const love  = (name) => {
    //console.log(name)
    tudo = name
    return tudo
} 

love('Joa')
console.log(tudo)

//callback function

function callback (call) {
    console.log('antes do callback')

    call()

    console.log('depois do callback')
}

callback(
    () => {
        console.log('dentro da callback')
    }
)

//function constructor
//-usa a expressão new e cria novo objecto com a palavra chave ´this´

function Person (name) {
    this.m = name
    this.walk = () => {
        return this.m +  'está a andar'
    }
}

const sol = new Person('SOL')
const lua = new Person('LUA')
    console.log(sol)
    console.log(lua. walk())

