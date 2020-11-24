import URLSearchParams from '@ungap/url-search-params';

function handleChange({target}, searchParams) {
  searchParams.set('sort_by', target.value);
  window.location.search = searchParams.toString();
}

export default function init({el}) {
  const sortButtons = el.querySelectorAll('.clc-Sortby_Button');

  const searchParams = new URLSearchParams(window.location.search);

  sortButtons.forEach((sortButton) => {
    const changeEvent = (event) => handleChange(event, searchParams);
    sortButton.addEventListener('click', changeEvent);
  });

  /* The original element that requested the module */
  const context = el;

  /* Context sensitive things to target */
  const elements = {
    targets: document.querySelectorAll('[data-sortby-title-toggle]'),
  };

  /* Loop through the elements */
  elements.targets.forEach((element) => {
    element.addEventListener('click', (event) => {
      event.preventDefault();

      el.classList.toggle('clc-Sortby-active');
    });
  });
}
