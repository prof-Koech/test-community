// js/script.js

// Smooth scrolling for navigation links (optional)
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 70, // Offset for fixed navbar
          behavior: 'smooth'
        });
      }
    });
  });
  