// login.js

document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Perform login authentication
    // Redirect to index.html upon successful login
    window.location.href = 'userinter.html';
});
