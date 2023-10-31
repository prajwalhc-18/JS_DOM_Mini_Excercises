let colorButton = document.getElementById('colorButton');


colorButton.addEventListener('click', function() {
    document.body.style.backgroundColor = prompt('Enter a color (e.g., red, #00ff00):');
});
