
  const galleryData = {
  1: [
    "assets/images/gallery/p-1.png",
    "assets/images/gallery/p-2.png",
    "assets/images/gallery/p-3.png",
    "assets/images/gallery/p-4.png",
    "assets/images/gallery/p-5.png",
  ],
  2: [
    "assets/images/gallery/s-n1.png",
    "assets/images/gallery/s-n2.png",
    "assets/images/gallery/s-n3.png",
    "assets/images/gallery/s-n4.png",
    "assets/images/gallery/s-n5.png",
  ],
  3: [
    "assets/images/gallery/s-pn1.png",
    "assets/images/gallery/s-pn2.png",
    "assets/images/gallery/s-pn33.png",
    "assets/images/gallery/s-pn4.png",
    "assets/images/gallery/s-pn5.png",
  ],
  4: [
    "assets/images/gallery/f1.png",
    "assets/images/gallery/f2.png",
    
  ],
  5: [
    "assets/images/gallery/f-n1.png",
    "assets/images/gallery/f-n2.png",
    "assets/images/gallery/f-n3.png",
    "assets/images/gallery/f-n4.png",
    
  ],
  6: [
    "assets/images/gallery/f-pn1.png",
    "assets/images/gallery/f-pn2.png",
    "assets/images/gallery/f-pn3.png",
    "assets/images/gallery/fpn4.png",
    "assets/images/gallery/f-pn5.png",
  ],
  7: [
    "assets/images/gallery/fa-n1.png",
    "assets/images/gallery/fa-n2.png",
    "assets/images/gallery/fa-n3.png",
    "assets/images/gallery/fa-n4.png",
    "assets/images/gallery/fa-n5.png",
    "assets/images/gallery/fa-n6.png",
    "assets/images/gallery/fa-n7.png",
    "assets/images/gallery/fa-n8.png",
    "assets/images/gallery/fa-n9.png",
    "assets/images/gallery/fa-n10.png",
    "assets/images/gallery/fa-n11.png",
  ],
  8: [
    "assets/images/gallery/fa-p1.png",
    "assets/images/gallery/fa-p2.png",
    "assets/images/gallery/fa-p3.png",
    "assets/images/gallery/fa-p4.png",
    "assets/images/gallery/fa-p5.png",
    "assets/images/gallery/fa-p6.png",
    "assets/images/gallery/fa-p7.png",
    "assets/images/gallery/fa-p8.png",
    "assets/images/gallery/fa-p9.png",
    "assets/images/gallery/fa-p10.png",
    "assets/images/gallery/fa-p11.png",
  ],
  9: [
    "assets/images/gallery/fa-pn1.png",
    "assets/images/gallery/fa-pn2.png",
    "assets/images/gallery/fa-pn3.png",
    "assets/images/gallery/fa-pn4.png",
    "assets/images/gallery/fa-pn5.png",
    "assets/images/gallery/fa-pn6.png",
    "assets/images/gallery/fa-pn7.png",
    "assets/images/gallery/fa-pn8.png",
    "assets/images/gallery/fa-pn9.png",
    "assets/images/gallery/fa-pn10.png",
    "assets/images/gallery/fa-pn11.png",
  ],
  10: [
    "assets/images/gallery/g-n1.png",
    "assets/images/gallery/g-n2.png",
    "assets/images/gallery/g-n3.png",
    "assets/images/gallery/g-n4.png",
    
  ],
  11: [
    "assets/images/gallery/g-pn1.png",
    "assets/images/gallery/g-pn2.png",
    "assets/images/gallery/g-pn3.png",
    "assets/images/gallery/g-pn4.png",
    
  ],
  12: [
    "assets/images/gallery/b1.png",
    "assets/images/gallery/b2.png",
    "assets/images/gallery/b3.png",
    "assets/images/gallery/b4.png",
    "assets/images/gallery/b5.png",
    "assets/images/gallery/b6.png",
  ],
  13: [
    "assets/images/gallery/d1.png",
    "assets/images/gallery/d2.png",
    "assets/images/gallery/d3.png",
    "assets/images/gallery/d4.png",
    "assets/images/gallery/d5.png",
    "assets/images/gallery/d6.png",
    "assets/images/gallery/d6.png",
  ],
  14: [
    "assets/images/gallery/v1.png",
    "assets/images/gallery/v2.png",
    "assets/images/gallery/v3.png",
    "assets/images/gallery/v4.png",
  ],
  15: [
    "assets/images/gallery/pp1.png",
    "assets/images/gallery/pp2.png",
    "assets/images/gallery/pp3.png",
    "assets/images/gallery/pp4.png",
    "assets/images/gallery/pp5.png",
    "assets/images/gallery/pp6.png",
  ],
  15: [
    "assets/images/gallery/s1.png",
    "assets/images/gallery/s2.png",
    "assets/images/gallery/s3.png",
    "assets/images/gallery/s4.png",
    "assets/images/gallery/s5.png",
    "assets/images/gallery/s6.png",
  ],
  // Add more sub-images for other main images as needed
};

let currentGalleryId = null;
let activecurrentIndex = 0;

function openPopup(galleryId) {
  currentGalleryId = galleryId;
  activecurrentIndex = 0;
  updatePopupImage();
  document.getElementById("popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

function updatePopupImage() {
  const imageSrc = galleryData[currentGalleryId][activecurrentIndex];
  document.getElementById("popup-frame-image").src = imageSrc;
}

function nextImage() {
  const gallery = galleryData[currentGalleryId];
  activecurrentIndex = (activecurrentIndex + 1) % gallery.length;
  updatePopupImage();
}

function prevImage() {
  const gallery = galleryData[currentGalleryId];
  activecurrentIndex = (activecurrentIndex - 1 + gallery.length) % gallery.length;
  updatePopupImage();
}
