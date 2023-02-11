/*
      > Document Object Model <
-HTML convertido para um  objecto JS
-API que representa e interage com o HTML
-Manipula HTML com JS

*/ 

/*Selecionando Elementos*/

const el = document.getElementById('title')
var text = el.textContent
text = 'Text Content'
console.log(text)

/*Manipulando Conteúdo*/

el.innerText = ' O Inner Text'
console.log(el.innerText)

const input = document.querySelector('.input')
input.value = 10
console.log(input.value)

const main = document.querySelector('main')
main.setAttribute('id', 'main')
console.log(main)

/*Adicionar Estilos via JS*/ 

el.style.backgroundColor = "#00f"

// Ao alterar, o estilo tem que ser definido no HTML

const body = document.querySelector('body')

body.classList.add('active', 'green')
console.log(body.classList)

//body.classList.remove('active')
body.classList.toggle('active')

/* Navegar pelos Elementos */

console.log(body.parentNode)
console.log(body.children)
console.log(el.nextElementSibling)
console.log(input.previousElementSibling)

/* Criar e Adicionar Elementos */

const div =  document.createElement('div')
div.innerText = 'Nova div em JS'

const h1 =  document.createElement('h1')
h1.innerText = 'Novo Título em JS' 

const script =  body.querySelector('script')
script.innerHTML = 'Novo script' 

body.append(div) //add depois
body.prepend(h1) // add antes
body.insertBefore(div, script) // add entre

//Simulando insertAfter
body.insertBefore(div, script.nextElementSibling)

/* Eventos */

// Mouse
function clicar() {
  console.log ('cliquei')
}

// Teclado
input.onkeydown = function () {
  console.log ('escrevi')
}

// Via JS
el.addEventListener('click', print)
function print(){
  console.log('print')
}

