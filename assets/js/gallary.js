
  const galleryData = {
  1: [
    "assets/images/try3.png",
    "assets/images/sub-image-1-2.png",
    "assets/images/sub-image-1-3.png",
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
