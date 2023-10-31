let myList = document.getElementById('myList');

myList.addEventListener('click', function(event) {
    event.target.style.backgroundColor = getRandomColor();
});

myList.addEventListener('mouseover', function(event) {
    event.target.style.color = getRandomColor();
});

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
