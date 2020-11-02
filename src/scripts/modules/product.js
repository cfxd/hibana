/**
 * Product Template Script
 * ------------------------------------------------------------------------------
 * A file that contains scripts highly couple code to the Product template.
 *
 * @namespace product
 */

import { getUrlWithVariant, ProductForm } from '@shopify/theme-product-form';
import { formatMoney } from '@shopify/theme-currency';
import { load, register } from '@shopify/theme-sections';

export default function init() {
  const classes = {
    hide: 'hide',
  };

  const selectors = {
    submitButton: '[data-submit-button]',
    submitButtonText: '[data-submit-button-text]',
    comparePrice: '[data-compare-price]',
    comparePriceText: '[data-compare-text]',
    priceWrapper: '[data-price-wrapper]',
    productForm: '[data-product-form]',
    productPrice: '[data-product-price]',
  };

  register('product', {
    async onLoad() {
      const productFormElement = document.querySelector(selectors.productForm);

      this.product = await this.getProductJson(
        productFormElement.dataset.productHandle,
      );
      this.productForm = new ProductForm(productFormElement, this.product, {
        onOptionChange: this.onFormOptionChange.bind(this),
      });
    },

    onUnload() {
      this.productForm.destroy();
    },

    getProductJson(handle) {
      return fetch(`/products/${handle}.js`).then((response) => response.json());
    },

    onFormOptionChange(event) {
      const { variant } = event.dataset;
      this.renderPrice(variant);
      this.renderComparePrice(variant);

      this.renderSubmitButton(variant);
      this.updateBrowserHistory(variant);
    },

    renderSubmitButton(variant) {
      const submitButton = this.container.querySelector(selectors.submitButton);
      const submitButtonText = this.container.querySelector(
        selectors.submitButtonText,
      );

      if (!variant) {
        submitButton.disabled = true;
        submitButtonText.innerText = theme.strings.unavailable;
      } else if (variant.available) {
        submitButton.disabled = false;
        submitButtonText.innerText = theme.strings.addToCart;
      } else {
        submitButton.disabled = true;
        submitButtonText.innerText = theme.strings.soldOut;
      }
    },

    renderPrice(variant) {
      const priceElement = this.container.querySelector(selectors.productPrice);
      const priceWrapperElement = this.container.querySelector(
        selectors.priceWrapper,
      );

      priceWrapperElement.classList.toggle(classes.hide, !variant);

      if (variant) {
        priceElement.innerText = formatMoney(variant.price, theme.moneyFormat);
      }
    },

    renderComparePrice(variant) {
      if (!variant) {
        return;
      }

      const comparePriceElement = this.container.querySelector(
        selectors.comparePrice,
      );
      const compareTextElement = this.container.querySelector(
        selectors.comparePriceText,
      );

      if (!comparePriceElement || !compareTextElement) {
        return;
      }

      if (variant.compare_at_price > variant.price) {
        comparePriceElement.innerText = formatMoney(
          variant.compare_at_price,
          theme.moneyFormat,
        );
        compareTextElement.classList.remove(classes.hide);
        comparePriceElement.classList.remove(classes.hide);
      } else {
        comparePriceElement.innerText = '';
        compareTextElement.classList.add(classes.hide);
        comparePriceElement.classList.add(classes.hide);
      }
    },

    updateBrowserHistory(variant) {
      const { enableHistoryState } = this.productForm.element.dataset;

      if (!variant || enableHistoryState !== 'true') {
        return;
      }

      const url = getUrlWithVariant(window.location.href, variant.id);
      window.history.replaceState({ path: url }, '', url);
    },
  });

  load('*');
}
