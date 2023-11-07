const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

// function showSlide(index) {
//     slides.forEach((slide, i) => {
//         if (i === index) {
//             slide.style.opacity = 100;
//         } else {
//             slide.style.opacity = 0;
//         }
//     });
// }

function showSlide(index) {
    slides.forEach((slide, i) => {
        const slideWidth = slide.clientWidth;
        if (i === index) {
            slide.style.transform = `translateX(-${index * slideWidth}px)`;
            // slide.style.opacity = 100;
        } else {
            slide.style.transform = `translateX(-${index * slideWidth}px)`;
            // slide.style.opacity = 0;
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

showSlide(currentSlide);
