const modal = document.querySelector('.modal')
const loginBtn = document.querySelector('.login-btn')
const closeBtn = document.querySelector('.close')

loginBtn.addEventListener('click', openModal)
closeBtn.addEventListener('click', closeModal)
window.addEventListener('click', outsideClick)

function openModal(){
    modal.style.display = 'block'
    modal.style.animation = 'modalOpen 1s'
}

function closeModal(){
    modal.style.display = 'none'
    modal.style.animation = 'modalClose 1s'
}

function outsideClick(e){
    if(e.target == modal) {
        closeModal()
    }
}