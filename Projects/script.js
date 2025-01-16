let slider = 1
showSlides(slider)

function plusSlides(n) {
    showSlides(slider += n)
}

function currentSlide(n) {
    showSlides(slider = n)
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides") 
    let dots = document.getElementsByClassName("dot") 
    if (n > slides.length) {slider = 1}    
    if (n < 1) {slider = slides.length}
    for(i =0; i<slides.length; i++ ){
        slides[i].style.display = "none"
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }

      slides[slider-1].style.display = "flex";  
      dots[slider-1].className += " active";

}