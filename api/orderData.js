import client from '../utils/client';
import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const endpoint = client.databaseURL;

// GET Orders
const getOrders = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/orders.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

// CREATE Orders
const createOrders = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/orders.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// DELETE Orders
const deleteOrders = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/orders/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// UPDATE Orders
const updateOrders = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/orders/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

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
        <button id="view-Items-btn--${item.firebaseKey}">Details</button>
        <button id="update-Items--${item.firebaseKey}">Edit</button>
        <button id="delete-Itemss-btn--${item.firebaseKey}">Delete</button>
      </div>
    </div>`;
  });
  renderToDOM('#app', domString);
};

export {
  getOrders, createOrders, deleteOrders, updateOrders, showOrders
};
