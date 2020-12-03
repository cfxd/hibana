import GoCart from '@bornfight/gocart';

export default function init({el}) {

  /* The original element that requested the module */
  const context = el;

  /* Fire up cart */
  new GoCart(context, {
    cartMode: 'drawer',
    drawerDirection: 'right',
    displayModal: false,
    // eslint-disable-next-line no-template-curly-in-string
    moneyFormat: '£{{amount}}',
  });
}
