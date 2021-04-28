const nav = document.querySelector(".navbar-nav")
const menu = document.querySelector(".navbar-toggler")
menu.addEventListener('click',()=>{
   nav.classList.toggle('active')
})