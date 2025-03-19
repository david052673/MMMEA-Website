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
  }}

function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('open');
}


/*--------js for two link word----*/
const hoverWord = document.getElementById("hoverWord");
const popup = document.getElementById("popup");
let timeout;


hoverWord.addEventListener("mouseenter", () => {
  clearTimeout(timeout); 
  popup.style.display = "block";
});


hoverWord.addEventListener("mouseleave", () => {
  timeout = setTimeout(() => {
    popup.style.display = "none"; 
  }, 1000);  
});

 
popup.addEventListener("mouseenter", () => {
  clearTimeout(timeout); 
});


popup.addEventListener("mouseleave", () => {
  timeout = setTimeout(() => {
    popup.style.display = "none";
  }, 1000);
});