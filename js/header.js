
let sizeHeader = 100;
let lastScrollTop = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > sizeHeader) {
        // Scroll hacia abajo
        header.classList.add('header--down');
    } else{
        header.classList.remove('header--down');
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Para evitar valores negativos
});