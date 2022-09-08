var bodyClass = document.querySelector('body');
var menu = document.querySelector('.menu-closed');

function darkBlue() {
    bodyClass.classList.add('dark-blue');
    bodyClass.classList.remove('pink', 'dark-pink');
}
function pink() {
    bodyClass.classList.add('pink');
    bodyClass.classList.remove('dark-blue', 'dark-pink');
}
function darkPink() {
    bodyClass.classList.add('dark-pink');
    bodyClass.classList.remove('dark-blue', 'pink');
}
function blue() {
    bodyClass.classList.remove('dark-blue', 'pink', 'dark-pink');
}

function openMenu() {
    menu.classList.add('menu-open');
    menu.classList.remove('menu-closed');
}

function closeMenu() {
    menu.classList.add('menu-closed');
    menu.classList.remove('menu-open');
}