export default function init({el}) {
  /* The original element that requested the module */
  const context = el;

  /* Context sensitive things to target */
  const elements = {
    select: context.querySelector('select'),
  };

  elements.select.addEventListener('change', (event) => {
    event.target.form.submit();
  });
}
