function verificarScroll() {
    const componentsEffects = document.querySelectorAll('.active-scroll');

    componentsEffects.forEach(el => {
        const topSize = el.getBoundingClientRect().top;
        if (topSize <= 560) {
            el.style.left = '0px';
            el.style.opacity = '1';
        }
    });
}

window.addEventListener("scroll", verificarScroll);
window.addEventListener("load", verificarScroll);
document.addEventListener("DOMContentLoaded", verificarScroll);
