function checkPassword() {
    var password = document.getElementById('passwordInput').value;
    // Replace 'your_password' with the actual password
    if (password === 'suckandfuck') {
      
        // Zoom out the popup
        var popup = document.getElementById('popup');
        popup.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
        popup.style.transform = 'scale(0.5)';
        popup.style.opacity = '0';
        setTimeout(function() {
            popup.style.display = 'none';
            // Fade out the black screen
            blackScreen.style.transition = 'opacity .3s ease'; // Adjust the transition duration
            blackScreen.style.opacity = '0';
            setTimeout(function() {
                blackScreen.parentNode.removeChild(blackScreen);
            }, 1000); // Adjust the timeout to match the transition duration
        }, 500); // Adjust the timeout to match the transition duration
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
