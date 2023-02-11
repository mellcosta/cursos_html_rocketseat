/*
      * Document Object Model*
-HTML convertido para um  objecto JS
-API que representa e interage com o HTML
-Manipula HTML com JS

*/ 

//Selecionando Elementos

const el = document.getElementById('title')
var text = el.textContent
text = 'Text Content'
console.log(text)

//Manipulando Conteúdo

el.innerText = ' O Inner Text'
console.log(el.innerText)

const input = document.querySelector('.input')
input.value = 10
console.log(input.value)

const main = document.querySelector('main')
main.setAttribute('id', 'main')
console.log(main)

// Adicionar Estilos via JS

el.style.backgroundColor = "#00f"

// Ao alterar, o estilo tem que ser definido no HTML

const body = document.querySelector('body')

body.classList.add('active', 'green')
console.log(body.classList)

//body.classList.remove('active')
body.classList.toggle('active')

