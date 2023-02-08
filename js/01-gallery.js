import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

const createGgalleryItem = galleryItems.reduce((html, nextEl) => html +
`<div class="gallery__item">
  <a class="gallery__link" href="${nextEl.original}">
    <img
     class="gallery__image"
    src="${nextEl.preview}"
    data-source="${nextEl.original}"
    alt="${nextEl.description}"
  />
</a>
</div>`, ``);

galleryEl.innerHTML = createGgalleryItem;

galleryEl.addEventListener('click', openModalGallery);

function openModalGallery(event) {
    event.preventDefault();

    if (event.target.nodeName !== 'IMG') return;

    const modalGallery = basicLightbox.create(`<img src="${event.target.dataset.source}" width="800" height="600">`);
    modalGallery.show();

    galleryEl.addEventListener('keydown', (event) => {
        if (event.code === 'Escape') {
            modalGallery.close()
        }
    }, {once: true })
};




