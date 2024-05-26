document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('referForm');
    const emailInput = document.getElementById('email');
    const nameInput = document.getElementById('name');

    form.addEventListener('submit', function(event) {
        if (!emailInput.value.trim()) {
            alert('Please enter your email.');
            event.preventDefault();
        }
    });
});
