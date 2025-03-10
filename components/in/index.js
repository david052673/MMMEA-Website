document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);

let xStart = null;
let yStart = null;

function handleTouchStart(evt) {
  const firstTouch = evt.touches[0];
  xStart = firstTouch.clientX;
  yStart = firstTouch.clientY;
}

function handleTouchMove(evt) {
  if (!xStart || !yStart) {
    return;
  }

  const xMove = evt.touches[0].clientX;
  const yMove = evt.touches[0].clientY;

  const xDiff = xStart - xMove;
  const yDiff = yStart - yMove;

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    evt.preventDefault();
  }
}
function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('open');
}

document.addEventListener('DOMContentLoaded', () => {
  let slideIndex = 0; // Initialize the slide index
  const slides = document.querySelectorAll('.sacj'); // Select all slide elements

  // Function to show a specific slide
  function showSlide(index) {
      slides.forEach((slide, i) => {
          slide.classList.remove('active'); // Hide all slides
          if (i === index) {
              slide.classList.add('active'); // Show the current slide
          }
      });
  }

  // Function to change slides based on button click
  function changeSlide(step) {
      slideIndex = (slideIndex + step + slides.length) % slides.length; // Adjust index within bounds
      showSlide(slideIndex);
  }

  // Set up event listeners for the buttons
  document.querySelector('.prev').addEventListener('click', () => changeSlide(-1)); // Move to previous slide
  document.querySelector('.next').addEventListener('click', () => changeSlide(1)); // Move to next slide

  // Automatically cycle through slides every 6 seconds
  setInterval(() => {
      changeSlide(1); // Automatically move to the next slide
  }, 8000);
});






