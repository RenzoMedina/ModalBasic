const modal = document.getElementById('modal')
const openModal = document.getElementById('modal-btn')
const closeModal = document.getElementById('modal-close')

//evento del modal
const toogleModal = () =>{
    modal.classList.toggle('active')
}

openModal.addEventListener('click', toogleModal)
closeModal.addEventListener('click', toogleModal)
