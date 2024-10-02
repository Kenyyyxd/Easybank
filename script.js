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

let lastScrollTop = 0;
const header = document.getElementById('header');
let isScrolling;

window.addEventListener('scroll', function() {
    clearTimeout(isScrolling);

    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {

        header.style.top = '-100px';
    } else {

        header.style.top = '0';
    }

    lastScrollTop = scrollTop;

    isScrolling = setTimeout(() => {
        if (window.pageYOffset > lastScrollTop) {
            header.style.top = '-100px';
        }
    }, 100);
});
