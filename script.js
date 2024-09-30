const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');
const openIcon = document.getElementById('open-icon');
const closeIcon = document.getElementById('close-icon');

mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
    if (navList.classList.contains('active')) {
        openIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    } else {
        openIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    }
})