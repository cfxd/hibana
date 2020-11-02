import Flickity from 'flickity';
import 'flickity-fade';

export default function init({ el }) {
  /* The original element that requested the module */
  const context = el;

  /* Context sensitive things to target */
  const elements = {
    targets: context.getAttribute('data-module-targets'),
  };

  /* Fire up Carousel */
  // eslint-disable-next-line no-unused-vars
  const carousel = new Flickity(context, {
    cellAlign: 'left',
    cellSelector: elements.targets,
    contain: true,
    autoPlay: 7000,
    fade: true,
    draggable: true,
    pageDots: false,
    prevNextButtons: false,
    pauseAutoPlayOnHover: false,
  });
}
