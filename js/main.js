// Menú hamburguesa
const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
toggle.addEventListener('click', () => { menu.classList.toggle('show'); });

// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});
  });
});

// Cambiar header al hacer scroll
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if(window.scrollY > 50){
    header.classList.add('scroll');
    header.classList.add('shrink');
  } else {
    header.classList.remove('scroll');
    header.classList.remove('shrink');
  }
});
