let username = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');
let submit = document.getElementById('submit');

submit.addEventListener('click', function () {
    if (username.value.length >= 5 && email.value.match(/@/) && password.value.length >= 8) {
        alert('Form submitted successfully!');
    } else {
        if (username.value.length < 5) {
            alert('Username must be at least 5 characters long');
        }
        if (!email.value.match(/@/)) {
            alert('Email is not valid');
        }
        if (password.value.length < 8) {
            alert('Password must be at least 8 characters long');
        }
    }
})
