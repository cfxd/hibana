export default function init({el}) {
  /* The original element that requested the module */
  const context = el;

  /* Context sensitive things to target */
  const elements = {
    targets: document.querySelectorAll('[data-menu-toggle]'),
  };

  /* Loop through the elements */
  elements.targets.forEach((element) => {
    element.addEventListener('click', () => {
      document.body.classList.toggle('UtilityMenuActive');
    });
  });
}
