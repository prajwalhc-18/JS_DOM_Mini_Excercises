
// Optional: Add navigation buttons to switch between images
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

let currentIndex = 0;

prevButton.addEventListener('click', function () {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    displayImage(currentIndex);
});

nextButton.addEventListener('click', function () {
    currentIndex = (currentIndex + 1) % images.length;
    displayImage(currentIndex);
});

// Function to display the image (customize this based on your needs)
function displayImage(index) {
    // Update the code to display the image in the lightbox
    const largeImage = document.createElement('img');
    largeImage.src = images[index].src;

    lightbox.innerHTML = ''; // Clear existing content
    lightbox.appendChild(largeImage);

    lightbox.classList.add('active');
}

// ... (Remaining code)


const images = document.querySelectorAll('img');
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

images.forEach((image, index) => {
    image.addEventListener('click', () => {
        // Create an image element for the lightbox
        const largeImage = document.createElement('img');
        largeImage.src = image.src;

        // Clear the existing content in the lightbox
        lightbox.innerHTML = '';

        // Append the large image to the lightbox
        lightbox.appendChild(largeImage);

        // Show the lightbox
        lightbox.classList.add('active');
    });
});

lightbox.addEventListener('click', () => {
    // Hide the lightbox when clicked outside the image
    lightbox.classList.remove('active');
});
