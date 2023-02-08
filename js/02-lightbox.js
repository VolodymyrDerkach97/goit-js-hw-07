import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery')

const createGalleryItem = galleryItems.reduce((html, nextItem) => html + 
`<a class="gallery__item" href="${nextItem.original}">
<img class="gallery__image" src="${nextItem.preview}" alt="${nextItem.description}" />
</a>`, ``);

galleryEl.innerHTML = createGalleryItem;


const lightbox = new SimpleLightbox('.gallery a', {
    docClose: true,
    enableKeyboard: true,
    loop: true,

    captions: true, 
    captionSelector: '.gallery__image',
    captionType: 'attr',
    captionsData: 'alt', 
    captionPosition: 'bottom',
    captionDelay: 250,
});
       

        