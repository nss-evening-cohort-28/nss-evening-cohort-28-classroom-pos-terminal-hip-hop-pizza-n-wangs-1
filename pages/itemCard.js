import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyItems = () => {
  const domString = '<h1>No Items</h1>';
  renderToDOM('#store', domString);
};

const showItems = (array) => {
  clearDom();

  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-author-btn">Add Item</button><button class="btn btn-success btn-lg mb-4" id="goTo-payment-btn">Go To Payment</button>';

  renderToDOM('#add-button', btnString);

  let domString = '';
  array.forEach((item) => {
    domString += `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${item.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${item.price}</h6>
        <hr>
        <div>${item.onSale ? '<i class="fa fa-star" aria-hidden="true"></i>' : ''}</div>
        
        <button class="btn-info"><i class="fa fa-edit" id="edit-order--${item.firebaseKey}"></i></button>

        <button class="btn btn-danger"><i class="fa fa-trash-alt" id="delete-order-btn--${item.firebaseKey}"></i></button>
        
      </div>
    </div>

    `;
  });
  renderToDOM('#store', domString);
};

export { showItems, emptyItems };
