import * as THREE from 'three';
import {gsap} from 'gsap';
import hoverEffect from './hover-effect';

export default function init({el}) {
  /* The original element that requested the module */
  const context = el;

  const imgs = el.querySelectorAll('img');

  new hoverEffect({
    parent: el,
    intensity: el.dataset.intensity || undefined,
    speedIn: el.dataset.speedin || undefined,
    speedOut: el.dataset.speedout || undefined,
    easing: el.dataset.easing || undefined,
    hover: el.dataset.hover || undefined,
    hoverElement: el.dataset.hoverelement || undefined,
    image1: imgs[0].getAttribute('src'),
    image2: imgs[1].getAttribute('src'),
    displacementImage: el.dataset.displacement,
  });
}
