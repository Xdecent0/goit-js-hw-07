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
gallery.addEventListener("click", OnImageClick);
function OnImageClick(e) {
  blockStandartAction(e);

  if (e.target.tagName !== "IMG") {
    return;
  }

  let lightbox = new SimpleLightbox(".gallery a", { captions });
  lightbox.open(e.target.dataset.source);
}

function blockStandartAction(e) {
  e.preventDefault();
}
console.log(galleryItems);
