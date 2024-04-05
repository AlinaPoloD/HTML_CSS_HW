const menuAct = document.querySelector('.menu-active');
const burger = document.querySelector('.user-list');

function hiddenMenu() {
menuAct.classList.toggle('hidden');
}
burger.addEventListener('click', hiddenMenu);

