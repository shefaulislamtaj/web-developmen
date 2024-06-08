document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the email and password values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simple validation for demonstration purposes
    if (email === 'user@example.com' && password === 'password') {
        // Hide the login section
        document.getElementById('login-section').style.display = 'none';

        // Show the post-login section
        document.getElementById('post-login-section').style.display = 'flex';
    } else {
        alert('Invalid email or password. Please try again.');
    }
});
