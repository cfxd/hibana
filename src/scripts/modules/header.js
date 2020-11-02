import Headroom from 'headroom.js';

export default function init({ el }) {
  /* The original element that requested the module */
  const context = el;

  /* Initialize Headroom */
  const headroom = new Headroom(context, {

    // classes: {
    //   initial: 'Header',
    //   pinned: 'Header--pinned',
    //   unpinned: 'Header--unpinned',
    //   top: 'Header--top',
    //   notTop: 'Header--not-top',
    //   bottom: 'Header--bottom',
    //   notBottom: 'Header--not-bottom',
    //   frozen: 'Header--frozen',
    // },
    onPin: () => {
      document.body.classList.add('UtilityHeader--pinned');
      document.body.classList.remove('UtilityHeader--unpinned');
    },
    onUnpin: () => {
      document.body.classList.add('UtilityHeader--unpinned');
      document.body.classList.remove('UtilityHeader--pinned');
    },
    onTop: () => {
      document.body.classList.add('UtilityHeader--top');
      document.body.classList.remove('UtilityHeader--not-top');
    },
    onNotTop: () => {
      document.body.classList.add('UtilityHeader--top');
      document.body.classList.remove('UtilityHeader--not-top');
    },
  });

  headroom.init();

  /* Sneaky Sneak. Initially hide header if template is about us, because it looks cooler. */
  if (document.body.id === 'our-story') {
    headroom.unpin();
  }
}
