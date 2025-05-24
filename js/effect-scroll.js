function verificarScroll() {
    const componentsEffects = document.querySelectorAll('.active-scroll');
    const progressComponent = document.querySelectorAll('.progress-bar-skill');

    componentsEffects.forEach(el => {
        const topSize = el.getBoundingClientRect().top;
        if (topSize <= 610) {
            el.style.left = '0px';
            el.style.opacity = '1';
        }
    });

    progressComponent.forEach(el => {
        const topSize = el.getBoundingClientRect().top;
        if (topSize <= 800) {
            el.classList.add('active-skills');
        }
    });
}

window.addEventListener("scroll", verificarScroll);
window.addEventListener("load", verificarScroll);
document.addEventListener("DOMContentLoaded", verificarScroll);
