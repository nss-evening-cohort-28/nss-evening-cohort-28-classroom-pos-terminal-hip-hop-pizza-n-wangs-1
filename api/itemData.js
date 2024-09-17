import client from '../utils/client';

const endpoint = client.databaseURL;

// TODO: PROMISE FOR GET ITEMS

// TODO: PROMISE FOR CREATE ITEMS
const createItem = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/items.json`, {
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

// TODO: PROMISE FOR DELETE ITEMS

// TODO: PROMISE FOR GET SINGLE ITEM

// TODO: PROMISE FOR EDIT ITEMS

export default createItem;