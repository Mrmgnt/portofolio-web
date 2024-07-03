let slideIndex = 0;

function showSlides(n) {
    const slides = document.getElementsByClassName("slide");
    if (n >= slides.length) {
        slideIndex = 0;
    } else if (n < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = n;
    }

    const offset = -slideIndex * 50;
    document.querySelector(".card-wrapper").style.transform = `translateX(${offset}%)`;
}

function plusSlides(n) {
    showSlides(slideIndex + n);
}

function autoSlides() {
    slideIndex++;
    showSlides(slideIndex);
    setTimeout(autoSlides, 8000); // Change slide every 3 seconds
}

// Initial call to start auto sliding
autoSlides();
