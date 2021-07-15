let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

let sIndex = 1;
sSlides(sIndex);

// Next/previous controls
function pSlides(m) {
  sSlides(sIndex += m);
}

// Thumbnail image controls
function cSlide(m) {
  sSlides(sIndex = m);
}

function sSlides(m) {
  let j;
  let slideSale = document.getElementsByClassName("slide-sale");
  let dotSale = document.getElementsByClassName("dot-sale");
  if (m > slideSale.length) {sIndex = 1}
  if (m < 1) {sIndex = slideSale.length}
  for (j = 0; j < slideSale.length; j++) {
      slideSale[j].style.display = "none";
  }
  for (j = 0; j < dotSale.length; j++) {
    dotSale[j].className = dotSale[j].className.replace(" active", "");
  }
  slideSale[sIndex-1].style.display = "block";
  dotSale[sIndex-1].className += " active";
} 