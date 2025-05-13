// main.js

document.getElementById("scrollBtn").addEventListener("click", function () {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth"
    });
  });

  let currentSlide = 0;

  const track = document.getElementById("cardTrack");
  const dotsContainer = document.getElementById("dotsContainer");
  const cards = track.querySelectorAll(".card");
  
  function getCardsPerView() {
    return 1; // Always move one card per slide
  }
  
  function updateDots() {
    const totalSlides = cards.length; // One dot per card
    dotsContainer.innerHTML = "";
  
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement("span");
      dot.className = "dot" + (i === currentSlide ? " active" : "");
      dot.dataset.slide = i; // Store the slide index in the dot
      dot.addEventListener("click", () => moveToSlide(i)); // Add click listener
      dotsContainer.appendChild(dot);
    }
  }
  
  function slide(direction) {
    const cardWidth = cards[0].offsetWidth + 20; // Include gap
    const totalSlides = cards.length;
  
    currentSlide += direction;
  
    // Handle edge cases
    if (currentSlide < 0) currentSlide = totalSlides - 1; // Wrap-around for left slide
    if (currentSlide >= totalSlides) currentSlide = 0; // Wrap-around for right slide
  
    moveToSlide(currentSlide);
  }
  
  function moveToSlide(slideIndex) {
    const cardWidth = cards[0].offsetWidth + 20; // Include gap
  
    currentSlide = slideIndex;
    const offset = slideIndex * cardWidth;
  
    // Apply sliding effect
    track.style.transform = `translateX(-${offset}px)`;
  
    // Update dots
    updateDots();
  }
  
  window.addEventListener("resize", () => {
    moveToSlide(0); // Reset to the first slide on resize
  });
  
  // Initialize dots
  updateDots();
  


  const boxes = document.querySelectorAll('.grid-boxes-2col .box');
const lightbox = document.getElementById('lightbox');
const lightboxHeader = lightbox.querySelector('.lightbox-header h2');
const lightboxSubheader = lightbox.querySelector('.lightbox-header p');
const lightboxIcons = lightbox.querySelector('.icon-section');
const lightboxDescription = lightbox.querySelector('.right-section p');
const lightboxList = lightbox.querySelector('.right-section ul');
const lightboxImage = lightbox.querySelector('.lightbox-img img');
const prevBtn = lightbox.querySelector('.prev-btn');
const nextBtn = lightbox.querySelector('.next-btn');
const closeBtn = lightbox.querySelector('.close-btn');

let currentIndex = 0;

const lightboxData = [
  {
    title: "PLAYGROUP",
    subheader: "FOR AGES: 2 AND ABOVE",
    icons: [
      { src: "assets/icons/interactive.png", alt: "Interactive Classes", text: "Interactive Classes" },
      { src: "assets/icons/language.png", alt: "Language Development", text: "Language Development" },
      { src: "assets/icons/confidence.png", alt: "Confidence Building", text: "Confidence Building" }
    ],
    description: "In our Playgroup program, we focus on fostering early development through engaging activities.",
    list: [
      { title: "Interactive Learning:", text: "Master language fundamentals through engaging activities." },
      { title: "Language Skills Improvement:", text: "Enhance sentence structure and punctuation." },
      { title: "Confidence Building:", text: "Develop confidence in communication." }
    ],
    imgSrc: "assets/images/p1.jpeg"
  },
  {
    title: "PRE-NURSERY",
    subheader: "FOR AGES: 3 AND ABOVE",
    icons: [
      { src: "assets/icons/interactive.png", alt: "Interactive Classes", text: "Interactive Classes" }
    ],
    description: "Pre-nursery program description here.",
    list: [
      { title: "Skill Development:", text: "Enhance learning readiness through fun activities." }
    ],
    imgSrc: "assets/images/p2.jpeg"
  },
  // Add more data as needed...
];

function openLightbox(index) {
  currentIndex = index;
  const data = lightboxData[currentIndex];

  lightboxHeader.textContent = data.title;
  lightboxSubheader.textContent = data.subheader;

  lightboxIcons.innerHTML = '';
  data.icons.forEach(icon => {
    const iconBox = document.createElement('div');
    iconBox.classList.add('icon-box');
    iconBox.innerHTML = `<img src="${icon.src}" alt="${icon.alt}"><p>${icon.text}</p>`;
    lightboxIcons.appendChild(iconBox);
  });

  lightboxDescription.textContent = data.description;
  lightboxList.innerHTML = '';
  data.list.forEach(item => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<span>${item.title}</span> ${item.text}`;
    lightboxList.appendChild(listItem);
  });

  lightboxImage.src = data.imgSrc;
  lightbox.classList.add('show');
}

function closeLightbox() {
  lightbox.classList.remove('show');
}

function showPrev() {
  currentIndex = (currentIndex - 1 + lightboxData.length) % lightboxData.length;
  openLightbox(currentIndex);
}

function showNext() {
  currentIndex = (currentIndex + 1) % lightboxData.length;
  openLightbox(currentIndex);
}

boxes.forEach((box, index) => {
  box.addEventListener('click', () => openLightbox(index));
});

prevBtn.addEventListener('click', showPrev);
nextBtn.addEventListener('click', showNext);
closeBtn.addEventListener('click', closeLightbox);

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', (e) => {
  if (lightbox.style.display === 'flex') {
    if (e.key === 'ArrowLeft') showPrev();
    if (e.key === 'ArrowRight') showNext();
    if (e.key === 'Escape') closeLightbox();
  }
});

