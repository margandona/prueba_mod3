document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector('.navbar'); // Selecciona la navbar
    const mainContent = document.getElementById('mainContent'); // Selecciona el punto de cambio
    const navbarHeight = navbar.offsetHeight; // Obtiene la altura del navbar
  
    window.addEventListener('scroll', function() {
      // Obtiene la posición del main y calcula su altura total
      const topOfMain = mainContent.offsetTop - navbarHeight; // Ajusta para la altura del navbar
      const bottomOfMain = topOfMain + mainContent.offsetHeight;
  
      // Verifica si la posición del scroll está dentro de los límites de main
      if (window.scrollY > topOfMain && window.scrollY < bottomOfMain) {
        navbar.classList.add('nav-colored'); // Cambia el color dentro de main
      } else {
        navbar.classList.remove('nav-colored'); // Revierte al color original fuera de main
      }
    });
  });