import renderToDom from '../utils/renderToDom';
import clearDom from '../utils/clearDom';

const showOrders = (array) => {
  clearDom();

  let domString = '';
  array.forEach((item) => {
    domString += `
    <div class="card col m-2" style="width: 20rem; height: auto;">
  <div class="card-body">
    <h5 class="card-title">${item.order_name}</h5>
    <p class="card-subtitle mb-2 text-muted">Order Status: ${item.order_status}</p>
    <p class="card-subtitle mb-2 text-muted">Customer Phone: ${item.phone_number}</p>
    <p class="card-subtitle mb-2 text-muted">Email: ${item.email}</p>
    <p class="card-subtitle mb-2 text-muted">Order Type: ${item.order_type}</p>
    <div class="d-flex justify-content-between">
      <button id="view-Order-btn--${item.firebaseKey}" class="btn btn-outline-info">Details</button>
      <button id="update-Order-btn--${item.firebaseKey}" class="btn btn-outline-secondary">Edit</button>
      <button id="delete-Order-btn--${item.firebaseKey}" class="btn btn-outline-danger">Delete</button>
    </div>
  </div>
</div>
`;
  });
  renderToDom('#store', domString);
};

export default showOrders;
