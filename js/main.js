let slideIndex = 0;
showSlides();

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides() {
    let slides = document.getElementsByClassName("slideshow-container__my-slides");
    let dots = document.getElementsByClassName("slideshow-container__dot-container--dot");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    if (slideIndex > slides.length) {slideIndex = 1} 
      slides[slideIndex-1].style.display = "block";
      dots[slideIndex-1].className += " active"; 
    setTimeout(showSlides, 20000); // Change image every 20 seconds
}