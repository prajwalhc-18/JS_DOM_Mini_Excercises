document.addEventListener("DOMContentLoaded", function() {
    // Get references to the form and buttons
    const loginForm = document.querySelector('form');
    const loginButton = document.getElementById('login');
    const createAccountButton = document.getElementById('createAc');
  
    // Add event listener for the login form
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission for now
      const emailOrMobile = document.querySelector('input[name="email&mobilenumber"]').value;
      const password = document.querySelector('input[name="password"]').value;
  
      console.log("Email/Mobile:", emailOrMobile);
      console.log("Password:", password);
      // You can add your login logic here
    });
  
    // Add event listener for the "Create New Account" button
    createAccountButton.addEventListener('click', function() {
      alert("Functionality for creating a new account will be implemented later.");
      // You can add your create account logic here
    });
  });
  