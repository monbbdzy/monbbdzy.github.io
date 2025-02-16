let images = [
    "images/image1.png",
    "images/image2.png",
    "images/image3.png",
    "images/image4.png"
];

let currentIndex = 0;

function setImage(index) {
    currentIndex = index;
    document.getElementById("main-img").src = images[currentIndex];
}

function changeSlide(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    setImage(currentIndex);
}


