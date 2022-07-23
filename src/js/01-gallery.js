import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

function creatingGallery(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
       return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    }).join('');
};

galleryEl.insertAdjacentHTML('beforeend', creatingGallery(galleryItems));

const lightboxGallery = new SimpleLightbox('.gallery__item', {
    captionSelector: 'img',
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250
});
