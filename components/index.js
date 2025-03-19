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
  const links = document.querySelectorAll('.slideshow a'); // Select all links wrapping the slides

  // Function to show a specific slide
  function showSlide(index) {
      slides.forEach((slide, i) => {
          slide.classList.remove('active'); // Hide all slides
          links[i].style.pointerEvents = 'none'; // Disable link for non-active slides
          if (i === index) {
              slide.classList.add('active'); // Show the current slide
              links[i].style.pointerEvents = 'auto'; // Enable link for the active slide
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

  // Show the first slide initially
  showSlide(slideIndex);
});


function pauseAnimation() {
  const movingText = document.querySelector('.moving-text');
  movingText.style.animationPlayState = 'paused'; // Pauses the animation
}

function resumeAnimation() {
  const movingText = document.querySelector('.moving-text');
  movingText.style.animationPlayState = 'running'; // Resumes the animation
}



  
const hoverWord = document.getElementById("hoverWord");
const popup = document.getElementById("popup");
let timeout;

// Show the popup on hover
hoverWord.addEventListener("mouseenter", () => {
  clearTimeout(timeout); // Clear any existing hide timer
  popup.style.display = "block"; // Show the popup
});

// Hide the popup with a delay
hoverWord.addEventListener("mouseleave", () => {
  timeout = setTimeout(() => {
    popup.style.display = "none"; // Hide the popup
  }, 1000); // Delay for 1 second before hiding
});

// Prevent popup from hiding if it's hovered over
popup.addEventListener("mouseenter", () => {
  clearTimeout(timeout); // Cancel the hide timer
});

// Hide popup when leaving it, with the same delay
popup.addEventListener("mouseleave", () => {
  timeout = setTimeout(() => {
    popup.style.display = "none";
  }, 1000);
});
