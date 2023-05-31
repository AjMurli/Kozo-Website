const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('ul');

hamburger.addEventListener('click', function () {
    navList.classList.toggle('show');
});