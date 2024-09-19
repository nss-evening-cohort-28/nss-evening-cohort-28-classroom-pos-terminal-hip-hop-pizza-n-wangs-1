import firebase from 'firebase';
import { createOrder, getOrders, updateOrder } from '../api/orderData';
import viewOrders from '../pages/viewOrders';
import clearDom from '../utils/clearDom';

const formEvents = (user) => {
  document.querySelector('#app').addEventListener('submit', (e) => {
    e.preventDefault();
    // FORM CLICK EVENT FOR CREATING AN ORDER
    if (e.target.id.includes('submit-order')) {
      const payload = {
        email: document.querySelector('#orderEmail').value,
        orderName: document.querySelector('#orderName').value,
        phoneNum: document.querySelector('#phoneNum').value,
        status: document.querySelector('#orderStatus').checked,
        type: document.querySelector('#orderType').checked,
        uid: `${firebase.auth().currentUser.uid}`
      };

      createOrder(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateOrder(patchPayload).then(() => {
          getOrders(user.uid).then(viewOrders);
        });
      });
    }

    if (e.target.id.includes('update-order')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        email: document.querySelector('#orderEmail').value,
        orderName: document.querySelector('#orderName').value,
        phoneNum: document.querySelector('#phoneNum').value,
        status: document.querySelector('#orderStatus').checked,
        type: document.querySelector('#orderType').checked,
        firebaseKey,
      };
      updateOrder(payload).then(() => {
        getOrders().then(viewOrders);
        clearDom();
      });
    }
  });
};

export default formEvents;
