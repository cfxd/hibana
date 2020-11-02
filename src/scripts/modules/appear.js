import { gsap } from 'gsap';
import { ElementObserver } from 'viewprt';

export default function init({ el }) {
  /* The original element that requested the module */
  const context = el;

  /* Context sensitive things to target */
  const elements = {
    target: context.getAttribute('data-module-targets'),
  };

  const targets = document.querySelectorAll(`[${elements.target}]`);

  targets.forEach((element) => {
    gsap.set(element, { autoAlpha: 0, y: 8 });

    ElementObserver(element, {
      onEnter: () => {
        const timeline = gsap.timeline();

        timeline.to(element, {
          ease: 'power2.inOut',
          duration: 0.6,
          autoAlpha: 1,
          y: 0,
        });

        timeline.set(element, { clearProps: 'all' });
      },
      offset: 0,
      once: true,
    });
  });
}
