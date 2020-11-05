export default function init({el}) {

  /* The original element that requested the module */
  const context = el;

  /* Context sensitive things to target */
  const elements = {
    navigation: context.getAttribute('data-module-navigation'),
    title: context.getAttribute('data-module-title'),
  };

  /* Find all of the above */
  const titles = el.querySelectorAll(`.${elements.title}`);

  /* Loop through the elements */
  titles.forEach((title) => {
    title.addEventListener('click', () => {
      title.parentElement.classList.toggle(`${elements.navigation}-active`);
    });
  });
}
