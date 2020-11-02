import Cookies from 'js-cookie';

export default function init({ el }) {
  /* The original element that requested the module */
  const context = el;

  /* Context sensitive things to target */
  const elements = {
    close: context.querySelector('[data-modal-close]'),
    timeout: (el.dataset.newsletterTimeout * 1000),
  };

  const openModal = () => {
    el.classList.add('Newsletter--active');
  };

  const closeModal = () => {
    el.classList.remove('Newsletter--active');
    Cookies.set('modal-newsletter');
  };

  if (!elements.close) {
    return;
  }

  const url = window.location.href;
  const query = window.location.search;

  if (url.match(/challenge/gi)) {
    return;
  }

  if (query.match(/customer_posted/gi)) {
    openModal();
  }

  if (!Cookies.get('modal-newsletter')) {
    setTimeout(openModal, elements.timeout);
  }

  if (elements.mask) {
    elements.mask.addEventListener('click', () => {
      closeModal();
    });
  }

  if (elements.close) {
    elements.close.addEventListener('click', () => {
      closeModal();
    });
  }
}
