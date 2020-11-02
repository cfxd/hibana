/* eslint-disable no-unused-vars */

import Flickity from 'flickity';
import 'flickity-imagesloaded';

export default function init({ el }) {
  /* The original element that requested the module */
  const context = el;

  /* Context sensitive things to target */
  const elements = {
    targets: context.getAttribute('data-module-targets'),
  };

  /* Fire up Carousel */
  const carousel = new Flickity(context, {
    cellAlign: 'left',
    cellSelector: elements.targets,
    contain: true,
    pageDots: false,
    prevNextButtons: true,
    watchCSS: true,
    imagesLoaded: true,
    draggable: false,
  });
}
