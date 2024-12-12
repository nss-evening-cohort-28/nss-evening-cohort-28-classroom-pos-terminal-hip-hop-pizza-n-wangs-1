import renderToDOM from '../utils/renderToDom';
import clearDom from '../utils/clearDom';

const viewOrders = (array) => {
  clearDom();
  let domString = '';
  array.forEach((order) => {
    domString += `
        <div class="card" style="width: 18rem;">
         <div class="card-body">
            <h5 class="card-title">${order.orderName}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">${order.status}</h6>
            <p class="card-text">${order.phoneNum}</p>
            <p class="card-text">${order.email}</p>
            <p class="card-text">${order.type}</p>
            <a id="orderDetails" href="#" class="card-link">Details</a>
            <a id="editOrder" href="#" class="card-link">Edit</a>
            <i id="delete-order-btn--${order.firebaseKey}"class="btn btn-danger">Delete</i>
          </div>
        </div>
        `;
  });
  renderToDOM('#card-container', domString);
};

export default viewOrders;
