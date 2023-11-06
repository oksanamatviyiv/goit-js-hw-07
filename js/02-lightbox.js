import { galleryItems } from './gallery-items.js';
// Change code below this line
export {galleryItems};
console.log(galleryItems);


const containerGallery = document.querySelector('.js-gallery');

const cardsGallery = galleryItems
  .map(
    item => `<li class="gallery__item">
      <a
      class="gallery__link" href="${item.original}"
      data-caption="${item.description}"
      >
        <img class="lazy gallery__image"
        loading="lazy" data-src="${item.preview}" alt="${item.description}"/>
      </a>
    </li>`,
  )
  .join('');

containerGallery.innerHTML = cardsGallery;

containerGallery.addEventListener('click', evt => {
  evt.preventDefault();
  const target = evt.target;

  if (target.classList.contains('gallery__image') && target.dataset.source) {
    const instance = basicLightbox.create(
      `<img src="${target.dataset.source}" alt="${target.alt}" width="auto" height="auto">`,
    );
    instance.show();

    const gallery = $('.js-gallery data-caption').simpleLightbox();
    gallery.captionDelay(250); 

    containerGallery.addEventListener('keydown', evt => {
        if (evt.code === 'Escape' && instance) {
    instance.close();
    instance = null;
  }
    });
  }
});

if ('loading' in HTMLImageElement.prototype) {
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');
  lazyImages.forEach(img => {

    img.src = img.dataset.src;
    img.addEventListener('load', onImageLoaded);

function onImageLoaded(evt) {
  evt.target.classList.add('appear');
}
  });
} else {
  const script = document.createElement('script');
  script.src = "https://cdnjs.cloudflare.com/ajax/libs/simplelightbox/2.14.2/simple-lightbox.min.js"; script.integrity = "sha512-/4kQE5RJQYHRhUiK+CZS8UhaJTnLmQkDuf8lOhiP2xLdjthA/rm0VqqWjcyelIx+NDyNHFmtqvuIgOFQnI34WA=="; script.crossorigin = "anonymous"; script.referrerpolicy = "no-referrer";

    document.body.appendChild(script); 
};


const galleryBox = baguetteBox.run('.js-gallery');
baguetteBox.caption;


