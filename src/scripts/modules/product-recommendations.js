export default function init({el}) {
  const loadProductRecommendationsIntoSection = () => {
    // Look for an element with class 'product-recommendations'
    const productRecommendationsSection = document.querySelector('.product-recommendations');
    if (productRecommendationsSection === null) { return; }
    // Read product id from data attribute
    const productId = productRecommendationsSection.dataset.productId;
    // Read base URL from data attribute
    const baseUrl = productRecommendationsSection.dataset.baseUrl;
    // Read limit from data attribute
    const limit = productRecommendationsSection.dataset.limit;
    // Build request URL
    const requestUrl = `${baseUrl}?section_id=product-recommendations&product_id=${productId}&limit=${limit}`;
    // Create request and submit it using Ajax
    fetch(requestUrl).then((response) => {
      // The API call was successful!
      return response.text();
    }).then((html) => {
      const container = document.createElement('div');
      container.innerHTML = html;
      productRecommendationsSection.innerHTML = container.querySelector('.product-recommendations').innerHTML;

      return null;
    })

    .catch((err) => {
    // There was an error
      console.warn('Something went wrong.', err);
    });
  };

  // Listen for changes done in the Theme Editor
  document.addEventListener('shopify:section:load', (event) => {
    if (event.detail.sectionId === 'product-recommendations') {
      loadProductRecommendationsIntoSection();
    }
  });

  // Fetching the recommendations on page load
  loadProductRecommendationsIntoSection();
}
