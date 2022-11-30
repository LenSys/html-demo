const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    const burgerMenu = document.querySelector('.burger i.fa-bars');
    const burgerClose = document.querySelector('.burger i.fa-xmark');

    burger.addEventListener('click', () => {
        
        // toggle nav
        nav.classList.toggle('nav-active');
        
        // animate links
        navLinks.forEach((link) => {
            link.style.animation = 'navLinkFade 0.3s ease forwards';
        });

        // animate burger
        burgerMenu.classList.toggle('hidden');
        burgerClose.classList.toggle('hidden');
    });
}

const app = () => {
    navSlide();
}

app();