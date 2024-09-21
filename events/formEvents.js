import { createOrders, updateOrders, getOrders } from '../api/orderData';
import { createItem, updateItems, getAllItems } from '../api/itemsData';
import showOrders from '../pages/showOrders';
import { showItems } from '../components/orderDetails';

const formEvents = () => {
  document.querySelector('#app').addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // CLICK EVENT FOR SUBMITTING FORM FOR ADDING AN ORDER
    if (e.target.id.includes('submit-Order')) {
      const orderPayload = {
        order_name: document.querySelector('#orderName').value,
        phone_number: document.querySelector('#customerPhone').value,
        email: document.querySelector('#customerEmail').value,
        order_type: document.querySelector('#orderType').value,
        order_status: 'Open',
        order_items: []
      };

      createOrders(orderPayload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateOrders(patchPayload).then(() => {
          getOrders().then(showOrders);
        });
      });
    }

    // CLICK EVENT FOR SUBMITTING FORM FOR ADDING AN ITEM
    if (e.target.id === 'submit-item-btn') {
      const itemPayload = {
        name: document.querySelector('#itemName').value,
        price: document.querySelector('#itemPrice').value
      };

      createItem(itemPayload).then(() => {
        getAllItems().then(showItems);
      });
    }

    // CLICK EVENT FOR EDITING AN ORDER
    if (e.target.id.includes('update-Order')) {
      const [, firebaseKey] = e.target.id.split('--');
      const orderPayload = {
        order_name: document.querySelector('#orderName').value,
        phone_number: document.querySelector('#customerPhone').value,
        email: document.querySelector('#customerEmail').value,
        order_type: document.querySelector('#orderType').value,
        order_status: 'Open',
        firebaseKey
      };

      updateOrders(orderPayload).then(() => {
        getOrders().then(showOrders);
      });
    }

    // CLICK EVENT FOR EDITING AN ITEM
    if (e.target.id.includes('update-item')) {
      const [, firebaseKey] = e.target.id.split('--');
      const itemPayload = {
        name: document.querySelector('#itemName').value,
        price: document.querySelector('#itemPrice').value,
        firebaseKey
      };

      updateItems(itemPayload).then(() => {
        getAllItems().then(showItems);
      });
    }
  });
};

export default formEvents;
