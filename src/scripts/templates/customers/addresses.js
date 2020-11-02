const elements = {
  newAddressForm: document.querySelector('[data-address-new-form]'),
  newAddressToggles: document.querySelectorAll('[data-address-new-toggle]'),
  addresses: document.querySelectorAll('[data-address]'),
};
function initAddresses() {

  elements.newAddressToggles.forEach((element) => {
    element.addEventListener('click', () => {
      elements.newAddressForm.classList.toggle('UtilityHide');
    });
  });

  elements.addresses.forEach((form) => {
    const toggles = form.querySelectorAll('[data-address-edit-toggle]');
    const editForm = form.querySelector('[data-address-edit-form]');
    toggles.forEach((element) => {
      element.addEventListener('click', () => {
        editForm.classList.toggle('UtilityHide');
      });
    });
  });

}
initAddresses();
