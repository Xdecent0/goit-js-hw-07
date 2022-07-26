import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");

const itemMarkup = galleryItems
  .map(({ original, preview, description }) => {
    return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
    `;
  })
  .join("");
gallery.insertAdjacentHTML("beforeend", itemMarkup);

const lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
});
