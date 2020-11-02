export default function init({ el }) {
  /* The original element that requested the module */
  const context = el;

  /* Context sensitive things to target */
  const elements = {
    headings: context.getAttribute('data-targets-headings'),
    content: context.getAttribute('data-targets-content'),
  };

  /* Find all of the above */
  const headings = el.querySelectorAll(`.${elements.headings}`);
  const content = el.querySelectorAll(`.${elements.content}`);

  const removeActive = () => {
    headings.forEach((element) => {
      element.classList.remove(`${elements.headings}--active`);
    });
    content.forEach((element) => {
      element.classList.remove(`${elements.content}--active`);
    });
  };

  const addActive = (element, index) => {
    headings[index].classList.add(`${elements.headings}--active`);
    content[index].classList.add(`${elements.content}--active`);
  };

  /* Loop through the elements */
  headings.forEach((element, index) => {
    element.addEventListener('click', () => {
      removeActive();
      addActive(element, index);
    });
  });
}
