import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
const galleryImages = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<a class="gallery__item href="${original}"><img src="${preview}" data-source= "${original}" alt="${description}" class="gallery__image"/></a>`
  )
  .join("");
gallery.insertAdjacentHTML("beforeend", galleryImages);

const lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
});
