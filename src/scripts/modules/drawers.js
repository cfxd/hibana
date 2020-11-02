export default function init({el}) {
  /* The original element that requested the module */
  const context = el;

  /* Context sensitive things to target */
  const elements = {
    triggers: document.querySelectorAll('[data-drawer-trigger]'),
    mask: context.querySelector('[data-drawer-mask]'),
    closeButtons: context.querySelectorAll('[data-drawer-close]'),
    drawers: document.querySelectorAll('[data-drawer-id]'),
  };

    /* Triggers: On click, display */
  elements.triggers.forEach((element) => {
    element.addEventListener('click', () => {
      context.classList.add('Drawers--active');
      const id = element.dataset.drawerTrigger;
      const target = document.querySelector(`[data-drawer-id="${id}"]`);
      target.classList.add('Drawer--active');
    });
  });

  /* Mask: On click, hide */
  elements.mask.addEventListener('click', () => {
    context.classList.remove('Drawers--active');

    elements.drawers.forEach((drawers) => {
      drawers.classList.remove('Drawer--active');
    });
  });

  /* Close Buttons: On click, hide */
  elements.closeButtons.forEach((element) => {
    element.addEventListener('click', () => {
      context.classList.remove('Drawers--active');

      elements.drawers.forEach((drawers) => {
        drawers.classList.remove('Drawer--active');
      });
    });
  });
}
