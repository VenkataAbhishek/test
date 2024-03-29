// register.js

document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Perform user registration
    // Redirect to login.html upon successful registration
    window.location.href = 'login.html';
});
