function checkPassword() {
    var password = document.getElementById('passwordInput').value;
    // Replace 'your_password' with the actual password
    if (password === 'suckandfuck') {
        document.getElementById('popup').style.display = 'none';
    } else {
        alert('Incorrect password. Please try again.');
    }
}

document.getElementById('passwordInput').addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        checkPassword();
    }
});

// Check if the password has already been entered by checking the cookie
window.onload = function() {
    if (document.cookie.includes('passwordEntered=true')) {
        document.getElementById('popup').style.display = 'none';
    }
};

document.addEventListener("DOMContentLoaded", function() {
    // Focus on the password input field when the page loads
    document.getElementById('passwordInput').focus();
});
