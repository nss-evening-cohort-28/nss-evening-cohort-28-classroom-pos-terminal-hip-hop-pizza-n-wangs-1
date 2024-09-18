import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';
import { getSingleOrder } from '../api/orderData';

const getOrderDetails = async (firebaseKey) => { // the async keyword let's JS know this is asynchronous function (promise)
  const orderObject = await getSingleOrder(firebaseKey); // await stops the code in this function and waits for the response. This is like using .then

  return { ...orderObject };
};

const viewOrder = (item) => {
  clearDom();

  const domString = `
  <h1>TOTAL: $Value of all items goes here</h1>
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h1 class="card-title">${item.order_name}</h1>
        <h1 class="card-subtitle mb-2 text-muted">Order items go here </h1>
 

        <button id="addItem" class="btn btn-success" style="margin: 10px; padding: 15px 30px;">Add Item</button>
        <button id="goToPayment" class="btn btn-primary" style="margin: 10px; padding: 15px 30px;">Go To Payment</button>
      </div>
    </div>`;

  renderToDOM('#store', domString);
};

export { viewOrder, getOrderDetails };
