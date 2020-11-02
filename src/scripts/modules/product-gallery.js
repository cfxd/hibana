import Flickity from 'flickity';
import 'flickity-imagesloaded';

export default function init({el}) {
  /* The original element that requested the module */
  const context = el;

  /* Context sensitive things to target */
  const elements = {
    mainCarousel: context.querySelector('[data-module-main-carousel]'),
    mainSlide: context.querySelector('[data-module-main-slide]'),
    thumbnailCarousel: context.querySelector('[data-module-thumbnails-carousel]'),
    thumbnailCell: context.querySelectorAll('[data-module-thumbnails-cell]'),
  };

  const carousel = new Flickity(elements.mainCarousel, {
    prevNextButtons: false,
    pageDots: false,
    imagesLoaded: true,
    cellAlign: 'left',
  });

  if (elements.thumbnailCell) {
    elements.thumbnailCell.forEach((element, index) => {
      element.addEventListener('click', () => {
        carousel.select(index);
      });
    });
  }
}
