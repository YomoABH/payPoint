document.addEventListener('DOMContentLoaded', function() {
      const mobileBtn = document.querySelector('.navigation-bar__mobile-btn');
      const navigationBar = document.querySelector('.navigation-bar');

      mobileBtn.addEventListener('click', function() {
        navigationBar.classList.toggle('active');
      });
    });