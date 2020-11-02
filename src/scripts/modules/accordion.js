

export default function init({ el }) {
  /* The original element that requested the module */
  const context = el;

  /* Context sensitive things to target */
  const elements = {
    target: context.getAttribute('data-module-targets'),
  };

  /* Find all of the above */
  const targets = el.querySelectorAll(`.${elements.target}`);

  /* Loop through the elements */
  targets.forEach((element) => {
    element.addEventListener('click', () => {
      element.classList.toggle(`${elements.target}--active`);
    });
  });
}
