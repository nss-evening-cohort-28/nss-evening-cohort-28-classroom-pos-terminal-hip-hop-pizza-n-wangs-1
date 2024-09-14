import client from '../utils/client';

const endpoint = client.databaseURL;

// TODO: PROMISE FOR GET ORDERS
const getOrders = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/orders.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});
// TODO: PROMISE FOR CREATE ORDERS

// TODO: PROMISE FOR DELETE ORDERS

// TODO: PROMISE FOR GET SINGLE ORDER

// TODO: PROMISE FOR EDIT ORDERS

export default getOrders;
