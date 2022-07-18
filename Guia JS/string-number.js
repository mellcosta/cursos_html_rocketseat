/*Alterando tipos de dados*/

//Type coersion: o JavaScript força o dado a mudar
console.log('9' + 5)

//Type conversion(typecasting): eu converto manulmente
console.log(Number('9')+ 5)

/*Manipulando Strings e Numbers*/

//String to Number
let string = '123'
console.log(Number(string)+1)

//Number to String
let number = 321
console.log(String(321)+1)

//.length: para saber o número de caracteres de strings
let word = 'Paralelepipedo'
console.log(word.length)

let digit =12345
console.log(String(digit).length)

//.toFixed: Controlar o número de casas decimais depois da vírgula(0-20)
let decimal = 45.92268968945095
console.log(decimal.toFixed(3))

//.replace: trocar ponto. por , ; - : ou _
let troca = 6.18
console.log(troca.toFixed(1).replace(".", ","))
console.log(decimal.toFixed(2).replace('.', '_'))

//O retorno é uma string, então se coverter para number=error
console.log(Number(troca.toFixed(3).replace('.', ',')))

//.toLowerCase(): transformar todas as letras em  minúsculas
word= 'Tudo Fica MINÚSCULO'
console.log(word.toLowerCase())

//.toUpperCase(): transformar todas as letras em  maiúsculas
word= 'Tudo EM maiúsculo'
console.log(word.toUpperCase())

//.includes(): Verificar uma palavra no texto
let phrase = 'Eu vou para o Japão de carro'
console.log(phrase.includes('carro'))
console.log(phrase.includes('Melissa'))
