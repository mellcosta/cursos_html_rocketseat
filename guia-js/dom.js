/*
      * Document Object Model*
-HTML convertido para um  objecto JS
-API que representa e interage com o HTML
-Manipula HTML com JS

*/ 

const el = document.getElementById('title')
var text = el.textContent
text = 'Text Content'
console.log(text)

el.innerText = ' O Inner Text'
console.log(el.innerText)

const input = document.querySelector('.input')
input.value = 10
console.log(input.value)

const main = document.querySelector('main')
main.setAttribute('id', 'main')
console.log(main)