console.log(['Leite', "Ovos", 65])

const animals =[
    'Lion',   //[0]
    'Monkey', // [1]
     { 
        name: 'cat',
        age: 13
      }     //[2]
]

//acessar valores dentro do array usando posiçóes
console.log(animals[0])

//tamanho do array
console.log(animals.length)

//array e objectos
console.log(animals[2])
console.log(animals[2].name)
console.log(animals[2].age)


/*
        *String to Array*

    *Separar um texto que contém espaços em um novo array
    *Cada palavra é uma posição do Array
*/
//.split(" "):separa o texto e transforma cada palavra ou cada letra em uma posição

let phrase = 'Este é o meu array'
let myArray = phrase.split(" ")//separa palavras
console.log(myArray)
console.log(myArray.length)

let letra = phrase.split("")//separa letras
console.log(letra)
console.log(letra.length)

 /*
        *Array to String*

    *Transformar o array em um texto
    *Colocar _ no lugar dos espaços
*/
//.join(""): une o array

let joinArray = myArray.join('')
console.log(joinArray)

let underscore = myArray.join("_")
console.log(underscore.toUpperCase())

let dot = myArray.join('.')
console.log(dot)

    /*Manipulando Arrays */

//Criar array com construtor
myArray = new Array('a', 'b')
console.log(myArray)

//Array com posições vazias
let emptyArray = new Array (10)
console.log(emptyArray)

//.length: Contar elementos de um array
console.log([
    'a',
    {type: "objecto"},
    function() {return 'Função'}
].length)

/*Selecionar posições*/
console.log([
    'a',
    {type: "objecto"},
    function() {return 'Função'}
][0])

//Executando funções
console.log([
    'a',
    {type: "objecto"},
    function() {return 'Função'}
][2] ())

//Usando atributos
console.log([
    'a',
    {type: "objecto"},
    function() {return 'Função'}
][1].type)

/* Array.from(): Tranforma cada caracter em elementos de um array */
let word = 'manipulação'
console.log(Array.from(word))
console.log(word.length)

/*  *Métodos de manipulação*    */

let techs = ["html", "css", "js"]
console.log(techs)

//adicionar item no fim
techs.push("nodejs")
console.log(techs)

//adicionar item no início
techs.unshift('sass')
console.log(techs)

// remover do fim
techs.pop()
console.log(techs)

//remover do início
techs.shift()
console.log(techs)

//selecionar alguns elementos do array
console.log(techs.slice(1, 3))

//remover 1 ou mais itens em qualquer posição
techs.splice(1, 2)
console.log(techs)

//encontrar a posição de um elemento
techs = ['a', 'b', 'c']
let position = techs.indexOf('c')
console.log(position)

//eliminar elementos pela posição
techs.splice(2)
console.log(techs)

