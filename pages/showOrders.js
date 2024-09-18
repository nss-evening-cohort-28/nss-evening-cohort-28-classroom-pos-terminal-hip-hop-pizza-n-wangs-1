import renderToDom from '../utils/renderToDom';
import clearDom from '../utils/clearDom';

const showOrders = (array) => {
  clearDom();

  let domString = '';
  array.forEach((item) => {
    domString += `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h1 class="card-title">${item.order_name}</h1>
        <h1 class="card-subtitle mb-2 text-muted">Order Status: ${item.order_status}</h1>
        <h1 class="card-subtitle mb-2 text-muted">Customer Phone Number: ${item.phone_number}</h1>
        <h1 class="card-subtitle mb-2 text-muted">Customer Email Address: ${item.email}</h1>
        <h1 class="card-subtitle mb-2 text-muted">Order Type: ${item.order_type}</h1>
        <button id="view-Order-btn--${item.firebaseKey}">Details</button>
        <button id="update-Order-btn--${item.firebaseKey}">Edit</button>
        <button id="delete-Order-btn--${item.firebaseKey}">Delete</button>
      </div>
    </div>`;
  });
  renderToDom('#store', domString);
};

export default showOrders;
