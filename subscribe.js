function subscribe() {
    const emailInput = document.getElementById('email');
    const messageDiv = document.getElementById('message');
    const email = emailInput.value;
  
    // Basic email validation using regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!emailRegex.test(email)) {
      messageDiv.textContent = 'Please enter a valid email address.';
      messageDiv.classList.remove('success');
      messageDiv.classList.add('error');
      return;
    }
  
    // Simulate subscribing the user (replace with actual backend logic)
    messageDiv.textContent = `Thank you for subscribing, ${email}! You will receive updates soon.`;
    messageDiv.classList.remove('error');
    messageDiv.classList.add('success');
  
    // Clear the input field after subscription
    emailInput.value = '';
  }
  