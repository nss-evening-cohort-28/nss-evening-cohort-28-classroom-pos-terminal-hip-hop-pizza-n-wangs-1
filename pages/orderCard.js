import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyOrders = () => {
  const domString = '<h1>No Orders</h1>';
  renderToDOM('#store', domString);
};

const showOrders = (array) => {
  clearDom();

  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-author-btn">Add Order</button>';

  renderToDOM('#add-button', btnString);

  let domString = '';
  array.forEach((/* item */) => {
    domString += `

    `;
  });
  renderToDOM('#store', domString);
};

export { showOrders, emptyOrders };
