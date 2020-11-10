import Glide from '@glidejs/glide';

export default function init({el}) {

  /* The original element that requested the module */
  const context = el;

  /* Context sensitive things to target */
  const elements = {
    carousel: context.getAttribute('data-module-carousel'),
  };

 /* Fire up Carousel */
  new Glide(context, {
    type: 'carousel',
    perView: 1,
    gap: 120,
    focusAt: 'center',
    peek: 240,
    classes: {
      activeNav: 'sec-Stories_Dot-active',
      activeSlide: 'sec-Stories_Item-active',
    },
  }).mount({});
}
