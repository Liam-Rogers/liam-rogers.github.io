const navList = document.querySelector('.nav-list');
const navToggle = document.querySelector('.logo');

navToggle.addEventListener('click', () => {
    navList.classList.toggle('show');
});
