// ===== js/main.js =====
// Active link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');
const activate = () => {
    let index = sections.length;
    while (--index && window.scrollY + 120 < sections[index].offsetTop) { }
    navLinks.forEach((link) => link.classList.remove('active'));
    const id = sections[index]?.getAttribute('id');
    if (id) document.querySelector(`.nav-link[href="#${id}"]`)?.classList.add('active');
};
activate();
window.addEventListener('scroll', activate);

// Year
document.getElementById('year').textContent = new Date().getFullYear();
