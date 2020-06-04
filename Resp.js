
burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.nav-list')

burger.addEventListener('click', ()=>{
    navlist.classList.toggle('v-class')
    navbar.classList.toggle('navheight')
    navlist.classList.toggle('navheight')


})