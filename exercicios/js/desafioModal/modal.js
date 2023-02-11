/*
const button = document.getElementById('openModal')
const div = button.nextElementSibling

button.addEventListener('click', openModal)
function openModal(){
  console.log(div);
  div.removeAttribute('class', 'invisible')
  button.setAttribute('class', 'invisible')
  div.setAttribute('class', 'modal-wrapper fixed bg-gray-500 w-screen h-screen flex items-center justify-center')
}

div.addEventListener('click', closeModal)
function closeModal() {
  div.setAttribute('class', 'invisible')
  button.removeAttribute('class', 'invisible')
  button.setAttribute('class', 'bg-purple-700 fixed text-white py-2 px-4 rounded flex items-center justify-center')
}

div.style.userSelect = 'none'
*/

//Resolução

const buttonOpenModal = document.getElementById('openModal')
const modalWrapper = document.querySelector('.modal-wrapper')

buttonOpenModal.onclick = function () {
  modalWrapper.classList.remove('invisible')
}

document.addEventListener('keydown', function(event) {
  const isEscKey = event.key === 'Escape'

  if(isEscKey) {
    modalWrapper.classList.add('invisible')
  }
} )