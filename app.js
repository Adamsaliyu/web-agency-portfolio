
const track = document.querySelector(".slider-track");
const slides = document.querySelectorAll(".slide-card");

const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

let currentSlide = 0;
const totalSlides = slides.length;

/* UPDATE SLIDER */
function updateSlider(){

  track.style.transform =
  `translateX(-${currentSlide * 100}%)`;

}

/* NEXT BUTTON */
nextBtn.addEventListener("click", () => {

  currentSlide++;

  if(currentSlide >= totalSlides){
    currentSlide = 0;
  }

  updateSlider();

});

/* PREV BUTTON */
prevBtn.addEventListener("click", () => {

  currentSlide--;

  if(currentSlide < 0){
    currentSlide = totalSlides - 1;
  }

  updateSlider();

});

/* AUTO SLIDE */
setInterval(() => {

  currentSlide++;

  if(currentSlide >= totalSlides){
    currentSlide = 0;
  }

  updateSlider();

}, 4000);
