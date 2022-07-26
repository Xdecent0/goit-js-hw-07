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

gallery.addEventListener("keydown", OnKeyDown);

function OnKeyDown(e) {
  if (e.code === "Escape") {
    console.log("Escape clicked  on gallery items");
  }
}

function OnImageClick(e) {
  blockStandartAction(e);

  if (e.target.tagName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `<img src="${e.target.dataset.source}" width="1280" height="853">`
  );
  instance.show();
  gallery.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
      instance.close();
    }
  });

  window.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
      instance.close();
    }
  });
}

function blockStandartAction(e) {
  e.preventDefault();
}

console.log(galleryItems);
