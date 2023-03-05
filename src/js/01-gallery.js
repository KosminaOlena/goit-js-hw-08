
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

const galleryContainer = document.querySelector('.gallery');
const markup = createGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', markup);

function createGalleryMarkup(images) {
    return images.map(({ preview, original, description}) => {
        return `<div class="gallery__item">
        <a href="${original}">
        <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
        </a>
        </div>`
    }).join('');
};

const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 ,});

