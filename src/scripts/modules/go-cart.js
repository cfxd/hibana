import GoCart from '@bornfight/gocart';

export default function init({el}) {

  /* The original element that requested the module */
  const context = el;

  /* Fire up cart */
  new GoCart(context, {
    moneyFormat: '£{{amount}}',
  });
}
