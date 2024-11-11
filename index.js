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
  // Example frontend code for submitting the form
const form = document.getElementById('contact-form');  // assuming you have a form with this ID

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(form);

    fetch('/submit-contact', {
        method: 'POST',
        body: JSON.stringify({
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message')
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);  // Show the success message to the user
    })
    .catch(error => console.error('Error:', error));
});


  