/**
 * Currency Selector / dropdown.
 * @param {string} el - The original element that requested the module.
 */

export default function init({ el }) {
  const context = el;

  /* Context sensitive things to target */
  const elements = {
    select: context.querySelector('select'),
  };

  elements.select.addEventListener('change', (event) => {
    event.target.form.submit();
  });
}
