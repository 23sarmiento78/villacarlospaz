// Manejo de la navegación y efectos del scroll
document.addEventListener('DOMContentLoaded', () => {
  // Inicializar AOS
  AOS.init({
    duration: 1000,
    once: true,
    offset: 100
  });

  // Animación del navbar al hacer scroll
  const navbar = document.querySelector('.navbar');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar?.classList.add('scrolled', 'navbar-shrink');
    } else {
      navbar?.classList.remove('scrolled', 'navbar-shrink');
    }
  });

  // Scroll suave para enlaces internos
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
}); 