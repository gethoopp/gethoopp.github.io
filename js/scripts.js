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


// ----- Pointer shadow that follows the cursor -----
(() => {
  // Skip on touch devices
  if (window.matchMedia('(hover: none), (pointer: coarse)').matches) return;

  const shadow = document.createElement('div');
  shadow.className = 'cursor-shadow';
  document.body.appendChild(shadow);

  let x = window.innerWidth / 2;
  let y = window.innerHeight / 2;
  let tx = x, ty = y;
  const ease = 0.18; // lower = smoother, slower

  const setPos = () => {
    x += (tx - x) * ease;
    y += (ty - y) * ease;
    shadow.style.setProperty('--x', `${x}px`);
    shadow.style.setProperty('--y', `${y}px`);
    requestAnimationFrame(setPos);
  };

  window.addEventListener('mousemove', (e) => {
    tx = e.clientX;
    ty = e.clientY;
    shadow.classList.add('is-visible');
  });

  window.addEventListener('mouseleave', () => {
    shadow.classList.remove('is-visible');
  });

  setPos();
})();
