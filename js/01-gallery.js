import { galleryItems } from './gallery-items.js';

const galleryList = document.querySelector(".gallery")
galleryList.innerHTML = galleryItems.map(createGalleryItem).join("");

function createGalleryItem({ preview, original, description }) {
 return `
 <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
            data-source="${original}"
          />
        </a>
      </li>`
}

let instance;

galleryList.addEventListener('click', (event) => {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const original = event.target.dataset.source;

  instance = basicLightbox.create(`
    <img src="${original}" width="800" height="600">
  `);

  instance.show();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (instance) {
      instance.close();
    }
  }
});

console.log(galleryItems);
