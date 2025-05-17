// main.js


  window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar'); // Select your navbar
    const scrollOffset = 100; // Change this value to control when it becomes sticky
    if (window.scrollY > scrollOffset) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
  });


  document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section'); // Select all sections
    const navLinks = document.querySelectorAll('.nav-link'); // Select all nav-links

    function setActiveLink() {
      let current = 'home'; // Default section is 'home'
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute('id'); // Get the current section ID
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove('active'); // Remove the active class from all links
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active'); // Add the active class to the correct link
        }
      });
    }

    // Set the initial active link
    setActiveLink();

    // Update the active link on scroll
    window.addEventListener('scroll', setActiveLink);
  });



  document.addEventListener('DOMContentLoaded', function () {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    // Show the button when scrolling down
    window.addEventListener('scroll', function () {
      if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('show');
      } else {
        scrollToTopBtn.classList.remove('show');
      }
    });

    // Scroll back to top smoothly
    scrollToTopBtn.addEventListener('click', function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  });


  

let currentSlide = 0;
const cards = document.querySelectorAll(".cards-track .card");
const track = document.querySelector("#cardTrack");
const totalSlides = cards.length;

// Calculate the card width dynamically (include the gap between cards)
function getCardWidth() {
  return cards[0].offsetWidth + 40; // Adjust gap value based on your CSS
}

// Update dots to reflect the current slide
function updateDots() {
  const dotsContainer = document.querySelector(".dots-container");
  if (!dotsContainer) return;

  dotsContainer.innerHTML = "";

  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement("span");
    dot.className = "dot" + (i === currentSlide ? " active" : "");
    dot.dataset.slide = i;
    dot.addEventListener("click", () => moveToSlide(i));
    dotsContainer.appendChild(dot);
  }
}

// Slide cards one by one
function slide(direction) {
  currentSlide += direction;

  // Prevent sliding beyond available cards
  if (currentSlide < 0) {
    currentSlide = 0;
  } else if (currentSlide > totalSlides - 1) {
    currentSlide = totalSlides - 1;
  }

  moveToSlide(currentSlide);
}

// Move to a specific slide
function moveToSlide(slideIndex) {
  const offset = slideIndex * getCardWidth();
  track.style.transform = `translateX(-${offset}px)`;
  currentSlide = slideIndex;

  // Update dots to reflect the new slide
  updateDots();
}

// Handle window resize to recalculate offsets
window.addEventListener("resize", () => {
  moveToSlide(0); // Reset to the first slide on resize
});

// Initialize dots
updateDots();



