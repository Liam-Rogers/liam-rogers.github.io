

document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const fullScreenMenu = document.getElementById('full-screen-menu');
    const tabButtons = document.querySelectorAll('.tab-button');
    const cardContainers = document.querySelectorAll('.card-container');

    hamburgerMenu.addEventListener('click', () => {
        hamburgerMenu.classList.toggle('open');
        fullScreenMenu.classList.toggle('show');
    });

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const target = button.getAttribute('data-tab');

            tabButtons.forEach(btn => btn.classList.remove('active'));
            cardContainers.forEach(container => container.classList.remove('active'));

            button.classList.add('active');
            document.getElementById(target).classList.add('active');
        });
    });

    // Set the first tab as active by default
    tabButtons[0].classList.add('active');
    cardContainers[0].classList.add('active');
});
