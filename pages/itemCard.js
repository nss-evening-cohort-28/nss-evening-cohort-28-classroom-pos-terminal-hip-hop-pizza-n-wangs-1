import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyItems = () => {
  const domString = '<h1>No Items</h1>';
  renderToDOM('#store', domString);
};

const showItems = (array) => {
  clearDom();

  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-author-btn">Add Item</button>';

  renderToDOM('#add-button', btnString);

  let domString = '';
  array.forEach((/* item */) => {
    domString += `

    `;
  });
  renderToDOM('#store', domString);
};

export { showItems, emptyItems };
