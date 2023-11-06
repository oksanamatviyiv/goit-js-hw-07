import { galleryItems } from './gallery-items.js';
// Change code below this line
export {galleryItems};
console.log(galleryItems);

const containerGallery = document.querySelector('.js-gallery');

const cardsGallery = galleryItems.map(item =>
  `<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
  </li>`
).join('');

containerGallery.innerHTML = cardsGallery;

containerGallery.addEventListener('click', evt => {
  evt.preventDefault();
  const target = evt.target;

  if (target.classList.contains('gallery__image') && target.dataset.source) {
    const instance = basicLightbox.create(
    `<img src="${target.dataset.source}" alt="${target.alt}" width="auto" height="auto">`);
    instance.show();

    containerGallery.addEventListener('keydown', evt => {
      if (evt.code === 'Escape') {
        instance.close();
      }
    });
  }
});
