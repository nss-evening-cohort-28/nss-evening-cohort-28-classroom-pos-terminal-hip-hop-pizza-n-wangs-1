import {
  createOrders, updateOrders, getOrders, showOrders
} from '../api/orderData';

const formEvents = () => {
  document.querySelector('#app').addEventListener('submit', (e) => {
    e.stopImmediatePropagation();
    e.preventDefault();
    // CLICK EVENT FOR SUBMITTING FORM FOR ADDING An Order
    if (e.target.id.includes('submit-Order')) {
      const payload = {
        order_name: document.querySelector('#orderName').value,
        phone_number: document.querySelector('#customerPhone').value,
        email: document.querySelector('#customerEmail').value,
        order_type: document.querySelector('#orderType').value,
        order_status: 'Open',
        order_items: [],
      };

      createOrders(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateOrders(patchPayload).then(() => {
          getOrders().then(showOrders);
        });
      });
    }

    // CLICK EVENT FOR EDITING An Order
    if (e.target.id.includes('update-Order')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        order_name: document.querySelector('#orderName').value,
        phone_number: document.querySelector('#customerPhone').value,
        email: document.querySelector('#customerEmail').value,
        order_type: document.querySelector('#orderType').value,
        order_staus: 'Open',
        firebaseKey,
      };
      // Adding new order items may need to be handled by a seperate function
      updateOrders(payload).then(() => {
        getOrders().then(showOrders);
      });
    }
  });
};

export default formEvents;
