import URLSearchParams from '@ungap/url-search-params';

function handleChange({ target }, searchParams) {
  searchParams.set('sort_by', target.value);
  window.location.search = searchParams.toString();
}

export default function init({ el }) {
  const sortButtons = el.querySelectorAll('.CollectionSortingList__button');

  const searchParams = new URLSearchParams(window.location.search);

  sortButtons.forEach((sortButton) => {
    const changeEvent = (event) => handleChange(event, searchParams);
    sortButton.addEventListener('click', changeEvent);
  });
}
