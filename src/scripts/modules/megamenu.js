export default function init({el}) {

  /* The original element that requested the module */
  const context = el;

  /* Context sensitive things to target */
  const elements = {
    targets: document.querySelectorAll('[data-megamenu-toggle]'),
  };

  /* Loop through the elements */
  elements.targets.forEach((element) => {
    element.addEventListener('click', (event) => {
      event.preventDefault();

      document.body.classList.toggle('lay-Megamenu-active');
    });
  });
}
