import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function init({el}) {
  /* The original element that requested the module */
  const context = el;

  gsap.from(context, {
    opacity: 1,
    scrollTrigger: {
      trigger: context,
      start: 'top top',
      end: 'bottom top',
      scrub: 1,
    }
  });
}
