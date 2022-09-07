const headerBurger = document.querySelector('.header__burger')
const body = document.body
headerBurger.addEventListener('click', () => {
   const menuHeader = headerBurger.parentElement.querySelector('.menu')
   headerBurger.classList.toggle('_active')
   menuHeader.classList.toggle('_show')
   body.classList.toggle('_lock')
})