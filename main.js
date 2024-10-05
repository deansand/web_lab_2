document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu');
    burgerMenu.addEventListener('click', function() {
      burgerMenu.classList.toggle('open');
    });
  });