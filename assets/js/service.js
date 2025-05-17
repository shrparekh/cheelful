
    const modal = document.getElementById('lightbox');
const closeButton = modal.querySelector('.close-btn');
const prevButton = modal.querySelector('.prev-btn');
const nextButton = modal.querySelector('.next-btn');
const headerTitle = modal.querySelector('.lightbox-header h2');
const headerSubtitle = modal.querySelector('.lightbox-header p');
const iconSection = modal.querySelector('.icon-section');
const description = modal.querySelector('.right-section p');
const list = modal.querySelector('.right-section ul');
const modalImage = modal.querySelector('.lightbox-img img');

let currentIndex = 0;

const programs = [
  {
    title: "PLAYGROUP",
    subtitle: "FOR AGES: 2.5 - 3 ",
    icons: [
      { src: "assets/images/icons/cognitive growth.svg", alt: "Cognitive Growth", text: "Cognitive Growth" },
      { src: "assets/images/icons/motor skills.svg", alt: "Motor Skills", text: "Motor Skills" },
      { src: "assets/images/icons/languugae development.svg", alt: "Language Development", text: "Language Development" }
    ],
    description: "Our Pre-Nursery program is structured to provide a stimulating environment where children's cognitive abilities, fine motor skills, and language acquisition are nurtured and developed.",
    list: [
      { title: "Cognitive enrichment:", text: " Hands-on experiences with Montessori materials challenge and refine problem-solving and critical thinking skills.   " },
      { title: "Fine motor skill mastery:", text: " Activities like buttoning, lacing, and construction play further develop pincer grips and hand-eye coordination. " },
      { title: "Language development:", text: "Through storytelling, picture talk, rhymes, and interactive games, children expand their vocabulary and enhance expressive skills." }
    ],
    imgSrc: "assets/images/modal-img.jpeg",
    prev: "← MIDBRAIN ACTIVATION PROGRAM",
    next: "PRE-NURSERY →"
  },
  {
    title: "PRE-NURSERY",
    subtitle: "FOR AGES: 2.5 - 3",
    icons: [
      { src: "assets/images/icons/cognitive growth.svg", alt: "Cognitive Growth", text: "Cognitive Growth" },
      { src: "assets/images/icons/motor skills.svg", alt: "Motor Skills", text: "Motor Skills" },
      { src: "assets/images/icons/languugae development.svg", alt: "Language Development", text: "Language Development" }
    ],
    description: "Our Pre-Nursery program is structured to provide a stimulating environment where children's cognitive abilities, fine motor skills, and language acquisition are nurtured and developed.",
    list: [
      { title: "Cognitive enrichment:", text: " Hands-on experiences with Montessori materials challenge and refine problem-solving and critical thinking skills.   " },
      { title: "Fine motor skill mastery:", text: " Activities like buttoning, lacing, and construction play further develop pincer grips and hand-eye coordination. " },
      { title: "Language development:", text: "Through storytelling, picture talk, rhymes, and interactive games, children expand their vocabulary and enhance expressive skills." }
    ],
    imgSrc: "assets/images/modal-img.jpeg",
    prev: "← PLAYGROUP",
    next: "NURSERY →"
  },
  {
    title: "NURSERY",
    subtitle: "FOR AGES: 3 - 5",
    icons: [
      { src: "assets/images/icons/numerical development.svg", alt: "Numerical Development", text: "Numerical Development" },
      { src: "assets/images/icons/writing readiness.svg", alt: "Writing Readiness", text: "Writing Readiness" },
      { src: "assets/images/icons/social skills.svg", alt: "Social Skills", text: "Social Skills" },
    ],
    description: "In our Nursery program, we focus on preparing children for academic success by refining essential skills in literacy, numeracy, and social-emotional development.",
    list: [
      { title: "Pre-writing readiness:", text: "Early literacy activities including tracing, drawing, and letter games help refine fine motor skills, setting the stage for successful writing." },
      { title: "Numeracy engagement:", text: " Interactive activities such as sorting, counting, and measuring games engage young minds and strengthen numeracy skills." },
      { title: "Social and emotional growth:", text: "Collaborative play, self-directed learning opportunities, and positive reinforcement strategies nurture confidence and emotional intelligence." }
    ],
    imgSrc: "assets/images/modal-img.jpeg",
    prev: "← PRE-NURSERY",
    next: "KINDERGARTEN →"
  },
  {
    title: "KINDERGARTEN",
    subtitle: "FOR AGES: 3.5 - 6",
    icons: [
      { src: "assets/images/icons/fundamentional learning.svg", alt: "Fundamentional Learning", text: "Fundamentional Learning" },
      { src: "assets/images/icons/creative thinking.svg", alt: "Creative Thinking", text: "Creative Thinking" },
      { src: "assets/images/icons/social skills.svg", alt: "Social skills", text: "Social Skills" }
    ],
    description: "Our Kindergarten program is designed to be an exciting and enriching journey where children build essential skills and prepare for a successful transition to primary education. Through a blend of structured learning and playful exploration, we focus on the holistic development of each child",
    list: [
      { title: "Foundational Learning:", text: "Our Kindergarten curriculum focuses on building strong foundations in language and literacy, numeracy, and scientific inquiry, preparing children for academic success."},
      { title: " Creative Expression:", text: "Through art, music, drama, and imaginative play, children explore their creativity, develop self-expression, and build confidence in their abilities." },
      { title: " Social-Emotional Skills:", text: "Our program emphasizes social skills, emotional intelligence, and teamwork, nurturing resilient and empathetic learners ready for future challenges." }
    ],
    imgSrc: "assets/images/modal-img.jpeg",
    prev: "← NURSERY",
    next: "DAYCARE →"
  },
  {
    title: "DAYCARE",
    subtitle: "FOR AGES: 3.5 - 6",
    icons: [
      { src: "assets/images/icons/cognitive growth.svg", alt: "Cognitive Growth", text: "Cognitive Growth" },
      { src: "assets/images/icons/motor skills.svg", alt: "Motor Skills", text: "Motor Skills" },
      { src: "assets/images/icons/grip enhancement.svg", alt: "Grip Enhancement", text: "Grip Enhancement" }
    ],
    description: "At Cheerful Mind Academy, we offer comprehensive daycare services designed to provide a safe, nurturing, and stimulating environment for children outside of regular school hours. Our daycare program focuses on meeting the unique needs of each child while fostering a sense of securit.",
    list: [
      { title: "Safe Environment:", text: " Secure nurturing spaces supervised by trained staff. " },
      { title: "Engaging Activities:", text: "Age-appropriate play, arts, music and physical activity. " },
      { title: "Flexible Options:", text: " Full-day, part-time, and drop-in scheduling available. " },
      { title: "Qualified Team:", text: "Experienced professionals ensuring a supportive atmosphere. Parent Communication: Regular updates on activities and child progress. " }
    ],
    imgSrc: "assets/images/modal-img.jpeg",
    prev: "← KINDERGARTEN",
    next: "PHONICS CLASSES FOR CHILDREN →"
  },
  {
    title: "JOLLY PHONICS AND VOCABULARY",
    subtitle: "FOR AGES: 3.5 - 6",
    icons: [
      { src: "assets/images/icons/engaging classes.svg", alt: "Engaging Classes", text: "Engaging Classes" },
      { src: "assets/images/icons/languugae development.svg", alt: "Language Development", text: "Language Development" },
      { src: "assets/images/icons/workshop learning.svg", alt: "Workshop Learning", text: "Workshop Learning" }
    ],
    description: "In our Playgroup program, we focus on fostering early development through engaging activities designed to promote fine motor skills, cognitive growth, and communication abilities",
    list: [
      { title: "Engaging Learning Experience:", text: " Learn to read and write through playful songs, actions, and captivating stories that make learning enjoyable." },
      { title: " Strong Phonemic Awareness:", text: " Develop a strong foundation for lifelong literacy success by building phonemic awareness. " },
      { title: "Tailored Workshops:", text: "Fun workshops designed for all ages, from pre-readers to early readers, creating a supportive learning environment." }
    ],
    imgSrc: "assets/images/modal-img.jpeg",
    prev: "← DAYCARE",
    next: "GRAMMAR AND CREATIVE WRITING →"
  },
  {
    title: "GRAMMAR AND CREATIVE WRITING",
    subtitle: "FOR AGES: 8 AND ABOVE",
    icons: [
      { src: "assets/images/icons/ineractive classes.svg", alt: "Ineractive Classes", text: "Ineractive Classes" },
      { src: "assets/images/icons/languugae development.svg", alt: "language Development", text: "language Development" },
      { src: "assets/images/icons/confidence building.png", alt: "Confidence Building", text: "Confidence Building" }
    ],
    description: "In our Playgroup program, we focus on fostering early development through engaging activities designed to promote fine motor skills, cognitive growth, and communication abilities.",
    list: [
      { title: "Interactive Learning:", text: "Master language fundamentals through interactive and engaging activities that make learning fun." },
      { title: " Language Skills Improvement:", text: "Enhance sentence structure, punctuation, and parts of speech, building a solid foundation in language skills." },
      { title: "Confidence Building:", text: " Develop confidence in written and spoken communication, preparing students for success in school and beyond." }
    ],
    imgSrc: "assets/images/modal-img.jpeg",
    prev: "← JOLLY PHONICS AND VOCABULARY",
    next: "TRINITY SPEECH AND DRAMA CLASS →"
  },
  {
    title: "TRINITY SPEECH AND DRAMA",
    subtitle: "FOR AGES: 8 -16",
    icons: [
      { src: "assets/images/icons/speaking skills.svg", alt: "Speaking Skills", text: "Speaking Skills" },
      { src: "assets/images/icons/creative thinking.svg", alt: "Creative Thinking", text: "Creative Thinking" },
      { src: "assets/images/icons/exam readiness.svg", alt: "Exam Readiness", text: "Exam Readiness" }
    ],
    description: "In our Playgroup program, we focus on fostering early development through engaging activities designed to promote fine motor skills, cognitive growth, and communication abilities.",
    list: [
      { title: "Public Speaking Skills:", text: "Develop public speaking skills and stage presence under experienced guidance, enhancing communication abilities." },
      { title: " Creative Expression:", text: " Explore creative expression through drama, storytelling, and performance, fostering artistic growth." },
      { title: " Exam Preparation:", text: " Prepare for Trinity Speech and Drama exams with confidence and enjoyment, ensuring a positive experience." }
    ],
    imgSrc: "assets/images/modal-img.jpeg",
    prev: "← JOLLY PHONICS AND VOCABULARY",
    next: "MIDBRAIN ACTIVATION PROGRAM →"
  },
  {
    title: "MIDBRAIN ACTIVATION PROGRAM",
    subtitle: "FOR AGES: 7 - 14",
    icons: [
      { src: "assets/images/icons/cognitive growth.svg", alt: "Cognitive Growth", text: "Cognitive Growth" },
      { src: "assets/images/icons/holistic grwoth.svg", alt: "Holistic Growth", text: "Holistic Growth" },
      { src: "assets/images/icons/sensory development.svg", alt: "Sensory Development", text: "Sensory Development" }
    ],
    description: "In our Playgroup program, we focus on fostering early development through engaging activities designed to promote fine motor skills, cognitive growth, and communication abilities.",
    list: [
      { title: "Cognitive Development:", text: " Unlock cognitive capacity through stimulating activities that engage both brain hemispheres." },
      { title: " Holistic Growth:", text: " Enhance memory, concentration, and learning abilities, nurturing holistic development. " },
      { title: "Sensory Integration Improvement:", text: " Improve sensory integration and coordination for smoother transitions and faster response times." }
    ],
    imgSrc: "assets/images/modal-img.jpeg",
    prev: "← TRINITY SPEECH AND DRAMA",
    next: "Back To Site →"
  }
];


function openModal(index) {
  currentIndex = index;
  const program = programs[currentIndex];

  headerTitle.textContent = program.title;
  headerSubtitle.textContent = program.subtitle;
  iconSection.innerHTML = program.icons.map(icon => `
    <div class="icon-box">
      <img src="${icon.src}" alt="${icon.alt}">
      <p>${icon.text}</p>
    </div>
  `).join('');
  description.textContent = program.description;
  list.innerHTML = program.list.map(item => `<li><span>${item.title}</span> ${item.text}</li>`).join('');
  modalImage.src = program.imgSrc;
  prevButton.textContent = program.prev;
  nextButton.textContent = program.next;

  modal.style.display = 'flex';
}

function closeModal() {
  modal.style.display = 'none';
}

function showPrev() {
  if (currentIndex === 0) {
    currentIndex = programs.length - 1; // Go to the last modal if it's the first modal's "prev"
  } else {
    currentIndex--;
  }
  openModal(currentIndex);
}

function showNext() {
  if (currentIndex === programs.length - 1) {
    window.location.href = "index.html"; // Replace with your desired website URL
  } else {
    currentIndex++;
    openModal(currentIndex);
  }
}

document.querySelectorAll('.box').forEach((box, index) => {
  box.addEventListener('click', () => openModal(index));
});

closeButton.addEventListener('click', closeModal);
prevButton.addEventListener('click', showPrev);
nextButton.addEventListener('click', showNext);

modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});

