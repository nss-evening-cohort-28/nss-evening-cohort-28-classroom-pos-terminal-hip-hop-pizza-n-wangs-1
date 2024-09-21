import firebase from 'firebase';
import { updateItems, getAllItems } from '../api/itemsData';
import showOrders from '../pages/showOrders';
import {
  createOrders, updateOrders, getOrders,
} from '../api/orderData';
import { showItems } from '../pages/createEditItem';
import showRevenue from '../pages/revenue';

const formEvents = () => {
  document.querySelector('#app').addEventListener('submit', (e) => {
    e.stopImmediatePropagation();
    e.preventDefault();

    // CLICK EVENT FOR SUBMITTING FORM FOR ADDING AN ORDER
    if (e.target.id.includes('submit-Order')) {
      const orderPayload = {
        order_name: document.querySelector('#orderName').value,
        phone_number: document.querySelector('#customerPhone').value,
        email: document.querySelector('#customerEmail').value,
        order_type: document.querySelector('#orderType').value,
        order_status: 'Open',
        order_items: [],
      };

      createOrders(orderPayload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateOrders(patchPayload).then(() => {
          getOrders().then(showOrders);
        });
      });
    }

    // CLICK EVENT FOR SUBMITTING FORM FOR ADDING AN ITEM
    if (e.target.id.includes('submit-item-btn')) {
      const itemPayload = {
        item_name: document.querySelector('#itemName').value,
        item_price: document.querySelector('#itemPrice').value,
      };

      getAllItems(itemPayload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateItems(patchPayload).then(() => {
          getAllItems().then(showItems);
        });
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
        firebaseKey,
      };

      updateOrders(orderPayload).then(() => {
        getOrders().then(showOrders);
      });
    }

    // // CLICK EVENT FOR Close order form
    if (e.target.id.includes('close-Order')) {
      const [, firebaseKey] = e.target.id.split('--');
      const orderPayload = {
        payment_type: document.querySelector('#paymentType').value,
        tip_amount: document.querySelector('#tipAmount').value,
        order_status: 'Closed',
        firebaseKey,
      };

      updateOrders(orderPayload).then(() => {
        getOrders().then(showRevenue);
      });
    }

    // CLICK EVENT FOR ADDING AN ITEM
    if (e.target.id.includes('submit-item')) {
      const itemPayload = {
        item_name: document.querySelector('#itemName').value,
        item_price: document.querySelector('#itemPrice').value,
      };

      updateItems(itemPayload).then(() => {
        getAllItems(`${firebase.auth().currentUser.uid}`).then(showItems);
      });
    }

    // CLICK EVENT FOR EDITING AN ITEM
    if (e.target.id.includes('update-item')) {
      const [, firebaseKey] = e.target.id.split('--');
      const itemPayload = {
        item_name: document.querySelector('#itemName').value,
        description: document.querySelector('#itemDescription').value,
        uid: `${firebase.auth().currentUser.uid}`,
        firebaseKey,
      };

      updateItems(itemPayload).then(() => {
        getAllItems(`${firebase.auth().currentUser.uid}`).then(showItems);
      });
    }
  });
};

export default formEvents;// test
