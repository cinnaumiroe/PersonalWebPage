var activeImageIndex = 0;

var images = [
  "./assets/websitepic1.jpg",
  "./assets/websitepic2.jpg",
  "./assets/websitepic3.jpg",
  "./assets/websitepic4.jpg",
  "./assets/websitepic5.jpg",
  "./assets/websitepic6.jpg",
];

var previewImage = document.getElementById("preview-image");
previewImage.src = images[activeImageIndex];

var thumbnailsContainer = document.getElementById("image-thumbnails-container");

images.forEach((imageSrc, index) => {
  var imageThumbnail = document.createElement("img");
  imageThumbnail.src = imageSrc;
  imageThumbnail.className = "image-thumbnail";

  imageThumbnail.addEventListener("click", function () {
    viewImage(imageSrc, index);
  });
  thumbnailsContainer.appendChild(imageThumbnail);
});

function viewImage(imageSrc, activeIndex) {
  previewImage.src = imageSrc;
  activeImageIndex = activeIndex;
}

function prevImage() {
  var newImageIndex = activeImageIndex - 1;
  if (newImageIndex < 0) {
    newImageIndex = images.length - 1;
  }
  var newImage = images[newImageIndex];
  viewImage(newImage, newImageIndex);
}

function nextImage() {
  var newImageIndex = activeImageIndex + 1;
  if (newImageIndex > images.length - 1) {
    newImageIndex = 0;
  }
  var newImage = images[newImageIndex];
  viewImage(newImage, newImageIndex);
}
