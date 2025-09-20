let menuIcon = document.querySelector('.menu-icone');
let navMenu = document.querySelector('#navUl');
let navBar = document.querySelector('nav');
const linkNav = document.querySelectorAll('.linkNav');

menuIcon.addEventListener('click', ()=>{
    navMenu.classList.toggle('menu-ouvert');
    menuIcon.classList.toggle('menuFerme');
    navBar.classList.toggle('active');
});

linkNav.forEach(linkNav=>{
    linkNav.addEventListener('click', ()=>{
        navMenu.classList.toggle('menu-ouvert');
        menuIcon.classList.toggle('menuFerme');
        navBar.classList.toggle('active');
    })
})