import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
// const jsGallery = document.querySelector(".js-gallery");

const galleryImages = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class="gallery__item"><li><a class="gallery__link href="${original}"><img src="${preview}" data-source= "${original}" alt="${description}" class="gallery__image"/></a></li></div>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", galleryImages);

gallery.addEventListener("click", OnImageClick);

function OnImageClick(e) {
  blockStandartAction(e);

  if (e.target.tagName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `<img src="${e.target.dataset.source}" width="1280" height="853">`
  );
  instance.show();
  if (instance.visible()) {
    window.addEventListener("keydown", onPressKeyESC);
  }
  function onPressKeyESC(e) {
    if (e.code === "Escape") {
      instance.close();
      window.removeEventListener("keydown", onPressKeyESC);
    }
  }
}

function blockStandartAction(e) {
  e.preventDefault();
}

console.log(galleryItems);
